import Vuex from 'vuex'
import tasks from './module/tasks'
const createStore = () => {
  return new Vuex.Store({ modules: { tasks } })
}
export default createStore
