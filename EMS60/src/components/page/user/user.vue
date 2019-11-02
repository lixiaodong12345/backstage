<template>
    <el-card>
    <!-- 面包屑导航 -->
    <!-- 
                          el-breadcrumb: 面包屑
                            separator-class：分隔符号
                          el-breadcrumb-item：面包屑选项
                         -->
    <el-breadcrumb separator-class="el-icon-remove-outline">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索区域 -->
    <!-- 
                        el-input：输入框
                       -->
    <el-row class="myrow">
      <el-col :span="8">
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="16">
        &nbsp;&nbsp;
        <el-button type="success" plain>成功按钮</el-button>
      </el-col>
    </el-row>
    <!-- 列表区域 -->
    <!-- 
                  el-table: 表格元素
                    data：绑定数据源
                    border: 设置边框
                  el-table-column：列
                    prop：数据中的属性
                    label：当前列的标题
                    width：当前列的宽度
                 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="date" label="姓名">
      </el-table-column>
      <el-table-column prop="name" label="邮箱">
      </el-table-column>
      <el-table-column prop="address" label="电话">
      </el-table-column>
      <el-table-column label="用户状态">
        <template slot-scope="scope">
          <!-- 一旦设置了 template 标签， prop 属性就会失效，如果要得到数据源，需要从 scope.row 中去取 -->
          <el-switch v-model="scope.row.istrue" active-color="#13ce66" inactive-color="#ff4949">
          </el-switch>
          <!-- {{ scope.row }} -->
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作" width="200">
        <template slot-scope="scope">
          <div>
            <el-button size="mini" plain type="primary" icon="el-icon-edit"></el-button>
            <el-button size="mini" plain type="danger" icon="el-icon-delete"></el-button>
            <el-button size="mini" plain type="success" icon="el-icon-check"></el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <!-- 
      el-pagination:
        size-change事件：当页容量改变时会执行
        current-change事件：当当前页发生改变时执行
        current-page：当前页
        page-sizes: 页容量选项集合
        page-size：选中的页容量
        layout: 组件的布局
        total：数据的总条数
     -->
    <el-pagination :current-page="1" :page-sizes="[5, 10]" :page-size="5" layout="total, sizes, prev, pager, next, jumper" :total="10">
    </el-pagination>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        istrue: true
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        istrue: true
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        istrue: true
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        istrue: true
      }]
    }
  }
}
</script>

<style>
.myrow {
  margin-top: 15px;
}
</style>