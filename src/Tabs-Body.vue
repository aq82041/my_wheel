<template>
    <div class="tabsBody">
        <slot></slot>
    </div>
</template>

<script>
    export default{
        name: 'Tabs-Body',
        inject:['eventbus'],
        created(){

        }
    }
</script>

<style lang="scss" scoped>

</style>