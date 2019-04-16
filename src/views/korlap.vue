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
                    <img class="img-logo" src="../assets/images/logo@3x.png"><h4>BACK OFFICE AGENT</h4>
                <div id="navbar-collapse-02" class="collapse navbar-collapse pull-right">
                <ul class="nav navbar-nav">
                    <li><a href="javascript:void(0)" v-on:click="logout"><img class="icon-menu" src="../assets/images/outline-lock-24-px@3x.png"><p>LOGOUT</p> </a></li>
                    <li><router-link to="/registrasi"> <img class="icon-menu" src="../assets/images/outline-assignment-24-px@3x.png"><p>REGISTRASI</p></router-link></li>
                    <li><router-link to="/registrasi"> <img class="icon-menu" src="../assets/images/outline-table-chart-24-px@3x.png"><p>RECONSILIASI</p></router-link></li>
                    <li><router-link to="/registrasi"> <img class="icon-menu" src="../assets/images/outline-account-balance-wallet-24-px@3x.png"><p>SALDO AGEN</p></router-link></li>
                    <li><router-link to="/registrasi"> <img class="icon-menu" src="../assets/images/outline-class-24-px@3x.png"><p>LAPORAN</p></router-link></li>
                    <li><router-link to="/registrasi"> <img class="icon-menu" src="../assets/images/outline-description-24-px@3x.png"><p>REKAM EXCEL</p></router-link></li>
                    <li><router-link to="/koordinator" class="active"> <img class="icon-menu" src="../assets/images/outline-supervised-user-circle-24-px@3x.png"><p>KOORD LAPANGAN</p></router-link></li>
                    <li><router-link to="/registrasi"> <img class="icon-menu" src="../assets/images/outline-cancel-24-px@3x.png"><p>PEMBATALAN</p></router-link></li>
                    <li><router-link to="/registrasi"> <img class="icon-menu" src="../assets/images/outline-info-24-px@3x.png"><p>TENTANG APP</p></router-link></li>
                    
                </ul>
                </div>
            </div>
        </div>  
        <div class="container">
            <div class="menu-home">
                <router-link to="/home"> <p><img class="icon-home" src="../assets/images/outline-home-24-px@3x.png"> HOME</p></router-link>       
            </div>
          <div class="head-korlap">
            <h4>KOORDINATOR LAPANGAN   X</h4>
          </div>
          <div class="body-register">
                <ul class="nav nav-tabs">
                    <li class="active"><a  href="#1" data-toggle="tab">SETTING AGEN (KORLAP)</a></li>
                    <li><a  href="#2" data-toggle="tab">LAPORAN TRANSAKSI KORLAP</a></li>
                </ul>
              <div class="tab-content">
                <div class="tab-pane active" id="1">
                    <div class="body-registrasi">
                        <h5>RELASI AGEN - KOORDINATOR LAPANGAN</h5>
                        <div class="row">
                            <form class="form-horizontal">
                              <div class="col-md-12 col-sm-12">
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kode Agent</label>
                                        <div class="col-xs-9"><input type="text" v-model="kode_agent" class="form-control" readonly></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Agent</label>
                                        <div class="col-xs-9"><input type="text" v-model="nama_agent" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Alamat</label>
                                        <div class="col-xs-9"><input type="text" v-model="alamat" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3"></label>
                                        <div class="col-xs-9"><input type="text" v-model="alamat" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kota</label>
                                        <div class="col-xs-9"><input type="text" v-model="kota" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama KPRK</label>
                                        <div class="col-xs-9"><input type="text" v-model="nama_kprk" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kontak Person</label>
                                        <div class="col-xs-9"><input type="text" v-model="kontak" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Koordinator Lapangan</label>
                                        <div class="col-xs-9"><input type="text" v-model="korlap" class="form-control" readonly></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Koordinator</label>
                                        <div class="col-xs-9"><input type="text" v-model="nama_korlap" class="form-control"></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group" style="margin-top:480px;">
                                        <label class="control-label col-xs-3">User Last Update</label>
                                        <div class="col-xs-9"><input type="text" v-model="user_update" class="form-control" placeholder=""></div>
                                    </div>
                                </div>
                            </div>
                            <div class="tombol-register">
                                <button type="button" class="btn-register">UPDATE</button>
                                <button type="button" class="btn-register">REKAM</button>
                                <button type="button" class="btn-register">BATAL</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="2">
                    <div class="body-registrasi">
                    <h5>LAPORAN TRANSAKSI KORLAP</h5>
                        <div class="row">
                            <form class="form-horizontal">
                              <div class="col-md-12 col-sm-12 korlap">
                                <div class="col-md-4 col-sm-4">
                                    <div class="radio-korlap">
                                        <input type="radio">
                                        <label class="">Rekap</label>
                                    </div>
                                    <div class="radio-korlap">
                                        <input type="radio">
                                        <label class="">Detail Per User</label>
                                    </div>
                                </div>
                                <div class="col-md-8 col-sm-8">
                                    <div class="form-group">
                                        <label class="control-label col-xs-1">User Korlap</label>
                                        <div class="col-xs-5"><input type="text" class="form-control"></div><button class="btn-refresh">REFRESH USER</button>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-1">Tanggal</label>
                                        <div class="col-xs-3"><date-picker v-model="startdate" :config="options"></date-picker></div><label class="col-xs-1 label-koor">s.d</label><div class="col-xs-3"><date-picker v-model="lastdate" :config="options"></date-picker></div><button class="btn-tampilkan">TAMPILKAN</button>
                                    </div>
                                </div>
                            </div>
                            <div class="tombol-register">
                                <button type="button" class="btn-register">TAMBAH</button>
                                <button type="button" class="btn-register">UBAH</button>
                                <button type="button" class="btn-register">HAPUS</button>
                                <button type="button" class="btn-register">REKAM</button>
                                <button type="button" class="btn-register">BATAL</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <div class="lap-korlap">
              <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <div class="panel">
                      <div class="panel-heading active" role="tab" id="heading1">
                          <h3 class="panel-title">
                              <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                  <h4>LAPORAN REKAP PER-KORLAP</h4>
                              </a>
                          </h3>
                      </div>
                      <div id="collapse1" class="panel-collapse collapsein" role="tabpanel" aria-labelledby="heading1">
                          <div class="panel-body">
                              <p>bagi pebisnis yang membutuhkan modal usaha cepat</p>
                          </div>
                      </div>
                  </div>
                  <div class="panel">
                      <div class="panel-heading active" role="tab" id="heading2">
                          <h3 class="panel-title">
                              <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                  <h4>LAPORAN DETAIL PER-KORLAP</h4>
                              </a>
                          </h3>
                      </div>
                      <div id="collapse2" class="panel-collapse collapsein" role="tabpanel" aria-labelledby="heading2">
                          <div class="panel-body">
                             <p>bagi pebisnis yang membutuhkan modal usaha cepat</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="container">
            <div class="footer">
                <div class="online">
                    <p><img class="icon-footer" src="../assets/images/outline-language-24-px@3x.png"> ONLINE</p>
                </div>
                <div class="ip"> <p>IP Server: 10.33.41.48   Port: 5775</p></div>
                <div class="akun">
                    <p><img class="icon-footer" src="../assets/images/outline-account-circle-24-px@3x.png"> 1001 SIDIK PRAMONO 331000086 ADMIN AGENSI</p>
                </div>
                <div class="date">
                    <p>31/12/2019 12:00:00 AM</p>
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
        name: 'koordinator',
        data() {
            return {
                kode_agent: '',
                nama_agent: '',
                alamat: '',
                kota: '',
                nama_kprk: '',
                kontak: '',
                korlap: '',
                nama_korlap: '',
                user_update: '',
                startdate: new Date(),
                options: {
                format: 'DD/MM/YYYY',
                useCurrent: false,
                },
                lastdate: new Date(),
                options: {
                format: 'DD/MM/YYYY',
                useCurrent: false,
                }
            }
        },
        components: {
        datePicker
        },
        methods: {
            logout () {
            this.$session.destroy()
            this.$router.push('/login')
        }
        },
    }
</script>
