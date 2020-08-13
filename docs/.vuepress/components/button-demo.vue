<template>
    <div>
        <hu-button>
            默认按钮
        </hu-button>

        <pre><code>{{content}}</code></pre>
    </div>

</template>

<script>
    import Button from '../../../src/Button.vue';

    export default{
        components:{
            'hu-button':Button
        },
        data(){
            return {
                content:`<hu-button>默认按钮</hu-button>`
            }
        }
    }
</script>