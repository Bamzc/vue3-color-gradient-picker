<!--
 * @Author: bamzc
 * @Date: 2023-08-14 10:29:15
 * @LastEditors: bamzc
 * @LastEditTime: 2023-08-14 11:07:27
 * @Description: 
-->
<template>
  <div class="ui-color-picker">
    <Gradient
      v-if="isGradient"
      :points="gradient.points"
      :type="gradient.type"
      :degree="gradient.degree"
      :onChange="onChange"
      :onStartChange="onStartChange"
      :onEndChange="onEndChange"
    />

    <Solid
      v-else
      :red="color.red"
      :green="color.green"
      :blue="color.blue"
      :alpha="color.alpha"
      :hue="color.hue"
      :saturation="color.saturation"
      :value="color.value"
      :onChange="onChange"
      :onStartChange="onStartChange"
      :onEndChange="onEndChange"
    />
  </div>
</template>

<script src="./script.js" />
