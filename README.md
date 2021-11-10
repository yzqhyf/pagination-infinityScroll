# pagination-infinityScroll



perfomance 

minified js css html file.
lazy loading.
cdn supoort
async: the script is fetched asynchronously, and when it’s ready the HTML parsing is paused to execute the script, then it’s resumed.
defer: The script is fetched asynchronously, and it’s executed only after the HTML parsing is done.

react dynamic import() with promise
react-loadable. provides a higher-order component for loading React components with promises support server-side rendering

React.lazy() dynamic import lazy load component with suspense component and a fallback props.
React.Suspense React.lazy使用import动态加载来懒加载组件，在webpack中使用promise来动态加载script来load js文件。React.lazy(()=> import('/'));

React memo components will only re-render if its props have changed.
in most cases, you can inherit from React.pureComponent, which is equivalent to implementing shouldComponentUpdate(nextProps, nextState) by shallow comparing the current and previous props and state.
by default the shouldComponentUpdate will return true.

REST Representational State Transfer is a typcally used web application design pattern. it can retrieve the objects on the server-side and modify it. It is used for Client-server Communication.
use http as base protocol and http method, uni-directional, occasional communication, which is stateless protocol.

WebSocket TCP concept base, bi-directioinal, real-time scalable application with high loads, stateful protocol, cost of communication is lower.

Increase the application performance. JXS makes code easy to read and maintain.
It can be rendered both client side and server side.

LifeCycle method

getDerivedStateFromProps
componentDidMount
shouldComponentUpdate(nextProps, nextState)
getSnapShotBeforeUpdate(preProps, preState)
componentDidUpdate(preProps, preState)
componentWillUnmount

Using componentDidUpdate perform a side effect(data fetching or animation)
Re-compute or re-render some data only when a prop changes, use a memoization helper instead.

Mounting -> constructor->getDerivedStateFromProps->render->React updates DOM and refs->ComponentDidMount

Updating new props/new state-> getDerivedStateFromProps->shouldComponentUpdate->render->getSnapShotBeforeUpdate-> React updates DOM and refs->ComponentDidUpdate

UnMounting -> componentWillUnmount

steps of method when component is re-render, getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate 

the initialized state from props only runs when the component is first created. The constructor will only be called in first time mounting a component.

Reconciliation
When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly return virtual DOM elements with the previous rendered one. When they are not equal, React will update the DOM.

componentDidCatch, static getDerivedStateFromError

Virtual DOM is an in-memory represntational of the Real DOM, this is how react manage to sync with the real DOM. Compare the previous virtual dom with the currently return one.
use virtualDom instead of RealDOM, RealDOM manipulation is very expensive.
server side rendering ReactDOMServer.renderToString(<APP />);

VIRTUAL DOM
Wherever any underlying data changes, the entire virtual DOM tree underlied this node will be updated.
then calculate the difference between the previous one the current on. based on the calculation, the real DOM will update the only thing that actually changed.

updates are very fast, 
DOM manipulation is very simple, 
you can not directly update the HTML
No memory wastage.
It updates the JSX if element update.

State is a plain object which holds information for the component. It is fully controlled by the component itself. It can not be accessed by other components.

Props is a plain object which are passed top-down or unidirectional to component, from a parent component to a child component. Pass custom data and trigger state change.

we should update state by use this.setState(), state updates may be asynchronous, usually use a function instead of using object. And setState will merge the object into the current state.

(SPA)single page application. traditionally, the browser receives HTML from the server and renders it. When a user navigates to another URL, a full page is requested to server side inorder to render the new page. 

as modern SPA, we are using client side rendering. The browser loads the intial page from server along with all scripts, css. When user navigates to new page, a page refresh is not triggered. We only update the page URL, and usually retrieved JSON data on browser via AJAX call. 

immutable.js string number

reactDOM render react element into DOM, if the React element was previously rendered into container, it will perform an update on it and only mutate the DOM as necessary to relect the changes.

ReactDOMServer typically used for server-side-rendering.

style attribute->JavaScript object with camelCased properties. prevent XSS security holes.

refs is used to return a reference of the element, it provides a way you can access DOM nodes or React elements. Like Managing focus, text selection or triggering animations. use ref attribute
and createRef function in constructor in class component or using refs callback

ref is recommended to attach on the DOM element to give us element's attributes or attach to Class Component to give us access to their state, props entire component tree.
But we can define refs inside functional component.

usually calling setState() with call back function. Cause props and state sometime may update aschronously. take previous state as first arguments

Connect(mapStateToProps, mapDispatchToProps)(MyComponent); It creates a new component that wraps around your existing one. 

Component is a class or function component which describe part your application.

Container is an component more like to connecting with  Redux Store. And subscribe to Redux store and dispatch actions.

REDUX Top level overview directories
Components (representational components, often is a stateless component, update via props)
Container (Container components, often is a stateful component, update state by using dispatch actions via redux store.)
Actions only contains information whic needs send to the store. Action Creater functions which create the action.
Reducer pure function that takes previous state and current action, and returns next state
Store is an single object that holds compelte state of the application

Redux predictable state container based on Flux design pattern, it keeps three principles, Single source of truth, (stored in an object tree within a single store), state is read-only, only can be changed by reducer with an action. It take previous state and an action as parameters, return next state.

redux 三大原则 store中的数据保持唯一， state is readonly 保持只读状态，数据的改变中能通过纯函数来执行。

store.dispatch(action)->store.getState()->check last state and current state->if not same .store.setState->connect subscribed listener update state->mapStateToProps update corresponding state.

pure function
given the same input, will always return the same outputs.
produces no side effects.

curry function
is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

the combinereducers optimized it by check the child reducer returns, if they are not returning new value, the old state will be returned.

Object.assign({}, ownProps, stateProps, dispatchProps)

mapStateToProps
It receives the entire store state and return an plain object which will pass to components as props, each field in the object will become a prop of your actual component. The value of it will be used to determine whether your component will be re-rendered by using shallow equality checks. connect() just compared the individual.

useSelector as mapStateToProps, useSelector may return state value as a result. Use strict (===) reference equality, with useSelector() returning a new object every time will always force a re-render by default. 
1. Call useSelector multiple times, with each call returning a single field value.
2. Use Reselect library to create a memoized selector returns multiple values in one object.(by using closure to cache the selectors); 
	createSelector(...inputSelectors|[inputSlectors], resultFunc)
3. Use shallowEqual function from React-redux as the equalityFn argument to useSelector().

Reselect takes one or more selectors, or an array of selectors, computes their values and pass them as arguments to resultFunc.

mapDispatchToprops
used to dispatch an action to the store. By default, a connected component receives props.dispatch and can dispatch action itself. By providing mapDispatchProps allows you to specify which action your component might need to dispatch. The return of the mapDispatchToProps function will be merged to your connected component as props.

