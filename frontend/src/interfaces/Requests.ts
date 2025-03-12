export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

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
