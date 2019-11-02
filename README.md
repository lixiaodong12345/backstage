# -项目介绍   

项目开始: 
1.搭建脚手架
    1.1生成指令 vue init webpack 项目名
    1.2开启服务 切换到项目目录 下载第三方包 开启服务 npm run dev
2.引入项目所需框架 element-ui 
    2.1.下载 npm i element-ui -S将包安装到配置文件中
    2.2.引入; 在main.js中引入:
3.完成用户基础登录功能
    3.1添加一个login.vue组件
    3.2完成登录页面的结构样式
    3.3给双向绑定用户名和密码
    3.4登录按钮注册事件 提交数据
        3.4.1通过axios发送: 
            下载axios
            统一设置axios的请求路径
            将axios挂在到vue 的原型中
        3.4.2发送数据  使用postman 测试路径  处理逻辑
4.完成数据验证,用element中表单验证
    4.1给el-form设置一个属性:rules 到data中设置rules规则
    4.2-给表单元素设置prop属性
    4.3点击登录按钮时.需要判断参数的合法性 validate 通过后valid为true 否则为false
    4.4将登录成功后服务器返回的token保存起来
        4.4.1登录成功后,用window.localstorage来保存token
        4.4.2登录成功后,用this.$router.push('')跳转到首页 : home
5.项目-首页
    5.1完成首页组件 创建一个组件home.vue  创建home 在index.js中用路由链接
    5.2将头部封装 在home中引入 并使用<Headers />
    5.3将侧边栏封装 在home中引入 并使用<Sidebar />
    5.4在home中暴露出去
6.实现退出功能
    6.1给退出按钮添加事件
    6.2清除token
    6.3跳转登录页面
7.项目-用户管理-用户列表
    7.1完成用户列表的路由和组件
        7.1.1准备一个入口
        7.1.2创建一个组件
        7.1.3创建一个路由 users (二级路由)
    7.2完成用户列表的结构样式
        7.2面包屑 搜索 列表 分页



    