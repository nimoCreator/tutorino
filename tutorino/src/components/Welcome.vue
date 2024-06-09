<template>
    <div class="welcome">
        <message>Witaj na Tutorino!</message>
        <span class="desc">
            Tutaj znajedziesz korepetytorów z pasją, zorganizujesz swoje zajęcia i
            uregulujesz wszystkie należności w jednym miejsciu, w parę kliknięć!
        </span>
        <button id="find_button">🔍 Znajdź Korepetytora</button>
    </div>
    <img src="@/assets/img/bulb.png">
</template>

<script>
export default {
    name: "Main-Welcome",
};
</script>

<style scoped>
@import "@/assets/css/base.css";
@import "@/assets/css/welcome.css";
@import "@/assets/css/scrollbar.css";
</style>