<template>
<div>
    <div class="main-heading-container">
        <h3 id="main-heading">Todos</h3>
        <img id="main-logo" src="../assets/edit.png" alt="">
        <AddTodo />
    </div>
    <div class="main-content-container">
        <div class="todos-container">
            <div draggable="true" v-for="todo in allTodos" v-bind:key="todo.id" class="todo" v-on:dragstart="dragStart(todo.id)" :data-id="todo.id">
                {{ todo.title }}
                <img src="../assets/delete.png" id="del-btn" v-on:click="deleteTodo(todo.id)">
            </div>
        </div>
        <DeleteTodo v-bind:current_Todo="currentTodo"/>
    </div>
    
</div>
  
</template>

<script>
import AddTodo from './AddTodo.vue';
import DeleteTodo from './DeleteTodo.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Todos',
    components: {
        AddTodo,
        DeleteTodo
    },

    data() {
        return {
            currentTodo:""
        }
    },

    computed: mapGetters(['allTodos']),
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo']),
        dragStart(id) {
            let currentTodoId = id;
            console.log(currentTodoId);
            this.currentTodo=currentTodoId;
        }
    },
    created() {
        this.fetchTodos();
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Delius&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.main-heading-container {
    display:flex;
    flex-direction:row;
    margin:auto;
    justify-content: center;
}
#main-heading{
    font-family: 'Roboto', sans-serif;
    font-size:4rem;
    text-align:center;
    margin-bottom:1em;
    color:#FFFCF7;
}
#main-logo {
    margin:0.5em;
    margin-left:1em;
    width:5%;
    height:5%;
}
.main-content-container {
    display:flex;
    justify-content:center;
}
.todos-container{
    margin-left:100px;
    width:60%;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:  1fr 1fr;
    grid-row-gap: 1em;
    grid-column-gap:0.5em;
}
.todo{
    color:#FFFCF7;
    position:relative;
    font-family: 'Delius', cursive;
    padding:1em;
    background-color: #738290;
    width:60%;
    font-size:1.2rem;
    border-radius:5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    transition: transform 0.25s ease-in-out;
}
.todo:hover {
    transform: scale(1.05);

}
#del-btn{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
    padding:0.2em;
    padding-top:0.2em;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bold;
    position: absolute;
    bottom:5px;
    right:5px;
    width:8%;
    border-radius:50%;
    background-color:#E4F0D0;
    transition: transform 0.25s ease-in-out;
}
#del-btn:hover{
    transform: scale(1.05);
}


</style>