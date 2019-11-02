<template>
  <el-row>
        <el-col :span="4">
            <div>
                <img src="@/assets/logo.png" alt="">
            </div>
        </el-col>
        <el-col :span="18">
            <div class="title">电商后台管理系统</div>
        </el-col>
        <el-col :span="2">
            <div class="logout">
                <a href="#" @click.prevent="logout">退出</a>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
methods:{
    logout(){
        if(confirm('你真的要退出?')){
            window.localStorage.removeItem('token');
            alert('退出成功')
            // 跳转登录页
            this.$router.push('/login');
        }
    }
}
}
</script>

<style>

.title {
    font-size: 24px;
    color: #fff;
    text-align: center
}

.logout {
    text-align: right;
    margin-right: 10px;
}

.logout a {
    color: #fff;
    text-decoration: none;
}

.logout a:hover {
    color: red
}
</style>