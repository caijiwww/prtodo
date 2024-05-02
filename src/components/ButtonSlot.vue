<script setup>
import { ref } from 'vue'
import { oldstore } from '../stores/oldstore.js'

const props = defineProps({
    title: {
        type: String,
        default: 'Value',
        required: false
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
    //count.value = Math.round(count.value * 1.5)
    clickCount.value = clickCount.value + 1

    oldstore.clickcount =  oldstore.clickcount +1 
    oldstore.totalvalue = oldstore.totalvalue + 1
}

</script>

<template>
    <button  @click="increment">
        <slot></slot>
    </button>
    Clicked: {{ clickCount }} , 
    Total: {{ oldstore.clickcount }} - {{ oldstore.totalvalue }}
</template>