<template>
  <div id="app">
    <Tree :data="initData"/>
  </div>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      initData: []
    }
  },

  computed: {
    data() {
      return this.getData()
    }
  },
  
  methods: {
    getData() {
      this.$http.get('/?mod=vue&act=getdata&uid=4071&token=eb7c69778e7b7a3b2b268b39d8604740')
        .then(res => {
          console.log(res.data.msg, 'data')
          this.initData = []
          this.initData.push(res.status === 200 ?  res.data.msg : {})
          // return data
      })
    }
  },

  created() {
    // this.getData()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-left: 100px;
  margin-top: 60px;
}
</style>
