import {debounce} from "./utils"


// 混入
export const itemListenerMixin = {
    data () {
      itemImgListener:null
    },

   mounted () {
    // 把函数传给防抖方法，接收的是方法返回的防抖函数，并且有闭包不会被回收
    const refresh = debounce(this.$refs.scroll.refresh,200)
    // 准备好通过事件总线监听事件，监听itemImageLoad图片加载完成
    // 每次图片加载完成就行一次scroll的刷新，重新计算高度

    //对监听事件所要执行的函数进行保存
    this.itemImgListener = () => {refresh()}
    this.$bus.$on('itemImageLoad',this.itemImgListener)
  },
}