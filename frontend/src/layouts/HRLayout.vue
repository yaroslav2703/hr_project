<template>
    <div class="app-main-layout">
        <Sidebar v-model="isOpen"/>
        <main class="app-content" :class="{full: !isOpen}">
            <div class="app-page">
                <router-view/>
            </div>
        </main>
    </div>
</template>

<script>
    import Sidebar from "@/components/app/hr/Sidebar";
    export default {
        name: "HRLayout",
        data:() => ({
            isOpen: true
        }),
        components: {
            Sidebar
        }
    }
</script>

<style scoped>

</style>