<template>
    <div class="table-item" > 
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'list-item',
    props:{
        week:{
            type: Object
        },
        item:{
            type: Object
        },
        lessons:{
            type: Array,
            required: true
        }
    },
    data() {
        return{

        }
    },
}
</script>