<template>
  <button @click='onClick'>
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    onClick: Function
  }
}
</script>

<style lang="scss" scoped>
button{
    outline: none;
    border: 1px solid #aaa;
    padding:8px 34px;
    background: none;
    font-size: 14px;
    cursor: pointer;
    &:hover{
        background: darken(#fff,5)
    }
}
</style>
