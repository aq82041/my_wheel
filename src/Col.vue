<template>
    <div class="col" :class="colClasses" :style="colStyle">
        <div style="border: 1px solid green; height:100px;">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    export default{
        name:'Col',
        props:{
            span:{
                type: [Number,String]
            },
            offset:{
                type:[Number,String]
            },
        },
        data(){
            return {
                gutter:0
            }
        },
        computed:{
            colStyle(){
                return {
                    paddingLeft:this.gutter/2 +'px',
                    paddingRight:this.gutter/2 +'px'
                }
            },
            colClasses(){
                let {span,offset}=this
                return [span && `col-${span}` , offset && `offset-${offset}`]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col{

        height:100px;
        $class-prefix:col-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }

        $class-prefix:offset-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
    }
</style>