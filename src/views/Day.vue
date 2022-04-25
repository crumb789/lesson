<template>
    <div class="container-sm">
        
        <div class="header">
            <div class="header-wrapper">
                <div :class="{toggleActive: editLesson}"
                class="lessons-toggle">
                    <div :class="{editActive: editLesson}" class="lessons-toggle_btn" >
                    <div class="lessons-edit" @click="editLesson = !editLesson" >
                        <i class="bi bi-pencil" v-if="!editLesson"></i>
                        <i class="bi bi-caret-right-fill" v-else></i>
                    </div>
                    </div>
                </div>

                <h1>
                    <div :style="{width: widthDivider + '%'}" class="divider"></div>
                    {{mainHeader}}
                </h1>

                <div @click="showForm = !showForm"
                    v-if="!editLesson"
                    class=" btn-add">
                    <i class="bi bi-file-plus">
                    </i>
                </div>
                <div @click="showForm = !showForm"
                    v-if="editLesson"
                    class=" btn-add">
                </div>
            </div>
        </div>

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

            


        </div>

        <add-student v-if="showForm"
            @submitted-lesson="submettedLesson"
            @close-form-addStudent="closeFormAddStudent"
            :lessons="lessons">


        </add-student>

        <div class="week-wrapper" v-if="!wallet" @click="walletChange">
            <div class="week-salary" style="font-size: 30px; cursor: pointer">
               <i @mouseenter="coin = true" @mouseout="coin = false" 
                class="bi bi-wallet2 week-wallet">
               </i>
               <i  class="bi bi-cash week-token" :class="{hover: coin === true}">

               </i>
            </div>
        </div>
        <div class="week-wrapper" v-if="wallet">
            <div class="week-salary">
                <i @click="wallet = !wallet"
                    class="bi bi-arrow-left" style="font-size: 30px; cursor: pointer" >
                </i>
                
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
            mainHeader:'Lesson',
            selectedTab: undefined,
            showForm: false,
            lessons: [],
            salary: [],
            sumSalary: 0,
            editLesson: false,
            wallet:false,
            Sum: [],
            coin: false,
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
        walletChange(){
            setTimeout(() => {
                this.wallet = !this.wallet
                this.coin = false
            }, 1000)
        },
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
    computed: {
        widthDivider() {
            let max = []
            let current = []
            this.lessons.forEach((item) => {
                (item.done) ? current.push(1) : max = this.lessons.length
            })
            let result = current.reduce((item, sum) => sum + item, 0)
            // let width = max.reduce((item, sum) => sum + item, 0)
        // `this` указывает на экземпляр vm

            return (result === this.lessons.length) ? 100 : max + result
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

