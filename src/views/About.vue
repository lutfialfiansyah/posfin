<template>
    <div>
        <div class="container">
            <div class="menu-home">
                    <router-link to="/"> <img class="icon-home" src="../assets/images/outline-home-24-px@3x.png"><p>HOME</p></router-link>       
                </div>
            <div class="head-saldo">
                <h4>TENTANG APP <button type="button" class="close" v-on:click="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></h4>
            </div>
            <div class="body-registrasi">
                <h5>TENTANG APLIKASI</h5>
            </div>
            <div class="body-dashboard">
                <h3>APLIKASI BACKOFFICE AGENCY</h3>
                <p>VERSI 1.2.3 [20-06-2012]</p>
                <div class="body-about">
                    <h6>SOPP POS OFFICIAL WEBSITE</h6>
                    <h6>AUTHOR</h6>
                </div>
            </div>
            <div class="foot-dashboard">
                <p>POSFIN <i class="glyphicon glyphicon-copyright-mark"></i> 2019 , subsidiary of PT. Pos Indonesia , all right reserved.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'about',
        methods: {
            close() {
                this.$router.push('/')
            },
            logout () {
            this.$session.destroy()
            this.$router.push('/login')
            },
        },
    }
</script>
