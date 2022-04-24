<template>
    <div class="container-sm">
        
        <button @click="showForm = !showForm"
            :disabled="editLesson"
            type="button" class="btn btn-danger">
                Add student
         </button>

        <div class="wrapper">
            <list-days v-for="item in week" :key="item.id"
            :item='item'
            :lessons="lessons"
            :editLesson="editLesson"
            @cost-push="costPush"
            @cost-remove="costRemove"
            @remove-lesson="removeLesson"
            @move-item-up="moveItemUp"
            @move-item-down="moveItemDown"> 
            </list-days>

            <div class="lessons-edit" @click="editLesson = !editLesson" v-if="!editLesson">
                <i class="bi bi-pencil"></i>
            </div>
            <div class="lessons-edit" @click="editLesson = !editLesson" v-if="editLesson">
                <i class="bi bi-check-circle-fill"></i>
            </div>


        </div>

        <add-student v-if="showForm"
            @submitted-lesson="submettedLesson"
            @close-form-addStudent="closeFormAddStudent"
            :lessons="lessons">


        </add-student>

        <div class="week-wrapper" v-if="!wallet" @click="wallet = !wallet">
            <div class="week-salary" style="font-size: 30px; cursor: pointer">
               <i class="bi bi-wallet2"></i>
            </div>
        </div>
        <div class="week-wrapper" v-if="wallet">
            <div class="week-salary">
              <i @click="wallet = !wallet"
                    class="bi bi-arrow-left" style="font-size: 30px; cursor: pointer" ></i>
                <span>{{sumSalary + ' rub'}}</span>
            </div>
            <button @click="clearSumSalary"
                type="button" class="btn btn-light">
                Clear
            </button>
        </div>



    </div>
</template>

<script>
import ListDays from '@/components/ListDays.vue'
// import ListItem from '@/components/ListItem.vue'
import AddStudent from '../components/AddStudent.vue'
// import createStore from '@/store/createStore'


export default {
    components: {
        ListDays,
        // ListItem,
        AddStudent
     },
    data() {
        return{
            selectedTab: undefined,
            showForm: false,
            lessons: [],
            salary: [],
            sumSalary: 0,
            editLesson: false,
            wallet:false,
            Sum: [],
            week: [
                {
                    "id": "1",
                    "day":"Monday",
                },
                {
                    "id": "2",
                    "day":"Tuesday ",

                },
                {
                    "id": "3",
                    "day":"Wednesday ",

                },
                {
                    "id": "4",
                    "day":"Thursday ",

                },
                {
                    "id": "5",
                    "day":"Friday ",

                },
                {
                    "id": "6",
                    "day":" Saturday ",

                },
                {
                    "id": "7",
                    "day":"Sunday",

                },
            ],
        }
    },
       
    methods:{
        closeFormAddStudent(){
            this.showForm = false
        },
        submettedLesson(newLesson){
            this.lessons.push(newLesson)
            this.showForm = false
        },
        costPush(les){
            this.salary.push(les.cost)
            // this.Sum.push(les.cost)
            // console.log(this.salary[0][1])
            this.sumSalary = this.salary.reduce((item, sum) => sum + item, 0)
            

        },
        removeLesson(les){
            this.lessons = this.lessons.filter(item => item.id !== les.id)
        },
        costRemove(les){
            this.salary = this.salary.filter(item => item != les.cost)
            this.sumSalary = this.salary.reduce((item, sum) => sum + item, 0)
            
        },
        clearSumSalary(les){
            this.sumSalary = 0
            this.salary = this.salary.filter(item => item.id != les.id)
            this.lessons.forEach((item) => {
             return item.done = false
            });
        },

        moveItemUp(les){
            let indexLes = this.lessons.indexOf(les)

            let indexLesPrev = indexLes - 1

            if ((indexLes !== -1 && indexLesPrev !== -1) ) {
                [ this.lessons[indexLes], this.lessons[indexLesPrev] ] = [ this.lessons[indexLesPrev], this.lessons[indexLes] ];
            } else indexLes = 0            
        },
        moveItemDown(les){
            let indexLes = this.lessons.indexOf(les)

            let indexLesPrev = indexLes  + 1

            if (indexLes !== this.lessons.length   && indexLesPrev !== this.lessons.length ) {
                [ this.lessons[indexLes], this.lessons[indexLesPrev] ] = [ this.lessons[indexLesPrev], this.lessons[indexLes] ];
            }
        }

    },
    mounted(){
        if(localStorage.lessons){
            this.lessons = JSON.parse(localStorage.lessons) 
        }
        if(localStorage.sumSalary){
            this.sumSalary = JSON.parse(localStorage.sumSalary)
        }
        if(localStorage.salary){
            this.salary = JSON.parse(localStorage.salary)
        }
    },
    watch:{
        lessons:{
            handler(newLesson){
                localStorage.lessons = JSON.stringify(newLesson)
            },
            deep: true
        },
        sumSalary:{
            handler(newSum){
                localStorage.sumSalary = JSON.stringify(newSum)
            },
            deep: true
        },
        salary:{
            handler(newVal){
                localStorage.salary = JSON.stringify(newVal)
            },
            deep: true
        }
    }
}
</script>

