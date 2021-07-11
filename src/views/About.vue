<template>
  <div class="about">
      <incomplete />
  </div>
</template>
<script>
import Incomplete from '../components/common/Incomplete.vue'
export default {
  components: { Incomplete },
  props: {}
}
</script>
<style lang="scss" scoped>
.about{
  padding:0;
}
</style>
