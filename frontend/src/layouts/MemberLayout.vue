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
    import Sidebar from "@/components/app/member/Sidebar";
    export default {
        name: "MemberLayout",
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