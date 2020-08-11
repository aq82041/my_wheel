<template>
    <div class="tabsHead">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>

    </div>
</template>

<script>
    export default{
        name: 'Tabs-Head',
        inject:['eventbus'],
        created(){

        }
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
        > .actions-wrapper{
            margin-left:auto;
        }
    }
</style>