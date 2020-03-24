<template>
  <div class="MainCanvas">
    <!--p>{{ mouseX }}, {{ mouseY }}</p-->
    <svg
      class="draw-area"
      width="80vw"
      height="80vh"
      xmlns="http://www.w3.org/2000/svg"
      @click="drawSomething"
      @mousemove="mouseMove($event)"
    ></svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import $ from 'jquery'

export default {
  name: 'MainCanvas',
  data() {
    return {
      type: 'rect',
      mouseX: null,
      mouseY: null
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
      d3.select('.draw-area')
        .append('text')
        .attr('x', this.mouseX)
        .attr('y', this.mouseY)
        .text('Hello!')
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
