<template>
        <th scope="col" >
            {{item.day}} 
            <slot></slot>
        </th>
</template>

<script>
export default {
    props: {
        item:{
            type: Object
        },
        week:{
            type: Array
        }
    },
    name: 'table-days',
    data() {
        return{
            active: false,
            warning: false
        }
    },
}
</script>

