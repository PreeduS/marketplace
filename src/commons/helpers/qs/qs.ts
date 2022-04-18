
import { stringify, parse, IStringifyOptions } from 'qs';

 
export const buildUrl = (path: string, qs: Object, options?: IStringifyOptions) =>{
  const queryString = stringify(qs, options);
  const url = queryString ? `${path}?${queryString}` : path;
  return url;
}



export function getQueryString(search: string = window.location.search) {
  return parse(search[0] === '?' ? search.slice(1) : search);
}