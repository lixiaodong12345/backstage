<template>
  <div class="login">
    <div class="box">
      <h2 class="h2">用户登录</h2>
      <el-form
        ref="myform"
        label-position="top"
        :rules="myrules"
        :model="loginObj"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名称" prop="username">
          <el-input type="text" v-model="loginObj.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
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
      },
      myrules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      this.$refs.myform.validate(async(valid) => {
        if (valid) {
          var res = await this.$http.post("/login", this.loginObj)
            var { meta, data } = res.data;
            if (meta.status === 200) {
              alert(meta.msg);
              // 将token值保存起来
              window.localStorage.setItem('token',data.token);
              // 跳转到首页
              this.$router.push('/home');
            } else {
              alert(meta.msg);
            }
        } else {
          alert("参数错误");
        }
      });
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