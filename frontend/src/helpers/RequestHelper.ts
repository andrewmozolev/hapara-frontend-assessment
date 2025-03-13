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

export function handleResponse(response: any) {
  const statusCode = response.status;

  if (statusCode === 401 || statusCode === '401') {
    // Unauthorised - Force logout and reload
    console.error('Unauthorized access');
    window.location.reload();
  } else if (statusCode === 403 || statusCode === '403') {
    // Forbidden - User has no access to this
    console.error('Forbidden access');
    window.location.href = '/';
  }
  try {
    return response.text().then((text: any) => {
      const data = text && JSON.parse(text);

      if (!response.ok) {
        return Promise.reject(data);
      }

      return data;
    });
  } catch (ex) {
    return Promise.reject(ex);
  }
}
