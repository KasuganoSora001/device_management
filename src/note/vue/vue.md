# Vue

## 一、介绍

​	Vue是一套构建用户界面的**渐进式框架**，Vue的核心库只关注 **视图层**，能与 **现代化的工具链**以及各种**类库**结合使用



### 1、安装使用

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

### 2、声明式渲染

​	Vue的核心是一个允许采用简洁的**模板语法**来**声明式**地将数据渲染进DOM的系统

* Vue是一个对象，element元素选择器，data即model与view交互的数据

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

​	[插件下载]( https://github.com/KasuganoSora001/device_management/tree/master/src )

​	之后只需在chrome的 更多工具-->扩展程序中添加该插件即可在F12使用



### 4、理解Vue的MVVM

​	MVVM（Model View ViewModel）

​	![](images/MVVM.png)

![](images/MVVM_example.jpg)





## 二、模板语法

### 1、Mustache语法

```html
<div id="app">
  <p>{{ message }}</p>
  <p>信息：{{ message }}</p>
  <p>{{ firstName + lastName }}</p>
  <p>{{ firstName + ' ' + lastName }}</p>
  <p>{{ firstName}} {{lastName }}</p>
  <p>{{ counter * 2 }}</p>
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vue!',
      firstName: 'kobe',
      lastName: 'bryant',
      counter: '100'
    }
  })
</script>
```

**效果：**

![](images/mustache_display.png)



### 2、v-once

```text
该指令表示 元素 和 组件 只渲染一次，DOM不会随着数据的改变而改变
```

```html
<div id="app">
  <p>{{message}}</p>
  <p v-once>{{message}}</p>
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vue!'
    }
  })
</script>

```

**效果：**

![](images/v-once_display.png)



### 3、v-html

```text
该指令表示DOM从data中获取的数据可以按照 HTML格式 进行解析
```

```html
<div id="app">
  <p>{{msg_Uri}}</p>
  <p v-html="msg_Uri">{{msg_Uri}}</p>
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      msg_Uri: '<a href="http://www.baidu.com">百度</a>'
    }
  })
</script>

```

**效果：**

![](images/v-html_display.png)





### 4、v-text

```text
该指令表示该元素的内容为指定值，若元素中有内容，则覆盖之
```

```html
<div id="app">
  <p>{{message}},Mr.Liu</p>
  <p v-text="message">,Mr.Liu</p>
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vue'
    }
  })
</script>
```

**效果：**

![](images/v-text_display.png)





### 5、v-pre

```text
该指令表示该元素的内容不会进行数据的获取
```

```html
<div id="app">
  <p>{{message}}</p>
  <p v-pre>{{message}}</p>
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vue'
    }
  })
</script>

```

**效果：**

![](images/v-pre_display.png)



### 6、v-cloak

```text
该指令表示在vue解析之前，div中有一个属性v-cloak，而当vue解析完成之后，v-clock这个属性会被删除

因此可能被用于以下场景：{{message}}获取数据时，由于vue解析过慢或延时，因此用户会先看到{{message}}而非正确的数据。而使用v-cloak就可以对{{message}}进行隐藏，等待vue执行完毕，v-cloak消除，则显示数据
```

```html
<style>
  [v-cloak] {
    display: none;
  }
</style>

<div id="app">
  <p>{{message}}</p>
  <p v-cloak>{{message}}</p>
</div>

<script>
  setTimeout(function (){
    const app = new Vue({
      el: '#app',
      data: {
        message: 'hello Vue'
      }
    })
  }, 1000)
</script>
```



### 7、v-bind

* 前面学习的指令主要都将值插入到我们的 **模板内容** 中
* 但是，除了内容外，若希望某些属性也能动态绑定，则可以用到v-bind:属性名="变量名"
  * 如：a元素的href属性
  * 如：img元素的src属性
* v-bind
  * 作用：动态绑定属性
  * 缩写：:

```html
<div id="app">
  <img v-bind:src="imgUri" alt="">
  <a :href="aHref">百度一下</a>
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      imgUri: 'https://cn.vuejs.org/images/logo.png',
      aHref: 'http://www.baidu.com'
    }
  })
</script>

```

```html

```

* 使用v-bind来控制元素的 **class类型**
* v-bind控制的class类型与元素原来的class类型会进行**叠加**，不会进行覆盖
* 可以使用对象的方式来进行绑定，也就是:class="{}"
* 若结果较为复杂，则可以使用method或computed的方法进行绑定
  * :class="getClasses()"
* 两种语法：**对象语法** 和 **数组语法**
  * 对象语法

```html
<style>
  .active {
    color: red;
  }
  .myFont {
    font-weight: bold;
  }
</style>

<div id="app">
  <!--<h2 :class="{key1: val1, key2: val2}"></h2>-->
  <!--<h2 :class="{类名1: true, 类名2: false}"></h2>-->

  <!--控制class的类型，显示不同的样式-->
  <h2 class="title" :class="{active: isActive, myFont: isFont}">测试字体</h2>
  <h2 class="title" :class="getClasses()">测试字体</h2>

  <!--监控按钮点击事件，点击时修改data属性从而控制h2元素的class类型-->
  <button v-on:click="btnClick">更换颜色</button>

</div>


<script>
  const app = new Vue({
    el: '#app',
    data: {
      isActive: true,
      isFont: false
    },
    methods: {
      btnClick: function(){
        this.isActive = !this.isActive;
      },
      getClasses: function(){
        return {active: this.isActive, myFont: this.isFont};
      }
    }
  })
</script>
```



* 数组语法：

```html
<h2 class="title" :class="[active, font]">测试字体</h2>
<h2 class="title" :class="getClasses()">测试字体</h2>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      active: 'aaaa',
      font: 'bbbb'
    },
    methods: {
      btnClick: function(){
        this.isActive = !this.isActive;
      },
      getClasses: function(){
        return [this.active, this.font];
      }
    }
  })
</script>
```



* 使用v-bind 控制 style 属性：

```html
<div id="app">
  <!--<h2 :style="{key1(样式名): val1(变量值), key2: val2}">测试</h2>-->
  <h2 :style="{fontSize: finalSize + 'px', color: finalColor}">测试</h2>
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      finalSize: 100,
      finalColor: 'red',
    }
  })
</script>

```







### 8、v-for 结合 v-bind 练习

题目：

```text
1、在页面中显示以下条目：['哈利波特', '蜘蛛侠', '钢铁侠', '绿箭侠']
2、添加效果：点击到哪个条目，则改变其颜色为红色
```

```html
<style>
  .active {
    color: red;
  }
</style>

<div id="app">
  <ul>
    <li v-for="(item,index) in movies" v-on:click="liClick(index)" :class="[counter==index?'active':'']">{{index}}-{{item}}</li>
      <li v-for="(item,index) in movies" v-on:click="liClick(index)" :class="{active:counter==index}">{{index}}-{{item}}</li>
  </ul>
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      movies: ['哈利波特', '蜘蛛侠', '钢铁侠', '绿箭侠'],
      counter:-1
    },
    methods: {
      liClick: function(index){
        this.counter = index;
      }
    }
  })
</script>
```

