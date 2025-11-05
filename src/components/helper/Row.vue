<template>
  <div :class="containerClass">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  align: {
    type: String,
    default: 'center',
    validator: (value) =>
      ['left', 'center', 'right', 'between', 'around', 'evenly'].includes(value),
  },
})

const containerClass = computed(() => {
  const classes = ['flex-row', 'gap-2']

  // 对齐方式
  switch (props.align) {
    case 'left':
      classes.push('justify-start')
      break
    case 'center':
      classes.push('justify-center')
      break
    case 'right':
      classes.push('justify-end')
      break
    case 'between':
      classes.push('justify-between')
      break
    case 'around':
      classes.push('justify-around')
      break
    case 'evenly':
      classes.push('justify-evenly')
      break
  }

  return classes.join(' ')
})
</script>

<style scoped>
.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.justify-start {
  justify-content: flex-start;
}

.justify-center {
  justify-content: center;
}

.justify-end {
  justify-content: flex-end;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.justify-evenly {
  justify-content: space-evenly;
}

.gap-2 {
  gap: 0.5rem; /* 8px */
}
</style>
