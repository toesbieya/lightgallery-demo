<template>
  <div id="app">
    <button @click="preview">21321412</button>
  </div>
</template>

<script lang="ts">
import { previewImage } from '@/util'

export default {
  methods: {
    preview() {
      const imgs = [
        'https://static.toesbieya.cn/2021/01/10/user20/1610275524479/2020072219222991.jpg',
        'https://static.toesbieya.cn/2021/04/09/user446/1617934436794/QQ%E5%9B%BE%E7%89%8720190902184701.jpg'
      ]
      const img2 = [
        'https://static.toesbieya.cn/2020/02/28/1582880131979/%E7%82%AE%E5%A7%90.gif',
        'https://static.toesbieya.cn/2020/03/05/1583399441707/170a37d2d7591ebd.jpg'
      ]

      previewImage(imgs)

      setTimeout(() => {
        previewImage.close()
      }, 1000)
    }
  }
}
</script>
