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
                    <li><router-link to="/registrasi" class="active"> <img class="icon-menu" src="../assets/images/outline-assignment-24-px@3x.png"><p>REGISTRASI</p></router-link></li>
                    <li><router-link to="/registrasi"> <img class="icon-menu" src="../assets/images/outline-table-chart-24-px@3x.png"><p>RECONSILIASI</p></router-link></li>
                    <li><router-link to="/registrasi"> <img class="icon-menu" src="../assets/images/outline-account-balance-wallet-24-px@3x.png"><p>SALDO AGEN</p></router-link></li>
                    <li><router-link to="/registrasi"> <img class="icon-menu" src="../assets/images/outline-class-24-px@3x.png"><p>LAPORAN</p></router-link></li>
                    <li><router-link to="/registrasi"> <img class="icon-menu" src="../assets/images/outline-description-24-px@3x.png"><p>REKAM EXCEL</p></router-link></li>
                    <li><router-link to="/koordinator"> <img class="icon-menu" src="../assets/images/outline-supervised-user-circle-24-px@3x.png"><p>KOORD LAPANGAN</p></router-link></li>
                    <li><router-link to="/registrasi"> <img class="icon-menu" src="../assets/images/outline-cancel-24-px@3x.png"><p>PEMBATALAN</p></router-link></li>
                    <li><router-link to="/registrasi"> <img class="icon-menu" src="../assets/images/outline-info-24-px@3x.png"><p>TENTANG APP</p></router-link></li>
                    
                </ul>
                </div>
            </div>
        </div>  
      <div class="container">
          <div class="menu-home">
                <router-link to="/home"> <img class="icon-home" src="../assets/images/outline-home-24-px@3x.png"><p>HOME</p></router-link>       
            </div>
          <div class="head-register">
            <h4>REGISTRASI X</h4>
          </div>
          <div class="body-register">
              <ul class="nav nav-tabs">
                    <li class="active"><a  href="#1" data-toggle="tab">USER AKSES</a></li>
                    <li><a  href="#2" data-toggle="tab">KOORDINATOR AGEN</a></li>
                    <li><a  href="#3" data-toggle="tab">PENDAFTARAN AGENT</a></li>
                    <li><a  href="#4" data-toggle="tab">PEMBUKAAN REKENING</a></li>
                    <li><a  href="#5" data-toggle="tab">PETUGAS AGENCY</a></li>
                    <li><a  href="#6" data-toggle="tab">DAFTAR AGENT</a></li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane active" id="1">
                    <div class="body-registrasi">
                        <h5>USER AKSES</h5>
                        <div class="row">
                            <form class="form-horizontal">
                              <div class="col-md-12 col-sm-12">
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID User</label>
                                        <div class="col-xs-9"><input type="text" v-model="id_user" :disabled="isDisabled" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama User</label>
                                        <div class="col-xs-9"><input type="text" v-model="nama" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Password</label>
                                        <div class="col-xs-9"><input type="password" v-model="password" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID Terminal</label>
                                        <div class="col-xs-9"><input type="text" v-model="id_terminal" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">HDD Serial Number</label>
                                        <div class="col-xs-9"><input type="text" v-model="hdd" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Hak Akses</label>
                                        <div class="col-xs-9"><input type="text" v-model="akses" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Email Address</label>
                                        <div class="col-xs-9"><input type="text" v-model="email" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Koordinator Lapangan</label>
                                        <div class="col-xs-9"><input type="text" v-model="korlap" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Koordinator</label>
                                        <div class="col-xs-9"><input type="text" v-model="koordinator" class="form-control"></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Ref User/Kode Koordinator</label>
                                        <div class="col-xs-9"><input type="text" v-model="kode" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Date Last Update</label>
                                        <div class="col-xs-9"><date-picker v-model="lastdate" :config="options"></date-picker></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID User Update</label>
                                        <div class="col-xs-9"><input type="text" v-model="user_update" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID User Update</label>
                                        <div class="col-xs-9"><date-picker v-model="id_update" :config="optionss"></date-picker></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Status Aktif</label>
                                        <div class="col-xs-9"><select class="selectpicker form-control" v-model="status" title="0 - Aktif">
                                            <option value="0">0 - Aktif</option>
                                            <option value="1">1 - NonAktif</option>
                                           </select>
                                         </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tombol-register">
                                <button type="button" @click="isDisabled = !isDisabled" class="btn-register">TAMBAH</button>
                                <button type="button" @click="isDisabled = !isDisabled" class="btn-register">UBAH</button>
                                <button type="button" class="btn-register">HAPUS</button>
                                <button type="button" v-bind:class="{disabled: isDisabled}" class="btn-register">REKAM</button>
                                <button type="button" class="btn-register">BATAL</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="2">
                    <div class="body-registrasi">
                        <h5>KOORDINATOR AGEN</h5>
                        <div class="row">
                            <form class="form-horizontal">
                              <div class="col-md-12 col-sm-12">
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kode Koordinator</label>
                                        <div class="col-xs-9"><input type="text" v-model="kd_koor" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Koordinator</label>
                                        <div class="col-xs-9"><input type="text" v-model="nama_koor" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Alamat</label>
                                        <div class="col-xs-9"><input type="text" v-model="alamat_koor" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3"></label>
                                        <div class="col-xs-9"><input type="text" v-model="alamat_koor" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kota</label>
                                        <div class="col-xs-9"><input type="text" v-model="kota" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Kontak Person</label>
                                        <div class="col-xs-9"><input type="text" v-model="pic" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">No. Telp/HP</label>
                                        <div class="col-xs-9"><input type="text" v-model="no_telp" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Email Address</label>
                                        <div class="col-xs-9"><input type="text" v-model="email_koor" class="form-control"></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Date Last Update</label>
                                        <div class="col-xs-9"><date-picker v-model="lastdate" :config="options"></date-picker></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID User Update</label>
                                        <div class="col-xs-9"><date-picker v-model="id_update" :config="options"></date-picker></div>
                                    </div>
                                </div>
                            </div>
                            <div class="tombol-register">
                                <button type="submit" class="btn-register">TAMBAH</button>
                                <button type="submit" class="btn-register">UBAH</button>
                                <button type="submit" class="btn-register">HAPUS</button>
                                <button type="submit" class="btn-register">REKAM</button>
                                <button type="submit" class="btn-register">BATAL</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="3">
                    <div class="body-registrasi">
                        <h5>PENDAFTARAN AGENT</h5>
                        <div class="row">
                            <form class="form-horizontal">
                              <div class="col-md-12 col-sm-12">
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kode Agent</label>
                                        <div class="col-xs-9"><input type="text" v-model="kode_agent" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Agent</label>
                                        <div class="col-xs-9"><input type="text" v-model="nama_agent" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Alamat</label>
                                        <div class="col-xs-9"><input type="text" v-model="alamat_agent" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3"></label>
                                        <div class="col-xs-9"><input type="text" v-model="alamat_agent" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kota</label>
                                        <div class="col-xs-9"><input type="text" v-model="kota_agent" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kode Pos</label>
                                        <div class="col-xs-9"><input type="text" v-model="kodepos" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Propinsi</label>
                                        <div class="col-xs-9"><input type="text" v-model="propinsi" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">No. Telp/HP</label>
                                        <div class="col-xs-9"><input type="text" v-model="telp" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Email Address</label>
                                        <div class="col-xs-9"><input type="text" v-model="email_agent" class="form-control"></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kontak Person</label>
                                        <div class="col-xs-9"><input type="text" v-model="pic_agent" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">No. Telpon Kontak Person</label>
                                        <div class="col-xs-9"><input type="text" v-model="telp_pic" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Koordinator Agen</label>
                                        <div class="col-xs-9"><input type="text" v-model="koor_agent" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Waktu Regional</label>
                                        <div class="col-xs-9"><input type="text" v-model="waktu" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Status Aktif</label>
                                        <div class="col-xs-9"><input type="text" v-model="status" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">KPRK POS</label>
                                        <div class="col-xs-9"><input type="text" v-model="kprk_pos" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama KPRK</label>
                                        <div class="col-xs-9"><input type="text" v-model="nm_kprk" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Date Last Update</label>
                                        <div class="col-xs-9"><date-picker v-model="lastdate" :config="options"></date-picker></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID User Update</label>
                                        <div class="col-xs-9"><date-picker v-model="id_update" :config="options"></date-picker></div>
                                    </div>
                                </div>
                            </div>
                            <div class="tombol-register">
                                <button type="submit" class="btn-register">TAMBAH</button>
                                <button type="submit" class="btn-register">UBAH</button>
                                <button type="submit" class="btn-register">HAPUS</button>
                                <button type="submit" class="btn-register">REKAM</button>
                                <button type="submit" class="btn-register">BATAL</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="4">
                    <div class="body-registrasi">
                        <h5>PEMBUKAAN REKENING</h5>
                        <div class="row">
                            <form class="form-horizontal">
                              <div class="col-md-12 col-sm-12">
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kode Agent</label>
                                        <div class="col-xs-9"><input type="text" v-model="kode_agent" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Agent</label>
                                        <div class="col-xs-9"><input type="text" v-model="nama_agent" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Account Buffer</label>
                                        <div class="col-xs-9"><input type="text" v-model="account" class="form-control"></div>
                                    </div>
                                </div>
                              </div>
                              <div class="tombol-register">
                                <button type="submit" class="btn-register">TAMBAH</button>
                                <button type="submit" class="btn-register">UBAH</button>
                                <button type="submit" class="btn-register">HAPUS</button>
                                <button type="submit" class="btn-register">REKAM</button>
                                <button type="submit" class="btn-register">BATAL</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="5">
                    <div class="body-registrasi">
                        <h5>PENDAFTARAN PETUGAS</h5>
                        <div class="row">
                            <form class="form-horizontal">
                              <div class="col-md-12 col-sm-12">
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kode Agent</label>
                                        <div class="col-xs-9"><input type="text" v-model="kode_agent" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Agent</label>
                                        <div class="col-xs-9"><input type="text" v-model="nama_agent" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID PETUGAS</label>
                                        <div class="col-xs-9"><input type="text" v-model="id_petugas" readonly class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Petugas</label>
                                        <div class="col-xs-9"><input type="text" v-model="nm_petugas" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Password</label>
                                        <div class="col-xs-9"><input type="text" v-model="password" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID Terminal</label>
                                        <div class="col-xs-9"><input type="text" v-model="id_terminal" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Hak Akses</label>
                                        <div class="col-xs-9"><input type="text" v-model="akses" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Status Aktif</label>
                                        <div class="col-xs-9"><select class="selectpicker form-control" v-model="status" title="0 - Aktif">
                                            <option value="0">0 - Aktif</option>
                                            <option value="1">1 - NonAktif</option>
                                           </select></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Tanggal Expire Petugas</label>
                                        <div class="col-xs-9"><date-picker v-model="tglexptugas" :config="options"></date-picker></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Tanggal Expire Password</label>
                                        <div class="col-xs-9"><date-picker v-model="tglpassword" :config="options"></date-picker></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Tanggal Registrasi</label>
                                        <div class="col-xs-9"><date-picker v-model="tglreg" :config="options"></date-picker></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Last Update</label>
                                        <div class="col-xs-9"><date-picker v-model="lastdate" :config="options"></date-picker></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Last Access</label>
                                        <div class="col-xs-9"><date-picker v-model="lastakses" :config="options"></date-picker></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">HDD Serial Number</label>
                                        <div class="col-xs-9"><input type="text" v-model="hdd" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Email Address</label>
                                        <div class="col-xs-9"><input type="text" v-model="email_petugas" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID User Update</label>
                                        <div class="col-xs-9"><date-picker v-model="id_update" :config="options"></date-picker></div>
                                    </div>
                                </div>
                            </div>
                            <div class="tombol-register">
                                <button type="submit" class="btn-register">TAMBAH</button>
                                <button type="submit" class="btn-register">UBAH</button>
                                <button type="submit" class="btn-register">HAPUS</button>
                                <button type="submit" class="btn-register">REKAM</button>
                                <button type="submit" class="btn-register">BATAL</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="6">
                    <div class="body-registrasi">
                        <div class="row">
                            <button type="button" class="btn-tampil">TAMPILKAN</button>
                        </div>
                        <div class="row">
                              <form class="form-horizontal">
                                <div class="col-md-12 col-sm-12">
                                    <!-- <b-table responsive bordered :items="items"></b-table> -->
                                    <table class="table table-bordered" style="background-color:#fff;">
                                            <thead style="font-weight:bold;" align="center">
                                                <tr>
                                                    <td>NO.</td>
                                                    <td>Kode Agent</td>
                                                    <td>Nama Agent</td>
                                                    <td>Alamat</td>
                                                    <td>Kota</td>
                                                    <td>No.Telpon</td>
                                                    <td>Kontak Nama</td>
                                                    <td>Telpon Kontak</td>
                                                    <td>Account Buffer</td>
                                                    <td>Koord Agent</td>
                                                    <td>KPRK</td>
                                                </tr>
                                            </thead>
                                        <tbody  >
                                            <tr>
                                                <td>1.</td>
                                                <td>KA0001</td>
                                                <td>Say</td>
                                                <td>Jl. Raya Bendungan</td>
                                                <td>Bogor</td>
                                                <td>089991231231</td>
                                                <td>Saya</td>
                                                <td>023432</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                              </form>
                        </div>
                    </div>   
                </div>
                
             </div>
          </div>
      </div>  
    </div>
