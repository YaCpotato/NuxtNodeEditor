<template>
  <div class="container">
    <div style="border: 1px solid #eee">
      <TheHeader />
      <SideBar />
      <MainCanvas />
    </div>
  </div>
</template>
<script>
import TheHeader from '~/components/TheHeader.vue'
import MainCanvas from '~/components/MainCanvas.vue'
import SideBar from '~/components/SideBar.vue'

export default {
  components: {
    TheHeader,
    MainCanvas,
    SideBar
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
