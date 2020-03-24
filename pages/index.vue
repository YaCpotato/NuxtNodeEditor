<template>
  <div class="container">
    <div style="border: 1px solid #eee">
      <TheHeader />
      <el-row>
        <el-col :span="4">
          <SideBar />
        </el-col>
        <el-col :span="20"><MainCanvas /> </el-col>
      </el-row>
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
