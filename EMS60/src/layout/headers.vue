<template>
    <!--
                el-row：一行
                el-col: 列
                span: 所占的分栏数
            -->
    <el-row>
        <el-col :span="4">
            <div>
                <img src="@/assets/images/logo.png" alt="">
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
    methods: {
        logout() {
            this.$confirm('您确定退出吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // 清除 token
                window.localStorage.removeItem('token')
                this.$router.push('/login')
                this.$message({
                    type: 'success',
                    message: '退出成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消退出'
                });
            });
        }
    }
}
</script>

<style>
/* 头部样式 */

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
