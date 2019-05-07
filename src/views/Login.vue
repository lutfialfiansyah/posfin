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
                            <input type="hidden" ref="checkToken" :value="this.getToken">
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
                getToken: '',
                errors: ''
                }
            },
            errors: function (resp) {
            app.errors.push(resp.response.data.msg);
            app.username = null;
            app.password = null;
        },
        mounted() {
            this.getTokenAPI()
            if (this.$session.has('session-id')) {
                this.$router.push('/')
            }
        },
        methods: {
            getTokenAPI(){
            axios({
                method: 'post',
                url: 'https://149.129.242.191/v1/pos/jwt-token',
                crossdomain: true, 
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": 'Basic YWRtaW46Y2hhbmdlbWU=',
                },
                data: {
                }
                }).then(response => {
                    let Token = response.data.Token
                    this.getToken = Token
                    console.log(this.getToken)
                })
            }, 
        login() {
            this.errors = []
            if (this.username == '' ) {
                this.errors.push('Username Harus di isi !')
                return false
            } else if (this.password == '' ) {
                this.errors.push('Password harus di isi !')
                return false
            }
            var app = this
            let getToken = this.$refs.checkToken.value;
            axios({
                method: 'post',
                url: 'https://149.129.242.191/v1/pos/login/boa',
                data: {
                username: this.username,
                password: this.password
                },
                headers: {
                    "Content-Type": 'application/json',
                        "ESB-JWT": "Token " + getToken,
                }
            }).then(function(res){
                    app.$session.set('session-id', res.data.SessionId)
                    app.$session.set('name', res.data.name)
                    app.$router.push('/')
                })
            }
        }
    }
</script>

