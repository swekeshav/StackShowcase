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

    const fileContent = $ref('')
    let wordCount = $ref(0)

    const uploadTextFile = (event: Event) => {
        const files = event.target.files
        if(files.length === 0) {
            console.log('No file selected')
            return
        }
        
        const fileReader = new FileReader()
        fileReader.readAsText(files[0])
        fileReader.onload = function (e) {
            fileContent = e.target.result
            wordCount = fileContent.split(' ').length + 1
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/styles/main.scss';
</style>