import { HttpClient } from '@angular/common/http';
import { RequestOptions } from 'camunda-sdk-ts/dist/service/rest/rest.client';

type HTTPVerbs = 'GET' | 'PUT' | 'POST' | 'DELETE' | 'OPTIONS';
export function createClientFn(client: HttpClient) {
  return <T>(url: string, options?: RequestOptions) => {
    console.log('RequestOptions:', options);
    let httpOptions = options;
    if (!httpOptions) {
      httpOptions = {
        method: 'GET',
      };
    }
    switch (options.method as HTTPVerbs) {
      case 'GET':
        return client.get<T>(url);
      case 'POST':
        return client.post<T>(url, options.body);
      case 'PUT':
        return client.put<T>(url, options.body);
      case 'DELETE':
        return client.delete<T>(url);
      case 'OPTIONS':
        return client.options<T>(url);
    }
  };
}
