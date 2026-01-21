<template>
    <input type="file" accept=".txt,text/plain" @change="uploadTextFile" />
    <pre v-if="fileContent">
        <strong>
This article contains {{ wordCount }} words.
        </strong>
    </pre>
    <pre v-if="fileContent" id="previewTextFile">{{ fileContent }}</pre>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    let fileContent = ref('')
    let wordCount = ref(0)

    const uploadTextFile = (event: Event) => {
        console.log(event)
        const files = (event.target as HTMLInputElement)!.files
        if(!files || files.length === 0) {
            console.log('No file selected')
            return
        }
        
        const fileReader = new FileReader()
        fileReader.readAsText(files[0])
        fileReader.onload = function (e) {
            fileContent.value = e.target!.result as string
            wordCount.value = fileContent.value.split(' ').length + 1
        }
    }
</script>

<style lang="scss">
    @import '@/styles/main.scss';
</style>