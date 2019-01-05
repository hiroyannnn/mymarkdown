<template>
    <div id="home">
        <h1><img alt="MyMarkdown" src="../assets/logo.png"></h1>
        <button @click="googleLogin">Googleアカウントでログイン</button>
        <div>
            <router-link :to="{ name:'terms'}">利用規約</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "home",
    data(){
        return{
            msg:"welcome to My Markdown"
        };
    },
    methods:{
        googleLogin: function(){
            firebase
            .auth()
            .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
        }
    }
};
</script>