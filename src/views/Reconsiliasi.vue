<template>
    <div>
        <div class="container">
            <div class="menu-home">
                <router-link to="/"> <p><img class="icon-home" src="../assets/images/outline-home-24-px@3x.png"> HOME</p></router-link>       
            </div>
          <div class="head-recon">
            <h4>REKONSILIASI <button type="button" class="close" v-on:click="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></h4>
          </div>
          <div class="body-registrasi">
            <h5>REKONSILIASI</h5>
            <div class="row">
                <form class="form-horizontal">
                    <div class="col-md-12 col-sm-12 korlap">
                        <div class="tab-content">
                            <div class="tab-pane active" id="saldo">
                                <div class="col-md-3 col-sm-3 lapkor">
                                    <p>Jenis Laporan</p>
                                    <div class="radio-korlap">
                                        <input type="radio" id="rekap" v-model="rekap" name="selector" value="Rekap">
                                        <label for="rekap">Rekap</label>
                                        <input type="hidden" ref="checkToken" :value="this.getToken">
                                    </div>
                                    <div class="radio-korlap">
                                        <input type="radio" id="detail" v-model="rekap" name="selector" value="Detail"> 
                                        <label for="detail">Detail </label>
                                    </div>
                                </div>
                                <div class="col-md-8 col-sm-8">
                                    <div class="form-group">
                                        <label class="control-label col-xs-2">Kode Agent</label>
                                        <div class="col-xs-4"><v-select v-model="select" :options="option" :disabled="rekap == 'Rekap'"></v-select></div>
                                            <button class="btn-refresh-recon">REFRESH USER / AMBIL DAFTAR AGENT</button>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-2">Tanggal</label>
                                        <div class="col-xs-4"><date-picker v-model="startdate" :config="options"></date-picker></div><button type="button" class="btn-tampilkan" v-on:click="tampilsaldo">TAMPILKAN</button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="agen">
                                <div class="col-md-3 col-sm-3 lapkor">
                                    <p>Jenis Laporan</p>
                                    <div class="radio-korlap">
                                        <input type="radio" id="rekap" v-model="rekap" name="selector" value="Rekap">
                                        <label for="rekap">Rekap</label>
                                        <input type="hidden" ref="checkToken" :value="this.getToken">
                                    </div>
                                    <div class="radio-korlap">
                                        <input type="radio" id="detail" v-model="rekap" name="selector" value="Detail"> 
                                        <label for="detail">Detail </label>
                                    </div>
                                </div>
                                <div class="col-md-8 col-sm-8">
                                    <div class="form-group">
                                        <label class="control-label col-xs-2">Kode Agent</label>
                                        <div class="col-xs-4"><v-select v-model="select" :options="option" :disabled="rekap == 'Rekap'"></v-select></div>
                                            <button class="btn-refresh-recon">REFRESH USER / AMBIL DAFTAR AGENT</button>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-2">Tanggal1</label>
                                        <div class="col-xs-4"><date-picker v-model="startdate" :config="options"></date-picker></div><button type="button" class="btn-tampilkan" v-on:click="tampilsaldo">TAMPILKAN</button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="koran">
                                <div class="col-md-3 col-sm-3 lapkor">
                                    <p>Jenis Laporan</p>
                                    <div class="radio-korlap">
                                        <input type="radio" id="rekap" v-model="rekap" name="selector" value="Rekap">
                                        <label for="rekap">Rekap</label>
                                        <input type="hidden" ref="checkToken" :value="this.getToken">
                                    </div>
                                    <div class="radio-korlap">
                                        <input type="radio" id="detail" v-model="rekap" name="selector" value="Detail"> 
                                        <label for="detail">Detail </label>
                                    </div>
                                </div>
                                <div class="col-md-8 col-sm-8">
                                    <div class="form-group">
                                        <label class="control-label col-xs-2">Kode Agent</label>
                                        <div class="col-xs-4"><v-select v-model="select" :options="option" :disabled="rekap == 'Rekap'"></v-select></div>
                                            <button class="btn-refresh-recon">REFRESH USER / AMBIL DAFTAR AGENT</button>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-2">Tanggal2</label>
                                        <div class="col-xs-4"><date-picker v-model="startdate" :config="options"></date-picker></div><button type="button" class="btn-tampilkan" v-on:click="tampilsaldo">TAMPILKAN</button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="rek">
                                <div class="col-md-3 col-sm-3 lapkor">
                                    <p>Jenis Laporan</p>
                                    <div class="radio-korlap">
                                        <input type="radio" id="rekap" v-model="rekap" name="selector" value="Rekap">
                                        <label for="rekap">Rekap</label>
                                        <input type="hidden" ref="checkToken" :value="this.getToken">
                                    </div>
                                    <div class="radio-korlap">
                                        <input type="radio" id="detail" v-model="rekap" name="selector" value="Detail"> 
                                        <label for="detail">Detail </label>
                                    </div>
                                </div>
                                <div class="col-md-8 col-sm-8">
                                    <div class="form-group">
                                        <label class="control-label col-xs-2">Kode Agent</label>
                                        <div class="col-xs-4"><v-select v-model="select" :options="option" :disabled="rekap == 'Rekap'"></v-select></div>
                                            <button class="btn-refresh-recon">REFRESH USER / AMBIL DAFTAR AGENT</button>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-2">Tanggal3</label>
                                        <div class="col-xs-4"><date-picker v-model="startdate" :config="options"></date-picker></div><button type="button" class="btn-tampilkan" v-on:click="tampilsaldo">TAMPILKAN</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
          </div>
          <div class="menu-recon">
                <ul class="nav nav-tabs">
                    <li class="active"><a  href="#1" data-target="#1, #saldo" data-toggle="tab">REKON SALDO AKHIR</a></li>
                    <li><a  href="#2" data-target="#2, #agen" data-toggle="tab">TRANSAKSI AGENCY</a></li>
                    <li><a  href="#3" data-target="#3, #koran" data-toggle="tab">REKENING KORAN</a></li>
                    <li class="disabled"><a  href="#">TRANSAKSI DAN REKENING KORAN</a></li>
                </ul>
          </div>
          <div class="tab-content">
                <div class="tab-pane active" id="1">
                    <div class="lap-korlap">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="panel">
                                <div class="panel-heading active" role="tab" id="heading1">
                                    <h3 class="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            <h4>REKON SALDO AKHIR</h4>
                                        </a>
                                    </h3>
                                </div>
                                <div id="collapse1" class="panel-collapse collapsein" role="tabpanel" aria-labelledby="heading1">
                                    <div class="panel-body">
                                        <div class="col-xs-12">
                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>NO</th>
                                                        <th>KODE AGEN</th>
                                                        <th>NO ACCOUNT</th>
                                                        <th>SALDO AWAL</th>
                                                        <th>SURPLUS-MINUS(DEPOSIT TRANSAKSI)</th>
                                                        <th>SALDO AKHIR</th>
                                                        <th>SALDO TRANSAKSI</th>
                                                        <th>SELISIH</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="(saldo,index) in filtersaldo">
                                                    <td>{{ index + 1 }}</td>
                                                    <td>{{ saldo.KodeAgent }}</td>
                                                    <td>{{ saldo.NoAccount }}</td>
                                                    <td>{{ saldo.SaldoAwal }}</td>
                                                    <td>{{ saldo.DepositTransaksi }}</td>
                                                    <td>{{ saldo.SaldoAkhir }}</td>
                                                    <td>{{ saldo.SaldoTransaksi }}</td>
                                                    <td>{{ saldo.Selisih }}</td>
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
                <div class="tab-pane" id="2">
                    <div class="lap-korlap">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="panel">
                                <div class="panel-heading " role="tab" id="heading3">
                                    <h3 class="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="true" aria-controls="collapse3">
                                            <h4>REKAPITULASI</h4>
                                        </a>
                                    </h3>
                                </div>
                                <div id="collapse3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                                    <div class="panel-body">
                                        <div class="col-xs-12">
                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>NO</th>
                                                        <th>NOSI</th>
                                                        <th>LOKET</th>
                                                        <th>KDAGENT</th>
                                                        <th>TANGGAL</th>
                                                        <th>JAM</th>
                                                        <th>USER ID</th>
                                                        <th>KD MITRA</th>
                                                        <th>ID PELANGGAN</th>
                                                        <th>BESAR UANG</th>
                                                        <th>NO REF</th>
                                                        <th>OPTIONALFIELDS</th>
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
                                                    <td>612</td>
                                                    <td>612</td>
                                                    <td>612</td>
                                                    <td>612</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel">
                                <div class="panel-heading active" role="tab" id="heading4">
                                    <h3 class="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="true" aria-controls="collapse4">
                                            <h4>DETAIL TRANSAKSI</h4>
                                        </a>
                                    </h3>
                                </div>
                                <div id="collapse4" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading4">
                                    <div class="panel-body">
                                        <div class="col-xs-12">
                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>NO</th>
                                                        <th>NOSI</th>
                                                        <th>LOKET</th>
                                                        <th>KDAGENT</th>
                                                        <th>TANGGAL</th>
                                                        <th>JAM</th>
                                                        <th>USER ID</th>
                                                        <th>KD MITRA</th>
                                                        <th>ID PELANGGAN</th>
                                                        <th>BESAR UANG</th>
                                                        <th>NO REF</th>
                                                        <th>OPTIONALFIELDS</th>
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
                                                    <td>612</td>
                                                    <td>612</td>
                                                    <td>612</td>
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
                    </div>
                </div>
                <div class="tab-pane" id="3">
                    <div class="lap-korlap">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="panel">
                                <div class="panel-heading " role="tab" id="heading5">
                                    <h3 class="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="true" aria-controls="collapse5">
                                            <h4>REKAPITULASI REKENING KORAN</h4>
                                        </a>
                                    </h3>
                                </div>
                                <div id="collapse5" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5">
                                    <div class="panel-body">
                                        <div class="col-xs-12">
                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>NO</th>
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
                                                    <td>1</td>
                                                    <td>2166</td>
                                                    <td>9332459</td>
                                                    <td>619</td>
                                                    <td>612</td>
                                                    <td>619</td>
                                                    <td>617</td>
                                                    <td>612</td>
                                                    <td>612</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel">
                                <div class="panel-heading active" role="tab" id="heading6">
                                    <h3 class="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse6" aria-expanded="true" aria-controls="collapse6">
                                            <h4>DETAIL REKENING KORAN</h4>
                                        </a>
                                    </h3>
                                </div>
                                <div id="collapse6" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading6">
                                    <div class="panel-body">
                                        <div class="col-xs-12">
                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>NO</th>
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
                                                    <td>1</td>
                                                    <td>2166</td>
                                                    <td>9332459</td>
                                                    <td>619</td>
                                                    <td>612</td>
                                                    <td>619</td>
                                                    <td>617</td>
                                                    <td>612</td>
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
                    </div>
                </div>
                <div class="tab-pane" id="4">
                    <div class="lap-korlap">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="panel">
                                <div class="panel-heading active" role="tab" id="heading7">
                                    <h3 class="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                            <h4>REKAPITULASI TRANSAKSI DAN REKENING KORAN</h4>
                                        </a>
                                    </h3>
                                </div>
                                <div id="collapse7" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading7">
                                    <div class="panel-body">
                                        <div class="col-xs-12">
                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th rowspan="3">KDAGENT</th>
                                                        <th rowspan="3">ACCOUNT BUFFER</th>
                                                        <th colspan="6">TRANSAKSI KREDIT</th>
                                                        <th colspan="14">TRANSAKSI DEBET</th>
                                                    </tr>
                                                        <tr>
                                                            <th colspan="2">Topup</th>
                                                            <th colspan="2">Rekening Koran</th>
                                                            <th colspan="2">Selisih</th>
                                                            <th colspan="2">Transagency</th>
                                                            <th colspan="2">RK Debet</th>
                                                            <th colspan="2">RK Auto Kredit</th>
                                                            <th colspan="2">Selisih</th>
                                                            <th colspan="2">RK AutoKoreksi kredit</th>
                                                            <th colspan="2">RK AutoKoreksi Debet</th>
                                                            <th colspan="2">Selisih</th>
                                                        </tr>
                                                        <tr>
                                                            <th>trx</th>
                                                            <th>Besar Uang</th>
                                                            <th>trx</th>
                                                            <th>Besar Uang</th>
                                                            <th>trx</th>
                                                            <th>Besar Uang</th>
                                                            <th>trx</th>
                                                            <th>Besar Uang</th>
                                                            <th>trx</th>
                                                            <th>Besar Uang</th>
                                                            <th>trx</th>
                                                            <th>Besar Uang</th>
                                                            <th>trx</th>
                                                            <th>Besar Uang</th>
                                                            <th>trx</th>
                                                            <th>Besar Uang</th>
                                                            <th>trx</th>
                                                            <th>Besar Uang</th>
                                                            <th>trx</th>
                                                            <th>Besar Uang</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>303</td>
                                                    <td>2166</td>
                                                    <td>12</td>
                                                    <td>200</td>
                                                    <td>11</td>
                                                    <td>300</td>
                                                    <td>9</td>
                                                    <td>210</td>
                                                    <td>8</td>
                                                    <td>220</td>
                                                    <td>8</td>
                                                    <td>230</td>
                                                    <td>8</td>
                                                    <td>240</td>
                                                    <td>8</td>
                                                    <td>250</td>
                                                    <td>8</td>
                                                    <td>260</td>
                                                    <td>8</td>
                                                    <td>270</td>
                                                    <td>8</td>
                                                    <td>280</td>
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
    </div>
