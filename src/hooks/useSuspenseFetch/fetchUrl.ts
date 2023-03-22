const cache = new Map();

export function fetchUrl(url: string, asyncFunction: () => Promise<any>) {
  if (!cache.has(url)) {
    cache.set(url, wrapPromise(asyncFunction()));
  }
  return cache.get(url).read();
}

function wrapPromise(promise: Promise<any>) {
  let status = 'pending';
  let result: any;
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
