<template>
    <section>
        <div class="inner">
            <article>
                <h1>Buy you'r knowledge</h1>
                <p>마음의 양식을 구매해보세요</p>
                <button>더보기</button>
            </article>
            <img src="../../assets/banner.png" alt="123">
        </div>
    </section>
</template>

<style lang="scss" scoped>
section{
    z-index: 1;
}
.inner{
    height: 220px;
    display:flex;
    align-items: center;
    margin-top: 30px;
    background: #F1E7DF;
    border-radius: 10px;
    article{
        height:110px;
        display:flex;
        flex-direction: column;
        margin-left:60px;
        justify-content: space-between;
        h1{
            font-size: 28px;
            color:#464489;
        }
        p{
            font-size: 13px;
        }
        button{
            cursor: no-drop;
            background:  #BEA895;
            border: none;
            outline:none;
            color:#fff;
            width:80px;
            height:25px;
            display:flex;
            align-items: center;
            justify-content: center;
            border-radius: 3px;
        }
    }
    img{
        z-index: 0;
        width:340px;
        transform:translate(180px,-27px);
    }
}

@media screen and (max-width:700px) {
  .inner{
      position:relative;
      align-items: flex-start;
      flex-direction: column;
      article{
          margin-top:20px;
          margin-left:20px;
          height:70px;
          h1{
              font-size: 20px;
              white-space: nowrap;
          }
      }
      img{
        z-index: 0;
        width:200px;
        position:absolute;
        bottom:10px;
        right: 10px;
        transform:translate(0px,0px);
    }
  }
}
</style>
