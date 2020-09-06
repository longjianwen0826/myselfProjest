<template>
    <div id="login">
      <div id="loginHead">
        <div><button class="headBut" type="primary" @click="clickBut">主要按钮</button> </div>
        <div><button class="headBut" type="primary" @click="clickBut">主要按钮</button> </div>
        <div><button class="headBut" type="primary" @click="clickBut">主要按钮</button> </div>
        <div><button class="headBut" type="primary" @click="clickBut">主要按钮</button> </div>
        <div><button class="headBut" type="primary" @click="clickBut">主要按钮</button> </div>
        <div><button class="headBut" type="primary" @click="clickBut">主要按钮</button> </div>
        <div><button class="headBut" type="primary" @click="clickBut">主要按钮</button> </div>
        <div><button class="headBut" type="primary" @click="clickBut">主要按钮</button> </div>
        <div><button class="headBut" type="primary" @click="clickBut">主要按钮</button> </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  //声明方法
  methods : {
    clickBut: function(){
      this.$router.push("/Bell")
    }
  }
}
</script>

<style scoped>
  @media screen and (min-width:1024px){
    .headBut{
      background-color:yellow;
    }
  }
  @media screen and (max-width:1024px) and (min-width:768px){
    .headBut{
      background-color:yellow;
    }
  }
  @media screen and (max-width:768px) and (min-width:320px){
    .headBut{
      background-color:#0066B3;
    }
  }
  @media screen and (max-width:320px){
    .headBut{
      background-color:red;
    }
  }
  #login{
    width:100%;
    border:1px solid;
  }
  #loginHead{
    width:50%;
    margin:auto;
  }
  .headBut{
    float:left;
    margin-left:10px;
    color:white;
  }
</style>
