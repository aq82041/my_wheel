<template>
    <div class="wrapper" :class="{'error':error}">
        <input type="text"
               :value="value" :disabled="disabled" :readonly="readonly">
        <template v-if='error'>
            <g-icon  name="error2" class="error-icon"></g-icon>
            <span class="error-message">{{error}}</span>
        </template>
    </div>
</template>

<script>
    export default{
        name:'Input',

        props:{
            value:{
                type: String
            },
            disabled:{   //是否禁用
                type:Boolean,
                default:false
            },
            readonly:{
                type:Boolean,
                default:false
            },
            error:{
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height:32px;
    $border-color:#999;
    $border-color-hover:#666;
    $border-radius:4px;
    $font-size:12px;
    $box-shadow-color:rgba(0,0,0,0.5);
    $red:#F1453D;
    .wrapper{
        font-size:$font-size;
        display: inline-flex;
        align-items: center;
        :not(:last-child){
            margin-right:.5em;
        }
        > input{
            height:$height;
            border:1px solid $border-color;
            border-radius: $border-radius;
            padding:0 8px;
            font-size:inherit;
            &:hover{
                border:1px solid $border-color-hover;
            }
            &:focus{
                outline:none;
                box-shadow:inset 0 1px 3px $box-shadow-color;
            }
            &[disabled],&[readonly]{
                border-color:#bbb;
                color:#bbb;
                cursor:not-allowed;
            }

        }
        &.error{
            > input{
                border-color:$red;
            }
        }
        > .error-message{
            color:$red;
        }
    }
</style>