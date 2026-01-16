<template>
    <input type="file" accept=".txt,text/plain" @change="uploadTextFile" />
    <pre id="previewTextFile">{{ fileContent }}</pre>
</template>

<script setup>
    import { ref } from 'vue'

    let fileContent = ref('')
    const uploadTextFile = () => {
        const uploadFile = document.querySelector('input[type="file"]')
       var fileReader = new FileReader()
        fileReader.readAsText(uploadFile.files[0])
        fileReader.onload = function (e) {
            fileContent.value = e.target.result
        }
    }
</script>