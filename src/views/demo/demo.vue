<!-- vue3单文件组件顺序参考 -->
<template>
  <div>
    <h2>demoooooo</h2>
  </div>
</template>

<script setup lang="ts">
  // 组件书写顺序参考
  // imports：三方库，types，单文件组件，pinia
  // types：当前组件中的类型声明
  // props/emits ：当前组件接收的外部变量数据，和调用的外部事件
  // state(ref/reactive/computed)：响应式变量
  // constants:常量
  // watch，onMounted，onBeforeUnmount…
  // methods(按业务职责划分网络请求，业务数据维护逻辑，交互逻辑)
  // defineExpose
</script>

<style scoped>
  .the-layout-box {
    width: 100%;
    height: 100%;
  }
</style>
