const cache = new Map();

export function fetchUrl<T>(url: string, asyncFunction: () => Promise<T>) {
  if (!cache.has(url)) {
    cache.set(url, wrapPromise<T>(asyncFunction()));
  }
  return cache.get(url).read();
}

function wrapPromise<T>(promise: Promise<T>) {
  let status = 'pending';
  let result: T;
  const suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    }
  );
  // @ts-ignore
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
}
