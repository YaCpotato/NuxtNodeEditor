<template>
  <div class="SideBar">
    <el-row class="select-menu">
      <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <div class="mode-switch">
            <el-switch
              v-model="modeSwitch"
              active-text="Drag Mode"
              inactive-text="Position Lock"
              @change="setModeSwitch"
            >
            </el-switch>
          </div>
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
  data() {
    return {
      modeSwitch: true
    }
  },
  methods: {
    async setDrawMode(modeString) {
      try {
        await this.$store.commit('draw-mode/setDrawMode', modeString)
      } catch (err) {
        alert(err)
      }
    }
  },
  async setModeSwitch() {
    try {
      await this.$store.commit(
        'draw-mode/ReverseDrawActionClick',
        this.modeSwitch
      )
    } catch (err) {
      alert(err)
    }
  }
}
</script>

<style>
.SideBar {
  background-color: #ebeef5;
  min-height: 80vh;
  width: 20vw;
}
.select-menu {
  width: 100%;
}
.mode-switch {
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.el-switch__core {
  width: 60px;
  height: 30px;
}
.el-switch__core::after {
  content: '';
  position: absolute;
  top: 1px;
  left: 1px;
  border-radius: 40%;
  transition: all 0.3s;
  width: 16px;
  height: 26px;
  background-color: #fff;
}
</style>
