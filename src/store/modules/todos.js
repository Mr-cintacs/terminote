<<<<<<< HEAD
import axios from 'axios';
 
const state = {
    todos: []
};
const getters = {
    allTodos: (state) => state.todos
};
const actions = {
    async fetchTodos( {commit} ) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos');
        commit('setTodos', response.data);        
    },

    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users/1/todos', {title, completed:false});
        commit('newTodo', response.data);
    },
    
    async deleteTodo({ commit }, id) {
    //    axios.delete(`https://jsonplaceholder.typicode.com/users/1/todos/${id}`);
        commit('removeTodo', id);
    }

};
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, todoId) => state.todos = state.todos.filter(todo => todo.id !== todoId)
};

export default {
    state,
    getters,
    actions,
    mutations 
=======
import axios from 'axios';
 
const state = {
    todos: []
};
const getters = {
    allTodos: (state) => state.todos
};
const actions = {
    async fetchTodos( {commit} ) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos');
        commit('setTodos', response.data);        
        console.log(response.data);
    },
    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users/1/todos', {title, completed:false});
        commit('newTodo', response.data);
    },
    async deleteTodo({ commit }, id) {
       axios.delete(`https://jsonplaceholder.typicode.com/users/1/todos/${id}`);
        commit('removeTodo', id);
    }

};
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, todoId) => state.todos = state.todos.filter(todo => todo.id !== todoId)
};

export default {
    state,
    getters,
    actions,
    mutations
>>>>>>> ba4cf51318860832f2f1be81a867aae0ae63cd57
};