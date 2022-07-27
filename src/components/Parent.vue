<template>
  <div>
    <!-- Parent -->
    <Child />
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: 'ParentComponent',
  components: {
    Child,
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>