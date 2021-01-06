<template>
<div class="score">
   <ul v-if="score >= 8">
       <span class="material-icons">star</span>
       <span class="material-icons">star</span>
       <span class="material-icons">star</span>
       <span class="material-icons">star</span>
       <span class="material-icons">star</span>
    </ul>
    <ul v-if="score >= 6 && 8 > score ">
       <span class="material-icons">star</span>
       <span class="material-icons">star</span>
       <span class="material-icons">star</span>
       <span class="material-icons">star</span>
       <span class="material-icons">star_outline</span>
    </ul>
    <ul v-if="score >= 4 && 6 > score ">
       <span class="material-icons">star</span>
       <span class="material-icons">star</span>
       <span class="material-icons">star</span>
       <span class="material-icons">star_outline</span>
       <span class="material-icons">star_outline</span>
    </ul>
    <ul v-if="score >= 2 && 4 > score ">
       <span class="material-icons">star</span>
       <span class="material-icons">star</span>
       <span class="material-icons">star_outline</span>
       <span class="material-icons">star_outline</span>
       <span class="material-icons">star_outline</span>
    </ul>
    <ul v-if="score >= 0 && 2 > score ">
       <span class="material-icons">star</span>
       <span class="material-icons">star_outline</span>
       <span class="material-icons">star_outline</span>
       <span class="material-icons">star_outline</span>
       <span class="material-icons">star_outline</span>
    </ul>
</div>
</template>
<script>
export default {
  props: {
    score: Number
  }
}
</script>
<style lang="scss" scoped>
span{
    font-size: 15px;
    color:rgb(221, 221, 68);
}
</style>
