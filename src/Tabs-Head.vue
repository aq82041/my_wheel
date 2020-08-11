<template>
    <div class="tabsHead">
        <slot></slot>
        <div class="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Tabs-Head',
        inject:['eventbus'],
    }
</script>

<style lang="scss" scoped>
    $tab-height:40px;
    .tabsHead{
        border:1px solid black;
        display: flex;
        height:$tab-height;
        align-items: center;
        justify-content: flex-start;
        position:relative;
        > .line{
            width:100px;
            position:absolute;
            bottom:0;
            border-bottom:1px solid #1890ff;
        }
        > .actions-wrapper{
            margin-left:auto;
        }
    }
</style>