<template>
    <div class="trash-can" v-on:dragenter="dragEnter" v-on:dragleave="dragLeave" v-on:drop="dragDrop" v-on:dragover.prevent="">
        <div id="trash-text">
            <p>T</p>
            <p>R</p>
            <p>A</p>
            <p>S</p>
            <p>H</p>
        </div>
        
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'DeleteTodo',
     props:{
        current_Todo: Number
    },
    data() {
        return {
            currentTodo: this.current_Todo
        }
    },
   
    methods:{
        ...mapActions(['deleteTodo']),
        dragEnter(e) {
            e.target.classList.add('hovering');
        },
        dragLeave(e) {
            e.target.classList.remove('hovering');
        },
        dragDrop(e) {
            e.target.classList.remove('hovering');
            console.log('on dropped called');
            console.log("this is the todo id" + this.current_Todo);
            this.deleteTodo(this.current_Todo);
         }
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.trash-can {
    background-color:#F87060;
    width:10%;
    height:300px;
    border-radius:50px;
    transition: transform 0.25s ease-in-out;
}
.trash-can:hover {
    transform:scale(1.05);
}
.hovering {
    border: 6px #B3A394 dashed;
}
#trash-text {
    color:#CDD7D6;
    font-family: 'Roboto', sans-serif;
    margin-top:50px;
    text-align:center;
    font-size:2rem;
}

</style>