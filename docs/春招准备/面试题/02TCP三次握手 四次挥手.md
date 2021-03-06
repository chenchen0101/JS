**你能不能说说TCP三次握手，四次挥手的过程？**

###### 三次握手

首先，TCP客户进程主动打开连接，服务进程被动打开连接，并进入监听状态。

第一次握手：TCP客户进程向服务进程发送TCP连接报文段并进入同步已发送状态。

第二次握手：服务进程收到此报文段后返回给客户进程TCP连接请求确认报文段，并进入同步已接收状态

第三次握手：客户进程收到服务进程返回的连接请求确认报文段后发送给服务进程一个普通的确认报文段。并进入连接已建立状态

服务进程收到这个确认后随即进入连接已建立状态

此时TCP连接已建立，可以进行可靠的数据传输了。

**TCP能不能只有两次握手**

###### 为什么是三次握手：

为了防止失效的报文段又传到了服务进程，导致错误。假设是两次握手，失效的报文段传给了服务进程，服务进程会返回给客户进程tcp连接请求确认报文段。但此时客户进程已是关闭状态，而服务进程则会一直等待确认报文段，造成资源浪费。

##### 

##### 四报文挥手

TCP通过四报文挥手来释放连接，当数据传输结束后。

第一次挥手：客户进程向服务进程发送连接释放报文段，并进入终止等待1状态。

第二次挥手：服务进程收到此报文段后返回一个普通的确认报文段，并进入关闭等待状态（此时还能发送数据）。客户进程收到确认报文段进入终止等待2状态，等待服务进程发来的释放连接报文段。

第三次挥手：若服务进程已无数据要发送，则向客户进程发送释放连接报文段，并进入最后确认状态

第四次挥手：客户进程收到释放连接报文段，发送普通确认报文段。并进入时间等待状态’

服务进程收到此确认报文段后进入关闭状态，2ms后客户进程也进入关闭状态。

**TCP挥手过程能不能只有三次挥手**

不能，因为当服务进程收到释放连接报文段后，他有可能还有一定的数据传输，需要一定时间准备，当准备完毕发送后，再进行第三次挥手。