</template>

<script>
$('.nav-tabs li a').click(function (e) {     
    //get selected href
    var href = $(this).attr('href');    
    
    //set all nav tabs to inactive
    $('.nav-tabs li').removeClass('active');
    
    //get all nav tabs matching the href and set to active
    $('.nav-tabs li a[href="'+href+'"]').closest('li').addClass('active');

    //active tab
    $('.tab-pane').removeClass('active');
    $('.tab-pane'+href).addClass('active');
});

import axios from 'axios'
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import 'vue-select/dist/vue-select.css';
import moment from 'moment';

    export default {
        name: 'reconsiliasi',
        data() {
            return {
                rekap: null,
                detail: null,
                filtersaldo: [],
                getToken: null,
                select: null,
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
                option: [
                    '9332459 KEPU TIMUR',
                    '9332459 KEPU BARAT',
                 ],
            }
        },
        components: {
        datePicker
        },
        mounted() {
            this.getTokenAPI();
            if (!this.$session.get('session-id')) {
            this.$router.push({name: 'login'})
            }
        },
        methods: {
            close() {
                this.$router.push('/')
            },
             getUserAgent(){
               String(this.$session.get('name'))
            },
            BackEndDateFormat: function(date) {
        		return moment(date, 'DD/MM/YYYY').format('YYYYMMDDHHmmss');
            },
            FrontEndDateFormat: function(date) {
        		return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
            },
            getTokenAPI(){
            axios({
                method: 'post',
                url: 'https://gtw-stg.posfin.id/v1/pos/jwt-token',
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
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                }); 
              },
            tampilsaldo(){
                let getToken = this.$refs.checkToken.value;
                let getUserAgent = String(this.$session.get('name'))
                // alert(this.BackEndDateFormat(this.startdate))
               axios({
                    method:'post',
                    url:'https://gtw-stg.posfin.id/v1/pos/rekonsiliasi/saldo-akhir',
                    crossdomain: true, 
                    headers: {
                        "Content-Type": 'application/json',
                        "ESB-JWT": "Token " + getToken,
                    },
                    data: {
                        "TxnRefNo":"APPS01203902",
                        "ChannelId":"APPS01",
                        "ServiceCode": "REKON_SALDO_AKHIR",
                        "RequestTime":"20190224120000",
                        "JenisLaporan": this.rekap,
                        "UserId": getUserAgent,
                        "Tanggal": this.BackEndDateFormat(this.startdate),
                        "Page": 1,
                        "Limit": 10,
                        "IsPaging": "Y"
                        }
                }).then(response => {
                        let datauserakses = response
                        this.filtersaldo = datauserakses.data.Result
                        console.log(this.filtersaldo)
                    });
            }   
        },
    }
</script>
