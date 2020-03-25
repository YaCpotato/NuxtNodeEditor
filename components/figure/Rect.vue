<template>
  <rect :x="x" :y="y" :width="width" :height="height"></rect>
</template>
<script>
export default {
  name: 'Rect',
  props: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  }
}
</script>
