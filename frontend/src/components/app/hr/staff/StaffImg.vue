<template>
    <img id="img" :src="imgUrl" height="150">
</template>

<script>

    import axios from 'axios'

    export default {
        name: "StaffImg",
        props: ['id'],
        data: () => ({
            imgUrl: ''
        }),
        async mounted() {
            let fData = new FormData()
            fData.append('_id', this.id)

            let tempImg = null
            await axios.post('/api/staff/get-one-file', fData).then(res => {
                tempImg = res.data
            }).catch(error => {
                console.log(error)
            })
            this.imgUrl = "data:image/*;base64," + tempImg

            var elemImg = document.querySelectorAll('.materialboxed');
            window.M.Materialbox.init(elemImg);
        },
    }
</script>

<style scoped>

</style>