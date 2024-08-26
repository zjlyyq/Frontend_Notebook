//Counter.js
import {
  ref
} from 'vue'
export default {
  setup() {
    const count = ref(0)
    return {
      count
    }
  },
  template: /*html*/
            `
            <b>Counter component from './Counter.js': </b><br>
            <button @click="count++">
              Count is: {{ count }}
            </button>
            `
}