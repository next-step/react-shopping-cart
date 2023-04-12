type BaseQueryParamType = string | string[][] | Record<string, string> | URLSearchParams;

const get = <QueryParamType extends BaseQueryParamType>(
  url: string,
  queryParams?: QueryParamType
) => {
  const newUrl = queryParams ? `${url}?${new URLSearchParams(queryParams)}` : url;

  return fetch(newUrl, {
    method: 'GET',
  });
};

const post = <BodyType, QueryParamType extends BaseQueryParamType>(
  url: string,
  { body, queryParams }: { body?: BodyType; queryParams?: QueryParamType }
) => {
  const newUrl = queryParams ? `${url}?${new URLSearchParams(queryParams)}` : url;

  return fetch(newUrl, {
    method: 'POST',
    body: JSON.stringify(body),
  });
};

const put = <BodyType, QueryParamType extends BaseQueryParamType>(
  url: string,
  { body, queryParams }: { body?: BodyType; queryParams?: QueryParamType }
) => {
  const newUrl = queryParams ? `${url}?${new URLSearchParams(queryParams)}` : url;

  return fetch(newUrl, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
};

const patch = <BodyType, QueryParamType extends BaseQueryParamType>(
  url: string,
  { body, queryParams }: { body?: BodyType; queryParams?: QueryParamType }
) => {
  const newUrl = queryParams ? `${url}?${new URLSearchParams(queryParams)}` : url;

  return fetch(newUrl, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
};

const deleteR = <BodyType, QueryParamType extends BaseQueryParamType>(
  url: string,
  { body, queryParams }: { body?: BodyType; queryParams?: QueryParamType }
) => {
  const newUrl = queryParams ? `${url}?${new URLSearchParams(queryParams)}` : url;

  return fetch(newUrl, {
    method: 'DELETE',
    body: JSON.stringify(body),
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { get, post, put, patch, delete: deleteR };
