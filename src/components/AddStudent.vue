<template>
    <div class=" form-add-student" >
        <div class="form-wrapper">
            <div class="card-body">
        <h5 class="card-title">New student</h5>

        <form @submit.prevent="onSubmit">
            <input v-model="nameStudent" class="form-control" placeholder="Student name" required>
            <input v-model="costStudent" type="number" class="form-control" placeholder="Price" required>
            <div class="wrapper-select">
                <select id="daySelect" v-model="daySelect" class="form-select " aria-label="Default select example" required>
                <option value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
                <option value="4">Thursday</option>
                <option value="5">Friday </option>
                <option value="6">Saturday</option>
                <option value="7">Sunday</option>
            </select>
                <label for="daySelect" v-if="daySelect === null">Select day</label>
            </div>
            <input v-model="description" class="form-control" placeholder="Description (not requared)" >
            <input type="time" class="form-control" v-model="timeLesson" required>
            <button 
                @click="showForm = !showForm"
                class="btn btn-success">
                    submit
            </button>
            <button @click="$emit('close-form-addStudent')"
                type="button" class="btn-close" aria-label="Close">
            </button>
        </form>

        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'add-new-lesson',
    props:{
        lessons:{
            type: Array
        }
    },
    data() {
        return{
            nameStudent:null,
            costStudent: null,
            daySelect: null,
            timeLesson: null,
            description: null
            
        }
    },
    methods:{
        onSubmit(){
            const newLesson = {
                id: this.lessons.length + 1,
                name: this.nameStudent,
                cost: this.costStudent ,
                day: this.daySelect,
                time: this.timeLesson,
                done: false,
                description: this.description,
                descr: false
            }
            this.$emit('submitted-lesson', newLesson)
            this.id = null
            this.nameStudent = null
            this.costStudent = null
            this.daySelect = null
            this.timeLesson = null

        }
    }
}
</script>


<style lang="scss">
.form-add-student{
    position: fixed;
    background: #000000ad;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    top: 0;
    left: 0;
}


</style>