useDispatch as mapDispatchToProps

you can either define mapDispatchToProps as a function, which has more flexibility to customize receive function, or directly use it as objectbindActionCreators, when passing a callback using dispatch to a child component, use useCallback to memorized the function, it may avoids unnecessary rendering of child.

when store state changes, mapStateToProps will run.

import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, wrapper } from 'enzyme';
Jest creates a snapshot file. when you are using Snapshot Testing.

only render() function is required in class component, all other method in class components are optional.
functional component does not need render() function. 

Hooks

Dont call hooks inside loop, conditions, or nested functions.
because react relies on the order in which Hooks are calls to update the corresonding state.

useState let you add state to function component. It returns an array with two items, one is state value, the second one is function which is used to update the state, we assign it by using [a, b] destructuring which can be used directly in the component without 'this'.
the only argument to useState() Hook is the initial state.

useEffect is the react function that used in functional component to perform the side effects , it is similar as componentDidMount, componentDidUpdate, and with the clean up it will behave like componentWillUnMount.
useEffect clean up.
Network requests, manual DOM mutations, and logging dont need to cleanup. React performs the cleanup when the component unmounts.
If a component renders multiple times, the previous effect will be cleaned up before executing rendering next one.

Optimizing performance by skipping effects, by pass an array as an optional second argument to useEffect function, it will compare the previous one and current one.

useReducer 

Promise 对象用于表示一个异步执行的操作的完成或者失败和其结果。
当一个promise对象被创建时，会处于以下几种状态pending，fullfilled， rejected
Promise is a proxy represent the completion of an asynchronous call, it is used for asynchronous programming, such as Ajax call, api call, i/o call or setTimeout setInterval. 

Once a promise is on, it has three basic states, pending, fulfilled, rejected, a pending promise can either be resolved with a value, or rejected with a reason. and a promise take two executor function,
one is resolve another one is reject

we can use promise constructor to create promise with new keyword.

we can cancel the Promise if there is a risk condition by using 
	axios { cancelToken: source.token } source.cancel();
	blueBird promise.cancel(); Promise.config={ cancellation: true } can not cancel Promise.all();
	AbortController in fetch { signal: abortController.signal } abortController.abort();

promise.all()接受一个包含多个promise的数组

Promise.all=function(arr) {
	return new Promise((resolve, reject)=> {
		let result=[];

		arr.forEach((promise, index)=> {
			promise.then((value)=> {
				result[index]=value;

				if(result.length===arr.length) {
					resolve(result);
				}

				//resolve(value);
				//使用promise race直接resolve ！！！！！！！！！！！！！
			}, err=> {
				reject(err);
			});
		});
	});
}

promise all和race的区别在于， 如果迭代器中的某个promise resolve或reject，直接返回promise
promise finally，不管promise对象最后的状态，在then或者catch指定的回调函数后都会执行

javascript primitive type Boolean, Null, Undefined, Number, BigInt, String, Symbol these are all immutable values, which are incapable of being changed.
Object, Function, Array

基本数据类型，存放在栈中的简单数据段，按值存放，内存空间大小固定分配，可以直接访问。
引用数据类型，存放在堆内存中的对象，变量为一个指针(保存的是堆内存中的引用地址)，指针指向堆内存。	

undefined is a type, when a variable was declared but not yet assigned. typeof undefined is undefined.
null is an assignment value. typeof(null) is object.
null==undefined true
null===undefined false

symbol通过Symbol()创建，创建后返回唯一的symbol值，可以作为对象的键值，总是不同的。
如果希望返回相同的symbol，使用symbol全局注册表Symbol.for(key)返回(如果没有会被创建)一个以key为名字的全局symbol。 symbol属性不会出现在for...in中，因此不会意外的被处理或赋值，只有通过Object.getOwnPropertySymbols()获取。

event delegation and event bubbleing.
event delegation is a technique involving adding event listener on parent element, every time when a children elements has a event being fired, the listener will catch the event due to the event bubbleing. you dont need to bind and unbind multiple event listener for all child elements.
The event will be captured by the innermost elements and then propagate.
The bubbling occurs up the elements ancestors all the way to the document.

target is the element that triggered the event.
currentTarget is the element that the event listener is attached to.

THIS
'this' is refered to the new object, if a construtor function is being called by new keyword.
'this' is the object that function's property, such as obj.method()
'this' is refered to the argument which pass as argument of the function, if function is called by call, apply, and bind.
'this' is refered to the element which fire the event, if function is used as event handler.
'this' is refered to window, if any of the case above is not involved, and it is used in a global context. If its 'use strict' mode, this will be undefined.
If the function is ES6 arrow function, the value of 'this' is the its surrounding scope value at that time.
如果把null或者undefined作为this的绑定对象传入call，apply或者bind，调用时会被忽略，this会绑定到全局模式。

load and DOMcontentLoaded
DOMcontentLoaded is fired when initial HTML document has been completely loaded and parsed.
load is only triggered after the DOM and all dependent resources and assets are loaded.

use strict

make it impossible to accidentally create global variables.
var a=b=3 will generate an ReferenceError: b is not defined.

Asynchronous function usually accept a callback as a parameter and execution continue on the next line immediately right after the asynchronous function being invoked. The callback is only invoked when the asynchronous operation is complete and the call stack is empty.

event loop is a single thread loop which has a function call stack and a task queue. If the call stack is empty and there are callback functions in the task queue, a function is dequeued an been executed in the call stack. There is a micro queue to handle promise, .then etc. macro queue handle the setTimeOut setInterval or click.

arrow function this, 'This' within arrow function is bound to the scope which surround it.(定义函数时上下文中对象的this)

closure define a function inside another function, bound the scope with the inner function, so the inner function can access the lexical scope of outer function. the inner function can also be returned by outer function.
通过return的函数，内部函数可以访问outer function(外部函数)的局部变量作用域，由于outer function中的变量被return的inner function所引用，所以变量会一直在内存中，不被gc

spread syntax

to expand an iterable object such as Array or string into places where zero or elements, elements include arguments, array elements, object key valu pair. it can be used as push(), concat(), splice()
create new object {...obj} or new array [...array] since obj and array is the reference.

template string literal `` back qoute

Prototype chain

All JavaScript objects has its own prototype property, which is refered to another object. When a property is accesed on an object and if the property is not there, the JavaScript engine will look up to object's prototype and the prototype's prototype and so on, until find an objects prototype or end of the prototype chain (internal link), which is null.

prototype and __proto__

ES6 new features arrow function, classes, template strings literal, destructuring, function arguments defaul, rest, spread, let and const, for of iterators, promise, modules.

arrow function shorthand using the => syntax, it support both statement block and expression, and arrow function will share the same lexical this with its surrounding scope.

for of loops create a iterator to iterate array objects, like string, array, array-like object map, set.

