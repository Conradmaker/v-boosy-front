<template>
    <section id='detail-summary'>
        <div class="left__section">
            <article>
                <h1><small>제목 : </small>{{item.title}}</h1>
                <span><small>평점 : </small>{{item.mileageRate}}</span>
                <p v-html="desc"></p>
            </article>
        </div>
        <div class="right__section">
            <ul>
                <li>
                    <small>출간</small>
                    <strong>{{pubDate}}</strong>
                </li>
                <li>
                    <small>출판</small>
                    <strong>{{item.publisher}}</strong>
                </li>
                <li>
                    <small>가격</small>
                    <strong><b>{{item.priceStandard}}</b>{{item.priceSales}}</strong>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
  props: {
    item: Object
  },
  computed: {
    desc () {
    //   return this.item.description.replaceAll('.', '.<br/>') replaceAll을 jest가 못쓰네
      return this.item.description.replace(/\./gi, '.<br/>')
    },
    pubDate () {
      return this.item.pubDate.replace(/(.{4})/, '$1-').replace(/(.{7})/, '$1-')
    }
  }
}
</script>
<style lang="scss" scoped>
    #detail-summary{
        width:100%;
        height:100vh;
        background: #f5f6f1;
        display:flex;
        .left__section{
            flex:1;
            background: #D08381;
            display:flex;
            align-items: center;
            justify-content: center;
            color:#fff;
            article{
                display:flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                width:70%;
                height:60%;
                h1{
                    margin-bottom: 20px;
                    font-size: 23px;
                }
                p{
                    margin-top:20px;
                    line-height: 1.7;
                    letter-spacing: 1.3px;
                    font-size: 14px;
                }
            }
        }
        .right__section{
            flex:1;
            display:flex;
            align-items: center;
            justify-content: center;
            ul{
                width:70%;
                height:60%;
                display:flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-end;
                height:40%;
                li{
                    margin-top:40px;
                    color:#464489;
                    small{
                        display:block;
                        margin-bottom:10px;
                        font-size: 14px;
                    }
                    strong{
                        font-size: 18px;
                        b{
                            text-decoration: line-through;
                            display:block;
                            margin-bottom:5px;
                            font-size: 13px;
                        }
                    }
                }
            }
        }
    }
</style>
