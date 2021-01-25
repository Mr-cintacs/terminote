<template>
  <div class='add-todo-container'>
      <h3 id="heading" >Add Todo</h3>
      <div class="add">
          <form v-on:submit="onSubmit">
              <input type="text" v-model="title" placeholder="Add Todo..">
              <input type="submit" value="submit">
          </form>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'AddTodo',
    data() {
        return{
            title: ''
        }
    },
    methods:{
        ...mapActions(['addTodo']),
        onSubmit(e) {
            e.preventDefault();
            this.addTodo(this.title);
        }
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.add-todo-container{
    margin-left:4em;
}
#heading{
    font-family: 'Roboto', sans-serif;
    color:#FFFCF7;
    font-size:1.8rem;
}
input[type="text"] {
    border:none;
    padding:1em;
    background-color:#E4F0D0;
    border-radius:20px;
}
input[type="submit"] {
    margin-left:0.5em;
    padding:0.2em;
    border:none;
    color:#E4F0D0;
    font-weight:bolder;
    font-size:2rem;
    cursor:pointer;
    background-color:#A1B5D8;

    /* transition: border 1s ease-in-out; */
}

</style>