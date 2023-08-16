<!--
 * @Author: bamzc
 * @Date: 2023-08-14 10:29:15
 * @LastEditors: bamzc
 * @LastEditTime: 2023-08-14 11:35:40
 * @Description: 
-->
<template>
    <div>
        <Input
            v-model="inputValue"
            :type="type"
            :label="label"
            @input="onChangeHandler"
            :onFocus="() => inProgress = true"
            :onBlur="onBlur"
            :inProgress="inProgress"
            classes="rgb"
        />
    </div>
</template>

<script src="./script.js" />

<style scoped>

</style>
