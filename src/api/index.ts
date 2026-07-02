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
    const { response, message, status } = error;

    if (error.code == 'ERR_CANCELED') {
      return Promise.reject(new Error(error));
    }

    if (!response) {
      // 网络或连接异常，服务器未响应,如请求取消，请求超时等
      // ElMessage.error(i18n.global.t('common.networkError'));
      ElMessage.error('接口请求失败:', message);
      console.error('接口请求失败:', error);
      return Promise.reject(new Error(message));
    }

    // 服务异常：4xx错误/5xx错误会走到这里，表示服务器是有响应的，但是响应码不是2xx范围
    // ElMessage.error(i18n.global.t('common.serviceError'));
    ElMessage.error('服务异常:', message);
    console.error('服务异常:', error);

    return Promise.reject(new Error(message));
  }
);

// 导出 axios 实例
export default service;
