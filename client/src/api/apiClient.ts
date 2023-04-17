type BaseQueryParamType = string | string[][] | Record<string, string> | URLSearchParams;

const get = async <QueryParamType extends BaseQueryParamType>(
  url: string,
  queryParams?: QueryParamType
) => {
  const newUrl = queryParams ? `${url}?${new URLSearchParams(queryParams)}` : url;

  const response = await fetch(newUrl, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

const post = async <BodyType, QueryParamType extends BaseQueryParamType>(
  url: string,
  { body, queryParams }: { body?: BodyType; queryParams?: QueryParamType }
) => {
  const newUrl = queryParams ? `${url}?${new URLSearchParams(queryParams)}` : url;

  const response = await fetch(newUrl, {
    method: 'POST',
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

const put = async <BodyType, QueryParamType extends BaseQueryParamType>(
  url: string,
  { body, queryParams }: { body?: BodyType; queryParams?: QueryParamType }
) => {
  const newUrl = queryParams ? `${url}?${new URLSearchParams(queryParams)}` : url;

  const response = await fetch(newUrl, {
    method: 'PUT',
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

const patch = async <BodyType, QueryParamType extends BaseQueryParamType>(
  url: string,
  { body, queryParams }: { body?: BodyType; queryParams?: QueryParamType }
) => {
  const newUrl = queryParams ? `${url}?${new URLSearchParams(queryParams)}` : url;

  const response = await fetch(newUrl, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

const deleteR = async <BodyType, QueryParamType extends BaseQueryParamType>(
  url: string,
  { body, queryParams }: { body?: BodyType; queryParams?: QueryParamType }
) => {
  const newUrl = queryParams ? `${url}?${new URLSearchParams(queryParams)}` : url;

  const response = await fetch(newUrl, {
    method: 'DELETE',
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { get, post, put, patch, delete: deleteR };
