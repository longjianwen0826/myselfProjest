<template>
  <div class="">
  龙建文
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id:"888"
      }
    },
    methods: {
    getQueryMenu() {
      //  this.axios.POST("https://www.easy-mock.com/mock/5f54f4ac22b6925fcfc5ddbe/example/queryMenu").then((res)=>{
      //   console.log(res.data)
      //  }).catch((err)=>{
      //   console.log(err)
      //  })
    
       //menu
      this.$api.post('queryMenu', { "id": this.id }, res => {
        if (res.success) {
            console.log(res);
        } else {
            console.log(res);
        }
      }).catch((err)=>{
        console.log(err)
      })
    }

    },
    mounted() {
      
    },
    created(){
      this.getQueryMenu();
    }
  }
</script>

<style scoped>
  
  
</style>
