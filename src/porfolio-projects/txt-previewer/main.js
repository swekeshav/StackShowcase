const uploadFile = document.getElementById('uploadTextFile')
uploadFile.addEventListener('change', () => {
    var fileReader = new FileReader()
    fileReader.readAsText(uploadFile.files[0])
    fileReader.read
    fileReader.onload = function (e) {
        const previewFile = document.getElementById('previewTextFile')
        previewFile.textContent = e.target.result
    }
})