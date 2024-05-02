<script setup>
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'





const props = defineProps({
    title: {
        type: String,
        default: 'nnnValue'
    },
    count: {
        type: Number,
        default: 1
    }
}
)
const count = ref(props.count)
const clickCount = ref(0)

function sayHello() {
    console.log('Hello Vue!');
}
function increment() {
     
    
    clickCount.value = clickCount.value+1
    counter.count++
    //counter.increment()

}


//const counter = useCounterStore()




</script>

<template>
    <button @click="increment">{{ props.title }}: {{ clickCount }}</button>
    Clicked: {{ clickCount }}, Value: {{ count }}
    
</template>