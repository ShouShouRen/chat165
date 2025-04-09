import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";

interface IBase<T = string | null> {
  answer: string;
  data: T;
  code: number;
  message: string;
}

interface INestedData {
  message: string;
  data?: string;
}

export const BASE_URL = "https://chat165.niu.edu.tw";

const request = axios.create({ baseURL: BASE_URL });

// 型別轉換
const handleErrorType = (error: unknown): AxiosError<INestedData> => {
  return error as AxiosError<INestedData>;
};

// 設定 response 攔截器
request.interceptors.response.use(
  (response: AxiosResponse<IBase<INestedData>>) => {
    const { code, data } = response.data;

    if (code === 200 && data?.message) {
      toast.success(data.message);
    }

    return response;
  },
  (error: unknown) => {
    const axiosError = handleErrorType(error);
    const message = axiosError?.response?.data?.message ?? "未知錯誤";
    toast.warning(message);

    return Promise.reject(error);
  }
);

// 封裝請求方法
export default async function makeRequest<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<IBase<T>> {
  const res = await request({
    url,
    ...options,
  });

  return res.data as IBase<T>;
}
