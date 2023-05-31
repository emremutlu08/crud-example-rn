/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from "./ApiRequestOptions";

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
  BASE: string;
  VERSION: string;
  WITH_CREDENTIALS: boolean;
  CREDENTIALS: "include" | "omit" | "same-origin";
  TOKEN?: string | Resolver<string>;
  USERNAME?: string | Resolver<string>;
  PASSWORD?: string | Resolver<string>;
  HEADERS?: Headers | Resolver<Headers>;
  ENCODE_PATH?: (path: string) => string;
};

export const OpenAPI: OpenAPIConfig = {
  BASE: "https://crud-example-api.vercel.app",
  VERSION: "0.1.0",
  WITH_CREDENTIALS: true,
  CREDENTIALS: "include",
  TOKEN: undefined,
  USERNAME: "demo",
  PASSWORD: "demo",
  HEADERS: undefined,
  ENCODE_PATH: undefined,
};
