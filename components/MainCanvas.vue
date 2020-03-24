<template>
  <div class="MainCanvas">
    <p>{{ mouseX }}, {{ mouseY }}</p>
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
        this.mouseX = e.pageX
        this.mouseY = e.pageY
      } else {
        this.mouseX = event.pageX + document.body.scrollLeft
        this.mouseY = event.pageY + document.body.scrollTop
      }
    },
    drawSomething() {
      d3.select('.draw-area')
        .append('text')
        .attr('x', 20)
        .attr('y', 20)
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
