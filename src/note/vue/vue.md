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



### 9、计算属性

​	基本使用：使用Vue对象中的computed域，编写相应属性方法，使用时只需按平常的属性插值即可

```html
<div id="app">
  <h2>{{firstName + ' ' + lastName}}</h2>
  <h2>{{firstName}} {{lastName}}</h2>
  <h2>{{getFullName()}}</h2>
  <h2>{{fullName}}</h2>
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      firstName: 'kobe',
      lastName: 'bryant'
    },
    // 计算属性：直接当做属性来用即可
    computed: {
      fullName: function(){
        return this.firstName + '-' + this.lastName;
      }
    },
    methods: {
      getFullName: function(){
        return this.firstName + '_' + this.lastName;
      },
    }
  })
</script>
```

​		

​	**复杂使用：**

```html
<div id="app">
  <h2>总价格：{{totalPrice2}}</h2>
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      books: [
        {id: 1, name: '深入理解JVM', price: 100},
        {id: 2, name: 'JaveWeb', price: 110},
        {id: 3, name: '数据结构与算法', price: 120},
        {id: 4, name: '深入理解计算机原理', price: 130}
      ]
    },

    computed: {
        
      totalPrice: function(){
        let result = 0;
        for(let i = 0; i < this.books.length; i++){
          result += this.books[i].price;
        }
        return result;
      },
        
      totalPrice2: function(){
        let result = 0;
        for(let book of this.books){
          result += book.price;
        }
        return result;
      }
        
    },
  })
</script>

```

​	==**计算属性的setter和getter**==

```text
一般来说，计算属性主要是对属性进行一定计算后返回结果，因此一般只需计算一次

在计算属性中可以把成员当做一个个的对象，都有set、get方法

并不希望有人能够对该计算属性进行set操作

一般属性不写set方法，因此为一个只读属性


```

```html
<div id="app">
  <h2>{{fullName}}</h2>
</div>

<script>
  const app = new Vue({
    el: '#app',

    data: {
      firstName: 'kobe',
      lastName: 'bryant'
    },

    computed: {

      // 成员属性的完整写法
      fullName: {
        set: function(newVaule){
          const names = newVaule.split(' ');
          this.firstName = names[0];
          this.lastName = names[1];
        },
        get: function(){
          return this.firstName + ' ' + this.lastName;
        }
      },
      
      // 若属性为只读，可以为以下写法
      fullName2: function(){
        return this.firstName + ' ' + this.lastName;
      }
      
    }
  })
</script>
```





### 10、methods和computed

```text
methods主要是函数的调用
computed主要是对属性的计算并赋值
methods没有缓存，每一次的调用都会重新执行函数
computed有缓存，再次调用时会从缓存中直接取值
在调用computed中的属性时，会先观察该属性的 组成 有没有发生变化，若没有，则直接从缓存中返回结果
```



### 11、事件监听v-on

​	v-on

* 作用：绑定事件监听器
* 缩写：@
* 预期：Function | Inline Statement | Object
* 参数：event



==基础使用：==

```html
<div id="app">
  <p>{{counter}}</p>
  <button v-on:click="increment">+</button>
  <button v-on:click="decrement">-</button>
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      counter: 0
    },
    methods: {
      increment(){
        this.counter++
      },
      decrement(){
        this.counter--
      }
    }
  })
</script>
```



==v-on参数==

```text
情况一：当调用的方法没有参数传递时，方法的()可以省略
情况二：若方法本身有一个参数，但不传递参数，则默认把 事件event 传递过去
情况三：若需要同时传入某个参数，且需要使用 event 时，可以通过 $event 传入事件
```



==v-on修饰符==

① stop修饰符，禁止事件冒泡

```html
  <div @click="divClick">
    aaaaa
    <button @click.stop="btnClick">按钮</button>
  </div>

    methods: {
      divClick() {
        console.log("divClick");
      },
      btnClick() {
        console.log("btnClick");
      }
    }

```



②prevent：禁止默认事件，如表单自动提交

```html
<form action="baidu">
    <input type="submit" @click.prevent="subClick">
</form>
```



③ 

```text
@keyup | @keydown 监听键帽的按下与抬起
@keyup.enter 监听键盘enter键的抬起
@keydown.p   监听键盘p键的按下
```

```html
<input type="text" @keyup.enter="keyup">
```



④ once：只触发一次回调函数

```html
<!-- once：只触发一次回调，可以防止表单重复提交 -->
  <form action="baidu">
    <input type="submit" @click.once="subClick2">
  </form>
```



### 12、条件判断v-if | v-else-if | v-else

==v-if使用==

```html
<div id="app">
  <h2 v-if="isShow">{{message}}</h2>
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'isShow为true时，显示我',
      isShow: true
    }
  })
</script>
```





==v-else使用==

