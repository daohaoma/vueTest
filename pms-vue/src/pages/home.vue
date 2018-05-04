<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="152px" style="background-color: rgb(238, 241, 246); overflow: hidden">
      <div style="width: 152px; height: 60px; background-color: #F87242">
        <img src="../assets/images/home/logo_pc.png" alt="巧房科技" style="width: 110px; height: 42px; margin: 7px 0 0 15px">
      </div>
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-pms-computer"></i>工作台</template>
          <el-menu-item index="1-1">待办提醒</el-menu-item>
          <el-menu-item index="1-2">数据统计</el-menu-item>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-pms-test"></i>资源</template>
          <el-menu-item index="2-1">租客</el-menu-item>
          <el-menu-item index="2-2">业主</el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="el-icon-pms-haofangtuo400iconfontershoufang"></i>房态</template>
          <el-menu-item index="3-1">房源</el-menu-item>
          <el-menu-item index="3-2">待租房源</el-menu-item>
          <el-menu-item index="3-3">推广</el-menu-item>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title"><i class="el-icon-pms-filetext"></i>合同</template>
          <el-menu-item index="4-1">租客合同</el-menu-item>
          <el-menu-item index="4-2">业主合同</el-menu-item>
          <el-menu-item index="4-3">租客合同审批</el-menu-item>
          <el-menu-item index="4-4">业主合同审批</el-menu-item>
          <el-menu-item index="4-5">租客合同审批权限</el-menu-item>
          <el-menu-item index="4-6">业主合同审批权限</el-menu-item>
          <el-menu-item index="4-7">合同模板</el-menu-item>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title"><i class="el-icon-pms-haofangtuo400iconfontershoufangchengjiao"></i>财务</template>
          <el-menu-item index="5-1">房屋收支</el-menu-item>
          <el-menu-item index="5-2">运营收支</el-menu-item>
          <el-menu-item index="5-3">借还</el-menu-item>
          <el-menu-item index="5-4">未知款</el-menu-item>
          <el-menu-item index="5-5">供应商结算</el-menu-item>
        </el-submenu>

        <el-submenu index="6">
          <template slot="title"><i class="el-icon-service"></i>租后</template>
          <el-menu-item index="6-1">维修服务</el-menu-item>
          <el-menu-item index="6-2">保洁服务</el-menu-item>
          <el-menu-item index="6-3">投诉服务</el-menu-item>
          <el-menu-item index="6-4">供应商管理</el-menu-item>
          <el-menu-item index="6-5">宽带订单</el-menu-item>
          <el-menu-item index="6-6">配货</el-menu-item>
        </el-submenu>

        <el-submenu index="7">
          <template slot="title"><i class="el-icon-pms-piecharr-o"></i>报表</template>
          <el-menu-item index="7-1">业务报表</el-menu-item>
          <el-menu-item index="7-2">财务报表</el-menu-item>
          <el-menu-item index="7-3">超级利润表</el-menu-item>
          <el-menu-item index="7-4">租金台账</el-menu-item>
        </el-submenu>

        <el-submenu index="8">
          <template slot="title"><i class="el-icon-pms-linechart"></i>业绩</template>
          <el-menu-item index="8-1">房源业绩</el-menu-item>
          <el-menu-item index="8-2">业绩配置</el-menu-item>
          <el-menu-item index="8-3">历史业绩</el-menu-item>
        </el-submenu>

        <el-submenu index="9">
          <template slot="title"><i class="el-icon-pms-shezhi"></i>设置</template>
          <el-menu-item index="9-1">部门管理</el-menu-item>
          <el-menu-item index="9-2">角色管理</el-menu-item>
          <el-menu-item index="9-3">员工管理</el-menu-item>
          <el-menu-item index="9-4">字典管理</el-menu-item>
          <el-menu-item index="9-5">角色管理</el-menu-item>
          <el-menu-item index="9-6">安全</el-menu-item>
          <el-menu-item index="9-7">楼盘字典</el-menu-item>
        </el-submenu>

        <el-submenu index="10">
          <template slot="title"><i class="el-icon-pms-haofangtuo400iconfontguoneixinpan"></i>企业</template>
          <el-menu-item index="10-1">企业信息</el-menu-item>
          <el-menu-item index="10-2">企业公告</el-menu-item>
          <el-menu-item index="10-3">资产管理</el-menu-item>
        </el-submenu>

        <el-submenu index="11">
          <template slot="title"><i class="el-icon-pms-whitelist"></i>会员</template>
          <el-menu-item index="11-1">会员信息</el-menu-item>
          <el-menu-item index="11-2">积分兑换</el-menu-item>
          <el-menu-item index="11-3">商品管理</el-menu-item>
          <el-menu-item index="11-4">活动</el-menu-item>
          <el-menu-item index="11-5">积分规则</el-menu-item>
        </el-submenu>

        <el-submenu index="12">
          <template slot="title"><i class="el-icon-sold-out"></i>营销</template>
          <el-menu-item index="12-1">优惠活动</el-menu-item>
        </el-submenu>

        <el-submenu index="13">
          <template slot="title"><i class="el-icon-pms-risk"></i>web</template>
          <el-menu-item index="13-1">关于我们</el-menu-item>
          <el-menu-item index="13-2">banner管理</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container style="background-color: rgb(242, 246, 247);">
      <el-header style="text-align: right; font-size: 12px; background-color: #fff;">
        <el-menu
          :default-active="'1'"
          active-text-color="#F87242"
          class="el-menu-demo"
          mode="horizontal"
          style="float: left;"
        >
          <el-menu-item index="1">朱</el-menu-item>
          <el-menu-item index="2">健</el-menu-item>
          <el-menu-item index="3">华</el-menu-item>
        </el-menu>
        <el-dropdown>
          <i class="el-icon-pms-plus" style="margin-right: 15px;"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
