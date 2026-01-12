const uploadImage = document.getElementById('uploadImage')
uploadImage.addEventListener('change', () => {
    console.log('Image file selected:', uploadImage.files[0])
    const file = uploadImage.files[0]
    const reader = new FileReader()
    reader.onload = function (e) {
        const uploadPreview = document.getElementById('uploadPreview')
        uploadPreview.src = e.target.result
    }
    reader.readAsDataURL(file)
})