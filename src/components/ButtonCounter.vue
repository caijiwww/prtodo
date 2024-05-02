<script setup>
import { ref } from 'vue'
import { oldstore } from '../stores/oldstore.js'

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
     
    let oldcountVal = count.value
    count.value = Math.round(count.value * 1.5)

    clickCount.value = clickCount.value+1
    oldstore.clickcount =  oldstore.clickcount +1 
    oldstore.totalvalue = oldstore.totalvalue - oldcountVal + count.value 

}

</script>

<template>
    <button @click="increment">{{ props.title }}: {{ count }}</button>
    Clicked: {{ clickCount }}, Value: {{ count }}
    Total: {{ oldstore.clickcount }} - {{ oldstore.totalvalue }}
</template>