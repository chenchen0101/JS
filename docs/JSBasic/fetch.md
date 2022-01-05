# fetch()是一种发送网络请求的方法，fetch是浏览器的api

fetch向浏览器发送请求，浏览器启动请求，返回一个获取结果的promise

例：使用

```js
//通过fetch发送一个get请求
let url = 'http://localhost:8080'//通过express在本地建立的服务器
async function submit(){
    //直传一个参数，是一个普通的get请求
    let response = await fetch(url)
    // 如果 HTTP 状态码为 200-299
    if(response.ok){
        //response.text()以文本形式返回响应体
        //这里使用await：当响应体有大量数据，以流的形式持续不断的获取
        let text = await response.text()
        console.log(text)
    }else{
        console.log("HTTP-Error: " +response.status);
    }
}
```

也可以使用纯promise语法

```js
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));
```



### fetch发送一个post请求

```js

let url = 'http://localhost:8080/'
let user = {
  name: 'xxx',
  surname: 'ccc'
}
async function submit() {
  let response = await fetch(url, {
    method: 'POST',
    //request header
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    //body —— request body，其中之一：
    // 字符串（例如 JSON 编码的），
    // FormData 对象，以 form/multipart 形式发送数据，
    body: JSON.stringify(user)
  })
  let text = await response.text()
  console.log(text);
}
submit()
```

```js

```



