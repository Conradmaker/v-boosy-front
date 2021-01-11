<template>
    <router-link tag="li" to='/123'>
        {{cata.name}}
    </router-link>
</template>
<script>
export default {
  props: {
    cata: Object
  }
}
</script>
