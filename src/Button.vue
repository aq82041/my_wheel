<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('click')">
        <g-icon name="loading" v-if="loading" class="loading icon"></g-icon>
        <g-icon :name="icon" v-if="icon && !loading" class="icon"></g-icon>
        <div class="text">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default{
        props:{
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
                // 检查器：如果用户给传了left,right之外的值，返回false
                validator(value){
                    return !(value !== 'left' && value !== 'right');
                }
            },
            loading:{
                type:Boolean,
                default:false
            }
        }
    }
</script>
<style lang="scss">
    @keyframes spin {
        0%{
            transform:rotate(0deg)
        }
        100%{
            transform:rotate(360deg)
        }
    }

    .g-button {
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display:inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        > .icon{order:1;margin-right:.1em;}
        > .text{order:2;}

        &:hover {
            border: 1px solid var(--border-color-hover);
        }

        &:active {
            background: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }
        &.icon-right{
            > .icon{order:2;margin-left:.1em;margin-right:0;}
            > .text{order:1}
        }
        > .loading{
            animation:spin 1s infinite linear;
        }

    }
</style>