<template>
    <nav>
        <div class="logo">
            <img src="@/assets/img/favicon.png" alt="Logo" />
            <h1>Tutorino</h1>
        </div>
        <div class="user" id="user_profile">
            <div class="username">Zaloguj się</div>
            <div class="pfp">
                <img src="@/assets/img/user.png" alt="User Profile" />
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Main-Navbar",
};
</script>

<style scoped>
@import "@/assets/css/navbar.css";
</style>