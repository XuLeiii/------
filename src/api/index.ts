import axios from 'axios';
import RESULT_CODE from '../enums/api/result.enum';
import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { i18n } from '../i18n';
// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, data, msg } = response.data;

    // 请求成功
    if (code === RESULT_CODE.SUCCESS) {
      return data;
    }

    const message = msg || i18n.global.t('common.serviceError');
    ElMessage.error(message);
    return Promise.reject(new Error(message));
  },
  (error: any) => {
    const { response } = error;

    if (!response) {
      ElMessage.error(i18n.global.t('common.networkError'));
      console.error('网络异常:', error);
    } else {
      ElMessage.error(i18n.global.t('common.serviceError'));
      console.error('服务异常:', error);
    }

    return Promise.reject(error);
  }
);

// 导出 axios 实例
export default service;
