<script setup>
import { ref } from 'vue'
import { store } from '../stores/oldstore.js'

const props = defineProps({
    title: {
        type: String,
        default: 'Value'
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
    count.value = Math.round(count.value * 1.5)
    clickCount.value = clickCount.value+1

}

</script>

<template>
    <button @click="increment">{{ props.title }}: {{ count }}</button>
    Clicked: {{ clickCount }}, 
    total: 
</template>