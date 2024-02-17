// sessionStorage와 통신하는 곳
const SESSION_STORAGE_KEY = 'MSW';

export function select(api: string, key?: string) {
  const res = window.sessionStorage.getItem(SESSION_STORAGE_KEY);

  if (!res) return null;

  const dataStorage = JSON.parse(res);
  const data = dataStorage[api];

  if (key) return data[key];
  return data;
}

export function update(api: string, key: string, content: any) {
  const res = window.sessionStorage.getItem(SESSION_STORAGE_KEY);

  if (!res) {
    window.sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify({ [api]: { [key]: content } }));
    return;
  }

  const dataStorage = JSON.parse(res);
  dataStorage[api][key] = content;
  window.sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(dataStorage));
}
