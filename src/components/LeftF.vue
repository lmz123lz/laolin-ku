<template>
    <el-container>
      <!-- 左侧导航栏 -->
      <el-aside width="auto">
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
        <h3>通用后台管理系统</h3>
          <el-menu-item v-for="item in noChildren" :index="item.path" :key="item.path" @click="clickMenu()">
            <i :class="'el-icon-'+item.icom"></i>
            <span slot="title">{{item.lable}}</span>
          </el-menu-item>
          <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
            <template slot="title">
              <i :class="'el-icon-'+item.icom"></i>
              <span slot="title">{{item.lable}}</span>
            </template>
            <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subItem.path">
              <el-menu-item :index="subIndex">{{subItem.path}}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
            main
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
// import router from '@/router';
export default {
  data() {
    return {
      isCollapse: false,
      menu: [
        {
          path: "/",
          name: "home",
          lable: "首页",
          icom: "s-home",
          url: "",
        },
        {
          path: "/mall",
          name: "mall",
          lable: "商品管理",
          icom: "video-play",
          url: "",
        },
        {
          path: "/user",
          name: "user",
          lable: "用户管理",
          icom: "user",
          url: "",
        },
        {
          lable: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              lable: "页面1",
              icon: "setting",
              url: "",
            },
            {
              path: "/page2",
              name: "page2",
              lable: "页面2",
              icon: "setting",
              url: "",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }, 
    clickMenu(){
    //    router.push("/HomeH");
    } 
  },
  computed:{
        noChildren(){
            return this.menu.filter(item=>!item.children)
            
        },
        hasChildren(){
            return this.menu.filter(item=>item.children)
        }
    }
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 1161px;
}
.el-menu{
    height: 100%;
    border: none;
    h3{
        color: white;
        text-align: center;
        line-height:48px;
    }
}
</style>
