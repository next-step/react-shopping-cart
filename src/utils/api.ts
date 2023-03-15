async function request<TResponse>(
  path: string,
  config?: RequestInit
): Promise<TResponse> {
  let url = process.env.REACT_APP_API_SERVER;

  if (process.env.REACT_APP_ENV === "local") {
    url = window.location.origin;
  }
  const response = await fetch(`${url}${path}`, config);
  return await response.json();
}

export const api = {
  get: <TResponse>(url: string) => request<TResponse>(url),

  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    request<TResponse>(url, { method: "POST", body }),
};