```html
<div id="app">
  <h2 v-if="isShow">{{msg1}}</h2>
  <h2 v-else>{{msg2}}</h2>
</div>
```



==v-else-if使用==

* 不推荐这样使用

```html
<div id="app">
  <h2 v-if="score>=90">优秀</h2>
  <h2 v-else-if="score>=70">良好</h2>
  <h2 v-else-if="score>=60">及格</h2>
  <h2 v-else>不及格</h2>
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      score: 99
    }
  })
</script>
```

* 可以写成以下形式：使用计算属性s

```html
<div id="app">
  <h2>{{result}}</h2>
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      score: 99
    },
    computed: {
      result() {
        let result_msg = '';
        if(this.score >= 90) {
          result_msg = '优秀';
        } else if(this.score >= 70) {
          result_msg = '良好';
        }
        return result_msg;
      }
    }
  })
</script>
```



### 13、vue底层：virtual dom

```text
vue进行页面渲染时，并不会直接把我们的dom直接显示在浏览器上，而是多了一个中间的处理dom的过程
```

```html
<span v-if="isUserNameLogin">
  <label>用户账号</label>
  <input type="text" placeholder="用户账号">
</span>

<span v-else>
  <label>邮箱账号</label>
  <input type="text" placeholder="邮箱账号">
</span>
```

* 例如渲染以上代码时，label和input进行切换时，在virtual dom中，会**重复利用**这些标签，只不过会改变标签的部分属性，而相似的属性时不会进行改变的
* 这也就导致了一个问题，当用户在input输入信息时，这时进行切换，则virtual dom也会将这个input的信息显示出来

![](images/virtual_dom.png)

==解决virtual dom进行标签复用的问题==

* 给元素添加一个**key属性**，若前后相同元素中key属性不同，则不会进行标签复用，若相同，则会进行标签复用

```html
<span v-if="isUserNameLogin">
    用户账号：<input type="text" placeholder="用户账号" key="username">
</span>

<span v-else>
    邮箱账号：<input type="text" placeholder="邮箱账号" key="email">
</span>
```



### 14、v-show

v-show展示的效果与v-if相似，但原理却不同

使用 v-if 修饰元素 且 判断条件为false时，元素将不会出现在DOM中

使用 v-show 修饰元素 且 判断条件为false时，元素会被添加上style: display="none"

==使用场景==：

* 当需要在显示与隐藏频繁切换时，推荐使用v-show
* 当切换显示数量较少时，推荐使用v-if





### 15、循环遍历v-for

```html
<div id="app">
  <ul>
    <li v-for="item in names">{{item}}</li>
  </ul>

  <ul>
    <li v-for="(item,index) in names">{{index}}--{{item}}</li>
  </ul>

  <ul>
    <li v-for="value in book">{{value}}</li>
  </ul>

  <ul>
    <li v-for="(value,key) in book">{{key}}--{{value}}</li>
  </ul>

  <ul>
    <li v-for="(value,key,index) in book">{{index}}--{{key}}--{{value}}</li>
  </ul>

</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      names: ['james', 'harry', 'curry', 'kobe'],
      book: {
        id: '01',
        name: 'vue',
        price: '100'
      }
    }
  })
</script>
```



==效果：==

![](images/v-for.png)





官方推荐在使用v-for时，给元素添加绑定key属性

virtual dom中的diff算法：

* 当在多个li数组中插入新的元素时，如在[A,B,C,D,E]中插入F到B后面
* 则根据diff算法，并不会在B后面添加一个li，而是将C变成F，D变成C，如此类推，直到最后新建一个li标签
* 如此会导致virtual dom的复用性能降低
* 若在li标签中加入key属性，则virtual dom在进行渲染时，会根据key是否对应来进行标签复用，这样就能提高复用性能

```html
<ul>
  <li v-for="(item,index) in names" :key="item">{{index}}--{{item}}</li>
</ul>
```





## 三、ES6补充

### 1、var  /  let

```text
var和let都是定义变量的关键字
let有块级作用域，var没有
ES5之前因为if/for都没有跨级作用域的概念，所以在很多时候，都需要借助function作用域来做闭包操作，来解决变量的问题
```



### 2、const

```text
使用const修饰的标识符为常量，不可以再次赋值
在使用const定义标识符时，必须进行赋值初始化
常量的含义是指向的对象不能发生改变，但可以改变对象中属性的值

```

### 3、对象增强写法

​	==**1、属性增强**==

```html
const name = 'Mr.Liu';
  const age = '18';

  // ES5写法
  const obj = {
    name: name,
    age: age
  }

  // ES6写法
  const obj2 = {
    name,
    age
  }

  console.log(obj);
  console.log(obj2);
```



​	==**2、方法增强**==

```html
  // ES5写法
  const obj3 = {
    run: function(){},
    eat: function(){}
  }

  // ES6写法
  const obj4 = {
    run(){},
    eat(){}
  }
```



