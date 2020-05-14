import Tree from './src/Tree'

Tree.install = Vue => {
  Vue.component(Tree.name, Tree)
}

export default Tree