classes is the implementation of the OOP concept. it has constructor, setter, getter, static.

destructing pattern matching for array and object.

let and const block scoped binding decalration. and will be hoisted but not initialized.(变量提升)

hoisting(lexical environment) is javascript default behavior that will move the declarations to the top of the current scope. JavaScript only hoists declarions, not initializations.

function declaration will be hoisted, but not the expresstion, only varaible of the function expression will be hoisted.

var will be initialized with undefined, but const and let remain uninitialized(temporal dead zone).

module it is a modulized pattern for coding. 

Import and Export is ES6 module syntax, it can be used as asynchronous, and you can name import to selectively to load the code you need. You need to put on top of the file you want to import.
Require and Module.exports is from Node.js or CommonJS, you can have it dynamic loading in runtime, or loading in a certian condition. Loading is sychronous, you need to load it one by one.

es5-shim or es5-sham

formik for form validation -local 

spread [...a, ...b] {...a, ...b} 
var a =[1, 2, 3] var b=[...a]; function a(...a) {}

箭头函数是匿名函数，不能使用new作为构造函数，没有aruments和原型属性(prototype)，箭头函数的this永远指向其上下文的this。

horizontal and vertical
前端适配方案
1. 百分比+固定高度方案 水平方向百分比加弹性(flex)布局，media query 改变字体大小
2. rem解决方案 取rem根据页面dpr(设备像素比) retina屏 物理像素640，独立像素320 
	 html meta标签 提供有关页面的元信息，页面描述的关键词。
<meta name="viewport" content="width=device-width, initial-scale=1.0">
	layout viewport和ideal viewport
	兼容性iphone上识别initial-scale，ie上识别width=device-width, 设置layout viewport基于ideal viewport
	320 360 384 400 (基于手机可视窗口的visual viewport)
3. 固定adaptive design css3 media query 针对retina有min-resoution
320xp 375px 480px 768px
@media screen and (max-width: 320px) {
    html {
    	font-size: 100px;
    	//this is the way set up default rem.
    }
}
@media only screen and (min-width: 321px) and (max-width: 768px) {}
@media all and (orientation: portrait) 或 @media all and (orientation: landscape)

@media query注意事项 写作顺序问题(loading order, css will choose the last one that was declared) min-width大于等于，max-width小于等于
等视窗宽度大小重叠时css样式会覆盖之前定义的方法。一般我们给min-width的值+1px, 防止样式覆盖。

chrome不支持小于12px字体，最小支持12px。
我们使用 scale()百分比比例。
 {font-size: 10px; -webkit-transform: scale(0.8);}

css3 transform
rotate() translate() scale()
scale()里面放入负值，会实现对角线(reverse)在放大或缩小。zoom中不能是负值，可以是百分比或者数值。
zoom缩放改变元素占据的空间大小，scale的缩放占据的原始尺寸不变页面布局不发生变化。

采用服务器渲染ssr
按需加载配合webpack分块打包，做到js，css以及依赖库的分离（externals 使第三方依赖库从bundle中分离）
很有必要将script标签➕异步
组件和路由懒加载
使用css3，svg，iconfont代替图像

使用pagespeed看看有哪些可优化的选项 使用profiler查看render时间

减少http请求数 桌面浏览器一般最多支持6-8个，手机端浏览器andriod 4个， ios5+ 6个
设置缓存，确保服务器协商缓存etag/if-none-match，响应头 header添加cache control或者expire
所有静态资源在服务器端设置缓存
懒加载图片 使用img tag中srcset按需加载图像(只有chrome，firefox 38以上完全支持) 处理图片懒加载(intersection observer) react-lazy-load
压缩静态资源/压缩图片 压缩图片 https://tinypng.com/ 使用tinyjpg/tinypng
建议还是用webpack的图片压缩插件 imagemin-webpack-plugin或者image-webpack-loader
css置顶，js文件置底 css样式放在头部并使用link方式引入，js脚本放在底部并使用异步方式加载。

尽量减少dom的直接访问和操作，和页面的dom节点，避免空src
优化高频事件，使用函数节流和函数防抖，减少reflow和repaint

避免html中的style，减少使用float，值为0的时候不需要单位.
避免使用css expression(css 表达式)css为确保表达式有效性，会进行频繁的求值。
标准化浏览器前缀
使用cdn，构建静态文件的内容分发网络，广泛采用各种缓存服务器，在用户访问时，利用全局负载技术将用户的访问只想距离最近的缓存服务器上，有缓存服务器直接响应用户需求

reflow回流， repaint重绘

render tree -> 解析html生成dom tree，解析css生成对象模型规则树 -> 将dom tree和css对象模型树合并生成渲染树render tree -> 遍历渲染树开始布局，计算节点信息(layout) -> 将渲染树绘制到屏幕(painting)。
reflow 对render树进行渲染，因为元素的尺寸，布局的改变需要重新构建渲染树。
页面首次渲染，浏览器窗口大小发生改变，元素尺寸或者位置发生变化，内容发生变化，字体大小发生变化，添加删除dom元素。
完成回流后，浏览器会对改变的部分进行重绘。

重绘 
render tree中的元素进行属性的更新，只影响元素的外观，风格，不会影响布局。如修改字体颜色color，border-style，visibility。

css资源会优先于js资源，css资源被视为渲染阻塞资源，浏览器会延迟js的执行和dom渲染，不会影响阻塞dom树解析，优先css对象模型树的构建。
当浏览器遇到script标签时，dom构建将暂停，直至脚本完成执行。

block formatting context 设置一个相对独立的渲染区域，规定了内部的block-level box的布局，并且与这个区域外部毫不相干。
通过bfc解决margin塌陷问题 如何触发一个盒子的bfc	语法
给父级设置绝对定位	position: absolute
给父级设置行级块元素display: inline-block
给父级设置浮动	float: left/right
给父级添加溢出隐藏	overflow: hidden/auto (可以防止字体环绕)(解除父子元素浮动产生的高度塌陷)

清除float
方法一：添加新的元素、应用 clear：both；
方法二: 父级div定义 overflow: auto/hidden（注意：是父级div也就是这里的  div.outer）
方法三：使用伪元素来清除浮动(:after,注意：作用于浮动元素的父亲）
#parent:after {
	content: '';
	display: block;
	height: 0;
	visibility: hidden;
	clear: both;
}

box-sizing定义了如何计算一个元素的总高度和总宽度
content-box 元素content的宽度和高度，border和padding会增加到content之外。
border-box 设置的border和padding包含在width之内。

dom创建父节点insertbefore(), 创建子节点appendchild(),

自适应图片 padding-top/buttom; position: relative; css百分比padding都是相对宽度计算的, height: 0;
img {width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
}

圣杯布局 双飞翼布局 holy grail layout/
<div>
	<div class='header'></div>
	<div class='container'>
		<div class='center'></div>
		<div class='left'></div>
		<div class='right'></div>
	</div>
	<div class='footer'></div>
