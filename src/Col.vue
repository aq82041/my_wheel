<template>
    <div class="col" :class="[`col-${span}`]"></div>
</template>

<script>
    export default{
        name:'Col',
        props:{
            span:[Number,String]
        }
    }
</script>

<style lang="scss" scoped>
    .col{
        border:1px solid red;
        background: grey;
        width:50%;
        height:100px;

        $class-prefix:col-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }
    }
</style>