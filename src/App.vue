<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <el-container>
      <el-header class="conHeader" height="10vh">
          123
      </el-header>
      <el-container class="content">
        <el-aside class="conAside" width="200px">
          <h3>导航栏</h3>
          <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#D3DCE6"
            >
            <!--<el-submenu index="1">
              <template slot="title">
                <span>导航一</span>
              </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-submenu>-->
            <el-menu-item index="2"  @click="clickBut(1)">
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" @click="clickBut(2)">
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4" @click="clickBut(3)">
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="conMain">
           <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    
    
  </div>
</template>

<script>
export default {
  name: 'App',
  //声明方法
  methods : {
    clickBut: function(num){
      if(num==1){
        this.$router.push("/HelloWorld")
      }else if(num==2){
        this.$router.push("/Bell")
      }else if(num==3){
        this.$router.push("/index2")
      }
    }
  }
}
</script>
<<style>
body{
margin:0;
padding:0;
}
</style>

<style scoped>

  body {
      margin: 0px !important;
  }
  #app{
    width:vw;
    height:100vh;
    display: flex;
  }

  #app .conHeader {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height:10vh;
  }
  .content{
    flex: 1;
  }
  
  #app .conAside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 90vh;
    overflow-y:visible ;
  }
  
  #app .conMain {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 90vh;
    overflow-y:auto;
  }
  
</style>
