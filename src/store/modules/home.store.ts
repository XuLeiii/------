import { defineStore } from 'pinia';

export const useDefaultStore = defineStore(
  'defaultStore',
  () => {
    // ref变量 → state 属性
    // computed计算属性 → getters
    // function函数 → actions
    return {};
  },
  {
    persist: true, //数据持久化
    // 可以指定任何 extends Storage 的实例，默认是 sessionStorage
    // storage: sessionStorage,
  }
);
