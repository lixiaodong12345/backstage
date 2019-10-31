<template>
  <div class="login">
    <div class="box">
      <h2 class="h2">用户登录</h2>
      <el-form label-position="top" :model="loginObj" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名称">
          <el-input type="text" v-model="loginObj.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="loginObj.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="myBtn" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginObj: {
        username: "",
        password: ""
      }
    };
  },
  methods:{
    login(){
      this.$http.post('/login',this.loginObj)
       .then(data=>{
       var {meta,data} = data.data
        if(meta.status === 200){
          console.log(meta.msg);
          
        }else{
          console.log(meta.msg);
        }
      })
    }
  }
};
</script>

<style>
.login {
  background-color: #2c3742;
  width: 100%;
  height: 100%;
  position: relative;
}
.login .box {
  width: 500px;
  padding: 40px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login .box .myBtn {
  width: 100%;
}
</style>