# 你了解cookies吗？ 
# 你知道cookies有什么样的属性吗？
**参考文章：https://zh.javascript.info/cookie**



### 什么是Cookies?

Cookies是直接存储在浏览器的一小段数据。Cookie通常是由服务器端通过响应头字段 `set-cookie`来设置的。但浏览器访问同一个域时会放入请求头的`Cookie`字段中。 通常作为携带验证信息的一种手段；

### Cookie有哪些属性？

1. path

cookie在页面路由上的可见性。path默认为当前路由，只有当前路由和当前路由的子路由能过访问该cookie.

2. domain

设置可访问 cookie 的域。默认情况下，cookie 只有在设置的域下才能被访问到。

3. expires, max-age

cookie的存活时间。在没有设置的默认情况下，浏览器关闭该cookie就会消失。

4. **`secure`**

默认情况下，https下设置的cookie, http协议下也是可见的。但我们可以设置secure，来保证https下设置的cookie的私密性。

5. samesite
6. httponly

如果设置了httpOnly，那么我们在页面就无法使用 js 来访问cookie 了。这个选项是用来禁止任何 JavaScript 访问 cookie。