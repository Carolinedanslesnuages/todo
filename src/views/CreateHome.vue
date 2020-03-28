<template>
    <div>
      <div>
        <ceto-header/>
      <div >

      <todo-Create/>

      <todos/>
        </div>
      </div>
      <div>
        <h2 class="titre-1 flex justify-center">
        </h2>
      </div>
    </div>
</template>

<script>

import CetoHeader from '../components/CetoHeader'
import TodoCreate from '../components/TodoCreate'
import Todos from '@/components/Todos'

export default {
  name: 'create-home',
  components: {
    CetoHeader,
    TodoCreate,
    Todos
  }
}
</script>
