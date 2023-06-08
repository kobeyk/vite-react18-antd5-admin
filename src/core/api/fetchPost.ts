import axiosInstance from "@/utils/request";
import { AxiosRequestConfig } from "axios";

export function fetchPost(
  url: string, 
  data: object = {}, // 请求body,默认{}
  config?: AxiosRequestConfig<any>
) {
  return axiosInstance({
    url,
    method: "post",
    data,
    ...config,
  });
}
