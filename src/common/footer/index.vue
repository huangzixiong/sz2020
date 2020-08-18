<template>
  <div id="footer">
    <ul>
      <router-link tag="li" v-for="(item,index) in tabBar" :key="index" :to="item.path">
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.title}}</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "tabBar",
  data() {
    return {
      tabBar: [
        {
          title: "电影",
          icon: "&#xe6be",
          path: "/movie"
        },
        {
          title: "影院",
          icon: "&#xe8c0;",
          path: "/cinema"
        },
        {
          title: "我的",
          icon: "&#xe62b;",
          path: "/mine"
        }
      ]
    };
  }
};
</script>
<style>
#footer {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #ccc;
}

#footer ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#footer ul li {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#footer ul .router-link-active {
  color: #c33;
}
#footer ul li i {
  font-size: 0.4rem;
}

#footer ul li span {
  font-size: 0.3rem;
}
</style>