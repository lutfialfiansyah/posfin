<template>
    <div>
        <div class="container">
            <div class="menu-home">
                <router-link to="/"> <p><img class="icon-home" src="../assets/images/outline-home-24-px@3x.png"> HOME</p></router-link>       
            </div>
          <div class="head-korlap">
            <h4>KOORDINATOR LAPANGAN <button type="button" class="close" v-on:click="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></h4>
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
                                        <div class="col-xs-7"><input type="text" v-model="kode_agent" class="form-control" autofocus></div><p>ENTER</p>
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
                                        <div class="col-xs-7"><input type="text" v-model="korlap" class="form-control"></div><p>ENTER</p>
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
                                    <div class="lapkorlap">
                                        <p>Tipe Laporan</p>
                                        <div class="radio-korlap">
                                            <input type="radio" id="rekap" name="selector" checked>
                                            <label for="rekap">Rekap</label>
                                        </div>
                                        <div class="radio-korlap">
                                            <input type="radio" id="user" name="selector">
                                            <label for="user">Detail Per User</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8 col-sm-8">
                                    <div class="form-group">
                                        <label class="control-label col-md-1 col-sm-2">User Korlap</label>
                                        <div class="col-md-5 col-sm-5"><input type="text" class="form-control"></div><button class="btn-refresh">REFRESH USER</button>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-md-1 col-sm-2">Tanggal</label>
                                        <div class="col-md-3 col-sm-3"><date-picker v-model="startdate" :config="options"></date-picker></div><label class="col-md-1 col-sm-1 label-koor">s.d</label><div class="col-md-3 col-sm-3"><date-picker v-model="lastdate" :config="options"></date-picker></div><button class="btn-tampilkan">TAMPILKAN</button>
                                    </div>
                                </div>
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
                      <div id="collapse1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                          <div class="panel-body">
                              <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>KODE USER</th>
                                            <th>KODE AGEN</th>
                                            <th>KD MITRA</th>
                                            <th>NAMA MITRA</th>
                                            <th>JUMLAH</th>
                                            <th>LEMBAR</th>
                                            <th>BESAR UANG</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td></td>
                                        <td>234</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
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
                      <div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                          <div class="panel-body">
                             <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>TANGGAL</th>
                                        <th>KODE AGEN</th>
                                        <th>KD MITRA</th>
                                        <th>NAMA MITRA</th>
                                        <th>JUMLAH</th>
                                        <th>LEMBAR</th>
                                        <th>BESAR UANG</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td></td>
                                    <td>234</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
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
        mounted() {
        if (!this.$session.get('session-id')) {
        this.$router.push({name: 'login'})
        }
      },
        methods: {
            close() {
                this.$router.push('/')
            },
            logout () {
            this.$session.destroy()
            this.$router.push('/login')
        }
        },
    }
</script>
