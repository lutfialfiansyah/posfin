<template>
    <div>
        <div class="container">
            <div class="menu-home">
                <router-link to="/"> <p><img class="icon-home" src="../assets/images/outline-home-24-px@3x.png"> HOME</p></router-link>       
            </div>
          <div class="head-lap">
            <h4>LAPORAN <button type="button" class="close" v-on:click="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></h4>
          </div>
          <div class="menu-recon">
                <ul class="nav nav-tabs">
                    <li class="active"><a  href="#1" data-toggle="tab">SHARING FEE</a></li>
                    <li><a  href="#2" data-toggle="tab">KREDIT FEE AGEN</a></li>
                    <li><a  href="#3" data-toggle="tab">KREDIT FEE AGEN V2</a></li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="1">
                        <div class="body-registrasi">
                          <h5>SHARING FEE</h5>
                            <div class="row">
                                <form class="form-horizontal">
                                    <div class="col-md-12 col-sm-12 korlap">
                                    <div class="col-md-3 col-sm-3 lap">
                                        <div class="lapo">
                                            <p>Jenis Laporan</p>
                                            <div class="radio-korlap">
                                                <input type="radio" id="rekap" v-model="rekap" name="selector" value="5">
                                                <label for="rekap">Rekap Per Agen</label>
                                            </div>
                                            <div class="radio-korlap">
                                                <input type="radio" id="mitra" v-model="rekap" name="selector" >
                                                <label for="mitra">Rekap Per Mitra </label>
                                            </div>
                                            <div class="radio-korlap">
                                                <input type="radio" id="koord" v-model="rekap" name="selector" value="6">
                                                <label for="koord">Rekap Per Koord </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-9 col-sm-9">
                                        <div class="form-group"> 
                                            <label class="control-label col-md-2 col-sm-2">Tanggal</label>
                                            <div class="col-md-2 col-sm-3"><date-picker v-model="startdate" :config="options"></date-picker></div><label class="control-label col-md-1 col-sm-1 laptgls">s.d</label><div class="col-md-2 col-sm-3"><date-picker v-model="lastdate" :config="options"></date-picker> </div><button class="btn-tampil-topup">TAMPILKAN</button>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-2 col-sm-2">Koordinator Agent</label>
                                            <div class="col-md-4 col-sm-4"><v-select v-model="koragent" :options="option" :disabled="rekap == 5"></v-select></div>
                                                <button class="btn-refresh-recon">REFRESH DAFTAR KOORD AGENT</button>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-2 col-sm-2"> Agent</label>
                                            <div class="col-md-4 col-sm-4"><v-select v-model="agent" :options="optio" :disabled="rekap == 6"></v-select></div>
                                                <button class="btn-refresh-recon">REFRESH DAFTAR AGENT</button>
                                        </div>
                                    </div>
                                </div>
                               </form>
                            </div>
                        </div>
                        <div class="lap-korlap">
                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel">
                                    <div class="panel-heading active" role="tab" id="heading1">
                                        <h3 class="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-controls="collapse1">
                                                <h4>REKAP SHARING FEE / MITRA</h4>
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading1">
                                        <div class="panel-body">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>KD MITRA</th>
                                                        <th>NAMA MITRA</th>
                                                        <th>JML TRANS</th>
                                                        <th>LEMBAR</th>
                                                        <th>BSU TRANSAKSI</th>
                                                        <th>BSU FEE</th>
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
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel">
                                    <div class="panel-heading" role="tab" id="heading2">
                                        <h3 class="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                                <h4>REKAP SHARING FEE / KOORDINATOR</h4>
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                                        <div class="panel-body">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>KD MITRA</th>
                                                        <th>NAMA MITRA</th>
                                                        <th>JML TRANS</th>
                                                        <th>LEMBAR</th>
                                                        <th>BSU TRANSAKSI</th>
                                                        <th>BSU FEE</th>
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
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel">
                                    <div class="panel-heading" role="tab" id="heading3">
                                        <h3 class="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="true" aria-controls="collapse3">
                                                <h4>REKAPITULASI SHARING FEE / AGEN</h4>
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                                        <div class="panel-body">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>KD MITRA</th>
                                                        <th>NAMA MITRA</th>
                                                        <th>JML TRANS</th>
                                                        <th>LEMBAR</th>
                                                        <th>BSU TRANSAKSI</th>
                                                        <th>BSU FEE</th>
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
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="2">
                        <div class="body-registrasi">
                         <h5>KREDIT FEE AGEN</h5>
                            <div class="row">
                                <form class="form-horizontal">
                                    <div class="col-md-12 col-sm-12 korlap">
                                    <div class="col-md-3 col-sm-3 lap">
                                        <div class="lapo">
                                            <p>Jenis Laporan</p>
                                            <div class="radio-korlap">
                                                <input type="radio" id="produk" v-model="produk" name="selector" value="1">
                                                <label for="produk">Rekap Agent - Produk </label>
                                            </div>
                                            <div class="radio-korlap">
                                                <input type="radio" id="detail" v-model="produk" name="selector" value="2">
                                                <label for="detail">Detail Per User </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-9 col-sm-9">
                                        <div class="form-group">
                                            <label class="control-label col-md-1 col-sm-2"> Agent</label>
                                            <div class="col-md-5 col-sm-5"><v-select v-model="agent" :options="optio" :disabled="produk == 1"></v-select></div>
                                                <button class="btn-refresh-lap">REFRESH DAFTAR AGENT</button>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-1 col-sm-2">Tanggal</label>
                                            <div class="col-md-3 col-sm-3"><date-picker v-model="startdate" :config="options"></date-picker></div><label class="control-label col-md-1 col-sm-1 laptgls">s.d</label><div class="col-md-3 col-sm-3"><date-picker v-model="lastdate" :config="options"></date-picker> </div><button class="btn-tampil-topup">TAMPILKAN</button>
                                        </div>
                                    </div>
                                  </div>
                                </form>
                            </div>
                        </div>
                        <div class="lap-korlap">
                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel">
                                    <div class="panel-heading active" role="tab" id="heading4">
                                        <h3 class="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="true" aria-controls="collapse4">
                                                <h4>REKAPITULASI SHARING FEE / AGEN</h4>
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse4" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading4">
                                        <div class="panel-body">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>KD MITRA</th>
                                                        <th>NAMA MITRA</th>
                                                        <th>JML TRANS</th>
                                                        <th>LEMBAR</th>
                                                        <th>BSU TRANSAKSI</th>
                                                        <th>BSU FEE</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>A003A</td>
                                                    <td>TAKAFUL (PEMBAYARAN PREMI)</td>
                                                    <td>261</td>
                                                    <td>261</td>
                                                    <td>93,504,000</td>
                                                    <td>522,000</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel">
                                    <div class="panel-heading" role="tab" id="heading5">
                                        <h3 class="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="true" aria-controls="collapse5">
                                                <h4>REKAPITULASI SHARING FEE / AGEN</h4>
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse5" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5">
                                        <div class="panel-body">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>KD MITRA</th>
                                                        <th>NAMA MITRA</th>
                                                        <th>JML TRANS</th>
                                                        <th>LEMBAR</th>
                                                        <th>BSU TRANSAKSI</th>
                                                        <th>BSU FEE</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>A003A</td>
                                                    <td>TAKAFUL (PEMBAYARAN PREMI)</td>
                                                    <td>261</td>
                                                    <td>261</td>
                                                    <td>93,504,000</td>
                                                    <td>522,000</td>
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
                         <h5>KREDIT FEE AGEN V2</h5>
                            <div class="row">
                                <form class="form-horizontal">
                                    <div class="col-md-12 col-sm-12 korlap">
                                    <div class="col-md-3 col-sm-3 lap">
                                        <div class="lapo">
                                            <p>Jenis Laporan</p>
                                            <div class="radio-korlap">
                                                <input type="radio" id="produks" v-model="produks" name="selector" value="3">
                                                <label for="produks">Rekap Agent - Produk </label>
                                            </div>
                                            <div class="radio-korlap">
                                                <input type="radio" id="details" v-model="produks" name="selector" value="4">
                                                <label for="details">Detail Per User </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-9 col-sm-9">
                                        <div class="form-group">
                                            <label class="control-label col-md-1 col-sm-1"> Agent</label>
                                            <div class="col-md-5 col-sm-5"><v-select v-model="agent" :options="opsi" :disabled="produks == 3"></v-select></div>
                                                <button class="btn-refresh-lap">REFRESH DAFTAR AGENT</button>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-1 col-sm-1 laptgl">Tanggal</label>
                                            <div class="col-md-3 col-sm-3"><date-picker v-model="startdate" :config="options"></date-picker></div><label class="control-label col-md-1 col-sm-1 laptgls">s.d</label><div class="col-md-3 col-sm-3"><date-picker v-model="lastdate" :config="options"></date-picker> </div><button class="btn-tampil-topup">TAMPILKAN</button>
                                        </div>
                                    </div>
                                  </div>
                                </form>
                            </div>
                        </div>
                        <div class="lap-korlap">
                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel">
                                    <div class="panel-heading active" role="tab" id="heading6">
                                        <h3 class="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse6" aria-expanded="true" aria-controls="collapse6">
                                                <h4>REKAPITULASI SHARING FEE / AGEN</h4>
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse6" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading6">
                                        <div class="panel-body">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>KDAGENT</th>
                                                        <th>NAMA AGENT</th>
                                                        <th>KD MITRA</th>
                                                        <th>NAMA MITRA</th>
                                                        <th>JML TRANS</th>
                                                        <th>JML BILL</th>
                                                        <th>BSU FEE</th>
                                                        <th>FEE GROSS</th>
                                                        <th>PRODUK</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>2166</td>
                                                    <td>9332459</td>
                                                    <td>619</td>
                                                    <td>612</td>
                                                    <td>2166</td>
                                                    <td>9332459</td>
                                                    <td>65447</td>
                                                    <td>619</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel">
                                    <div class="panel-heading" role="tab" id="heading7">
                                        <h3 class="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                <h4>REKAPITULASI SHARING FEE / AGEN</h4>
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse7" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading7">
                                        <div class="panel-body">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>KD MITRA</th>
                                                        <th>NAMA MITRA</th>
                                                        <th>JML TRANS</th>
                                                        <th>JML BILL</th>
                                                        <th>BSU FEE</th>
                                                        <th>GROSS FEE</th>
                                                        <th>PRODUK MLO</th>
                                                        <th>KETERANGAN</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>122</td>
                                                    <td>2166</td>
                                                    <td>9332459</td>
                                                    <td>619</td>
                                                    <td>612</td>
                                                    <td>64888</td>
                                                    <td>619</td>
                                                    <td>ket</td>
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
import 'vue-select/dist/vue-select.css';

    export default {
        name: 'laporan',
            data() {
            return {
                produks: true,
                details: null,
                detail: null,
                produk: null,
                rekap: true,
                mitra: null,
                koord: null,
                id_user: null,
                noresi: null,
                nopelanggan: null,
                koragent: null,
                agent: null,
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
                    '0011 - Agus',
                    '0012 - Ahmad',
                 ],
                 optio: [
                    '1001 - Ahland',
                    '1002 - Muhamad',
                    '1003 - Sadmin',
                 ],
                 opsi: [
                    '1004 - Ahland',
                    '1005 - Muhamad',
                    '1006 - Sadmin',
                 ],
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
