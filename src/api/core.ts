export const request = async <T>(
  url: string,
  option: HttpMethod
): Promise<T> => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const response = await fetch(`${BASE_URL + url}`, option);
  return response.json();
};

type CacheControl =
  | 'no-cache'
  | 's-maxage=31536000, max-age=0'
  | 'public max-age=31536000';

type HttpMethod = {
  method: string;
  headers?: {
    ['x-username']?: string;
    ['Content-Type']?: 'application/json';
    ['Cache-Control']?: CacheControl;
  };
  body?: string;
};

export const HTTP_METHOD = {
  GET(option?: { cache: CacheControl }): HttpMethod {
    return {
      headers: {
        ['Cache-Control']: option?.cache ?? 'no-cache',
      },
      method: 'GET',
    };
  },
  POST(data: unknown): HttpMethod {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  },
  PUT(data: unknown): HttpMethod {
    return {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  },
  DELETE(): HttpMethod {
    return {
      method: 'DELETE',
      headers: {},
    };
  },
};
