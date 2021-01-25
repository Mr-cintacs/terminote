<template>
  <div id="id">
    <div class="container">
    <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue';

export default {
  name: 'App',
  components: {
    Todos
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
<<<<<<< HEAD
}
body{
=======
>>>>>>> ba4cf51318860832f2f1be81a867aae0ae63cd57
  background-color:#A1B5D8;
}
.container{
  display:flex;
  flex-direction: column;
  padding:2em;
}

</style>

