<template>
  <div  class="shadow-md rounded pt-4 pb-6 mt-10 m-4 y-4" >
     <div class="m-6 y-6 mb-10 flex justify-center">
      <draggable class="Todos flex justify center flex-row " v-model="allTodos" group="todos">
        <todo v-for="todo in allTodos" :key="todo.id" :item="todo" />
      </draggable>
    </div>

    <div class="flex justify-center flex-wrap">
      <div class="w-1/4 bg-gray-200 rounded p-2 m-2 min-w-full">
        <h3 class="text-center uppercase">To Do</h3>
        <draggable class="Todos" v-model="allTodo" group="todos">
          <todo v-for="todo in allTodo" :key="todo.id" :item="todo" />
        </draggable>
      </div>

      <div class="w-1/4 bg-gray-200 rounded p-2 m-2 min-w-full">
        <h3 class="text-center uppercase" >Doing</h3>
        <draggable class="Todos" v-model="allDoing" group="todos">
          <todo v-for="doing in allDoing" :key="doing.id" :item="doing" />
        </draggable>
      </div>

      <div class="w-1/4 bg-gray-200 rounded p-2 m-2 min-w-full">
        <h3 class="text-center uppercase" >Done</h3>
        <draggable class="Todos" v-model="allDone" group="todos">
          <todo v-for="done in allDone" :key="done.id" :item="done" />
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Todo from '@/components/Todo'
export default {
  components: {
    draggable,
    Todo
  },
  computed: {
    allTodos: {
      get () {
        return this.$store.getters.allTodos
      },
      set (value) {
        this.$store.dispatch('saveTodosOrdering', value)
      }
    },
    allTodo: {
      get () {
        return this.$store.getters.allTodo
      },
      set (value) {
        this.$store.dispatch('saveAllTodoOrdering', value)
      }
    },
    allDoing: {
      get () {
        return this.$store.getters.allDoing
      },
      set (value) {
        this.$store.dispatch('saveAllDoingOrdering', value)
      }
    },
    allDone: {
      get () {
        return this.$store.getters.allDone
      },
      set (value) {
        this.$store.dispatch('saveAllDoneOrdering', value)
      }
    }
  }
}
</script>

<style scoped>
.Todos {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;

}
.destination {
  display: flex;
  justify-content: space-evenly;
}
</style>
