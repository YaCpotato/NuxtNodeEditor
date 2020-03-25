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
      mouseY: null,
      mouseDowned: false,
      classNameLength: 8,
      classNameString: 'abcdefghijkmlnopqrstuvwxyz'
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
      let hash = ''
      for (let i = 0; i < this.classNameLength; i++) {
        hash += this.classNameString[
          Math.floor(Math.random() * this.classNameString.length)
        ]
      }
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
