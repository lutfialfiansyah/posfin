<template>
    <div>
        <div class="container">
            <div class="body-login">
                <div class="box-login">
                    <div class="isi-login">
                        <form>
                            <div class="text-login">
                                <h2>SOPP POS VERSI 4.0.5.0</h2>
                                <p>Masukan User ID dan Password untuk menggunakan aplikasi ini</p>
                                <div class="form-login">
                                    <tr><td><h3>User ID</h3></td>&nbsp;&nbsp;<td><input type="text" class="form-control frm"></td></tr>
                                    <tr><td><h3>Password</h3></td>&nbsp;&nbsp;<td><input type="text" class="form-control frm"></td></tr>
                                </div>
                            </div>
                            <div class="tombol-login">
                                <router-link to="/home">
                                    <button type="submit" class="btn-login">Login</button>
                                </router-link>
                            </div>
                            <div class="foot-login">
                                <h5>System Siap Untuk Login</h5>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login'
    }
</script>

