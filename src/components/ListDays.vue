<template>
    <div class="wrapper-table">
        <div class="table-days  " 
            :class="{red: item.id === '1', 
                    yellow: item.id === '2',
                    orange: item.id === '3',
                    green: item.id === '4',
                    blueLight: item.id === '5',
                    blue: item.id === '6',
                    purple: item.id === '7'}">{{item.day }}</div>
        
       <list-item @click="clickLesson = !clickLesson"
                    v-for="(les, index) in lessons" :key="les.id"
                    :item="item"
                    :lessons="lessons">
                    <div v-if="item.id == les.day"
                         class="box-item"                     
                        :class="{checkDone: les.done === true,
                                 edit: editLesson === true, 
                                 description: les.descr === true,
                                 red: item.id === '1', 
                                yellow: item.id === '2',
                                orange: item.id === '3',
                                green: item.id === '4',
                                blueLight: item.id === '5',
                                blue: item.id === '6',
                                purple: item.id === '7'}">
                        <div class="lesson-name">{{les.name}}</div>

                        <div class="lesson-time"><!-- ////////////////time -->
                            {{les.time}}
                            <i style="cursor:pointer" class="bi bi-pencil" @click="timeEdit = !timeEdit"
                                v-if="les.descr">
                            </i>
                        </div>
                        <div class="lesson-time" v-if="les.descr && timeEdit">
                            <form @submit.prevent="changeTime(index)" class="form-time-change">
                                <input type="time" class="form-control" v-model="newTimeLesson">
                                <button  class="btn-done "><i class="bi bi-check-square"></i></button>
                            </form>
                        </div> <!-- //////////////time -->


                        <div class="lesson-cost" v-if="les.cost">{{les.cost + ' rub'}}</div>
                        <div class="lesson-descr" v-if="les.descr">
                            <span>Description: </span>
                            {{les.description}}
                        </div>
                        <form @submit.prevent="submitDescr(les)" v-if="les.descr">
                            <div class="input-group input-group-sm mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Description</span>
                                <input v-model="newDescr" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                                <button  class="btn-done "><i class="bi bi-check-square"></i></button>
                            </div>                            
                        </form>

                        <form class="form-change-day" @submit="onSubmitChangeDay(index)" v-if="les.descr">
                            <div class="wrapper-select">
                                <select id="daySelect" v-model="changeDay" class="form-select " aria-label="Default select example" required>
                                <option value="1">Monday</option>
                                <option value="2">Tuesday</option>
                                <option value="3">Wednesday</option>
                                <option value="4">Thursday</option>
                                <option value="5">Friday </option>
                                <option value="6">Saturday</option>
                                <option value="7">Sunday</option>
                            </select>
                                <label for="daySelect" v-if="!changeDay" >{{item.day}}</label>
                            </div>
                            <button  class="btn-done "><i class="bi bi-check-square"></i></button>
                        </form>

                        <div class="form-check" @click="les.done = !les.done, doneLesson(les)"
                            v-if="!editLesson">

                            <i class="bi bi-check2-square" v-if="les.done "></i>
                        </div>
                        
                        <div class="form-remove" @click="$emit('remove-lesson',les)"
                            v-if="editLesson">
                            
                        </div>
                        <div class="arrows-move" v-if="editLesson && lessons.length > 1">
                            <div class="form-replace-up" 
                                 @click="$emit('move-item-up',les)">
                                
                                <i class="bi bi-arrow-up"></i>
                            </div>
                            
                            <div class="form-replace-down" 
                                    
                                    @click="$emit('move-item-down',les)">
                                <i class="bi bi-arrow-down"></i>
                            </div>
                        </div>




                        <div class="form-descr" @click="$emit('descr-bool'),les.descr = !les.descr"
                            v-if="!editLesson">
                            <i class="bi bi-chat-left-quote"></i>
                        </div>
                        <button @click="$emit('descr-bool'),les.descr = !les.descr" v-if="les.descr === true"
                            type="button" class="btn-close descr" aria-label="Close">
                        </button>
                        
                </div>
        </list-item>
        <slot>

        </slot>
    </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
export default {
    components:{ListItem},
    props:{
        item: {
            type: Object
        },
        lessons:{
            type: Array
        },
        editLesson:{
            type: Boolean,
            requared: true
        },
        descr:{
            type: Boolean
        }
    },
    data() {
        return{
            newDescr: undefined,
            changeDay: null,
            newTimeLesson: null,
            timeEdit: false
        }
    },
    methods:{
        doneLesson(les){            
            (les.done === true) ? 
            this.$emit('cost-push', les) :
            this.$emit('cost-remove', les)
        },
        submitDescr(les){
            les.description = this.newDescr
            this.newDescr = ''
        },
        onSubmitChangeDay(index){
            const newDay = this.changeDay
            this.$emit('change-day', index, newDay)
            this.changeDay = null
        },
        changeTime(index){
            const newTime = this.newTimeLesson
            this.$emit('change-time-submit', newTime, index)
            this.newTimeLesson = null
            this.timeEdit = false
        }
        // moveItem(les,index){
        //     console.log(index)
        //     index = index - 1
        //     console.log(index)
        // }
    },
    // computed: {
    //     compTime(les,index){
    //         return this.lessons[index].includes(les.time)
    //     }
    // }
}
</script>