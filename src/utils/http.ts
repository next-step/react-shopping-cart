import type { APIPath } from 'constants/api';

export interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body: string;
}

async function httpRequest<T>(
  url: APIPath,
  options: Partial<RequestOptions> = {}
): Promise<T> {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = (await response.json()) as T;
    return responseData;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export default httpRequest;
