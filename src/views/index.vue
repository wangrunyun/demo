<template>
  <div>
    <el-container>
      <el-header class="el-header">
        <h2>oooooo</h2>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/index/home/backstage">首页</el-menu-item>
          <el-menu-item index="/index/commodit/list">商品</el-menu-item>
          <el-menu-item index="/index/orderform/management">订单</el-menu-item>
          <el-menu-item index="/index/member/memberlist">会员</el-menu-item>
          <el-menu-item index="/index/setting/basics">设置</el-menu-item>
          <el-menu-item>
            <el-dropdown>
              <span class="el-dropdown-link">
                <el-avatar icon="el-icon-user-solid"></el-avatar
                ><i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <button @click="onClick">退出</button>
              </el-dropdown-menu>
            </el-dropdown>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "1",
    };
  },
  mounted(){
    setTimeout(()=>{
      localStorage.removeItem('token')
      this.$router.push('/')
    },10000)
  },
  methods:{
    onClick(){
      localStorage.removeItem('token')
      this.$router.push({path:'/'})
    }
  }
};
</script>
<style lang="scss" scoped>
.el-header {
  width: 100%;
  height: 40px;
  background: rgb(84, 92, 100);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
