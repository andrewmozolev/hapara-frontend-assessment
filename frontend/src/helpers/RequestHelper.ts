import { HttpMethod } from 'interfaces/Requests';

export const getRequestOptions = (
  method: HttpMethod = 'GET',
  body?: Record<string, any> | null,
  contentType = 'application/json'
) => {
  const options = {
    method,
    headers: {
      'Content-Type': contentType,
      Authorization: `Bearer ${'token'}`, // Should be auth token
    },
    body: body && JSON.stringify(body),
  };

  return options;
};
