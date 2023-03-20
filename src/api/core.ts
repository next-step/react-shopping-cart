export const request = async (url: string, option: httpMethod) => {
  const response = await fetch(url, option);
  if (!response.ok) {
    console.error('request error');
  }
  return response.json();
};

type httpMethod = {
  method: string;
  headers?: {
    ['x-username']?: string;
    ['Content-Type']?: 'application/json';
  };
  body?: string | undefined;
};

export const HTTP_METHOD = {
  GET(): httpMethod {
    return {
      method: 'GET',
    };
  },
  POST(data: unknown): httpMethod {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  },
  PUT(data: unknown): httpMethod {
    return {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  },
  DELETE(): httpMethod {
    return {
      method: 'DELETE',
      headers: {},
    };
  },
};