</template>

<script lang="ts">
import axios from 'axios'
import datePicker from 'vue-bootstrap-datetimepicker';
 import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

    export default {
        name: 'registrasi',
        data () {
            return {
                isDisabled: true, 
                id_user: '',
                nama: '',
                password: '',
                id_terminal: '',
                hdd: '',
                akses: '',
                email: '',
                korlap: '',
                koordinator: '',
                kode: '',
                user_update: '',
                status: '',
                kd_koor: '',
                nama_koor: '',
                alamat_koor: '',
                kota: '',
                pic: '',
                no_telp: '',
                email_koor: '',
                kode_agent: '',
                nama_agent: '',
                kota_agent: '',
                alamat_agent: '',
                kodepos: '',
                propinsi: '',
                telp: '',
                email_agent: '',
                email_petugas: '',
                pic_agent: '',
                telp_pic: '',
                koor_agent: '',
                waktu: '',
                kprk_pos: '',
                nm_kprk: '',
                account: '',
                lastakses: '',
                id_petugas: '',
                nm_petugas: '',
                tglexptugas: '',
                tglpassword: '',
                tglreg: '',
                id_update: new Date(),
                optionss: {
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
        // computed: {
        //     isDisabled() {
        //         if (this.nama.length > 3 && this.password.length > 4  && this.id_terminal.length > 3 && this.hdd.length > 3 && this.akses.length > 3 && this.email.length > 5 && this.korplap.length > 3 ){
        //         return false
        //         }else{
        //         return true
        //         }
        //     }
        // },
    
    }
</script>
