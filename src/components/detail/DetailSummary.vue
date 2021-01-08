<template>
    <section>
         <h1>Detail</h1>
        <div class="container">
          <div class="book">
            <div class="front">
              <div class="cover">
                <img :src='item.coverLargeUrl' alt="cover" />
              </div>
            </div>
            <div class="left-side">
              <h2>BOOKSY</h2>
            </div>
          </div>
        </div>
        <article>
          <b>{{item.title}}</b>
          <span>{{item.author}}</span>
        </article>
    </section>
</template>
<script>
export default {
  props: {
    item: Object
  }
}
</script>
<style lang="scss" scoped>
  section{
        width: 100%;
        background: #fff;
  h1 {
    text-align: center;
    margin: 40px 0 0px 0;
    font-size: 23px;
  }
  .container {
    z-index: 1;
    perspective: 3000px;
    .book {
      position: relative;
      display: block;
      width: 200px;
      height: 275px;
      margin: 5% auto;
      border-radius: 2px 4px 4px 2px;
      background: linear-gradient(45deg, #dad5dc 0%, #f2ebf4 100%);
      font-family: acumin-pro, sans-serif;
      box-shadow: 13px 13px 8px 0px rgba(151, 146, 153, 0.6);
      font-weight: 400;
      color: #2b2b2b;
      transform-style: preserve-3d;
      transition: transform 0.5s;
      &:hover {
        transform: rotate3d(0, 1, 0, 35deg);
      }
      > div {
        display: block;
        position: absolute;
      }
    }
    .front {
      > div {
        display: block;
        position: absolute;
        width: 200px;
        height: 275px;
      }
      .cover img {
        width: 100%;
        height: 100%;
      }
      transform-style: preserve-3d;
      transform-origin: 0% 50%;
      transition: transform 0.5s;
      transform: translate3d(0, 0, 20px);
      z-index: 10;
    }
    .left-side {
      width: 40px;
      left: -20px;
      height: 275px;
      background-color: rgba(232, 229, 234,1);
      transform: rotate3d(0, 1, 0, -90deg);
    }
  }
  .container {
    .front {
      > div {
        border-radius: 0 3px 3px 0;
        box-shadow: inset 4px 0 10px rgba(0, 0, 0, 0.1);
      }
      &:after {
        content: "";
        position: absolute;
        top: 1px;
        bottom: 1px;
        left: -1px;
        width: 1px;
      }
    }
    .cover:after {
      content: "";
      position: absolute;
      top: 0;
      left: 10px;
      bottom: 0;
      width: 3px;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);
    }
    h2 {
      width: 275px;
      height: 30px;
      color: #2b2b2b;
      font-size: 15px;
      line-height: 40px;
      padding-right: 10px;
      text-align: right;
      transform-origin: 0 0;
      transform: rotate(90deg) translateY(-40px);
    }
  }
  .cover {
    background: linear-gradient(45deg, #dad5dc 0%, #f2ebf4 100%);
  }
  article {
    display: flex;
    align-items: center;
    flex-direction: column;
    b {
      margin-bottom: 24px;
      font-size: 24px;
      font-weight: bold;
    }
  }
  }
</style>
