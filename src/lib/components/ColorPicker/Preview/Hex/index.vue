<!--
 * @Author: bamzc
 * @Date: 2023-08-14 10:29:15
 * @LastEditors: bamzc
 * @LastEditTime: 2023-08-14 11:23:34
 * @Description: 
-->
<template>
  <Input
    v-model="hexValue"
    label="hex"
    @input="changeHex"
    :onFocus="() => (inProgress = true)"
    :onBlur="() => (inProgress = false)"
    :inProgress="inProgress"
    classes="hex"
  />
</template>

<script src="./script.js" />
