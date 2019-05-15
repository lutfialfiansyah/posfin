<template>
    <div>
        <div class="container">
          <div class="menu-home">
                <router-link to="/"> <img class="icon-home" src="../assets/images/outline-home-24-px@3x.png"><p>HOME</p></router-link>       
            </div>
          <div class="head-saldo">
            <h4>SALDO AGENT <button type="button" class="close" v-on:click="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></h4>
          </div>
          <div class="body-registrasi">
              <h5>MAINTENANCE SALDO AGEN</h5>
          </div>
          <div class="body-register">
              <ul class="nav nav-tabs">
                    <li><a  href="#" data-toggle="tab" class="disabledTab">OVERBOOKING SALDO</a></li>
                    <li class="active"><a  href="#2" data-toggle="tab">LAPORAN TOP UP</a></li>
                    <li><a  href="#" data-toggle="tab" class="disabledTab">LAPORAN OVERBOOKING</a></li>
                    <li><a  href="#4" data-toggle="tab">REK. KORAN MAIN AGEN</a></li>
              </ul>
             
              <div class="tab-content">
                <div class="tab-pane" id="1">
                        <div class="row">
                             <div class="body-registrasi">
                                <h5>OVER BOOKING SALDO</h5>
                            </div>
                            <form class="form-horizontal">
                              <div class="col-md-12 col-sm-12">
                                <div class="col-md-6 col-sm-6 saldo">
                                    <h5>REKENING ASAL</h5>
                                    <div class="body-saldo">
                                        <div class="form-group">
                                            <label class="control-label col-md-4 col-sm-4">Kode Agent</label>
                                            <div class="col-md-8 col-sm-8"><input type="text" v-model="kode_agent" class="form-control"></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-4 col-sm-4">Virtual Account</label>
                                            <div class="col-md-6 col-sm-5"><input type="text" v-model="va" class="form-control"></div><p>ENTER</p>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-4 col-sm-4">Nama Agent</label>
                                            <div class="col-md-8 col-sm-8"><input type="text" v-model="nama_agent" class="form-control"></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-4 col-sm-4">Posisi Current Saldo Rp.</label>
                                            <div class="col-md-8 col-sm-8"><input type="text" v-model="posisi" class="form-control"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 saldo">
                                     <h5>REKENING TUJUAN</h5>
                                    <div class="body-saldo">
                                        <div class="form-group">
                                            <label class="control-label col-md-4 col-sm-4">Kode Agent</label>
                                            <div class="col-md-8 col-sm-8"><input type="text" v-model="kode_agent" class="form-control"></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-4 col-sm-4">Virtual Account</label>
                                            <div class="col-md-6 col-sm-5"><input type="text" v-model="va" class="form-control"></div><p>ENTER</p>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-4 col-sm-4">Nama Agent</label>
                                            <div class="col-md-8 col-sm-8"><input type="text" v-model="nama_agent" class="form-control"></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-4 col-sm-4">Posisi Current Saldo Rp.</label>
                                            <div class="col-md-8 col-sm-8"><input type="text" v-model="posisi" class="form-control"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-sm-12">
                                    <div class="body-nominal">
                                        <div class="form-group nomi">
                                            <label class="control-label col-md-4 col-sm-4">Besar Uang Rp.</label>
                                            <div class="col-md-8 col-sm-8"><input type="text" v-model="nominal" class="form-control" name="nominal" v-validate="'required|numeric|min:3'" data-vv-as="field" :class="{error: errors.has('nominal')}" style="letter-spacing: 1px"><span class="error" v-if="errors.has('nominal')">{{errors.first('nominal')}}</span></div>
                                        </div>
                                        <div class="form-group nomi">
                                            <label class="control-label col-md-4 col-sm-4">Keterangan</label>
                                            <div class="col-md-8 col-sm-8"><input type="text" v-model="ket" class="form-control"></div>
                                        </div>
                                        <div class="tombol-nominal">
                                            <button type="button" @click="isDisabled = !isDisabled" class="btn-nominals">TAMBAH</button>
                                            <button type="button" class="btn-nominal">BATAL</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane active" id="2">
                    <div class="body-registrasi">
                        <h5>LAPORAN TOP UP</h5>
                        <div class="row">
                            <form class="form-horizontal">
                              <div class="col-md-12 col-sm-12">
                                  <div class="top">
                                      <div class="form-group topup">
                                            <label class="control-label col-md-1 col-sm-1 laptgl">Tanggal</label>
                                            <div class="col-sm-3 col-md-4 col-sm-4"><date-picker v-model="startdate" :config="options"></date-picker></div><label class="control-label col-md-1 col-sm-1 laptgls">s.d</label><div class="col-sm-3 colxs-4"><date-picker v-model="lastdate" :config="options"></date-picker> </div><button class="btn-tampil-topup">TAMPILKAN</button>
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
                                            <h4>REKON SALDO AKHIR</h4>
                                        </a>
                                    </h3>
                                </div>
                                <div id="collapse7" class="panel-collapse collapsein" role="tabpanel" aria-labelledby="heading7">
                                    <div class="panel-body">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>NO</th>
                                                    <th>TANGGAL</th>
                                                    <th>ACCOUNT BUFFER</th>
                                                    <th>NOREF</th>
                                                    <th>JAM</th>
                                                    <th>USER ID</th>
                                                    <th>BESAR UANG</th>
                                                    <th>KETERANGAN</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>2166</td>
                                                <td>9332459</td>
                                                <td>619</td>
                                                <td>612</td>
                                                <td>619</td>
                                                <td>617</td>
                                                <td>612</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="3">
                    <div class="body-registrasi">
                        <h5>LAPORAN OVER BOOKING</h5>
                        <div class="row">
                            <form class="form-horizontal">
                              <div class="col-md-12 col-sm-12">
                                  <div class="top">
                                      <div class="form-group topup">
                                            <label class="control-label col-xs-1 laptgl">Tanggal</label>
                                            <div class="col-sm-3"><date-picker v-model="startdate" :config="options"></date-picker></div><label class="control-label col-xs-1 laptgls">s.d</label><div class="col-sm-3"><date-picker v-model="lastdate" :config="options"></date-picker> </div><button class="btn-tampil-topup">TAMPILKAN</button>
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
                                            <h4>REKON SALDO AKHIR</h4>
                                        </a>
                                    </h3>
                                </div>
                                <div id="collapse7" class="panel-collapse collapsein" role="tabpanel" aria-labelledby="heading7">
                                    <div class="panel-body">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>NO</th>
                                                    <th>TANGGAL</th>
                                                    <th>ACCOUNT BUFFER</th>
                                                    <th>NOREF</th>
                                                    <th>JAM</th>
                                                    <th>USER ID</th>
                                                    <th>BESAR UANG</th>
                                                    <th>KETERANGAN</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>2166</td>
                                                <td>9332459</td>
                                                <td>619</td>
                                                <td>612</td>
                                                <td>619</td>
                                                <td>617</td>
                                                <td>612</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="4">
                    <div class="body-registrasi">
                        <h5>REK. KORAN MAIN AGEN</h5>
                        <div class="row">
                            <form class="form-horizontal">
                              <div class="col-md-12 col-sm-12">
                                  <div class="top">
                                      <div class="form-group topup">
                                            <label class="control-label col-xs-2 laptgl">Account Buffer</label>
                                            <div class="col-xs-5"><input type="text" class="form-control"></div>
                                      </div>
                                      <div class="form-group topup">
                                            <label class="control-label col-xs-2 laptgl">Nama Pemilik</label>
                                            <div class="col-xs-5"><input type="text" placeholder=" PT. Bakti Wasantara Net (BWN)" class="form-control" disabled></div>
                                      </div>
                                      <div class="form-group topup">
                                            <label class="control-label col-xs-2 laptgl">Tanggal</label>
                                            <div class="col-sm-3"><date-picker v-model="startdate" :config="options"></date-picker></div><label class="control-label col-xs-1 laptgls">s.d</label><div class="col-sm-3"><date-picker v-model="lastdate" :config="options"></date-picker> </div><button class="btn-tampil-topup">TAMPILKAN</button>
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
                                            <h4>REK. KORAN MAIN AGEN</h4>
                                        </a>
                                    </h3>
                                </div>
                                <div id="collapse7" class="panel-collapse collapsein" role="tabpanel" aria-labelledby="heading7">
                                    <div class="panel-body">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>ACCOUNT BUFFER</th>
                                                    <th>NOREF</th>
                                                    <th>JNSTRANS</th>
                                                    <th>JAM</th>
                                                    <th>USER ID</th>
                                                    <th>BSU DEBET</th>
                                                    <th>BSU KREDIT</th>
                                                    <th>KETERANGAN</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>1234</td>
                                                <td>2166</td>
                                                <td>topup</td>
                                                <td>619</td>
                                                <td>617</td>
                                                <td>612</td>
                                                <td>617</td>
                                                <td>oke</td>
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
          </div>
        </div>  
    </div>
</template>

<script>
import axios from 'axios'
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

    export default {
        name: 'saldoagent',
        data() {
            return {
                kode_agent: null,
                nama_agent: null,
                va: null,
                posisi: null,
                nominal: null,
                ket: null,
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
        mounted() {
        if (!this.$session.get('session-id')) {
            this.$router.push({name: 'login'})
            }
        },
        methods: {
            close() {
                this.$router.push('/')
            },
        },
    }
</script>
