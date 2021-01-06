<template>
    <nav class="inner">
        <ul>
            <li>
                <span>Home</span>
                <i></i>
            </li>
            <li>
                <span>Bestseller</span>
                <i></i>
            </li>
            <li>
                <span>Catagory</span>
                <i></i>
            </li>
            <li>
                <span>About</span>
                <i></i>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {

}
</script>
<style lang="scss">
nav{
    ul{
        height: 50px;
        margin:0 auto;
        max-width:380px;
        display:flex;
        align-items: center;
        justify-content: space-between;
        li{
            cursor: pointer;
            display:flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            span{
                font-size: 14px;
                letter-spacing: 1.3px;
                line-height: 2;
                color:#464489;
            }
            i{
                width:5px;
                height: 5px;
                border-radius: 50%;
                background: #464489;
            }
            &:hover{
                i{
                    background: #dbeb53;
                }
            }
        }
    }
}
</style>
