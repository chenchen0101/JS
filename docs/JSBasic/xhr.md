```js
let xhr = new XMLHttpRequest();
let url = 'http://localhost:8080/'
xhr.open('GET', url)
xhr.send()
//监听xhr事件以获取响应

// load —— 当请求完成（即使 HTTP 状态为 400 或 500 等），并且响应已完全下载。
xhr.onload = function () {
  console.log(`Loaded:${xhr.status} ${xhr.response}`);//Loaded:200 hello
}
// 仅在根本无法发出请求时触发
xhr.onerror = function () {
  alert(`Network Error`)
}

xhr.onprogress = function (event) {
  // event.loaded —— 已经下载了多少字节
  // event.lengthComputable = true，当服务器发送了 Content-Length header 时
  // event.total —— 总字节数（如果 lengthComputable 为 true）
  console.log(`Receiveg ${event.loaded} of ${event.total}`);
}

```

```js
//1、创建一个new XMLHttpRequest对象
let xhr = new XMLHttpRequest()

//2、配置它：从URL//article/.../load GET-request
let url = 'http://localhost:8080/'
xhr.open('GET', url)

//3、通过网络发送
xhr.send()

//4、当接收到响应后，将调用此函数
xhr.onload = function () {
  if (xhr.status != 200) {//分析响应的HTTP状态
    alert(`Error ${xhr.status}: ${xhr.statusText}`)
  } else {
    alert(`Done, got ${xhr.response}`)
  }
}

//在下载响应期间定期触发，报告已经下载了多少
xhr.onprogress = function (event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // 没有 Content-Length
  }

};

xhr.onerror = function () {
  alert('Request failed')
}
```

### xhr发送post请求

```js
<form name="person">
  <input name="name" value="John">
  <input name="surname" value="Smith">
</form>

<script>
  // 从表单预填充 FormData
  let formData = new FormData(document.forms.person);

  // 附加一个字段
  formData.append("middle", "Lee");

  // 将其发送出去
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:8080/");
  xhr.send(formData);

  xhr.onload = () => alert(xhr.response);
</script>
```

```js
let xhr = new XMLHttpRequest();

let json = JSON.stringify({
  name: "John",
  surname: "Smith"
});

xhr.open("POST", '/submit')
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhr.send(json);//服务器接收
```

