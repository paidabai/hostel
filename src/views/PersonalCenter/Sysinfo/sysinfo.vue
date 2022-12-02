<template>
  <div class="rim">
    <div class="switch-navbar">
      <ul>
        <li>
          <a href="">系统消息</a>
          </li>
      </ul>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.rim {
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 0 1px #efefef;
  padding: 20px 20px;
  margin-bottom: 20px;
}
.switch-navbar {
  ul {
    width: 907px;
    border-bottom: #e1e1e1 1px solid;
    li {
      width: 72px;

      a{
        display: block;
        width: 72px;
        height: 36px;
        line-height: 36px;
        color: #f7941c;
      }
    border-bottom: #f7941c 3px solid;

    }
  }
}
</style>
