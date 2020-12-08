import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from './default-board'
import { saveStatePlugin } from './utils'

Vue.use(Vuex)

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    board // actually board: board
  },
  getters: {
    getTask(state) {
      // return function looking for a task with a specific id
      return id => {
        for (const column of state.board.columns) {
          console.log(`In getTask(${id}) => outer for loop`)
          for (const task of column.tasks) {
            console.log(`In getTask(${id}) => checking ${task.id}`)
            if (task.id === id) {
              console.log('In getTask, task found')
              return task
            }
          }
        }
      }
    }
  },
  mutations: {}
})
