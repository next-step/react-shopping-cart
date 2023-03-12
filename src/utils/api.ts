async function request<TResponse>(
  path: string,
  config?: RequestInit
): Promise<TResponse> {
  const response = await fetch(`http://localhost:3003${path}`, config);
  return await response.json();
}

export const api = {
  get: <TResponse>(url: string) => request<TResponse>(url),

  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    request<TResponse>(url, { method: "POST", body }),
};
