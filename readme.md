# vue框架学习
### 插值操作:Mustache语法
vue的基本操作，获取vue中data属性的语法，双大括号——{{}}
### 动态绑定:v-bind
v-bind:href="link"，link为data中的属性，v-bind为html元素绑定属性，包括类，id，style.v-bind的简写格式为一个:
### 循环遍历:v-for
循环语法，v-for="(items, index) in the movies", movies在data中定义为数组
### 条件判断:v-if  
div v-if="isTrue"，isTrue的返回值为true，下面的div就会显示，而 v-show="true"会只把display改为true
### 计算属性:computed
computed:{}
### 事件监听:v-on
button v-on:click="countIncrease
