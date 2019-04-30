<template>
    <div>
      <div class="container">
          <div class="menu-home">
                <router-link to="/"> <img class="icon-home" src="../assets/images/outline-home-24-px@3x.png"><p>HOME</p></router-link>       
            </div>
          <div class="head-register">
            <h4>REGISTRASI <button type="button" class="close" v-on:click="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></h4>
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
                                            <div class="col-xs-7"><input type="text" v-model="id_user" class="form-control" autofocus></div><p>ENTER</p>
                                        </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: errors.has('nama')}">
                                                <label class="control-label col-xs-3">Nama User</label>
                                                <div class="col-xs-9"><input type="text" name="nama" v-model="nama" v-validate="'required|min:4'" data-vv-as="field" class="form-control" :class="{error: errors.has('nama')}"><span class="error" v-if="errors.has('nama')">{{errors.first('nama')}}</span></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: errors.has('password')}"></div>
                                            <label class="control-label col-xs-3">Password</label>
                                            <div class="col-xs-9"><input type="password" name="password" v-validate="'required|min:5'" data-vv-as="field" v-model="password" class="form-control" :class="{error: errors.has('password')}"><span class="error" v-if="errors.has('password')">{{errors.first('password')}}</span></div>
                                        </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: errors.has('id')}">
                                                <label class="control-label col-xs-3">ID Terminal</label>
                                            <div class="col-xs-9"><input type="text" name="id" v-validate="'required|numeric|min:3'" data-vv-as="field" v-model="id_terminal" class="form-control" placeholder="- - - - -" :class="{error: errors.has('id')}"><span class="error" v-if="errors.has('id')">{{errors.first('id')}}</span></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: errors.has('hdd')}">
                                                <label class="control-label col-xs-3">HDD Serial Number</label>
                                                <div class="col-xs-9"><input type="text" name="hdd" v-validate="'required|max:4'" data-vv-as="field" v-model="hdd" class="form-control" :class="{error: errors.has('hdd')}"><span class="error" v-if="errors.has('hdd')">{{errors.first('hdd')}}</span></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-xs-3">Hak Akses</label>
                                            <div class="col-xs-9"><v-select v-model="akses" :options="opti"></v-select></div>
                                        </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: errors.has('email')}">
                                                <label class="control-label col-xs-3">Email Address</label>
                                                <div class="col-xs-9"><input type="text" name="email" v-validate="'required|email'" data-vv-as="field" v-model="email" class="form-control" :class="{error: errors.has('email')}"><span class="error" v-if="errors.has('email')">{{errors.first('email')}}</span></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: errors.has('korlap')}">
                                                <label class="control-label col-xs-3">Koordinator Lapangan</label>
                                                <div class="col-xs-9"><input type="text" name="korlap" v-validate="'required|min:3'" data-vv-as="field" v-model="korlap" class="form-control" :class="{error: errors.has('korlap')}"><span class="error" v-if="errors.has('korlap')">{{errors.first('korlap')}}</span></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: errors.has('koordinator')}">
                                                <label class="control-label col-xs-3">Nama Koordinator</label>
                                                <div class="col-xs-9"><input type="text" name="koordinator" v-validate="'required|min:3'" data-vv-as="field" v-model="koordinator" class="form-control" :class="{error: errors.has('koordinator')}"><span class="error" v-if="errors.has('koordinator')">{{errors.first('koordinator')}}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <div class="field" :class="{error: errors.has('koordinator')}">
                                                <label class="control-label col-xs-3">Ref User/Kode Koordinator</label>
                                                <div class="col-xs-9"><input type="text" name="kode" v-model="kode" v-validate="'required'" data-vv-as="field" class="form-control" :class="{error: errors.has('kode')}"><span class="error" v-if="errors.has('kode')">{{errors.first('kode')}}</span></div>
                                            </div>
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
                                            <label class="control-label col-xs-3">Date Last Akses</label>
                                            <div class="col-xs-9"><date-picker v-model="lastakses" :config="options"></date-picker></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-xs-3">Status Aktif</label>
                                            <div class="col-xs-9"><v-select v-model="status" :options="option" name="status" v-validate="'required'" data-vv-as="selected" :class="{error: errors.has('status')}"></v-select><span class="error" v-if="errors.has('status')">{{errors.first('status')}}</span></v-select></div>
                                        
                                        </div>
                                    </div>
                                  
                            </div>
                            <div class="tombol-register">
                                <button type="button" class="btn-register">TAMBAH</button>
                                <button type="button" @click="isDisabled = !isDisabled" class="btn-register">UBAH</button>
                                <button type="button" class="btn-register">HAPUS</button>
                                <button type="button" v-on:click.prevent="addUserAkses" class="btn-register">REKAM</button>
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
                                        <div class="col-xs-7"><input type="text" v-model="kd_koor" class="form-control"></div><p>ENTER</p>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Koordinator</label>
                                        <div class="col-xs-9"><input type="text" name="nama_koor" v-model="nama_koor" v-validate="'required|min:3'" data-vv-as="field" class="form-control" :class="{error: errors.has('nama_koor')}"><span class="error" v-if="errors.has('nama_koor')">{{errors.first('nama_koor')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Alamat</label>
                                        <div class="col-xs-9"><input type="text" name="alamat_koor"  v-model="alamat_koor" class="form-control" v-validate="'required|min:3'" data-vv-as="field" :class="{error: errors.has('alamat_koor')}"><span class="error" v-if="errors.has('alamat_koor')">{{errors.first('alamat_koor')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3"></label>
                                        <div class="col-xs-9"><input type="text" v-model="alamat_koors" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kota</label>
                                        <div class="col-xs-9"><input type="text" name="kota" v-model="kota" class="form-control" v-validate="'required|min:3'" data-vv-as="field" :class="{error: errors.has('kota')}"><span class="error" v-if="errors.has('kota')">{{errors.first('kota')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Kontak Person</label>
                                        <div class="col-xs-9"><input type="text" v-model="pic" name="pic" class="form-control" v-validate="'required|min:3'" data-vv-as="field" :class="{error: errors.has('pic')}"><span class="error" v-if="errors.has('pic')">{{errors.first('pic')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">No. Telp/HP</label>
                                        <div class="col-xs-9"><input type="text" name="no_telp" v-model="no_telp" class="form-control" v-validate="'required|numeric|max:12'" data-vv-as="field" :class="{error: errors.has('no_telp')}"><span class="error" v-if="errors.has('no_telp')">{{errors.first('no_telp')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Email Address</label>
                                        <div class="col-xs-9"><input type="text" name="email_koor" v-model="email_koor" class="form-control" v-validate="'required|email'" data-vv-as="field" :class="{error: errors.has('email_koor')}"><span class="error" v-if="errors.has('email_koor')">{{errors.first('email_koor')}}</span></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group"> 
                                        <label class="control-label col-xs-3">Date Last Update</label>
                                        <div class="col-xs-9"><date-picker v-model="lastdate" :config="options"></date-picker></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID User Update</label>
                                        <div class="col-xs-9"><input type="text" name="id_user" v-model="id_user" placeholder="12345" class="form-control" v-validate="'required|min:3'" data-vv-as="field" :class="{error: errors.has('id_user')}"><span class="error" v-if="errors.has('id_user')">{{errors.first('id_user')}}</span></div>
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
                <div class="tab-pane" id="3">
                    <div class="body-registrasi">
                        <h5>PENDAFTARAN AGENT</h5>
                        <div class="row">
                            <form class="form-horizontal">
                              <div class="col-md-12 col-sm-12">
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kode Agent</label>
                                        <div class="col-xs-7"><input type="text" v-model="kode_agent" class="form-control"></div><p>ENTER</p>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Agent</label>
                                        <div class="col-xs-9"><input type="text" v-model="nama_agent" class="form-control" name="nama_agent" v-validate="'required|min:3'" data-vv-as="field" :class="{error: errors.has('nama_agent')}"><span class="error" v-if="errors.has('nama_agent')">{{errors.first('nama_agent')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Alamat</label>
                                        <div class="col-xs-9"><input type="text" v-model="alamat_agent" class="form-control" name="alamat_agent" v-validate="'required|min:3'" data-vv-as="field" :class="{error: errors.has('alamat_agent')}"><span class="error" v-if="errors.has('alamat_agent')">{{errors.first('alamat_agent')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3"></label>
                                        <div class="col-xs-9"><input type="text" v-model="alamat_agents" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kota</label>
                                        <div class="col-xs-9"><input type="text" v-model="kota_agent" class="form-control" name="kota_agent" v-validate="'required|min:3'" data-vv-as="field" :class="{error: errors.has('kota_agent')}"><span class="error" v-if="errors.has('kota_agent')">{{errors.first('kota_agent')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kode Pos</label>
                                        <div class="col-xs-9"><input type="text" v-model="kodepos" class="form-control" name="kodepos" v-validate="'required|min:3'" data-vv-as="field" :class="{error: errors.has('kodepos')}"><span class="error" v-if="errors.has('kodepos')">{{errors.first('kodepos')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Propinsi</label>
                                        <div class="col-xs-9"><input type="text" v-model="propinsi" class="form-control" name="propinsi" v-validate="'required|min:3'" data-vv-as="field" :class="{error: errors.has('propinsi')}"><span class="error" v-if="errors.has('propinsi')">{{errors.first('propinsi')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">No. Telp/HP</label>
                                        <div class="col-xs-9"><input type="text" v-model="telp" class="form-control" name="telp" v-validate="'required|max:12'" data-vv-as="field" :class="{error: errors.has('telp')}"><span class="error" v-if="errors.has('telp')">{{errors.first('telp')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Email Address</label>
                                        <div class="col-xs-9"><input type="text" v-model="email_agent" class="form-control" name="email_agent" v-validate="'required|email'" data-vv-as="field" :class="{error: errors.has('email_agent')}"><span class="error" v-if="errors.has('email_agent')">{{errors.first('email_agent')}}</span></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kontak Person</label>
                                        <div class="col-xs-9"><input type="text" v-model="pic_agent" class="form-control" name="pic_agent" v-validate="'required|min:3'" data-vv-as="field" :class="{error: errors.has('pic_agent')}"><span class="error" v-if="errors.has('pic_agent')">{{errors.first('pic_agent')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">No. Telpon Kontak Person</label>
                                        <div class="col-xs-9"><input type="text" v-model="telp_pic" class="form-control" name="telp_pic" v-validate="'required|max:12'" data-vv-as="field" :class="{error: errors.has('telp_pic')}"><span class="error" v-if="errors.has('telp_pic')">{{errors.first('telp_pic')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Koordinator Agen</label>
                                        <div class="col-xs-5"><v-select v-model="koor_agent" :options="opsi_koor"></v-select></div><button type="button" class="btn-refresh-reg">REFRESH</button>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Waktu Regional</label>
                                        <div class="col-xs-9"><v-select v-model="waktu" :options="opsi_waktu"></v-select></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Status Aktif</label>
                                        <div class="col-xs-9"><v-select v-model="status" :options="option" title="0 - Aktif"></v-select></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">KPRK POS</label>
                                        <div class="col-xs-7"><input type="text" v-model="kprk_pos" class="form-control"></div><p>ENTER</p>
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
                                        <div class="col-xs-9"><input type="text" v-model="id_update" class="form-control" name="id_update" v-validate="'required|min:3'" data-vv-as="field" :class="{error: errors.has('id_update')}"><span class="error" v-if="errors.has('id_update')">{{errors.first('id_update')}}</span></div>
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
                <div class="tab-pane" id="4">
                    <div class="body-registrasi">
                        <h5>PEMBUKAAN REKENING</h5>
                        <div class="row">
                            <form class="form-horizontal">
                              <div class="col-md-12 col-sm-12">
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kode Agent</label>
                                        <div class="col-xs-7"><input type="text" v-model="kode_agent" class="form-control"></div><p>ENTER</p>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Agent</label>
                                        <div class="col-xs-9"><input type="text" v-model="nama_agent_rek" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Account Buffer</label>
                                        <div class="col-xs-9"><input type="text" v-model="account" class="form-control" readonly></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Virtual Account</label>
                                        <div class="col-xs-9"><input type="text" v-model="va" class="form-control" readonly></div>
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
                <div class="tab-pane" id="5">
                    <div class="body-registrasi">
                        <h5>PENDAFTARAN PETUGAS</h5>
                        <div class="row">
                            <form class="form-horizontal">
                              <div class="col-md-12 col-sm-12">
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kode Agent</label>
                                        <div class="col-xs-7"><input type="text" v-model="kode_agent" class="form-control"></div><p>ENTER</p>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Agent</label>
                                        <div class="col-xs-9"><input type="text" v-model="nama_agent_petugas" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID PETUGAS</label>
                                        <div class="col-xs-7"><input type="text" v-model="id_petugas" class="form-control"></div><p>ENTER</p>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Petugas</label>
                                        <div class="col-xs-9"><input type="text" v-model="nm_petugas" class="form-control" name="nm_petugas" v-validate="'required|min:3'" data-vv-as="field" :class="{error: errors.has('nm_petugas')}"><span class="error" v-if="errors.has('nm_petugas')">{{errors.first('nm_petugas')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Password</label>
                                        <div class="col-xs-9"><input type="text" v-model="password" class="form-control" name="password" v-validate="'required|min:5'" data-vv-as="field" :class="{error: errors.has('password')}"><span class="error" v-if="errors.has('password')">{{errors.first('password')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID Terminal</label>
                                        <div class="col-xs-9"><input type="text" v-model="id_terminal" class="form-control" placeholder="- - - -" name="id_terminal" v-validate="'required|min:3'" data-vv-as="field" :class="{error: errors.has('id_terminal')}"><span class="error" v-if="errors.has('id_terminal')">{{errors.first('id_terminal')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Hak Akses</label>
                                        <div class="col-xs-9"><v-select v-model="akses" :options="opti" name="status" v-validate="'required'" data-vv-as="selected" :class="{error: errors.has('status')}"></v-select><span class="error" v-if="errors.has('status')">{{errors.first('status')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Status Aktif</label>
                                        <div class="col-xs-9"><v-select v-model="status" :options="option"></v-select></div>
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
                                        <div class="col-xs-9"><input type="text" v-model="hdd" class="form-control" name="id_update" v-validate="'required|min:3'" data-vv-as="field" :class="{error: errors.has('id_update')}"><span class="error" v-if="errors.has('id_update')">{{errors.first('id_update')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Email Address</label>
                                        <div class="col-xs-9"><input type="text" v-model="email_petugas" class="form-control" name="id_update" v-validate="'required|min:3'" data-vv-as="field" :class="{error: errors.has('id_update')}"><span class="error" v-if="errors.has('id_update')">{{errors.first('id_update')}}</span></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID User Update</label>
                                        <div class="col-xs-9"><input type="text" v-model="id_update" class="form-control" name="id_update" v-validate="'required|min:3'" data-vv-as="field" :class="{error: errors.has('id_update')}"><span class="error" v-if="errors.has('id_update')">{{errors.first('id_update')}}</span></div>
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
                <div class="tab-pane" id="6">
                    <div class="body-registrasi">
                         <h5>DAFTAR AGENT</h5>
                        <div class="row">
                              <form class="form-horizontal">
                                <div class="col-md-12 col-sm-12">
                                    <div class="top">
                                        <div class="form-group">
                                            <label class="control-label col-xs-1">Filter</label>
                                            <div class="col-md-3 col-sm-5 col-xs-8"><v-select v-model="searchno" :options="optio" title="No"></v-select> </div>
                                            <div class="col-sm-3"><input type="text" class="form-control"></div><button class="btn-tampil-topup"  @click="filterDaftarAgen()">TAMPILKAN</button>
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
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            <h4>DAFTAR AGENT</h4><button class="btn-delete"><i class="glyphicon glyphicon-trash"></i>&nbsp;&nbsp; DELETE</button>
                                        </a>
                                    </h3>
                                </div>
                                <div id="collapse1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                                    <div class="panel-body">
                                        <div class="col-xs-12">
                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>No</th>
                                                            <th>KD AGENT</th>
                                                            <th>NAMA AGENT</th>
                                                            <th>ALAMAT</th>
                                                            <th>KOTA</th>
                                                            <th>NO. TELEPON</th>
                                                            <th>KONTAK NAMA</th>
                                                            <th>TELEPON KONTAK</th>
                                                            <th>ACCOUNT BUFFER</th>
                                                            <th>KOORD AGEN</th>
                                                            <th>KPRK</th>
                                                            <th>Create User</th>
                                                            <th>ACTION</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr v-for="(fildata,index) in filterdata">
                                                        <td>{{ index+1 }}</td>
                                                        <td>{{ fildata.kode_agent }}</td>
                                                        <td>{{ fildata.nama_agent }}</td>
                                                        <td>{{ fildata.alamat }}</td>
                                                        <td>{{ fildata.kota }}</td>
                                                        <td>{{ fildata.no_telpon }}</td>
                                                        <td>{{ fildata.kontak_person }}</td>
                                                        <td>{{ fildata.no_telpon_kontak_person }}</td>
                                                        <td>{{ fildata.koordinator_agent }}</td>
                                                        <td>{{ fildata.koordinator_agent }}</td>
                                                        <td>{{ fildata.nama_kprk }}</td>
                                                        <td>{{ fildata.updated_by }}</td>
                                                        <td><input type="checkbox" class="custom-control-input"></td>
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
    </div>
</template>

<script>

import axios from 'axios'
import datePicker from 'vue-bootstrap-datetimepicker';
 import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
 import 'vue-select/dist/vue-select.css';
 import moment from 'moment';

    export default {
        name: 'registrasi',
        data () {
            return {
                btndisplay:'',
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
                alamat_koors: '',
                kota: '',
                pic: '',
                no_telp: '',
                email_koor: '',
                kode_agent_rek: '',
                kode_agent: '',
                nama_agent: '',
                nama_agent_rek: '',
                kota_agent: '',
                alamat_agent: '',
                alamat_agents: '',
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
                id_petugas: '',
                nm_petugas: '',
                lastakses: new Date(),
                options: {
                format: 'DD/MM/YYYY',
                useCurrent: false,
                },
                tglexptugas: new Date(),
                options: {
                format: 'DD/MM/YYYY',
                useCurrent: false,
                },
                tglpassword: new Date(),
                options: {
                format: 'DD/MM/YYYY',
                useCurrent: false,
                },
                tglreg: new Date(),
                options: {
                format: 'DD/MM/YYYY',
                useCurrent: false,
                },
                va: null,
                id_update: null,
                searchno: null,
                lastdate: new Date(),
                options: {
                format: 'DD/MM/YYYY',
                useCurrent: false,
                },
                  option: [
                    '0 - Aktif',
                    '1 - Sedang Login',
                    '2 - Cetak Backsheet',
                    '3 - Blokir',
                    '4 - Expire',
                    '5 - Belum Validasi',
                    '6 - Sudah Validasi'
                    ],
                      optio: [
                        '1001 - Petugas Agen',
                        '1002 - Petugas Koordinator',
                        '1003 - Petugas Admin',
                    ],  
                     opti: [
                        '1001 - Petugas Agen',
                        '1002 - Petugas Koordinator',
                        '1003 - Petugas Admin',
                    ], 
                    opsi_koor: [
                        'Admin',
                        'Agen',
                        'Koordinator',
                    ], 
                    opsi_waktu: [
                        'WIB',
                        'WITA',
                        'WIT',
                    ],  
            }
        },
        components: {
        datePicker
        },
        mounted(){
            this.getKodeAkses();
        },
        methods: {
            close() {
                this.$router.push('/')
            },
            logout () {
            this.$session.destroy()
            this.$router.push('/login')
            },
             filterDaftarAgen(){
                axios({
                    method:'get',
                    url:'http://localhost/posapi/public/daftaragen/getDaftarAgenFilter',
                }).then(response => {
                        // let datafilter = response.data.data
                        this.filterdata = response.data.data
                        console.log(this.filterdata)
                });
             },
            ClearTextUser(){
                this.nama = ''
                this.password = ''
                this.id_terminal = 
                this.hdd = ''
                this.akses = ''
                this.email = ''
                this.korlap = ''
                this.koordinator = ''
                this.kode = ''
                this.user_update = ''
                this.status =  ''
                this.getKodeAkses()
            },
            btnadd(rf){
                if (rf == "userakses") {
                if (this.$refs.btnupdate.getAttribute("style","display:inline;")){
                    // alert('aaa')
                    this.$refs.btnadd.setAttribute("style","display:inline;");
                    this.$refs.btnupdate.setAttribute("style","display:none;");
                }else{
                    // alert('bbb')
                    this.$refs.btnadd.setAttribute("style","display:none;");
                    this.$refs.btnupdate.setAttribute("style","display:inline;");
                }
                }else if(rf == "koord"){
                if (this.$refs.btnupdate_koord.getAttribute("style","display:inline;")){
                    // alert('aaa')
                    this.$refs.btnadd_koord.setAttribute("style","display:inline;");
                    this.$refs.btnupdate_koord.setAttribute("style","display:none;");
                }else{
                    // alert('bbb')
                    this.$refs.btnadd_koord.setAttribute("style","display:none;");
                    this.$refs.btnupdate_koord.setAttribute("style","display:inline;");
                }
                }
                
            },
            btnupdate(rf){
                if (rf == "userakses") {
                    if (this.$refs.btnupdate.getAttribute("style","display:none;")){
                        // alert('aaa')
                        this.$refs.btnadd.setAttribute("style","display:none;");
                        this.$refs.btnupdate.setAttribute("style","display:inline;");
                    }else{
                        // alert('bbb')
                        this.$refs.btnadd.setAttribute("style","display:inline;");
                        this.$refs.btnupdate.setAttribute("style","display:none;");
                    }    
                } else if(rf == "koord") {
                    if (this.$refs.btnupdate_koord.getAttribute("style","display:none;")){
                        this.$refs.btnadd_koord.setAttribute("style","display:none;");
                        this.$refs.btnupdate_koord.setAttribute("style","display:inline;");
                    }else{
                        this.$refs.btnadd_koord.setAttribute("style","display:inline;");
                        this.$refs.btnupdate_koord.setAttribute("style","display:none;");
                    }    
                }
            },
            FrontEndDateFormat: function(date) {
        		return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
            },
            BackEndDateFormat:function(date){
        		return moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
            },
            getKodeAkses(){
                axios({
                    method:'get',
                    url:'http://localhost/posapi/public/userAkses/getKodeUserAkses',
                }).then(response => {
                        let codeuser = response.data.code
                        this.id_user = codeuser
                        console.log(codeuser)
                });
                axios({
                    method:'get',
                    url:'http://localhost/posapi/public/koordinatoragen/getKodeKoordAgen',
                }).then(response => {
                        let codekoord = response.data.code
                        this.kd_koor = codekoord
                        console.log(codekoord)
                });
                axios({
                    method:'get',
                    url:'http://localhost/posapi/public/daftaragen/getKodeDaftarAgen',
                }).then(response => {
                        let codeagent = response.data.code
                        this.kode_agent = codeagent
                        console.log(codeagent)
                });
            },
            checkKodeUser(){
               let getid = this.$refs.kodeakses.value;
               axios({
                    method:'get',
                    url:'http://localhost/posapi/public/userAkses/getDataUserAksesById/'+getid,
                }).then(response => {
                        let datauserakses = response
                        this.editakses = datauserakses.data.data
                        console.log(this.editakses)
                        if (this.editakses == null) {
                            alert(this.id_user + ' Data not found')
                            this.ClearTextUser()
                        }else{
                        this.nama = this.editakses.nama
                        this.password = this.editakses.password
                        this.id_terminal = this.editakses.id_terminal
                        this.hdd = this.editakses.hdd_serial_number
                        this.akses = this.editakses.hak_akses
                        this.email = this.editakses.email_address
                        this.korlap = this.editakses.koordinator_lapangan
                        this.koordinator = this.editakses.nama_koordinator
                        this.kode = this.editakses.kode_koordinator
                        this.lastdate = this.BackEndDateFormat(this.editakses.updated_at)
                        this.user_update = this.editakses.updated_by
                        this.last_access = this.BackEndDateFormat(this.editakses.access_at)
                        if (this.editakses.status == 0) {
                            this.status =  this.editakses.status + ' - Aktif'
                        }else{
                            this.status =  this.editakses.status + ' - NonAktif'
                        }
                       }
                        // console.log(this.lastdate +' '+this.last_access)
                });
            },
             checkKodeKoord(){
               let getid = this.$refs.kode_koord.value;
               axios({
                    method:'get',
                    url:'http://localhost/posapi/public/koordinatoragen/getDataUserAksesById/'+getid,
                }).then(response => {
                        let datauserakses = response
                        this.editkoord = datauserakses.data.data
                        console.log(this.editkoord)
                        if (this.editkoord == null) {
                            alert(this.kd_koor + ' Data not found')
                            // this.ClearText()
                        }else{
                        this.kd_koor = this.editkoord.kode_koordinator
                        this.nama_koor = this.editkoord.nama_koordinator
                        this.alamat_koor = this.editkoord.alamat
                        this.kota = this.editkoord.kota
                        this.pic = this.editkoord.nama_kontak_person
                        this.no_telp = this.editkoord.no_telpon
                        this.email_koor = this.editkoord.email
                        this.lastdate = this.FrontEndDateFormat(this.editkoord.updated_at)
                        this.user_update = this.editkoord.updated_by
                    }
                        // console.log(this.lastdate +' '+this.last_access)
                });
            },
             checkKodeAgent(){
               let getid = this.$refs.kd_agent.value
               axios({
                    method:'get',
                    url:'http://localhost/posapi/public/daftaragen/getDataDaftarAgenById/'+getid,
                }).then(response => {
                        let datauserakses = response
                        this.editagent = datauserakses.data.data
                        console.log(this.editagent)
                        if (this.editagent == null) {
                            alert(this.kode_agent + ' Data not found')
                            // this.ClearText()
                        }else{
                        this.kode_agent = this.editagent.kode_agent
                        this.nama_agent = this.editagent.nama_agent
                        this.alamat_agent = this.editagent.alamat
                        this.kota_agent = this.editagent.kota
                        this.kodepos = this.editagent.kode_pos 
                        this.propinsi = this.editagent.provinsi 
                        this.telp = this.editagent.no_telpon 
                        this.email_agent = this.editagent.email 
                        this.pic_agent = this.editagent.kontak_person
                        this.telp_pic = this.editagent.no_telpon_kontak_person 
                        this.koor_agent = this.editagent.koordinator_agent 
                        this.waktu = this.editagent.waktu_regional 
                        if (this.status == '0') {
                            this.status = this.editagent.status + ' - Aktif'
                        }else{
                            this.status = this.editagent.status + ' - NonAktif'
                        }
                        this.kprk_pos = this.editagent.kprk_pos 
                        this.nm_kprk = this.editagent.nama_kprk 
                        this.lastdate = this.FrontEndDateFormat(this.editagent.updated_at)
                        this.id_update_agent = this.editagent.updated_by 
                    }
                        // console.log(this.lastdate +' '+this.last_access)
                });
            },
            checkRekening(){
               let getid = this.$refs.kode_agent_rek.value
               axios({
                    method:'get',
                    url:'http://localhost/posapi/public/daftaragen/getDataDaftarAgenById/'+getid,
                }).then(response => {
                        let datauserakses = response
                        this.editagent = datauserakses.data.data
                        console.log(this.editagent)
                        
                        // this.kode_agent = this.editagent.kode_agent
                        this.nama_agent_rek = this.editagent.nama_agent
                        // console.log(this.lastdate +' '+this.last_access)
                });
            },
            checkPetugas(){
               let getid = this.$refs.kode_agent_petugas.value
               axios({
                    method:'get',
                    url:'http://localhost/posapi/public/daftaragen/getDataDaftarAgenById/'+getid,
                }).then(response => {
                        let datauserakses = response
                        this.editagent = datauserakses.data.data
                        console.log(this.editagent)
                        // this.kode_agent = this.editagent.kode_agent
                        this.nama_agent_petugas = this.editagent.nama_agent
                        // console.log(this.lastdate +' '+this.last_access)
                });
            },
            addUserAkses(){
                this.$validator.validateAll()
                axios({
                method: 'post',
                url: 'http://localhost/posapi/public/userAkses/addData',
                crossdomain: true, 
                "Content-Type": 'application/json',
                data: {
                    id_user: this.id_user,
                    nama: this.nama,
                    password: this.password,
                    id_terminal: this.id_terminal,
                    hdd_serial_number: this.hdd,
                    hak_akses: this.akses,
                    email: this.email,
                    korlap: this.korlap,
                    nama_koordinator: this.koordinator,
                    kode_koordinator: this.kode,
                    date_last_update: this.lastdate,
                    id_user_update: this.user_update,
                    last_access: this.id_update,
                    status_aktif: this.status,

                }
                }).then(response => {
                    alert(response.data.message)
                    this.ClearTextUser()
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                });
            },   
            addDataKoord(){
            axios({
                method: 'post',
                url: 'http://localhost/posapi/public/koordinatoragen/addData',
                crossdomain: true, 
                "Content-Type": 'application/json',
                data: {
                    kode_koord: this.kd_koor,
                    nama_koord: this.nama_koor,
                    alamat: this.alamat_koor + ' ' + this.alamat_koors,
                    kota: this.kota,
                    kontak_person: this.pic,
                    no_telpon: this.no_telp,
                    email: this.email_koor,
                    date_last_update: this.lastdate,
                    id_user_update: this.user_update,
                }
                }).then(response => {
                    alert(response.data.message)
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                }); 
            },
            addDataAgent(){
            axios({
                method: 'post',
                url: 'http://localhost/posapi/public/daftaragen/addData',
                crossdomain: true, 
                "Content-Type": 'application/json',
                data: {
                    kd_agent: this.kode_agent,
                    nama_agent: this.nama_agent,
                    alamat: this.alamat_agent + ' ' + this.alamat_agents,
                    kota: this.kota_agent,
                    kode_pos: this.kodepos,
                    provinsi: this.propinsi,
                    no_telpon: this.telp,
                    email: this.email_agent,
                    kontak_person: this.pic_agent,
                    no_telp_kontak_person: this.telp_pic,
                    koordinator_agent: this.koor_agent,
                    waktu_religional: this.waktu,
                    status: this.status,
                    kprk_pos: this.kprk_pos,
                    nama_kprk: this.nm_kprk,
                    updated_at: this.lastdate,
                    updated_by: this.id_update,
                }
                }).then(response => {
                    alert(response.data.message)
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                }); 
            },
            addDataRek(){
            axios({
                method: 'post',
                url: 'http://localhost/posapi/public/rekening/addData',
                crossdomain: true, 
                "Content-Type": 'application/json',
                data: {
                    code: this.kode_agent,
                    nama: this.nama_agent,
                    account_buffer: this.account,
                }
                }).then(response => {
                    alert(response.data.message)
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                }); 
            },
            addDataPetugas(){
            axios({
                method: 'post',
                url: 'http://localhost/posapi/public/petugas/addData',
                crossdomain: true, 
                "Content-Type": 'application/json',
                data: {
                    kode_agent: this.kode_agent_petugas,
                    nama_agent: this.nama_agent_petugas,
                    id_petugas: '2',
                    nama_petugas: this.nm_petugas,
                    password: this.password_petugas,
                    id_terminal: this.id_terminal,
                    hak_akses: this.akses,
                    status: this.status_petugas,
                    expire_petugas: this.tglexptugas,
                    expire_password: this.tglpassword,
                    tgl_registrasi: this.tglreg,
                    last_update: this.lastdate,
                    last_access: this.lastakses,
                    serial_number: this.hdd,
                    email: this.email_petugas,
                    id_user_update: this.id_update_petugas,
                }
                }).then(response => {
                    alert(response.data.message)
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                }); 
            },
        updateUserAkses(){
               let getid = this.$refs.kodeakses.value;
                axios({
                method: 'post',
                url: 'http://localhost/posapi/public/userAkses/updateData/' + getid,
                crossdomain: true, 
                "Content-Type": 'application/json',
                data: {
                    id_user: this.id_user,
                    nama: this.nama,
                    password: this.password,
                    id_terminal: this.id_terminal,
                    hdd_serial_number: this.hdd,
                    hak_akses: this.akses,
                    email: this.email,
                    korlap: this.korlap,
                    nama_koordinator: this.koordinator,
                    kode_koordinator: this.kode,
                    date_last_update: this.BackEndDateFormat(this.lastdate),
                    id_user_update: this.user_update,
                    last_access: this.BackEndDateFormat(this.id_update),
                    status_aktif: this.status,
                }
                }).then(response => {
                    alert(response.data.message)
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                });
            },
        updateDataKoord(){
               let getid = this.$refs.kode_koord.value;
                axios({
                method: 'post',
                url: 'http://localhost/posapi/public/koordinatoragen/updateData/' + getid,
                crossdomain: true, 
                "Content-Type": 'application/json',
                data: {
                    kode_koord: this.kd_koor,
                    nama_koord: this.nama_koor,
                    alamat: this.alamat_koor + ' ' + this.alamat_koors,
                    kota: this.kota,
                    kontak_person: this.pic,
                    no_telpon: this.no_telp,
                    email: this.email_koor,
                    date_last_update: this.lastdate,
                    id_user_update: this.user_update,
                }
                }).then(response => {
                    alert(response.data.message)
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                });
            },
             updateDataAgent(){
               let getid = this.$refs.kode_koord.value;
                axios({
                method: 'post',
                url: 'http://localhost/posapi/public/koordinatoragen/updateData/' + getid,
                crossdomain: true, 
                "Content-Type": 'application/json',
                data: {
                    kode_koord: this.kd_koor,
                    nama_koord: this.nama_koor,
                    alamat: this.alamat_koor + ' ' + this.alamat_koors,
                    kota: this.kota,
                    kontak_person: this.pic,
                    no_telpon: this.no_telp,
                    email: this.email_koor,
                    date_last_update: this.lastdate,
                    id_user_update: this.user_update,
                }
                }).then(response => {
                    alert(response.data.message)
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                });
            },
        },
        
    }
</script>
