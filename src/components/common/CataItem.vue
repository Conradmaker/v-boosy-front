<template>
    <li @click="searchCate">
        {{cata.name}}
    </li>
</template>
<script>
export default {
  props: {
    cata: Object
  },
  methods: {
    searchCate () {
      this.$router.replace(`/category/${this.cata.id}?title=${this.cata.name}`)
    }
  }
}
</script>
