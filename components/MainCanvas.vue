<template>
  <div>
    <div class="MainCanvas">
      <!--p>{{ mouseX }}, {{ mouseY }}</p-->
      <p>{{ currentDrawMode }}</p>
      <svg
        class="draw-area"
        width="80vw"
        height="80vh"
        xmlns="http://www.w3.org/2000/svg"
        @click="drawSomething"
        @mousemove="mouseMove($event)"
      ></svg>
    </div>
    <div>
      <el-dialog title="text-input" :visible.sync="dialogVisible" width="30%">
        <el-input v-model="text"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button
            type="primary"
            @click="
              inputText('text')
              dialogVisible = false
            "
            >Confirm</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'
import $ from 'jquery'

export default {
  name: 'MainCanvas',
  data() {
    return {
      mouseX: null,
      mouseY: null,
      mouseDowned: false,
      classNameLength: 8,
      classNameString: 'abcdefghijkmlnopqrstuvwxyz',
      dialogVisible: false,
      text: ''
    }
  },
  computed: {
    currentDrawMode() {
      return this.$store.getters['draw-mode/selectedDrawMode']
    },
    currentLock() {
      return this.$store.getters['draw-mode/drawActionLock']
    }
  },
  methods: {
    mouseMove(e) {
      if (e) {
        this.mouseX = e.pageX - $('.SideBar').width()
        this.mouseY = e.pageY - $('.TheHeader').height()
      } else {
        this.mouseX = event.pageX + document.body.scrollLeft
        this.mouseY = event.pageY + document.body.scrollTop
      }
    },
    drawSomething() {
      if (this.currentLock) {
        return
      }
      let hash = ''
      for (let i = 0; i < this.classNameLength; i++) {
        hash += this.classNameString[
          Math.floor(Math.random() * this.classNameString.length)
        ]
      }
      if (this.currentDrawMode === 'line') {
        d3.select('.draw-area')
          .append('line')
          .attr('class', hash)
          .attr('x1', this.mouseX)
          .attr('y1', this.mouseY)
          .attr('x2', this.mouseX + 100)
          .attr('y2', this.mouseY + 150)
          .attr('stroke', 'black')
          .attr('stroke-width', 2)
        d3.drag('.' + hash)
          .on('start', this.dragstarted)
          .on('drag', this.dragged)
          .on('end', this.dragended)
        const dragHandler = d3.drag().on('drag', function() {
          d3.select(this)
            .attr('x1', d3.event.x) // x1座標を指定
            .attr('y1', d3.event.y) // y1座標を指定
            .attr('x2', d3.event.x + 100) // x2座標を指定
            .attr('y2', d3.event.y + 150) // y2座標を指定
        })
        dragHandler(d3.select('.' + hash))
      } else if (this.currentDrawMode === 'rect') {
        d3.select('.draw-area')
          .append('rect')
          .attr('class', hash)
          .attr('x', this.mouseX)
          .attr('y', this.mouseY)
          .attr('width', 100)
          .attr('height', 80)
        d3.drag('.' + hash)
          .on('start', this.dragstarted)
          .on('drag', this.dragged)
          .on('end', this.dragended)
        const dragHandler = d3.drag().on('drag', function() {
          d3.select(this)
            .attr('x', d3.event.x)
            .attr('y', d3.event.y)
        })
        dragHandler(d3.select('.' + hash))
      } else if (this.currentDrawMode === 'circle') {
        d3.select('.draw-area')
          .append('circle')
          .attr('class', hash)
          .attr('cx', 50)
          .attr('cy', 50)
          .attr('r', 20)
          .attr('stroke-width', 3)
          .attr('stroke', 'black')
        d3.drag('.' + hash)
          .on('start', this.dragstarted)
          .on('drag', this.dragged)
          .on('end', this.dragended)
        const dragHandler = d3.drag().on('drag', function() {
          d3.select(this)
            .attr('cx', d3.event.x)
            .attr('cy', d3.event.y)
        })
        dragHandler(d3.select('.' + hash))
      } else if (this.currentDrawMode === 'text') {
        this.dialogVisible = true
      } else if (this.currentDrawMode === 'node') {
        alert('not supported')
      }
    },
    inputText() {
      let hash = ''
      for (let i = 0; i < this.classNameLength; i++) {
        hash += this.classNameString[
          Math.floor(Math.random() * this.classNameString.length)
        ]
      }
      d3.select('.draw-area')
        .append('text')
        .attr('class', hash)
        .attr('x', this.mouseX)
        .attr('y', this.mouseY)
        .text(this.text)
      d3.drag('.' + hash)
        .on('start', this.dragstarted)
        .on('drag', this.dragged)
        .on('end', this.dragended)
      const dragHandler = d3.drag().on('drag', function() {
        d3.select(this)
          .attr('x', d3.event.x)
          .attr('y', d3.event.y)
      })
      dragHandler(d3.select('.' + hash))
    }
  }
}
</script>

<style>
.MainCanvas {
  display: inline-block;
  min-height: 80vh;
  width: 80vw;
}
</style>
