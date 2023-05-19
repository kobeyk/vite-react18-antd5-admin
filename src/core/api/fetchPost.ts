import axiosInstance from "@/utils/request";
import { AxiosRequestConfig } from "axios";

/** 对象转formdata */
const toFormData = (option:any) => {
  let formData = new FormData();
  for (let key in option) {
    formData.append(key, option[key]);
  }
  return formData;
};

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
