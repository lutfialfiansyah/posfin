<template>
    <div>
        <div class="container">
            <div class="main-header">
                <button data-target="#navbar-collapse-02" data-toggle="collapse" class="navbar-toggle" type="button">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    <a class="btn responsive-menu pull-right" data-toggle="collapse" data-target=".navbar-collapse"><i class='icon-menu-1'></i></a>
                    <img class="img-fin" src="../assets/images/logo-pos-fin-new@3x.png"><img class="img-logo" src="../assets/images/logo@3x.png"><h4>BACK OFFICE AGENT</h4>
                <div id="navbar-collapse-02" class="collapse navbar-collapse pull-right">
                <ul class="nav navbar-nav">
                    <li><a href="javascript:void(0)" v-on:click="logout"><img class="icon-menu" src="../assets/images/outline-lock-24-px@3x.png"><p>LOGOUT</p> </a></li>
                    <li><router-link to="/registrasi"> <img class="icon-menu" src="../assets/images/outline-assignment-24-px@3x.png"><p>REGISTRASI</p></router-link></li>
                    <li><router-link to="/reconsiliasi"> <img class="icon-menu" src="../assets/images/outline-table-chart-24-px@3x.png"><p>REKONSILIASI</p></router-link></li>
                    <li><router-link to="/saldoagent"> <img class="icon-menu" src="../assets/images/outline-account-balance-wallet-24-px@3x.png"><p>SALDO AGEN</p></router-link></li>
                    <li><router-link to="/laporan"> <img class="icon-menu" src="../assets/images/outline-class-24-px@3x.png"><p>LAPORAN</p></router-link></li>
                    <li><router-link to="#"> <img class="icon-menu" src="../assets/images/outline-description-24-px@3x.png"><p>REKAM EXCEL</p></router-link></li>
                    <li><router-link to="/koordinator"> <img class="icon-menu" src="../assets/images/outline-supervised-user-circle-24-px@3x.png"><p>KOORD LAPANGAN</p></router-link></li>
                    <li><router-link to="/pembatalan" class="active"> <img class="icon-menu" src="../assets/images/outline-cancel-24-px@3x.png"><p>PEMBATALAN</p></router-link></li>
                    <li><router-link to="/about"> <img class="icon-menu" src="../assets/images/outline-info-24-px@3x.png"><p>TENTANG APP</p></router-link></li>
                </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="menu-home">
                    <router-link to="/"> <img class="icon-home" src="../assets/images/outline-home-24-px@3x.png"><p>HOME</p></router-link>       
                </div>
            <div class="head-saldo">
                <h4>PEMBATALAN <button type="button" class="close" v-on:click="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></h4>
            </div>
            <div class="body-registrasi">
                <h5>PEMBATALAN TRANSAKSI</h5>
                <div class="row">
                    <form class="form-horizontal">
                        <div class="col-md-12 col-sm-12">
                            <div class="col-md-6 col-sm-6">
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-sm-3">ID User</label>
                                    <div class="col-md-9 col-sm-9"><input type="text" v-model="id_user" class="form-control"></div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-sm-3">Nomor Resi</label>
                                    <div class="col-md-9 col-sm-9"><input type="text" v-model="noresi" class="form-control"></div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-sm-3">No. Pelanggan / No. Barcode</label>
                                    <div class="col-md-9 col-sm-9"><input type="text" v-model="nopelanggan" class="form-control" disabled></div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="proses">
                                    <button type="button" class="btn-register">PROSES</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="lap-korlap">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel">
                        <div class="panel-heading active" role="tab" id="heading7">
                            <h3 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                    <h4>PEMBATALAN TRANSAKSI</h4>
                                </a>
                            </h3>
                        </div>
                        <div id="collapse7" class="panel-collapse collapsein" role="tabpanel" aria-labelledby="heading7">
                            <div class="panel-body">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>TANGGAL</th>
                                            <th>NOSI</th>
                                            <th>KD AGENT</th>
                                            <th>KDMITRA</th>
                                            <th>NO. BARCODE</th>
                                            <th>BESAR UANG</th>
                                            <th>KETERANGAN</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>2166</td>
                                        <td>9332459</td>
                                        <td>2001</td>
                                        <td>619</td>
                                        <td>617</td>
                                        <td>612</td>
                                        <td>okeey</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="body-registrasi">
                <h5> TRANSAKSI PENGGANTI</h5>
                <div class="row">
                    <form class="form-horizontal">
                        <div class="col-md-12 col-sm-12">
                            <div class="col-md-6 col-sm-6">
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-sm-3">Nomor Resi</label>
                                    <div class="col-md-9 col-sm-9"><input type="text" v-model="noresi" class="form-control"></div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-sm-3">No. Pelanggan </label>
                                    <div class="col-md-9 col-sm-9"><input type="text" v-model="nopelanggan" class="form-control" disabled></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="lap-korlap">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel">
                        <div class="panel-heading active" role="tab" id="heading7">
                            <h3 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                    <h4> TRANSAKSI PENGGANTI</h4>
                                </a>
                            </h3>
                        </div>
                        <div id="collapse7" class="panel-collapse collapsein" role="tabpanel" aria-labelledby="heading7">
                            <div class="panel-body">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>TANGGAL</th>
                                            <th>NOSI</th>
                                            <th>KD AGENT</th>
                                            <th>KDMITRA</th>
                                            <th>NO. BARCODE</th>
                                            <th>BESAR UANG</th>
                                            <th>KETERANGAN</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>2166</td>
                                        <td>9332459</td>
                                        <td>2001</td>
                                        <td>619</td>
                                        <td>617</td>
                                        <td>612</td>
                                        <td>okeey</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

    export default {
        name: 'pembatalan',
        data() {
            return {
                id_user: null,
                noresi: null,
                nopelanggan: null,
                startdate: new Date(),
                options: {
                format: 'DD/MM/YYYY',
                useCurrent: false,
                },
                lastdate: new Date(),
                options: {
                format: 'DD/MM/YYYY',
                useCurrent: false,
                },
                
            }
        },
        components: {
        datePicker
        },
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
