<template>
    <div>
        <div class="contain">
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
                    <div class="body-korlap">
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
                              <p>Adalah bantuan produk pinjaman bagi pebisnis yang membutuhkan modal usaha cepat, untuk membantu
                                  dalam meringankan cashflow pebisnis dengan membayarkan invoice yang belum di bayar klien/supplier
                              </p>
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
    }
</script>
