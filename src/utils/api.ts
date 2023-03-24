async function request<TResponse>(
  path: string,
  config?: RequestInit
): Promise<TResponse> {
  const isLocalEnv = process.env.REACT_APP_ENV === "local";
  const url = isLocalEnv
    ? window.location.origin
    : process.env.REACT_APP_API_SERVER;

  const response = await fetch(`${url}${path}`, config);
  return await response.json();
}

export const api = {
  get: <TResponse>(url: string) => request<TResponse>(url),

  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    request<TResponse>(url, { method: "POST", body }),
};
