<template>
    <h1>Say Hello Counter</h1>
    <button @click="increment">Said hello {{ count }} times</button>
</template>

<script setup>
    let count = $ref(0)
    function increment() {
        count++
    }
</script>