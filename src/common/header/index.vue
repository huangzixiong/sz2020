<template>
  <div id="header">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
    name:"headerCom",
    props:{
        title:{
            type:String,
            default:"猫眼电影"
        }
    }
};
</script>

<style>
#header {
  width: 100%;
  height: 0.88rem;
  background: #c33;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 0.36rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}
#header>h1{
    font-size: .32rem;
    font-style: normal;
}
</style>