</div>

1. 圣杯布局和双飞翼布局都使用float使左中右三栏浮动，左右栏使用margin-left: -100%和150px
和中间栏并排，为了使中间栏不被遮挡，圣杯布局在中间div设置padding-left/right，左右栏position: relative并配合left，right位置属性移动。双飞翼布局在中间栏div中添加新的div用于放置内容，并使用margin-left/right流出左右栏空间。 
2. 使用flex， display: flex, 中间flex: 1, order: -1/0/1, 左右 flex: 0 0 100px/100px
假如只用一个元素设置了flex-grow属性，那么该元素会得到所有剩余空间。flex: 1 => flex: 1 1 auto
sticky footer 利用flex布局将页面进行分割

当不设置width和flex-basis时，宽度默认为内容自身的宽度。设置width，不设置flex-basis，宽度正常随着width走，但是当width小于0时，则宽度恢复为自身内容宽度，不设置width，设置flex-basis，当flex-basis设置值小于自身内容宽度时，flex-basis不生效，不管是正值还是负值。当flex-basis设置值大于自身内容宽度时，相应宽度也会正常增加。同时设置时flex-basis优先级高。
.container {
	display: flex;
	flex-direction: column;
	min-height: 100vh;	 //1vh等于viewport高度的1%；

	.main {
		flex: 1;
		overflow: auto;
	}

	.footer {
		/*padding: 1rem
		/*height: 100px;
	}
}

.container {
	height: 100%;
}

.content {
	padding-bottom: 150px;
	min-height: 100vh;
}

.footer {
	position: relative;
	margin-top: -150px;
	height: 150px;
	clear: both;
}

POSITION 
position: absolute生成绝对定位，脱离正常html flow，相对于static定位(最近的一个已经定位的元素)以外第一个父元素定位
position: relative生成相对定位，不脱离正常flow，相对于其默认staick定位进行定位

flex 弹性盒子布局 
容器属性 flex-flow (flex-direction, flex-wrap),  justify-content align-items align-content(对单行无效， 必须设置flex-wrap: wrap)
项目属性 order flex (flex-grow, flex-shrink, flex-basis)
假如只用一个元素设置了flex-grow属性，那么该元素会得到所有剩余空间。flex: 1 => flex: 1 1 auto
sticky footer 利用flex布局将页面进行分割

http 八种请求方法，80端口，https 443端口
get 请求指定资源信息，返回数据
head 类似于get方法，返回响应中没有具体内容
put 从客户端向服务器更新数据
post
delete 请求服务器删除对应内容
connect http/1.1中预留能够将连接改为管道方式的代理服务器
options 允许客户端查看服务器性能
trace 显示服务器收到的请求，用于测试和诊断

ajax请求时get和post的区别？
get：从服务器上获取数据，传送数据量小，安全性低，请求会被缓存，缓存是针对URL进行缓存的，get请求参数直接加在URL地址后面，一种参数组合就会产生一种URL的缓存，重复的请求结果是相同的；post：向服务器发送数据；传送数据量大，请求不会被缓存，参数封装在二进制的数据体中(request body)，服务器也不会记录参数，相对安全，所以涉及用户隐私的数据都要用post传送；

 http缓存 强缓存 cache control(优先级更高) max-age， Expires 客户端时间
 		协商缓存 last-modified/if-modified-since，etag/if-none-match（优先级更高）
1. 浏览器根据http header中的资源信息cache control或者expires判断是否命中强缓存，如果命中则直接加载缓存中的信息，不会发送请求到服务器。
2.如果未命中强缓存，则浏览器会将资源加载请求发送到服务器。服务器会返回last-modified或者etag(response header)， 当浏览器第二次请求时会发送if-modified-since/if-none-match(request header)来判断是否命中协商缓存本地缓存是否失效，来决定是否返回资源。304 Not Modified.
3.未命中协商缓存，服务器将完整资源返回客户端。
location cookie
Etag (string of ASCII characters)

https http+ssl(secure socket layer) 公开密钥，私有密钥，协商密钥
1. 使用数字认证机构(ca, certificate authority)确认认证服务器，取得公开密钥。
2. 使用公开密钥与服务器进行协商会话，使用私有密钥尽心解密，生成对称密钥(symmetric key)。
3. 使用对称密钥进行加密通讯。

http2 采用二进制格式传输数据(binary protocol)，请求和响应数据被分割为最小单位帧，并建立一个用于链接的虚拟通道‘流’，可以承载双向消息，每个流都有一个整数id，同域名下所有通信都在单个连接上完成只占用一个tcp连接，该链接可以承载任意数量的双向数据流。服务器端推送功能。
http1.x中，如果想并发多个请求，必须使用多个tcp链接，一般浏览器为了控制资源，会有6-8个tcp链接请求限制。

跨域问题来源于浏览器同源策略，同源的定义protocol， port，host都相同(same origin policy)

主机不同也为跨域，http://store.company.com和http://news.company.com不同源。	
jsonp web页面上调用js文件时不受跨域影响，拥有src属性的标签都拥有跨域能力
ajax通过xmlhttprequest来获取数据，jsonp通过动态添加script标签来获取服务器提供的js脚本。

cors, jsonp实现跨域 access-control-allow-origin, axios.jsonp()/原生npm jsonp package
nginx，nodejs代理跨域， html5 postmessage
nginx代理服务器使用proxy_pass配置一个代理路径替换实际访问的路径。

跨域请求会被发送，只是浏览器不会将返回的数据交给js程序。

前端安全
1. xss cross site scripting 页面渲染内容包含脚本 
	浏览器 http添加 x-xss-protection
	content-security-policy(白名单制度，明确告诉客户端那些外部资源可以加载执行)
	对特定字符进行转译

2. csrf cross site request forgy 通过cookie中存在的身份认证信息在第三方网站发起请求
	禁止第三方网站发送携带cookie信息请求
	在网站前端添加token验证， 比如验证码，加密token，http header中的referer(记录来源地址) referrer-policy (same-origin, origin, strict-origin)

内存回收  garbage collection
标记扫描算法(Mark an sweep)
1. 垃圾回收器构建roots列表，roots通常为代码中保留的全局变量，浏览器中为window。
2. 从roots开始递归检查所有被当前对象可以引用的对象，并标记为active。
3. 将未被标记为active的对象清除。

内存泄漏(memory leak)
意外的全局变量，（未定义的变量，使用this所产生的变量）使用'use strict'防止
被遗忘的和忘记cancel的计时器和回调函数
脱离dom的引用（使用dom元素节点）
闭包(不会)

使用weakmap将dom节点作为键名，weakMap只接受对象作为键名(null除外)。

setTimeout(()=> {
    console.log('1');
});

const promise1=new Promise(resolve=> {
    console.log('2');
    resolve('3');
});

console.log('start');

setTimeout(()=> {
    console.log('4');
});
async function func1 () {
    console.log('async-start');
    const str=await promise1;
    console.log(str+'333');
    console.log('async end');
};

func1();

promise1.then(()=> {
    console.log('5');
});

console.log('6');

event loop javascript执行模型，function调用栈 single thread mechanism
宏任务settimeout setinterval requestAnimationFrame UI rendering 微任务 promise observe

浏览器模型 宏任务队列和微任务队列
全局script同步代码执行完毕后，调用栈stack清空。
1. 微任务中所有任务都会被依次取出来执行，直到microtask队列为空。如果执行microtask的过程中，又产生了microtask，也会被加入到队列末尾，在这个执行周期中被调用执行。
2. 宏任务macrotask一次只从队列中取一个任务执行，执行完就去执行微任务中队列中的任务。
3. ui rendering是由浏览器决定的，执行节点在执行完所有microtask之后，开始执行下一个macrotask之前， ？

async会返回一个promise 对象， 函数中间必须有await

nodejs模型  libuv实现 6 stages
六个阶段 timer阶段，i/o(pending) callback阶段，idle/prepare阶段，poll阶段(获取新的i/o事件)，check阶段，close callback阶段

4个宏任务队列
1. timers queue. settimeout和setinterval
2. i/o callback queue. 执行除了timers设定的callback，settimmediate设定的callback，close事件的callback之外的callback
3. check queue. setimmediate设定的callback
4. close callback queue. socket.on('close')

2个微任务队列
1. next tick queue. 设置process.nexttick 的callback的。
2. other micro queue. 设置类似promise

根据不同类型的任务node js会将其放在不同的队列中。
执行全局的script同步代码。
1. 执行相对应的微任务队列中的所有任务，先执行next tick queue，然后再other queue(promise)
2. 执行宏任务的六个阶段，
	在最新版中，每个阶段的执行一个macrotask完成后，就去执行microtask nexttick， promise队列
	老版本中，会执行完每个阶段宏任务队列中的所有任务，完成后再执行所有微任务

包涵一个或者多个空格的字符串转数组
var str='  12 33   444';
str.trim().split(/\s+/g); s表示空格，+表示多个前面的字符；

call() apply() 将一个函数的对象上下文从初始的上下文转变为第一个参数所指定的新对象。
bind()将函数绑定到某个对象，并且创建一个函数，函数体内的this对象绑定为bind()第一个参数
allows for a function/method belongings to one object to be assigned by another object

Function.prototype.bind=function() {
	let self=this;

	let context=[].shift.call(arguments);
	let args=[].slice.call(arguments);

	return function() {
		return self.apply(context, args.concat([].slice.call(arguments)));
	}
}

节流函数和防抖函数 (html dom event)
前端事件或函数短时间内被频繁的触发， 例如throttle a mousemove, touchmove event, debouce a resize, scroll, search event.

主要的实现思路是通过函数的闭包，缓存变量，再加settimeout定时器，设计延时时间，使函数在规定的单位时间内触发。
函数节流，限制一个函数在规定定时间内只能执行一次，防抖函数特定时间段内没有再调用只执行最后一次。

// const throttle=(fn, wait)=> {
//   let timer=null;

//   return function() {
//     let context=this;
//     let args=arguments;
//     if(!timer) {
//       timer=setTimeout(()=> {
//         fn.apply(context, arguments);
//         timer=null;
//       }, wait);
//     }
//   }
// }

function throttle(fn,wait){
	var last;
	var timer;
    return function(){
        var context = this;
        var now=new Date();

        if(last && now<last+wait) {
        	clearTimeout(timer);
        	timer=setTimeout(()=> {
        		fn.apply(context, arguments)
        		last=now;
        	}, wait);
        }else {
        	last=now;
        	fn.apply(context, arguments);
        }
    }
}


const debouce=(fn, wait, immediate)=> {
	let timer=null;
	return function())= {
		//if(immediate && !timer) {
		//	fn.apply(this, arguments);
		//}

		if(timer) clearTimeout(timer);
		timer=setTimeout(()=> {
			fn.apply(this, arguments);
		}, wait);
	}
}

cookie和session 都是用来跟踪浏览器与用户之间的通信的。cookie保持在浏览器端，session保持在服务器端，
每次请求都需要有cookies， cookie的过期时间可以设置，默认浏览器关闭结束， 大小4kb
session保存每个用户的信息，通过sessionid区别，sessionid 保存在cookie中。

cookie格式 Name=value , Expires/Max-age= , Path= , Domain=

webstorage
sessionstorage和loaclstorage
存储在客户端，不与服务器端进行交互，大小为5mb
localstorage的生命周期是永久的，除非主动删除。
sessionstorage的生命周期仅在当前浏览器窗口会话下有效，在同源窗口下（即浏览器窗口没有关闭，刷新页面，通过new tab链接进入同源的另一个页面）都存在。使用window.open()，若使用"<a href='' target='_blank'>"则sessionstorage不同。
但是在new tab使用浏览器地址栏打开新同源窗口，sessionstorage的数据不一样。

Object.create和new关键字
Object.create(proto)方法创建一个新对象，使用现有的对象来提供新创建对象的__proto__。
as the prototype of the newly created object

Object.create=function(proto) {
	function Fun() {};
	Fun.prototype=proto;
	return new Fun();
}

使用new关键字时，创建一个空对象，将空对象的实例原型指向构造函数的原型，将空对象的实例作为构造函数的上下文(改变this指向)，instanceof Object判断返回值。
实例继承了构造函数及其原型属性上的属性和方法。
	var Base=function() {}
	var o1=new Base();
	/****
		var o1 = new Object(); /var o1={};
		o1.__proto__ = Base.prototype;
		Base.call(o1);
	****/

js的多种继承方式

1. 让子类函数的prototype属性值为需要继承的一个构造函数的实例，只需简单赋值实例，来自原型对象的所有属性都被实例共享(引用类型例如数组)，创建子类时，无法向父类构造函数传参。
2. 通过子类函数apply或者call+prototype绑定父类函数this 创建子类实例时，可以向父类传参，可以实现多继承(call多个父类对象)，
	2.1 子类构造函数的原型为父类的实例。 使用call+prototype方法也需添加。 
	2.2 子类构造函数的原型与父类构造函数的原型指向同一值。instanceof并不是父类， 没法判断是子类还是父类的实例化。
3. js类继承，class extends constructor() super()， 需要浏览器支持，需要babel

function person() {
	this.x='x';
	this.y='y';
	this.showPoint = function() {
		return this.x+this.y;
	}
}

function man() {
	/*person.call(this);
	/*person.apply(this, []);*/
	this.feature='new feature';
}

man.prototype=new person(); man.prototype=Object.create(Person.prototype);
man.prototype.constructor=man;
var temp=new man();
instanceof 用来检测constructor.prototype是否存在于检测对象的原型链上。
instanceof左侧必须是对象，才能找到其原型链__proto__。
右侧必须是构造函数，构造函数有prototype属性。
向上迭代，左侧对象的原型不等于右侧的prototype属性时，沿着原型链重新赋值。

function instanceof(left, right) {
	let prototype=right.prototype;

	let proto=left.__proto__;
	while(true) {
		if(proto==null) return false;
		if(proto==prototype) return true;

		proto=proto.__proto__;
	}
}

原型
在JavaScript中，每当定义一个对象（函数也是对象）时候，其中每个函数对象都有一个prototype属性，这个属性指向函数的原型对象，使用原型对象的好处是所有对象实例共享它所包含的属性和方法所有引用类型对象都有__proto__属性，属性也是一个对象。
所有的函数都有一个prototype属性，所有实例对象的__proto__属性都指向它的构造函数的原型。
原型链 从对象属性上开始查找，每个对象都有一个原型对象，从原型属性开始向上查找，如果达到原型链的顶部都没有，object的原型为null

__proto__隐式原型，保证了该实例能够访问构造函数原型中定义的属性和方法。

react性能优化

props和state的结构尽量扁平化
在构造函数中bind函数或者在render()中减少使用箭头函数
shouldcomponentupdate/pureComponent
使用react memo+react callback
React memo components will only rerender if its props have changed.
react+redux immutable.js 全局state必须是immutable的	redux-immutable
react-intersection-obsever

immutable.js 持久化的数据结构，所有的更新操作都会返回新的值，使用树形结构字典树实现结构共享
immutable Map() 原生object转map对象，只会转化第一层
		  List() 原生array转list对象，只会转化第一层
		  fromJS() 原生js转immutable对象(深度转换，会将内部嵌套的对象和数组全部转化)
		  toJS() immutable对象转原生js(深度转换，会将内部嵌套Map和List全部转化原生js)
		  is() 判断两个immutable对象是否相等

getderivedstatefromprops 会在每次组件被重新渲染前调用，meaning mounting阶段，父组件更新，props update，或者state update，其都会被调用，it must return an object to update the state or null 不更新state. static原因 是静态方法，不能访问组件上的任何数据，也就无法使用this setstate

shouldcomponentupdate(nextprops, nextstate) 通过知道当前的state是否改变来确定组件是否需要更新，默认返回true，返回false时不会重新render 
react.purecomponent

使用virtual dom的意义在将所有dom操作缓存，一次性操作render tree，无论多复杂的dom操作，只有一次reflow/layout。
使用JavaScript对象结构创建一个树结构，当状态变更时，重新构建一颗新的对象树，比较两个树。

1. 如果virtual dom对象中的type属性为string类型的tag，创建tag，包涵props里的全部属性。
2. 如果virtual dom对象中的type属性为函数或者class，调用函数或者生成实例，若返回结果仍是virtual dom元素则递归调用此过程。
3. 如果props中有children属性，对children中的每个元素进行以上过程，并将结果放到父dom节点中。

{
  type: 'div', // type: Table
  key: ''
  props: {
    className: '',
    children: [
      'input',
      ''
    ]
  }
}

react diff算法

Reconciliation调和 将virtual dom转换成actual dom的最少操作过程
When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly return virtual DOM elements with the previous rendered one. When they are not equal, React will update the DOM.

tree diff 
对两个virtual dom树分层进行比较，如果同一层级节点不同时，其节点和子节点会被完全删除，不会继续比较，这样只需对树进行一次遍历

component diff
如果是同一类型组件，按照层级策略继续比较。
如果不是同一类型组件，则判断该组件为dirty componnent，替换整个组件下的所有节点。
对于同一类型的组件，通过比较shouldcomponentupdate来决定是否需要diff来update virtual dom。

element diff 同一层级的list节点（插入，移动，删除， index，lastindex）
添加key，并且保证为当前层级list 
节点的唯一，当列表数据发生变化时，通过key来判断新老集合是否存在相同的节点，准确的找到旧虚拟dom中对应新虚拟dom节点，并通过节点index来判断节点是否需要进行移动。
use key to match children in the original tree

不推荐使用index作为key，如果list集合使用reverse().

react 合成事件
如果dom上绑定了过多的事件处理函数，整个页面的响应和内存都会受到影响，react实现了中间层syntheticevent
当用户绑定onclick事件时，react并没有将click绑定在dom上，而是在document处进行监听，当事件发生并冒泡至document时，react将事件内容封装(wrap)并交给中间层syntheticevent。

this.setstate在生命周期函数内和合成事件sytheticevent是异步的，在settimeout或原生dom中是同步的

react内部框架分层
virtual dom层，描述页面样式
reconiliation层，负责调用组件生命周期方法，进行diff运算
render层，渲染

父子节点渲染
Parent_constructor()->Child_constructor()->Child_componentDidMount()->Parent_componentDidMount()

react fiber
stack reconciliation
旧版react JavaScript单线程特点，加载和更新过程是同步进行的，通过递归方式进行每个节点的更新渲染，使用js引擎自身的函数调用栈，它会一直递归执行到栈空为止。
fiber reconciler 
通过单链表结构生成fiber tree，深度优先遍历，通过child找到子节点，return找父节点，sibling找兄弟节点，可以把更新过程拆分，会在浏览器空闲的时候调用执行后台或优先级低的任务。

scheduler react任务管理器 任务优先级和frame 已一帧为单位通过requestanimationframe 模拟requestidlecallback
未过期任务(timerQueue)和过期任务(taskQueue)
判断expirationtime

浏览器一帧，处理用户交互(input events)，js解析执行，帧开始(resize, scroll, media query)，requestAnimationFrame，layout，painting.

遍历过程
workLoopSync()->performUnitOfWork()
->beginWork()->completeUnitWork()->completeWork()

			function performUnitOfWork(workInProgress) {
			    let next = beginWork(workInProgress);
			    if (next === null) {
			        next = completeUnitOfWork(workInProgress);
			    }
			    return next;
			}

			function beginWork(workInProgress) {
			    console.log('work performed for ' + workInProgress.name);
			    return workInProgress.child;
			}

两个阶段
1. 进行diff运算时，会生成一颗新的fiber tree(workinprogress tree-hostRoot.current.alternate)，另一个为current tree-hostRoot.current 本质上来说是链表结构。(本质上不是两棵树，通过alternate属性互相引用)。
第一次渲染的时候会一次性生成，在后续diff阶段，根据节点信息，先遍历(traverse)child节点，然后sibling节点，得出需要更新的节点(first effect, next effect) 信息生成包含effecttag的effect list fiber节点链表，react会把更新过程切分，每完成一个部分
都会将控制权交给主线程来检查是否有优先级更高的任务需要执行(shouldYield)，如果没有，则继续建树stop and stash the work done and yield to other event
2. commit阶段，优先级最高，完成fiber tree的更新后，通过effect list，将需要更新的节点一次批量更新，更新dom tree。
commit阶段effect list会遍历三次

render props或者high order component来实现逻辑或者代码复用，抽离底层代码。
render props在不重复代码的情况下共享组件间功能，能够父子组件共享state和props信息
hoc能够在不修改原组件内部的情况下修改组件内容，降低了耦合度。但是固定的props可能会被高阶组件覆盖。

High Order Component is a function that takes a components as arguments and returns a new one.
Used for react composition. Code reuse, logic abstraction, manipulate props. <WrapComponent {...props}>
HOC, it is a generally the preferred way of extending a components functionality in React. 比如props的代理，state的抽象和更改，渲染劫持(render highjacking)，直接继承wrappedcomponent，使用super.render()	

react hook HOOKS
hooks可以让function组件使用state，并且提供useeffect来实现类似componentdidupdate，componentdidmount和componentwillunmount等生命周期方法，并可以custom hooks增加复用代码逻辑。

hook中使用usePrevious custom hook来访问前一个状态值。
const usePrevious = (value) => {
    const ref = useRef()
    useEffect(() => {
      ref.current = value
    })；
    return ref.current
  }
a ref variable in react is a mutable object, but the value is persisted by React across re-render.
useref返回一个可变ref对象，其current属性被初始化为传入参数。返回的ref对象在整个组件的生命周期内保持不变

useEffect 当组件完成渲染时触发。perform side effect。
任何state的改变，都会触发React组件的重新render，但某些变量和函数不需要被重新渲染，使用useMemo或者useCallback缓存变量或者函数。
useMemo 传入一个函数和依赖数组， 返回一个缓存变量，当页面重新渲染时，只有对应依赖项发生改变，才会被触发。
useCallback 传入一个函数和依赖数组，返回一个缓存函数，返回该回掉函数的memoized版本。
例如有一个父组件包含一个子组件，子组件接受一个函数作为props。可以缓存这个作为props传入子组件的函数，避免子组件不必要的更新。

useLayoutEffect 会在dom更新完成之后同步执行，对应的会阻塞浏览器页面渲染。

不一定非要在任何时候使用，但是如果该函数或者变量会作为props传给子组件，使用useMemo或者useCallback可以避免子组件的非必要渲染。

react hook使用类似单链表的结构按照usestate，useeffect的定义顺序储存组件内的state或者dependency。
	
	type Hooks = {
	    memoizedState: any, // 指向当前渲染节点 Fiber
	  baseState: any, // 初始化 initialState， 已经每次 dispatch 之后 newState
	  baseUpdate: Update<any> | null,// 当前需要更新的 Update ，每次更新完之后，会赋值上一个 update，方便 react 在渲染错误的边缘，数据回溯
	  queue: UpdateQueue<any> | null,// UpdateQueue 通过
	  next: Hook | null, // link 到下一个 hooks，通过 next 串联每一 hooks
	}

	type Effect = {
	  tag: HookEffectTag, // effectTag 标记当前 hook 作用在 life-cycles 的哪一个阶段
	  create: () => mixed, // 初始化 callback
	  destroy: (() => mixed) | null, // 卸载 callback
	  deps: Array<mixed> | null,
	  next: Effect, // 同上 
	};

更容易复用代码，使用函数体建立组件和保存或更新状态，只能在函数最外层调用hook，不能在循环或条件判断中使用，useeffect的依赖像需要注意。
Dont call hooks inside loop, conditions, or nested functions.
because react relies on the order in which Hooks are calls to update the corresonding state.
缺点，hooks为纯函数调用，当我们进行异步操作时，例如settimeout，造成访问的数据并不是最新的。
it is hard to reuse stateful logic between components.
complex components become hard to understand.
classes will confuse both people and machines.

==类型转换

当数据类型为boolean类型或者string类型时，比较时转换成number类型
当数据类型为引用类型时，需要转换成原始数据类型(使用valueOf()方法获得原始值)，当转换完的原始数据类型为boolean或者string类型，则继续转换成number
undefined和null跟任何值在‘==’下都返回false，但undeined==null 为true
A的unicode是65 a是97 charCodeAt()
原始数据类型null undefined number string boolean symbol
'abc'>'b' false '2'>'10' true 根据第一个不同字符串ascii码比较  （1+true=2 1+undefined=NaN 1+null=1 算数运算符）'true'==true /false
Math.min()返回Infinity, Math.max()返回-Infinity。

弹出数字键盘 
<!-- 纯数字带#和* -->
<input type="tel">

<!-- 纯数字 -->
<input type="number" pattern="\d*">

调用<a>系统功能<!-- 拨打电话 -->
<a href="tel:10086">拨打电话给10086小姐姐</a>

<!-- 发送短信 -->
<a href="sms:10086">发送短信给10086小姐姐</a>

<!-- 发送邮件 -->
<a href="mailto:young.joway@aliyun.com">发送邮件给JowayYoung</a>

禁止页面缓存
<meta http-equiv="Cache-Control" content="no-cache">

点击穿透
移动浏览器提供一个特殊的功能： 双击放大
用户触碰页面之后，需要等待一段时间来判断是不是双击动作，从而不会立即响应click，等待的时间为300ms
把页面内所有click换成touch事件
可以使用fastclick代替

简化懒加载
previous： scroll top+定时器+条件判断

intersectionobserver
var observer=new IntersectionObserver(callback[, options]);

options root 用于观察根元素，默认为浏览器窗口。
threshold 数组，指定交叉比例

const observer = new IntersectionObserver(nodes => {
    const tgt = nodes[0]; // 反正只有一个
    if (tgt.isIntersecting) {
        console.log("已到底部，请求接口");
    }
})
observer.observe(bottom);
也可以通过unobserve停止当前监听事件

react router
react在不刷新页面的情况下，在不同的url下渲染不同的组件，实现url与ui的同步。
without refreshing the webpage.
基本组件
1. history: window对象提供popstate事件监听浏览器变化 >ie10
browserhistory html5 history api history.pushstate()或者history.replacestate()来实现url的改变且并不刷新页面。

2. hashhistory: window对象提供了onhashchange事件来监听hash值的改变 >ie8
通过区分window对象中的location属性中所包涵的#字段，#字段的改变不会引起页面刷新。
history提供了hashchange，在#改变后会被触发。

history api 在刷新时会通过整个URL请求服务器的资源，history你可以自由修改path，服务器端没有资源。
location api hashtag模式下，路由修改的是#中的信息，浏览器请求时不会连代使用。
history.back has the same effect as calling history.go(-1)

动态加载 import().then() @babel/plugin-syntax-dynamic-import

图片压缩 imagemin-webpack-plugin as plugin class 或者 image-webpack-loader as loader function
async await @babel/babel-plugin-transform-regenerator
@babel-plugin-transform-runtime
babel-polifill会将方法添加到原型链上，这样打包量就会增加，而且如果操作原型链，会污染(contaminate)全局变量。

前端开发单例模式 (singleton) 类似购物车的实现
前端开发观察者模式 redux store
前端开发工厂模式 不制造具体实例对象，通过构造函数

webpack 打包工具，将所有的js文件和依赖的模块转化为浏览器可以识别的静态文件。
js module bundler. it is made primarily for javascript, but it can transform front-end assets such as HTML, CSS and images if the correcsponding loaders are included.
entry，output，module，chunk，loader，plugin
1. 生成complier，获取entry，output，modules，plugin，构建run()启动项
2. 通过entry读取文件分析模块依赖。
3. 对每个模块进行深度遍历并解析执行 编译模块，生成抽象语法树AST.
4. 针对不同模块依赖关系加载对应的loader。load corresponding loader against different module dependency relations.
5. 生成浏览器可识别bundle。


module可以理解为一个手写js文件，或者一段import export逻辑代码块。
chunk则是在webpack进行打包时，将原文件根据不同的文件依赖关系生成。
bundle则是处理完chunk文件后输出的可以在浏览器上运行的经过编译的最终源文件。

tree shaking webpack代码优化 dead-code-elimination es6的模块加载是静态的
tree shaking commonly used in the javascript context for dead-code elimination, it relies on the static structure of ES2015 module syntax, i.e. import and export.

1. 打包生成一个IIFE(immediate invoked function expression)立即执行函数，并将每个模块包装为一个函数组成一个数组，作为参数传入iife ，使用installedModules变量缓存以加载模块。
2. 定义__webpack_require__函数实现模块的require。
3. 检查是否缓存以加载模块，如果有则直接返回模块exports。
4. 如果没有缓存，则为第一次加载，初始化模块，缓存模块。
	var module = installedModules[moduleId] = {
        i: moduleId,
        l: false,
        exports: {}
    };//moduleid 为文件的路径
5. 调用函数模块，调用完成后，模块标记为已加载。
6. 返回该模块的exports对象。

分包加载
添加__webpack_require_.e和webpackJsonp
__webpack_require_.e
1. 检查当前chunkid是否存在与installedchunks中，为0则代表已经完成加载，如果存在，则返回promise数组，如果没有，则创建一个promise的缓存chunk。
2. 在html head中动态添加<script src="">, 实现动态添加js脚本，jsonp，并设置一个onscriptComplete()函数，用于处理script标签的异步结果。
3. 定义全局变量window["webpackJsonp"]=[], 存储需要动态添加的模块， 将.push方法重写为webpackJsonpCallback()。
4. 对对应模块id的promise执行resolve(), 将缓存对象的值设为0.


将代码模块化，并且按需加载
loader让wepack能够处理那些非javascript文件, loader的执行顺序和配置中的顺序是相反的， 
The order of execution is opposite to the order of loading
loader本质上是一个函数，只专注于压缩处理打包，语言转译。
plugin本质是一个类，安装各种插件，会监听webpack的整个运行周期。webpack运行周期会广播许多事件，plugin可以监听这些事件并提供对应api。

loader work at the individual file level during or before the bundle is generated.
plugin can deeply integrate into webpack event life cycle by using webpack api, register hooks with webpacks build system and access the compiler.

webpack hmr Hot Module Replacement 当对代码进行保存后，webpack将对代码进行重新打包，并将新的模块发送到浏览器，浏览器通过对老模块的替换，在不刷新浏览器的前提下能够对应用进行更新。
通过使用webpack-dev-server，在config中配置devserver实现自动刷新。
webpack监听源文件的变化，每次编译完成生成hash值，已改动模块的json文件和js代码，并通过socket向客户端推送当前hash
webpack中hotmodulerepalcement获取manifest，通过jsonpmaintemplate.runtime向server端发送jsonp请求，服务器端返回包含所有更新模块的hash值的json。然后再通过jsonp请求，获取到最新的模块代码。

webpack-dev-server主要启动了一个使用websocket通信协议的http服务器和client，当启动web-dev-server后，目标文件夹是没有编译文件的，实时编译都保存在内存中。
iframe mode和inline mode

链式调用

function test() {
	this.a='a';
	this.b='b';
}

test.prototype.methodA=function() {
	console.log('this is method A');
	return this;
}

test.prototype.methodB=function() {
	console.log('this is method B');
	return this;
}

angular2 生命周期函数
1. ngOnChanges() called before ngOnInit() and whenever one or more data-bound input properties changes. If your component has no inputs, the framework will not call it.

2. ngOnInit() Initialize the directive or component after first displays the data-bound properties. Only called once, after first ngOnChanges().

3. ngDoCheck() Detect and act upon change that Angular can't detect on its own. Called after onOnChanges() and ngOnInit().

4. ngAfterContentInit() called only once after ngDoCheck() when the component content initialized.

5. ngAfterContentChecked() called every time when content changes after once ngAfterContentInit() and every subsequent ngDoCheck().

6. ngAfterViewInit() called after Angular initializes the component's view and child's view. called once after the first ngAfterContentChecked().

7. ngAfterViewChecked() called every time component's view and child's view updated has checked, called after ngAfterViewInit() and every subsequent ngAfterContentChecked().

8. ngOnDestroy() cleanup just before Angular destroys the components.


rxjs Observable 
Observable is used to handling async requests or event, represent of an collection of mutiple values or events.
provide an observer object to hanlde the next(), err(), or complete() status.
当observable被创建时，他不会立即执行(lazy evaluation)，只有当被调用时才会执行。可以重复被调用并被多个subscriber所执行并触发多次异步操作。
promise execute immediately on creation，实际上的异步操作只会被执行一次。
observable 提供dispose()方法来取消订阅，在执行前或者执行中。

you can use pipe to link operators together.

rxjs operators
take emits only the first count values emmitted by the Observable.
tap perform a side effect for every emmission on the source Observable, but still return an Observable that is identical to the source.

@ngrx state management for angular application. 

the angular ahead of time compiler converts your angular html and typescript code into efficient javascript code during the phase before the browser downlloads and runs te code. faster rendering

portfolio
risk profile -> conservative moderate growth aggressive
equity fixed income cash
goal type -> retirement build wealth major purchase another purpose

bom和dom

dom document object model，文档对象模型，操作html文档内容和结构的api
bom browser object model，浏览器对象模型，为了控制浏览器行为的接口。

dom为文档结构的根结点，有document.title, document.getelementbyid().
bom的核心为window对象，它包含了document, location, navigator,history.
window.history.back(), window.history.go().
window.navigator包含web浏览器信息

