<template>
  <div :class="['node']" :ref="node.id">
    <div class="title" @click="handleExpandedClick(node.id)">
      <img 
        :class="[{ 'icon': node.next, 'node-icon': !node.next, 'is-expanded': expanded && node.next }]"
        :src="node.next ? treeIconUrl : nodeIconUrl"/>
      <span class="directory">{{ node.title }}</span>
    </div>
    <transition name="fade">
      <div
        v-if="expanded && node.next"
        class="children-node-wrap">
        <!-- 递归组件 -->
        <TreeNode
          class="children-node"
          v-for="item in node.next"
          :key="item.id"
          :node="item"
        />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TreeNode',

  data() {
    return {
      expanded: false,
      treeIconUrl: `https://cfan.cc/tc/static/img/tree.png`,
      nodeIconUrl: `https://cfan.cc/tc/static/img/file.png`
    }
  },

  props: {
    node: {
      default() {
        return {}
      }
    }
  },

  methods: {
    handleExpandedClick(nodeID) {
      console.log(nodeID, 'node')
      // const nodeDOM = this.$refs[nodeID]
      this.expanded = !this.expanded
    }
  },
}
</script>

<style lang="less" scoped>
.node {
  cursor: pointer;
  .title {
    display: flex;
    align-items: center;
    &:hover{
      box-shadow: 0 0 8px rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
      background-color: #f5f7fa;
    }
    .icon{
      transform: rotate(0deg);
      transition: transform .3s ease-in-out;
    }
    .icon, .node-icon {
      width: 24px;
      height: 24px;
      margin-right: 5px;
      display: inline-block;
    }
    .node-icon {
      transform: rotate(360deg);
    }
    .directory {
      margin: 5px 0;
    }
  }
  .children-node-wrap {
    margin: 5px 0 5px 20px;
    display: flex;
    flex-direction: column;
    .children-node {
      margin: 0 5px;
    }
  }
}
 .node .title .is-expanded {
  transform: rotate(90deg);
}

// 过渡动画
.fade-enter-active, .fade-leave-active {
  // transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transition: all .3s ease-in-out ;
}
.fade-enter, .fade-leave-to{
  transform: translateY(-10px);
  opacity: 0;
}
</style>