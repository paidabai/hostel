## 安装依赖

```sh
npm install
```

### 启动服务

```sh
npm run dev
```

### 打包项目

```sh
npm run build
```
### 项目结构

```sh
public 存放favicon.ico
src 
  api 请求文件 
    axios.js  封装的axios
    index.js  请求的方法
  assets  存放静态文件图标和视频/css
    css
      initialize.css初始化的css
    img 存放图片
    Sprite 雪碧图/精灵图
  components  一般组件(非路由组件)
    Footer  底部组件
    Header  头部组件
  pages  存放路由组件(文件夹名为组件名)
  router  路由的配置文件
  utils  工具文件夹
    constants.js  存放常量
  App.vue  管理所有的组件
  main.js   入口文件
  
  element ui 直接使用,无需引入
  <el-button type="warning">警告按钮</el-button>
```
