<template>
    <div class="col" :class="colClasses" :style="colStyle">
        <div style="border: 1px solid green; height:100px;">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    let validator=(value)=>{
        let keys=Object.keys(value),valid=true
        keys.forEach(key =>{
            if(!['span','offset'].includes(key)){
                valid=false
            }
        })
        return valid
    }
    export default{
        name:'Col',
        props:{
            span:{
                type: [Number,String]
            },
            offset:{
                type:[Number,String]
            },
            ipad:{
                type:Object,
                validator
            },
            narrowPc:{
                type:Object,
                validator
            },
            pc:{
                type:Object,
                validator
            },
            widePc:{
                type:Object,
                validator
            }
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
                let {span,offset,phone,ipad,narrowPc,pc,widePc}=this
                return [
                    span && `col-${span}` ,
                    offset && `offset-${offset}`,
                    ipad && `col-ipad-${ipad.span}`,
                    ipad && `offset-ipad-${ipad.offset}`,
                    narrowPc && `col-narrowPc-${narrowPc.span}`,
                    narrowPc && `offset-narrowPc-${narrowPc.offset}`,
                    pc && `col-pc-${pc.span}`,
                    pc && `offset-pc-${pc.offset}`,
                    widePc && `col-widePc-${widePc.span}`,
                    widePc && `offset-widePc-${widePc.offset}`,
                ]
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

        @media (min-width:577px) {
            $class-prefix:col-ipad-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }

            $class-prefix:offset-ipad-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media (min-width:769px) {
            $class-prefix:col-narrowPc-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }

            $class-prefix:offset-narrowPc-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media (min-width:993px) {
            $class-prefix:col-pc-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }

            $class-prefix:offset-pc-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media (min-width:1201px) {
            $class-prefix:col-widePc-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }

            $class-prefix:offset-widePc-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
    }
</style>