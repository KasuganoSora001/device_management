# Vue

## 一、介绍

​	Vue是一套构建用户界面的**渐进式框架**，Vue的核心库只关注 **视图层**，能与 **现代化的工具链**以及各种**类库**结合使用



### 1、安装使用

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

### 2、声明式渲染

​	Vue的核心是一个允许采用简洁的**模板语法**来**声明式**地将数据渲染进DOM的系统

```html
<div id="app">
  {{ message }}
</div>
<script>
    var app = new Vue({
  		el: '#app',
  		data: {
  	 	message: 'Hello Vue!'
  		}
	})
</script>
```



### 3、vue.js devtools

​	一个插件，可以在chrome中使用。

​	可以用来调试vue.js应用

​	[插件下载]()

