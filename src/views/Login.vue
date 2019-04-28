<template>
    <div class="login">
        <div class="body-login">
            <div class="box-login">
                <div class="isi-login">
                    <div class="head-login">
                        <img class="img-fin-login" src="../assets/images/logo-pos-fin-new@3x.png"><img class="img-login" src="../assets/images/logo@3x.png"><br>
                        <p>BACK OFFICE AGENT</p>
                    </div>
                    <div class="alert alert-danger" v-for="error in errors">
                        <p>{{ error }}</p>
                    </div>
                    <form role="form" @submit.prevent="login">
                        <div class="form-login">
                            <label class="col-xs-3">Username</label>
                            <div class="col-xs-9"><input type="text" name="username" v-model="username" class="form-control"></div>
                        </div>
                        <div class="form-login">
                            <label class="col-xs-3">Password</label>
                            <div class="col-xs-9"><input type="password" name="password" v-model="password" class="form-control"></div>
                        </div>
                        <div class="foot-login">
                            <router-link to="/lupapassword"><p>Lupa Password?</p></router-link>
                            <button type="submit" class="btn-login"><img class="icon-home" src="../assets/images/outline-open-in-browser-24-px@3x.png"> MASUK</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'login',
        data: function () {
            return {
            username: null,
            password: null,
            sukses: null,
            errors: null
            }
        },
        errors: function (resp) {
        app.errors.push(resp.response.data.msg);
        app.username = null;
        app.password = null;
    },
        mounted() {
            if (this.$session.has('2')) {
                this.$router.push('/')
            }
        },

        methods: {
        login() {
            this.errors = []
            if (this.username == null ) {
                this.errors.push('Username Harus di isi !')
                return false
            } else if (this.password == null ) {
                this.errors.push('Password harus di isi !')
                return false
            }
            var app = this
            app.$router.push('/')
         }
        }
    }
</script>

