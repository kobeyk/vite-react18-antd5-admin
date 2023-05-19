import axiosInstance from "@/utils/request";
import { AxiosRequestConfig } from 'axios'

export function fetchGet(
  url: string, // 如果是后端pathVariable的参数，直接拼好传进来
  params?: object, // 请求参数
  config?: AxiosRequestConfig<any>
) {
  return axiosInstance({
    url,
    method: "get",
    params,
    ...config
  });
}
