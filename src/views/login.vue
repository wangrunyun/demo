<template>
  <div class="item_box">
    <div class="item_box_top">
      <h2>GHJKLGFGF</h2>
    </div>
    <div class="item_box_buttom">
      <input type="text" v-model="name" placeholder="请输入帐号" />
      <input type="text" v-model="pass" placeholder="请输入密码" />
      <button @click="onClick">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      pass: "",
    };
  },
  methods: {
    onClick() {
      this.$axios
        .post("http://ceshi5.dishait.cn/admin/login", {
          username: this.name,
          password: this.pass,
        })
        .then((res) => {
          localStorage.setItem('token',res.data.data.token)
          this.$router.push({path:'/index'})
          console.log(res);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.item_box {
  width: 400px;
  height: 250px;
  border: 1px solid red;
  margin: 100px auto;
  .item_box_top {
    width: 100%;
    height: 15%;
    border-bottom: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item_box_buttom {
    width: 100%;
    height: 85%;
    input {
      width: 80%;
      margin: 20px 30px;
      height: 30px;
    }
    button {
      width: 82%;
      height: 30px;
      margin: 0px 30px;
      outline: none;
      border: none;
    }
  }
}
</style>