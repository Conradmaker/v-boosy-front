<template>
    <button @click="onClick()">
        <slot></slot>
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
    outline:none;
    border:   none;
    background: #555;
    color:white;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
}
</style>
