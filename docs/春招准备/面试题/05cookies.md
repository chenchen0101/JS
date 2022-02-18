# 你了解cookies吗？ 
# 你知道cookies有什么样的属性吗？
**参考文章：https://zh.javascript.info/cookie**

#### 什么是cookie

HTTP本身是无状态的，即服务器无法判断用户信息。cookie是一小段文本信息。客户端向服务器发送请求，如果服务器需要记录用户状态，就用response返回一个cookie。客户端浏览器会保存cookie。当浏览器再次请求这个网站时，浏览器会把请求的网址和保存的cookie一同提交给服务器，服务器检查此cookie，以此辨认用户状态。

#### cookie机制

https://upload-images.jianshu.io/upload_images/13949989-dcf024be2733e725.png?imageMogr2/auto-orient/strip|imageView2/2/w/400/format/webp

当用户第一次访问并登录一个网站的时候：

客户端发送一个请求到服务器；服务器返回一个HttpResponse响应到客户端，其中包含set-cookie的头部；客户端保存cookie，之后再次向服务器发送请求时，httpRequest请求会包含一个cookie的头部；服务器返回响应的数据。

#### cookie属性

1、name=value：键值对，可设置要保存的键值。这里的name不能和其他属性一样

2、expires、max-age：过期时间，在设置的某个时间点后cookie就会失效

3、domain：生成该cookie的域名，如 domain="[www.baidu.com](http://www.baidu.com/)"

4、path：该cookie是在当前哪个路径下生成的，如path=/

5、secure：关于安全的特性，只在https环境才可访问cookie

6、samesite：关于安全的特性。防止XSRF(跨站请求伪造)攻击

通常可以设置两个值：**`samesite=strict`（和没有值的 `samesite` 一样)**、**`samesite=lax`**

###### 防攻原理：如果用户来自其他网站，

###### 1、设置了samesite=strict选项的cookie永远不会被发送。（恶意网站的提交没有cookie，XSRF攻击没有机会成功，没有cookie正常网站就无法识别用户）

###### 2、设置了samesite=lax选项的cookie只有在两种情况下才可以被发送：

###### i、HTTP 方法是“安全的”（例如 GET 方法，而不是 POST）

###### ii、更改浏览器地址栏中的 URL(`samesite=lax` 所做的是基本上允许最常见的“前往 URL”操作携带 cookie。例如，从笔记中打开网站链接就满足这些条件。)

7、httpOnly:关于安全的特性。防止XSRF(跨站请求伪造)攻击

###### 防攻原理：如果 cookie 设置了 `httpOnly`，则禁止任何JavaScript访问cookie。那么 `document.cookie` 则看不到 cookie，所以它受到了保护。

#### XSRF（跨站请求伪造）

​       当你登录银行网站时就有了此网站的身份验证cookie，浏览器会在每次请求时将其发送到银行网站，以便识别你，执行财务上的敏感操作。

​		现在不小心访问了另一个恶意网站，这个网站有向银行网站提交一个具有启动与黑客账户交易的字段的表单的js代码。

​		由于每次访问银行网站，浏览器都会发送都会发送cookie，即使该表单来自恶意网站。因此银行会识别身份，执行支付。

###### 防止攻击：所有银行网站生成的表单都有一个特殊字段“XSRF保护token”，恶意网站的表单则没有。银行网站会对收到的每个表单都进行“token”检查。所以恶意网站只能提交表单，无法获取数据。

注：现在网站的防攻机制都是多重的。设置token->为cookie设置samesite->设置httpOnly


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
