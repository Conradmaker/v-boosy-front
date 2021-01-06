<template>
    <section>
        <div class="inner">
            <article>
                <h1>Buy you'r knowledge</h1>
                <p>지금 사면 1+1입니다~</p>
                <button>더보기</button>
            </article>
            <img src="../../assets/banner.png" alt="">
        </div>
    </section>
</template>

<style lang="scss" scoped>
.inner{
    height: 220px;
    position: relative;
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
        position: absolute;
        width:340px;
        right: 50px;
        bottom: 10px;
    }
}
</style>
