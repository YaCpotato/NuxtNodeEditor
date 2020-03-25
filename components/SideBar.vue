<template>
  <div class="SideBar">
    <el-row class="select-menu">
      <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-menu-item @click="setDrawMode('line')">
            <i class="fas fa-slash"></i>
            <span>Line</span>
          </el-menu-item>
          <el-menu-item @click="setDrawMode('rect')">
            <i class="far fa-square"></i>
            <span>Square</span>
          </el-menu-item>
          <el-menu-item @click="setDrawMode('circle')">
            <i class="far fa-circle"></i>
            <span>Circle</span>
          </el-menu-item>
          <el-menu-item @click="setDrawMode('text')">
            <i class="fas fa-font"></i>
            <span>Text</span>
          </el-menu-item>
          <el-menu-item @click="setDrawMode('node')">
            <i class="fas fa-bezier-curve"></i>
            <span>Node</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    async setDrawMode(modeString) {
      try {
        await this.$store.dispatch('drawMode/fetchDrawMode', modeString)
      } catch (err) {
        alert(err)
      }
    }
  }
}
</script>

<style>
.SideBar {
  background-color: #ebeef5;
  min-height: 80vh;
  width: 15vw;
}
.select-menu {
  width: 100%;
}
</style>
