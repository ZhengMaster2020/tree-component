<template>
  <div class="tree-wrap">
    <TreeNode
      class="tree-node"
      v-for="item in initData"
      :key="item.id"
      :node="item"
    />
  </div>
</template>

<script>
import TreeNode from './TreeNode'
export default {
  name: 'Tree',
  components: {
    TreeNode
  },
  data() {
    return {
      initData: []
    }
  },

  props: {
    data: {
      type: Array
    }
  },

  methods: {
    getData() {
      this.$http.get('/?mod=vue&act=getdata&uid=4071&token=eb7c69778e7b7a3b2b268b39d8604740')
        .then(res => {
          this.initData = res.status === 200 ?  res.data.msg : {}
          // console.log(this.initData, 'initData')
      })
    }
  },

  created() {
    // console.log(this.data, 'data')
    this.getData()
  }
}
</script>

<style lang="less" scoped>
.tree-wrap {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  &:hover{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)
  }
  .tree-node {
    margin: 10px;
    line-height: 1.5;
  }
}
</style>