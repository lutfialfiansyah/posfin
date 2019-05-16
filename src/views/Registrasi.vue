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
              <ul class="nav nav-tabs" id="myTab">
                    <li class="disabled"><a href="#" >USER AKSES</a></li>
                    <li class="disabled"><a href="#" >KOORDINATOR AGEN</a></li>
                    <li class="active"><a  href="#agent" data-toggle="tab">PENDAFTARAN AGENT</a></li>
                    <li><a  href="#rek" data-toggle="tab">PEMBUKAAN REKENING</a></li>
                    <li><a  href="#agency" data-toggle="tab">PETUGAS AGENCY</a></li>
                    <li><a  href="#da" data-toggle="tab">DAFTAR AGENT</a></li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane" id="user">
                    <div class="body-registrasi">
                        <h5>USER AKSES</h5>
                        <div class="row">
                            <form class="form-horizontal">
                              <div class="col-md-12 col-sm-12">
                                      <div class="col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <label class="control-label col-xs-3">ID User</label>
                                            <div class="col-xs-7"><input type="text" v-model="id_user" class="form-control"></div><p>ENTER</p>
                                        </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: submitted && errors.has('nama')}">
                                                <label class="control-label col-xs-3">Nama User</label>
                                                <div class="col-xs-9"><input type="text" name="nama" v-model="nama_user" v-validate="'required|min:4'" data-vv-as="nama" class="form-control" :class="{'is-invalid error': submitted && errors.has('nama')}"><span class="error" v-if="submitted && errors.has('nama')">{{errors.first('nama')}}</span></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: submitted && errors.has('password_user')}">
                                                <label class="control-label col-xs-3">Password</label>
                                                <div class="col-xs-9"><input type="password" name="password_user" v-validate="'required|min:5'" data-vv-as="password" v-model="password_user" class="form-control" :class="{'is-invalid error': submitted && errors.has('password_user')}"><span class="error" v-if="submitted && errors.has('password_user')">{{errors.first('password_user')}}</span></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: submitted && errors.has('id_terminal')}">
                                                <label class="control-label col-xs-3">ID Terminal</label>
                                            <div class="col-xs-9"><input type="text" name="id" v-validate="'required|numeric|min:3'" data-vv-as="id_terminal" v-model="id_terminal_user" class="form-control" placeholder="- - - - -" :class="{'is-invalid error': submitted && errors.has('id')}"><span class="error" v-if="submitted && errors.has('id')">{{errors.first('id')}}</span></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                                <label class="control-label col-xs-3">HDD Serial Number</label>
                                                <div class="col-xs-9"><input type="text" v-model="hdd_user" class="form-control" ></div>
                                            </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: submitted && errors.has('hak_akses_user')}">
                                                <label class="control-label col-xs-3">Hak Akses</label>
                                                <div class="col-xs-9"><v-select v-model="akses" :options="opti" v-validate="'required'" name="hak_akses_user" data-vv-as="hak akses" :class="{'is-invalid error': submitted && errors.has('hak_akses_user')}"></v-select><span class="error" v-if="submitted && errors.has('hak_akses_user')">{{errors.first('hak_akses_user')}}</span></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: submitted && errors.has('email')}">
                                                <label class="control-label col-xs-3">Email Address</label>
                                                <div class="col-xs-9"><input type="text" name="email" v-validate="'required|email'" data-vv-as="email" v-model="email_user" class="form-control" :class="{'is-invalid error': submitted && errors.has('email')}"><span class="error" v-if="submitted && errors.has('email')">{{errors.first('email')}}</span></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: submitted && errors.has('korlap')}">
                                                <label class="control-label col-xs-3">Koordinator Lapangan</label>
                                                <div class="col-xs-9"><input type="text" name="korlap" v-validate="'required|min:3'" data-vv-as="koordinator lapangan" v-model="korlap_user" class="form-control" :class="{'is-invalid error': submitted && errors.has('korlap')}"><span class="error" v-if="submitted && errors.has('korlap')">{{errors.first('korlap')}}</span></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: submitted && errors.has('koordinator')}">
                                                <label class="control-label col-xs-3">Nama Koordinator</label>
                                                <div class="col-xs-9"><input type="text" name="koordinator" v-validate="'required|min:3'" data-vv-as="nama koordinator" v-model="koordinator_user" class="form-control" :class="{'is-invalid error': submitted && errors.has('koordinator')}"><span class="error" v-if="submitted && errors.has('koordinator')">{{errors.first('koordinator')}}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <div class="field" :class="{error: submitted && errors.has('koordinator')}">
                                                <label class="control-label col-xs-3">Ref User/Kode Koordinator</label>
                                                <div class="col-xs-9"><input type="text" name="kode" v-model="kode_koord_user" v-validate="'required'" data-vv-as="kode koordinator" class="form-control" :class="{'is-invalid error': submitted && errors.has('kode')}"><span class="error" v-if="submitted && errors.has('kode')">{{errors.first('kode')}}</span></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: submitted && errors.has('date_last_update')}">
                                                <label class="control-label col-xs-3">Date Last Update</label>
                                                <div class="col-xs-9"><date-picker v-model="lastdate_user" :config="options" v-validate="'required'" name="date_last_update" data-vv-as="tanggal last update" :class="{'is-invalid error': submitted && errors.has('date_last_update')}"></date-picker><span class="error" v-if="submitted && errors.has('date_last_update')">{{errors.first('date_last_update')}}</span></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: submitted && errors.has('iduser')}">
                                                <label class="control-label col-xs-3">ID User Update</label>
                                                <div class="col-xs-9"><input type="text" v-model="user_update" class="form-control" v-validate="'required'" name="iduser" data-vv-as="id user update" :class="{'is-invalid error': submitted && errors.has('iduser')}"><span class="error" v-if="submitted && errors.has('iduser')">{{errors.first('iduser')}}</span></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: submitted && errors.has('date_last_akses')}">
                                                <label class="control-label col-xs-3">Date Last Akses</label>
                                                <div class="col-xs-9"><date-picker v-model="lastakses_user" :config="options" v-validate="'required'" name="date_last_akses" data-vv-as="tanggal last akses" :class="{'is-invalid error': submitted && errors.has('date_last_akses')}"></date-picker><span class="error" v-if="submitted && errors.has('date_last_akses')">{{errors.first('date_last_akses')}}</span></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="field" :class="{error: submitted && errors.has('status')}">
                                                <label class="control-label col-xs-3">Status Aktif</label>
                                                <div class="col-xs-9"><v-select v-model="status_user" :options="option" name="status" v-validate="'required'" data-vv-as="selected" :class="{'is-invalid error': submitted && errors.has('status')}"></v-select><span class="error" v-if="submitted && errors.has('status')">{{errors.first('status')}}</span></div>
                                            </div>                                        
                                        </div>
                                    </div>
                                  
                            </div>
                            <div class="tombol-register">
                                <button type="button" class="btn-register" ref="btntambahUser" v-on:click="IdRandomUser()" @click="btntambahUser=true" :disabled="btntambahUser">TAMBAH</button>
                                <button type="button" class="btn-register">UBAH</button>
                                <button type="button" class="btn-register">HAPUS</button>
                                <button type="button" class="btn-register" v-on:click="addUserAksesDb()" :disabled="btntambahUser != true ? true :false">REKAM</button>
                                <button type="button" class="btn-register" id="btnbatal" v-on:click="ClearUserAkses" @click="enabledBtn">BATAL</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="koord">
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
                                        <div class="col-xs-9"><input type="text" name="nama_koor" v-model="nama_koor" class="form-control" ></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Alamat</label>
                                        <div class="col-xs-9"><input type="text" name="alamat_koor"  v-model="alamat_koor" class="form-control" ></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3"></label>
                                        <div class="col-xs-9"><input type="text" v-model="alamat_koor" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kota</label>
                                        <div class="col-xs-9"><input type="text" name="kota" v-model="kota" class="form-control" ></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Kontak Person</label>
                                        <div class="col-xs-9"><input type="text" v-model="pic" name="pic" class="form-control" ></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">No. Telp/HP</label>
                                        <div class="col-xs-9"><input type="text" name="no_telp" v-model="no_telp" class="form-control" ></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Email Address</label>
                                        <div class="col-xs-9"><input type="text" name="email_koor" v-model="email_koor" class="form-control" ></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group"> 
                                        <label class="control-label col-xs-3">Date Last Update</label>
                                        <div class="col-xs-9"><date-picker v-model="lastdate" :config="options"></date-picker></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID User Update</label>
                                        <div class="col-xs-9"><input type="text" name="id_user" v-model="id_user" class="form-control" ></div>
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
                <div class="tab-pane fade in active" id="agent">
                    <div class="body-registrasi">
                        <h5>PENDAFTARAN AGENT</h5>
                        <div class="row">
                            <form class="form-horizontal" id="daftar-agent">
                              <div class="col-md-12 col-sm-12">
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kode Agent</label>
                                        <div class="col-xs-7"><input type="text" ref="checkKodeAgent" v-model="kode_agent" v-on:keyup.enter="InquiryAgent()" :disabled="btntambahAgent" class="form-control"></div><p>ENTER</p>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('nama_agent')}">
                                            <label class="control-label col-xs-3">Nama Agent</label>
                                            <div class="col-xs-9"><input type="text" v-model="nama_agent" class="form-control" name="nama_agent" :autofocus="btntambahAgent" v-validate="'required|min:3'" data-vv-as="nama agent" :class="{ 'is-invalid error': submitted && errors.has('nama_agent') }"><span class="error invalid-feedback" v-if="submitted && errors.has('nama_agent')">{{errors.first('nama_agent')}}</span></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('alamat_agent')}">
                                            <label class="control-label col-xs-3">Alamat</label>
                                            <div class="col-xs-9"><input type="text" v-model="alamat_agent" class="form-control" name="alamat_agent" v-validate="'required|min:3'" data-vv-as="alamat agent" :class="{'is-invalid error': submitted && errors.has('alamat_agent')}"><span class="error invalid-feedback" v-if="submitted && errors.has('alamat_agent')">{{errors.first('alamat_agent')}}</span></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3"></label>
                                        <div class="col-xs-9"><input type="text" v-model="alamat_agents" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('kota_agent')}">
                                            <label class="control-label col-xs-3">Kota</label>
                                            <div class="col-xs-9"><input type="text" v-model="kota_agent" class="form-control" name="kota_agent" v-validate="'required|min:3'" data-vv-as="kota agent" :class="{'is-invalid error': submitted && errors.has('kota_agent')}"><span class="error invalid-feedback" v-if="submitted && errors.has('kota_agent')">{{errors.first('kota_agent')}}</span></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('kodepos')}">
                                            <label class="control-label col-xs-3">Kode Pos</label>
                                            <div class="col-xs-9"><input type="text" v-model="kodepos" class="form-control" name="kodepos" v-validate="'required|max:5'" data-vv-as="kodepos" :class="{'is-invalid error': submitted && errors.has('kodepos')}"><span class="error" v-if="submitted && errors.has('kodepos')">{{errors.first('kodepos')}}</span></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('propinsi')}">
                                            <label class="control-label col-xs-3">Propinsi</label>
                                            <div class="col-xs-9"><input type="text" v-model="propinsi" class="form-control" name="propinsi" v-validate="'required|min:3'" data-vv-as="propinsi" :class="{'is-invalid error': submitted && errors.has('propinsi')}"><span class="error" v-if="submitted && errors.has('propinsi')">{{errors.first('propinsi')}}</span></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('telp')}">
                                            <label class="control-label col-xs-3">No. Telp/HP</label>
                                            <div class="col-xs-9"><input type="text" v-model="telp" class="form-control" name="telp" v-validate="'required|min:10|max:12'" data-vv-as="telp" :class="{'is-invalid error': submitted && errors.has('telp')}"><span class="error" v-if="submitted && errors.has('telp')">{{errors.first('telp')}}</span></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('email_agent')}">
                                            <label class="control-label col-xs-3">Email Address</label>
                                            <div class="col-xs-9"><input type="text" v-model="email_agent" class="form-control" name="email_agent" v-validate="'required|email'" data-vv-as="email agent" :class="{'is-invalid error': submitted && errors.has('email_agent')}"><span class="error" v-if="submitted && errors.has('email_agent')">{{errors.first('email_agent')}}</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('pic_agent')}">
                                            <label class="control-label col-xs-3">Kontak Person</label>
                                            <div class="col-xs-9"><input type="text" v-model="pic_agent" class="form-control" name="pic_agent" v-validate="'required|min:3'" data-vv-as="pic agent" :class="{'is-invalid error': submitted && errors.has('pic_agent')}"><span class="error" v-if="submitted && errors.has('pic_agent')">{{errors.first('pic_agent')}}</span></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('telp_pic')}">
                                            <label class="control-label col-xs-3">No. Telpon Kontak Person</label>
                                            <div class="col-xs-9"><input type="text" v-model="telp_pic" class="form-control" name="telp_pic" v-validate="'required|min:10|max:12'" data-vv-as="telp pic" :class="{'is-invalid error': submitted && errors.has('telp_pic')}"><span class="error" v-if="submitted && errors.has('telp_pic')">{{errors.first('telp_pic')}}</span></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Koordinator Agen</label>
                                        <div class="col-xs-5"><v-select v-model="koor_agent" :options="opsi_koor"></v-select></div><button type="button" class="btn-refresh-reg">REFRESH</button>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('waktu_agent')}">
                                            <label class="control-label col-xs-3">Waktu Regional</label>
                                            <div class="col-xs-9"><v-select v-model="waktu" :options="opsi_waktu" name="waktu_agent" v-validate="'required'" data-vv-as="waktu" :class="{'is-invalid error': submitted && errors.has('waktu_agent')}"></v-select><span class="error" v-if="submitted && errors.has('waktu_agent')">{{errors.first('waktu_agent')}}</span></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('status_agent')}">
                                            <label class="control-label col-xs-3">Status Aktif</label>
                                            <div class="col-xs-9"><v-select v-model="status_agent" :options="option" title="0 - Aktif" name="status_agent" v-validate="'required'" data-vv-as="status" :class="{'is-invalid error': submitted && errors.has('status_agent')}"></v-select><span class="error" v-if="submitted && errors.has('status_agent')">{{errors.first('status_agent')}}</span></div>
                                        </div>
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
                                        <div class="col-xs-9"><date-picker v-model="lastdate_agent" :config="options"></date-picker></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID User Update</label>
                                        <div class="col-xs-9"><input type="text" v-model="id_update_agent" class="form-control" :readonly="btntambahAgent || kode_agent.lenght > 6" name="id_update" v-validate="'min:3'" data-vv-as="IdUserUpdate" :class="{error: errors.has('id_update')}"><span class="error" v-if="errors.has('id_update')">{{errors.first('id_update')}}</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="tombol-register">
                                <button type="button" class="btn-register" v-on:click="getUserAgent" @click="btntambahAgent=true" :disabled="btntambahAgent">TAMBAH</button>
                                <button type="button" class="btn-register" @click="updateAgentDb()" :disabled="editAgentRes != 'Success' ? true : false">UBAH</button>
                                <button type="button" class="btn-register" @click="DeleteAgent()" :disabled="editAgentRes != 'Success' ? true : false">HAPUS</button>
                                <button type="button" class="btn-register" @click="addDataAgentDb()" :disabled="btntambahAgent != true ? true :false">REKAM</button>
                                <button type="button" class="btn-register" v-on:click="Clearagent" @click="enabledBtn" value="Reset form">BATAL</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="rek">
                    <div class="body-registrasi">
                        <h5>PEMBUKAAN REKENING</h5>
                        <div class="row">
                            <form class="form-horizontal">
                              <div class="col-md-12 col-sm-12">
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('kode_agent_rek')}">
                                            <label class="control-label col-xs-3">Kode Agent</label>
                                            <div class="col-xs-7"><input type="text" ref="checkKodeRek" v-on:keyup.enter="checkRekening" v-model="kode_agent_rekening" class="form-control" name="kode_agent_rek" v-validate="'required'" data-vv-as="kode agent" :class="{'is-invalid error': submitted && errors.has('kode_agent_rek')}"><span class="error" v-if="submitted && errors.has('kode_agent_rek')">{{errors.first('kode_agent_rek')}}</span>
                                            <input type="hidden" ref="checkToken" :value="this.getToken"></div><p>ENTER</p>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Agent</label>
                                        <div class="col-xs-9"><input type="text" v-model="nama_rekening" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Alamat</label>
                                        <div class="col-xs-9"><input type="text" v-model="alamat1_rekening" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3"></label>
                                        <div class="col-xs-9"><input type="text" v-model="alamat2_rekening" class="form-control"></div>
                                    </div>
                                     <div class="form-group">
                                        <label class="control-label col-xs-3">Account Buffer</label>
                                        <div class="col-xs-9"><input type="text" v-model="account" class="form-control" readonly></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <p>VIRTUAL ACCOUNT</p>
                                    <div class="form-group">
                                    <div class="table-responsive">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>BANK</th>
                                                            <th>Virtual Account</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr v-for="(dataBank,index) in vaBank">                                                    
                                                        <td>{{ dataBank.BankName }}</td>
                                                        <td>{{ dataBank.VaNo }}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                    </div>
                                </div>
                              </div>
                              <div class="tombol-register">
                                <button type="button" class="btn-register">TAMBAH</button>
                                <button type="button" class="btn-register" disabled="disabled">UBAH</button>
                                <button type="button" class="btn-register" @click="DeleteRekening()">HAPUS</button>
                                <button type="button" class="btn-register" ref="btnupdtRek" :disabled="vaBank == undefined || vaBank == 0 ? false : true" @click="addDataRekening()">REKAM</button>
                                <button type="button" class="btn-register" v-on:click="Clearrekening">BATAL</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="agency">
                    <div class="body-registrasi">
                        <h5>PENDAFTARAN PETUGAS</h5>
                        <div class="row">
                            <form class="form-horizontal" id="form-petugas">
                              <div class="col-md-12 col-sm-12">
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('kd_agent')}">
                                            <label class="control-label col-xs-3">Kode Agent</label>
                                            <div class="col-xs-7"><input type="text" ref="checkKodeAgentPetugas" v-model="kode_agent_petugas" v-on:keyup.enter="KodeAgentPetugasEnter" class="form-control"  name="kd_agent" v-validate="'required'" data-vv-as="kode agent" :class="{'is-invalid error': submitted && errors.has('kd_agent')}"><span class="error" v-if="submitted && errors.has('kd_agent')">{{errors.first('kd_agent')}}</span></div><p>ENTER</p>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Agent</label>
                                        <div class="col-xs-9"><input type="text" v-model="nama_agent_petugas" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('id_terminal')}">
                                            <label class="control-label col-xs-3">ID PETUGAS</label>
                                            <div class="col-xs-7"><input type="text" v-model="id_petugas" class="form-control" v-on:keyup.enter="IdPetugasEnter" name="id_terminal" v-validate="'required|min:3'" data-vv-as="nama" :class="{'is-invalid error': submitted && errors.has('id_terminal')}"><span class="error" v-if=" submitted && errors.has('id_terminal')">{{errors.first('id_terminal')}}</span></div><p>ENTER</p>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('nm_petugas')}">
                                            <label class="control-label col-xs-3">Nama Petugas</label>
                                            <div class="col-xs-9"><input type="text" v-model="nm_petugas" class="form-control" name="nm_petugas" v-validate="'required|min:3'" data-vv-as="nama" :class="{'is-invalid error': submitted && errors.has('nm_petugas')}"><span class="error" v-if="submitted && errors.has('nm_petugas')">{{errors.first('nm_petugas')}}</span></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('password_petugas')}">
                                            <label class="control-label col-xs-3">Password</label>
                                            <div class="col-xs-9"><input type="text" v-model="password_petugas" class="form-control" name="password_petugas" v-validate="'required|min:3'" data-vv-as="nama" :class="{'is-invalid error': submitted && errors.has('password_petugas')}"><span class="error" v-if="submitted && errors.has('password_petugas')">{{errors.first('password_petugas')}}</span></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID Terminal</label>
                                        <div class="col-xs-9"><input type="text" v-model="id_terminal" class="form-control" placeholder="- - - -" name="id_terminal" v-validate="'required|min:3'" ></div>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('akses_petugas')}">                                        
                                            <label class="control-label col-xs-3">Hak Akses</label>
                                            <div class="col-xs-9"><v-select v-model="akses_petugas" :options="opti" name="akses_petugas" v-validate="'required'" data-vv-as="selected" :class="{'is-invalid error': submitted && errors.has('akses_petugas')}"></v-select><span class="error" v-if="submitted && errors.has('akses_petugas')">{{errors.first('akses_petugas')}}</span></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('status_petugas')}">                                        
                                            <label class="control-label col-xs-3">Status Aktif</label>
                                            <div class="col-xs-9"><v-select v-model="status_petugas" :options="option" name="status_petugas" v-validate="'required'" data-vv-as="selected" :class="{'is-invalid error':submitted && errors.has('status_petugas')}"></v-select><span class="error" v-if="submitted && errors.has('status_petugas')">{{errors.first('status_petugas')}}</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Tanggal Expire Petugas</label>
                                        <div class="col-xs-9"><date-picker v-model="tglexptugas" :config="options"></date-picker></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Tanggal Expire Password</label>
                                        <div class="col-xs-9"><date-picker v-model="tglexppassword" :config="options"></date-picker></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Tanggal Registrasi</label>
                                        <div class="col-xs-9"><date-picker v-model="tglreg" :config="options"></date-picker></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Last Update</label>
                                        <div class="col-xs-9"><date-picker v-model="lastdate_petugas" :config="options"></date-picker></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Last Access</label>
                                        <div class="col-xs-9"><date-picker v-model="lastakses_petugas" :config="options"></date-picker></div>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('hdd_petugas')}">
                                            <label class="control-label col-xs-3">HDD Serial Number</label>
                                            <div class="col-xs-9"><input type="text" v-model="hdd" class="form-control" name="hdd_petugas" v-validate="'min:3'" data-vv-as="hdd_petugas" :class="{'is-invalid error':submitted && errors.has('hdd_petugas')}"><span class="error" v-if="submitted && errors.has('hdd_petugas')">{{errors.first('hdd_petugas')}}</span></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('email_petugas')}">
                                            <label class="control-label col-xs-3">Email Address</label>
                                            <div class="col-xs-9"><input type="text" v-model="email_petugas" class="form-control" name="email_petugas" v-validate="'required|email'" data-vv-as="email_petugas" :class="{'is-invalid error': submitted && errors.has('email_petugas')}"><span class="error" v-if="submitted && errors.has('email_petugas')">{{errors.first('email_petugas')}}</span></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="field" :class="{error: submitted && errors.has('id_update_petugas')}">
                                            <label class="control-label col-xs-3">ID User Update</label>
                                            <div class="col-xs-9"><input type="text" v-model="id_update_petugas" class="form-control" :readonly="btntambahPetugas || id_petugas.length > 4" name="id_update_petugas" v-validate="'min:3'" data-vv-as="IdUserUpdate" :class="{'is-invalid error': submitted && errors.has('id_update_petugas')}"><span class="error" v-if="submitted && errors.has('id_update_petugas')">{{errors.first('id_update_petugas')}}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tombol-register">
                                <button type="button" class="btn-register" @click="btntambahPetugas=true" :disabled="btntambahPetugas" v-on:click="IdRandomPetugas()">TAMBAH</button>
                                <button type="button" class="btn-register" @click="updatePetugasDb()" :disabled="code_Petugas == '000000' ? false : true">UBAH</button>
                                <button type="button" class="btn-register" @click="deletePetugasDb()" :disabled="code_Petugas == '000000' ? false : true">HAPUS</button>
                                <button type="button" class="btn-register" @click="addDataPetugasDb()" :disabled="btntambahPetugas != true ? true :false">REKAM</button>
                                <button type="button" class="btn-register" v-on:click="Clearpetugas" @click="enabledBtn">BATAL</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="da">
                    <div class="body-registrasi">
                         <h5>DAFTAR AGENT</h5>
                        <div class="row">
                              <form class="form-horizontal">
                                <div class="col-md-12 col-sm-12">
                                    <div class="top">
                                        <div class="form-group">
                                            <label class="control-label col-xs-1">Filter</label>
                                            <div class="col-md-3 col-sm-5 col-xs-8"><v-select v-model="searchno" :options="optio" title="No"></v-select> </div>
                                            <div class="col-sm-3"><input type="text" class="form-control" v-model="searchVal"></div><button type="button" class="btn-tampil-topup" @click="InquiryFilter()">TAMPILKAN</button>
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
                                                    <tr v-for="(agent,index) in filterAgent">
                                                        <td>{{ index + 1 }}</td>
                                                        <td>{{ agent.KodeAgent }}</td>
                                                        <td>{{ agent.NamaAgen}}</td>
                                                        <td>{{ agent.Alamat1 + ', ' + agent.Alamat2 }}</td>
                                                        <td>{{ agent.Kota }}</td>
                                                        <td>{{ agent.NoTelp }}</td>
                                                        <td>{{ agent.KontakPerson }}</td>
                                                        <td>{{ agent.NoTelpKontakPerson }}</td>
                                                        <td>-</td>
                                                        <td>{{ agent.KoordinatorAgen }}</td>
                                                        <td>-</td>
                                                        <td>{{ agent.IdUserUpdate }}</td>
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
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script>
// $(document).ready(function(){
// 	$('a[data-toggle="tab"]').on('click', function(e) {
//         window.localStorage.setItem('activeTab', $(e.target).attr('href'));
//     });
//     var activeTab = window.localStorage.getItem('activeTab');
//     console.log(activeTab)
//     if (activeTab) {
//         $('#myTab a[href="' + activeTab + '"]').tab('show');
//         window.localStorage.removeItem("activeTab");
//     }
// });
import axios from 'axios'
import datePicker from 'vue-bootstrap-datetimepicker';
 import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
 import 'vue-select/dist/vue-select.css';
 import moment from 'moment';

    export default {
        name: 'registrasi',
        data () {
            return {
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
                status_agent: '',
                kprk_pos: '',
                nm_kprk: '',
                lastdate_agent: new Date(),
                options: {
                format: 'DD/MM/YYYY',
                useCurrent: false,
                },
                id_update_agent: '',
                account: '',
                id_petugas: '',
                id_update_petugas: '',
                nm_petugas: '',
                nama_rekening:'',
                getToken:'',
                kode_agent_rekening:'',
                kode_agent_petugas:'',
                nama_agent_petugas:'',
                btntambahUser:false,
                btntambahAgent:false,
                btntambahPetugas:false,
                lastakses: new Date(),
                lastakses_petugas: new Date(),
                editAgent:'',
                editAgentRes:'',
                akses_petugas:'',
                status_petugas:'',
                password_petugas:'',
                alamat1_rekening:'',
                alamat2_rekening:'',
                searchVal:'',
                filterAgent:[],
                nama_user:'',
                password_user:'',
                id_terminal_user:'',
                hdd_user:'',
                email_user:'',
                korlap_user:'',
                koordinator_user:'',
                kode_koord_user:'',
                lastdate_user:'',
                lastakses_user:'',
                status_user:'',
                agent_petugas:'',
                code_Petugas:'',
                options: {
                format: 'DD/MM/YYYY',
                useCurrent: false,
                },
                tglexptugas: new Date(),
                options: {
                format: 'DD/MM/YYYY',
                useCurrent: false,
                },
                tglexppassword: new Date(),
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
                lastdate_petugas: new Date(),
                dateRequest: new Date(),
                vaBank: [],
                options: {
                format: 'DD/MM/YYYY',
                useCurrent: false,
                },
                submitted:false,
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
                        'kode_agent',
                        'nama',
                        'alamat1',
                        'alamat2',
                        'kota',
                        'kode_pos',
                        'propinsi',
                        'nomor_telepon',
                        'nomor_fax',
                        'kontak_nama',
                        'Kontak_telepon',
                        'kantor_induk',
                        'wilayah_pos',
                        'waktu_regional',
                        'status_aktif',
                        'email'
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
        mounted()
       {
        this.getTokenAPI();
         if (!this.$session.get('session-id')) {
            this.$router.push({name: 'login'})
            }
       },
        methods: {
            enabledBtn(){
                this.btntambahUser = false;
                this.btntambahAgent = false;
                this.btntambahPetugas = false;
            },
            getUserAgent(){
               this.id_update_agent = String(this.$session.get('name'))
            },
            ClearUserAkses(){
                $('.vs__clear').click();
                this.id_user = '';
                this.nama_user = '';
                this.password_user = '';
                this.id_terminal_user = '';
                this.hdd_user = '';
                this.akses = '';
                this.email_user = '';
                this.korlap_user = '';
                this.koordinator_user = '';
                this.kode_koord_user = '';
                this.lastdate_user = '';
                this.user_update = '';
                this.lastakses_user = '';
                this.status_user = '';
                this.submitted = false;
            },
            Clearagent() {
                $('.vs__clear').click();
                // $('.vs__selected').text('"-"');
                document.getElementById("daftar-agent").reset();
                this.kode_agent = '';
                this.nama_agent = '';
                this.alamat_agent = '';
                this.alamat_agents = '';
                this.kota_agent = '';
                this.kodepos = '';
                this.propinsi = '';
                this.telp = '';
                this.email_agent = '';
                this.pic_agent = '';
                this.telp_pic = '';
                this.nm_kprk = '';
                this.id_update_agent = '';
                this.submitted = false;
            },
            Clearpetugas() {
                document.getElementById("form-petugas").reset()
                $('.vs__clear').click();
                this.kode_agent_petugas = ''
                this.nm_petugas = ''
                this.password_petugas = ''
                this.id_terminal = ''
                this.hdd = ''
                this.email_petugas = ''
                this.id_petugas = ''
                this.id_update_petugas = ''
                this.submitted = false;
            },
            Clearrekening() {
                document.getElementById("form-petugas").reset()
                $('.vs__clear').click();
                this.kode_agent_rekening = ''
                this.nama_rekening = ''
                this.alamat1_rekening = ''
                this.alamat2_rekening = ''
                this.account = ''
                this.vaBank = ''
                this.submitted = false;
            },
            close() {
                this.$router.push('/')
            },
            logout () {
            this.$session.destroy()
            this.$router.push('/login')
            },
            BackEndDateFormat: function(date) {
        		return moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
            },
            FrontEndDateFormat: function(date) {
        		return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
            },
            FrontEndDate: function(date) {
        		return moment(date, 'YYYYMMDDHHmmss').format('DD/MM/YYYY');
            },
            RequestTime: function(date) {
        		return moment(date, 'YYYY-MM-DD').format('YYYYMMDDHHmmss');
            },
            randomNumber : function(){
                return Math.floor(Math.random() * 1000000) + 2;
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
            IdRandomPetugas(){
                this.id_petugas = this.randomNumber()
                this.id_update_petugas = String(this.$session.get('name'))
            },
            IdRandomUser(){
                this.id_user = this.randomNumber()
            },
            KodeAgentPetugasEnter(){
            let getid = this.$refs.checkKodeAgentPetugas.value;
            let getToken = this.$refs.checkToken.value;
            //    console.log()
               axios({
                    method:'post',
                    url:'https://gtw-stg.posfin.id/v1/pos/agent/inquiry',
                    crossdomain: true, 
                    headers: {
                        "Content-Type": 'application/json',
                        "ESB-JWT": "Token " + getToken,
                    },
                    data: {
                        "TxnRefNo":"INQ0003",
                        "ChannelId":"BOA",
                        "RequestTime":"20190224120000",
                        "ServiceCode":"INQUIRY_AGENT",
                        "KodeAgen":getid,
                        "KodeMainAgent":"",
                        "InquiryType":"1"
                        }
                }).then(response => {
                        let datauserakses = response
                        this.agent_petugas = datauserakses.data.ResponseCode
                        this.dataagent = datauserakses
                        console.log(this.dataagent)
                        if (this.dataagent.data.ResponseCode == '000000') {
                            this.nama_agent_petugas = this.dataagent.data.NamaAgen
                        }else{
                            alert(this.dataagent.data.ResponseDesc)
                        }
                    });
            },
            IdPetugasEnter(){
                this.id_update_petugas = String(this.$session.get('name'))
                    let getid = this.$refs.checkKodeAgentPetugas.value;
                    let getToken = this.$refs.checkToken.value;
               axios({
                    method:'post',
                    url:'https://gtw-stg.posfin.id/v1/pos/inquiry-petugas-agency',
                    crossdomain: true, 
                    headers: {
                        "Content-Type": 'application/json',
                        "ESB-JWT": "Token " + getToken,
                    },
                    data: {
                        "TxnRefNo":"APPS01203904",
                        "ChannelId":"BOA",
                        "RequestTime":this.RequestTime(this.dateRequest),
                        "ServiceCode":"INQUIRY_PETUGAS_AGENCY",
                        "KodeAgent": this.kode_agent_petugas,
                        "IdPetugas": this.id_petugas,
                        "Type":"Single"
                        }
                }).then(response => {
                        let datauserakses = response
                        this.code_Petugas = datauserakses.data.ResponseCode
                        console.log(this.code_Petugas)
                        console.log(this.userpetugas)
                        if (this.code_Petugas == '000000') {
                            this.userpetugas = datauserakses.data.Users[0]
                            this.nm_petugas = this.userpetugas.NamaPetugas
                            this.password_petugas = this.userpetugas.Password
                            this.id_terminal = this.userpetugas.IdTerminal
                            // this.akses_petugas = this.userpetugas.HakAkses
                            // this.status_petugas = this.userpetugas.StatusAktif
                            this.tglexptugas = this.FrontEndDateFormat(this.userpetugas.TanggalKadaluarsa)
                            this.tglexppassword = this.FrontEndDateFormat(this.userpetugas.TanggalKadaluarsaPassword)
                            this.tglreg = this.FrontEndDateFormat(this.userpetugas.TanggalRegistrasi)
                            this.lastdate_petugas = this.FrontEndDateFormat(this.userpetugas.LastUpdate)
                            this.lastakses_petugas = this.FrontEndDateFormat(this.userpetugas.LastAccess)
                            this.hdd = this.userpetugas.HddSerialNumber
                            this.email_petugas = this.userpetugas.Email
                            this.id_update_petugas = this.userpetugas.IdUserUpdate
                            if (this.userpetugas.HakAkses == '1001') {
                                this.akses_petugas =  this.userpetugas.HakAkses + ' - Petugas Agen'                                
                            }else if (this.userpetugas.HakAkses == '1002') {
                                this.akses_petugas =  this.userpetugas.HakAkses + ' - Petugas Koordinator'                                                                
                            }else if (this.userpetugas.HakAkses == '1003') {
                                this.akses_petugas =  this.userpetugas.HakAkses + ' - Petugas Admin'                                                                                            
                            }                            
                             if (this.userpetugas.StatusAktif == 0) {
                                this.status_petugas =  this.userpetugas.StatusAktif + ' - Aktif'
                            }else if (this.userpetugas.StatusAktif == 1){
                                this.status_petugas =  this.userpetugas.StatusAktif + ' - Sedang Login'
                            }else if (this.userpetugas.StatusAktif == 2){
                                this.status_petugas =  this.userpetugas.StatusAktif + ' - Cetak Backsheet'
                            }else if (this.userpetugas.StatusAktif == 3){
                                this.status_petugas =  this.userpetugas.StatusAktif + ' - Blokir'
                            }else if (this.userpetugas.StatusAktif == 4){
                                this.status_petugas =  this.userpetugas.StatusAktif + ' - Expire'
                            }else if (this.userpetugas.StatusAktif == 5){
                                this.status_petugas =  this.userpetugas.StatusAktif + ' - Belum Validasi'
                            }else if (this.userpetugas.StatusAktif == 6){
                                this.status_petugas =  this.userpetugas.StatusAktif + ' - Sudah Validasi'
                            }

                        }else{
                            alert(datauserakses.data.ResponseDesc)
                        }
                    });
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
            },
            checkEnter(){
               let getid = this.$refs.checkKode.value;
               axios({
                    method:'get',
                    url:'http://localhost/posapi/public/userAkses/getDataUserAksesById/'+getid,
                }).then(response => {
                        let datauserakses = response
                        this.editakses = datauserakses.data.data
                        console.log(this.editakses)
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
                });
            },
            checkRekening(){
            let getid = this.$refs.checkKodeRek.value;
            let getToken = this.$refs.checkToken.value;
               axios({
                    method:'post',
                    url:'https://gtw-stg.posfin.id/v1/pos/agent/inquiry',
                    crossdomain: true, 
                    headers: {
                        "Content-Type": 'application/json',
                        "ESB-JWT": "Token " + getToken,
                    },
                    data: {
                        "TxnRefNo":"INQ0003",
                        "ChannelId":"BOA",
                        "RequestTime":this.RequestTime(this.dateRequest),
                        "ServiceCode":"INQUIRY_AGENT",
                        "KodeAgen":getid,
                        "KodeMainAgent":"",
                        "InquiryType":"1"
                        }
                }).then(response => {
                        let datauserakses = response
                        this.editakses = datauserakses
                        this.vaBank = datauserakses.data.Accounts
                        console.log(this.editakses)
                        if (this.editakses.data.ResponseCode == '000001') {
                            alert(this.editakses.data.ResponseDesc)
                        }else{
                            this.nama_rekening = this.editakses.data.NamaAgen
                            this.alamat1_rekening = this.editakses.data.Alamat1
                            this.alamat2_rekening = this.editakses.data.Alamat2
                        }
                });
            },
            InquiryAgent(){
               let getid = this.$refs.checkKodeAgent.value;
               let getToken = this.$refs.checkToken.value;
               axios({
                    method:'post',
                    url:'https://gtw-stg.posfin.id/v1/pos/agent/inquiry',
                    crossdomain: true, 
                    headers: {
                        "Content-Type": 'application/json',
                        "ESB-JWT": "Token " + getToken,
                    },
                    data: {
                        "TxnRefNo":"APPS01203903",
                        "ChannelId":"BOA",
                        "RequestTime":this.RequestTime(this.dateRequest),
                        "ServiceCode":"INQUIRY_AGENT",
                        "KodeAgen": getid,
                        "KodeMainAgent": "",
                        "InquiryType":"1"
                        }
                }).then(response => {
                        let datauserakses = response
                        this.editAgent = datauserakses.data
                        this.editAgentRes = datauserakses.data.ResponseDesc
                        if (this.editAgentRes != "Success") {
                            alert(this.editAgentRes)
                        }
                        console.log(this.editAgent)
                            this.nama_agent = this.editAgent.NamaAgen
                            this.alamat_agent = this.editAgent.Alamat1
                            this.alamat_agents = this.editAgent.Alamat2
                            this.kota_agent = this.editAgent.Kota
                            this.kodepos = this.editAgent.KodePos
                            this.propinsi = this.editAgent.Propinsi
                            this.telp = this.editAgent.NoTelp
                            this.email_agent = this.editAgent.Email
                            this.pic_agent = this.editAgent.KontakPerson
                            this.telp_pic = this.editAgent.NoTelpKontakPerson
                            this.koor_agent = this.editAgent.KoordinatorAgen
                            // "KoordinatorLapangan":"0000948",
                            // "MainAgen":"843",
                            if (this.editAgent.StatusAktif == 0) {
                                this.status_agent =  this.editAgent.StatusAktif + ' - Aktif'
                            }else if (this.editAgent.StatusAktif == 1){
                                this.status_agent =  this.editAgent.StatusAktif + ' - Sedang Login'
                            }else if (this.editAgent.StatusAktif == 2){
                                this.status_agent =  this.editAgent.StatusAktif + ' - Cetak Backsheet'
                            }else if (this.editAgent.StatusAktif == 3){
                                this.status_agent =  this.editAgent.StatusAktif + ' - Blokir'
                            }else if (this.editAgent.StatusAktif == 4){
                                this.status_agent =  this.editAgent.StatusAktif + ' - Expire'
                            }else if (this.editAgent.StatusAktif == 5){
                                this.status_agent =  this.editAgent.StatusAktif + ' - Belum Validasi'
                            }else if (this.editAgent.StatusAktif == 6){
                                this.status_agent =  this.editAgent.StatusAktif + ' - Sudah Validasi'
                            }
                            this.waktu = this.editAgent.WaktuRegional
                            this.lastdate_agent =  this.FrontEndDateFormat(this.editAgent.LastUpdate)
                            this.id_update_agent = this.editAgent.IdUserUpdate
                });
            },
             InquiryFilter(){
                let filter = this.searchno            
            if (filter == null) {
                this.searchno = ""
            }
            let getToken = this.$refs.checkToken.value;
               axios({
                    method:'post',
                    url:'https://gtw-stg.posfin.id/v1/pos/agent/inquiry/list',
                    crossdomain: true, 
                    headers: {
                        "Content-Type": 'application/json',
                        "ESB-JWT": "Token " + getToken,
                    },
                    data: {
                        "TxnRefNo":"APPS01203902",
                        "ChannelId":"APPS01",
                        "RequestTime":"20190224120000",
                        "ServiceCode":"INQUIRY_LIST_AGENT",
                        "KodeMainAgent":"",
                        "Filter": this.searchno,
                        "FilterValue":this.searchVal,
                        "Page":1,
                        "Limit":10,
                        "IsPaging":"Y"
                        }
                }).then(response => {
                        let datauserakses = response
                        this.filterAgent = datauserakses.data.Agents
                        if (this.filterAgent == null) {
                            alert('Data Tidak Ditemukan')
                        }
                        console.log(this.filterAgent)
                });
            },
            addUserAksesDb(){
                this.submitted = true;
                this.$validator.validateAll()
                let getToken =  this.$refs.checkToken.value;
                let status = String(parseInt(this.status_user))
                let akses = String(parseInt(this.akses))
                axios({
                method: 'post',
                url: 'https://gtw-stg.posfin.id/v1/pos/user',
                crossdomain: true, 
                 headers: {
                            "Content-Type": 'application/json',
                            "ESB-JWT": "Token " + getToken,
                },
                data: {
                    "TxnRefNo":"APPS01203902",
                    "ChannelId":"APPS01",
                    "RequestTime":this.RequestTime(this.dateRequest),
                    "ServiceCode":"USER_ACCESS",
                    "IdUser": String(this.id_user),
                    "NamaUser": this.nama_user,
                    "Password":this.password_user,
                    "IdTerminal":this.id_terminal_user,
                    "HddSerialNumber": this.hdd_user,
                    "HakAkses":akses,
                    "Email": this.email_user,
                    "KodeKorlap":this.korlap_user,
                    "StatusAktif":status,
                    "LastAccess": this.BackEndDateFormat(this.lastakses_user),
                    "IdUserUpdate": this.user_update,
                    "LastUpdate": this.BackEndDateFormat(this.lastdate_user),
                    "Operation":"ADD"
                }
                }).then(response => {
                    this.res = response.data
                    if (this.res.ResponseCode == '000000') {
                        alert(this.res.ResponseDesc + ', Password : ' + this.res.Password)
                        window.location.reload(true)
                    } else {
                        alert(this.res.ResponseDesc)
                    }
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                });
            },
            addDataAgentDb(){
                this.submitted = true;
                this.$validator.validate().then(valid => {
                let getToken = this.$refs.checkToken.value;
                let status = String(parseInt(this.status_agent))
                axios({
                        method: 'post',
                        url: 'https://gtw-stg.posfin.id/v1/pos/agent/registration',
                        crossdomain: true, 
                        headers: {
                            "Content-Type": 'application/json',
                            "ESB-JWT": "Token " + getToken,
                        },
                        data: {
                            "TxnRefNo": "APPS01203902",
                            "ChannelId": "APPS01",
                            "RequestTime":this.RequestTime(this.dateRequest),
                            "ServiceCode": "CREATE_AGENT",
                            "TipeAgen":"Agen",
                            "NamaAgen":this.nama_agent,
                            "Alamat1":this.alamat_agent,
                            "Alamat2":this.alamat_agents,
                            "Kota":this.kota_agent,
                            "KodePos":this.kodepos,
                            "Propinsi":this.propinsi,
                            "NoTelp":this.telp,
                            "Email":this.email_agent,
                            "KontakPerson":this.pic_agent,
                            "NoTelpKontakPerson":this.telp_pic,
                            "KoordinatorAgen":"",
                            "KoordinatorLapangan":"",
                            "MainAgen":"",
                            "StatusActive":status,
                            "WaktuRegional":this.waktu,
                            "DateLastUpdate":this.BackEndDateFormat(this.lastdate_agent),
                            "UserId":this.id_update_agent
                        }
                        }).then(response => {
                            console.log(response)
                            if (response.data.ResponseMessage == 'Success') {
                                alert(response.data.ResponseMessage + ' => Kode Agent: ' + response.data.KodeAgen)
                                this.Clearagent()
                                // window.location.reload(true)
                            }else{
                                alert(response.data.ResponseMessage)
                            }
                        }).catch(error => {
                            console.log(error)
                        }); 
                    });

            },
            addDataRekening(){
            this.submitted = true;
            this.$validator.validate().then(valid => {
            let getid = this.$refs.checkKodeRek.value;
            let getToken = this.$refs.checkToken.value;
               axios({
                    method:'post',
                    url:'https://gtw-stg.posfin.id/v1/pos/account/registration',
                    crossdomain: true, 
                    headers: {
                        "Content-Type": 'application/json',
                        "ESB-JWT": "Token " + getToken,
                    },
                    data: {
                        "TxnRefNo":"APPS01203902",
                        "ChannelId":"APPS01",
                        "RequestTime":"20190224120000",
                        "ServiceCode":"CREATE_ACCT_AGENT",
                        "KodeAgen": getid,
                        "KodeMainAgent": "0000001",
                        "UserId":"01"
                        }
                }).then(response => {
                        let datauserakses = response
                        this.editakses = datauserakses
                        console.log(this.editakses)
                        if (this.editakses.data.ResponseCode == "000000") {
                            alert(this.editakses.data.ResponseMessage)
                            this.Clearrekening()
                        }else{
                            alert(this.editakses.data.ResponseMessage)
                        }

                });
            });
            },
              addDataPetugasDb(){
                // this.$validator.validateAll()
                this.submitted = true;
                this.$validator.validate().then(valid => {
                let getToken = this.$refs.checkToken.value;
                let status = String(parseInt(this.status_petugas))
                let hakakses = String(parseInt(this.akses_petugas))
                axios({
                        method: 'post',
                        url: 'https://gtw-stg.posfin.id/v1/pos/create-petugas-agency',
                        crossdomain: true, 
                        headers: {
                            "Content-Type": 'application/json',
                            "ESB-JWT": "Token " + getToken,
                        },
                        data: {
                            "TxnRefNo":"APPS01203902",
                            "ChannelId":"APPS01",
                            "RequestTime":this.RequestTime(this.dateRequest),
                            "ServiceCode":"CREATE_PETUGAS_AGENCY",
                            "KodeAgent": this.kode_agent_petugas,
                            "IdPetugas": String(this.id_petugas),
                            "NamaPetugas": this.nm_petugas,
                            "IdTerminal":this.id_terminal,
                            "TanggalRegistrasi": this.BackEndDateFormat(this.tglreg),
                            "TanggalKadaluarsa": this.BackEndDateFormat(this.tglexptugas),
                            "TanggalKadaluarsaPassword": this.BackEndDateFormat(this.tglexppassword),
                            "Email": this.email_petugas,
                            "HddSerialNumber": this.hdd,
                            "StatusAktif":status,
                            "LastAccess": this.BackEndDateFormat(this.lastakses_petugas),
                            "UserId": this.id_update_petugas,
                            "LastUpdate": this.BackEndDateFormat(this.lastdate_petugas),
                            "HakAkses": hakakses
                            }
                        }).then(response => {
                            console.log(response)
                            if (response.data.ResponseDesc == 'Success') {                                
                                alert(response.data.ResponseDesc + ' Password Petugas : ' + response.data.Password)
                                this.Clearpetugas()
                                // window.location.reload(true)
                            }else{
                                alert(response.data.ResponseDesc)
                            }
                        }).catch(error => {
                            console.log(error)
                        }); 
                    });
            },
            DeleteAgent(){
            let getToken = this.$refs.checkToken.value;
               axios({
                    method:'post',
                    url:'https://gtw-stg.posfin.id/v1/pos/agent/delete',
                    crossdomain: true, 
                    headers: {
                        "Content-Type": 'application/json',
                        "ESB-JWT": "Token " + getToken,
                    },
                    data:{
                        "TxnRefNo":"APPS01203903",
                        "ChannelId":"APPS01",
                        "RequestTime":"20190224120000",
                        "ServiceCode":"DELETE_AGENT",
                        "KodeAgent": this.kode_agent
                    }
                }).then(response => {
                        let datauserakses = response
                        this.deleteAgent = datauserakses
                         if (this.deleteAgent.data.ResponseCode == '000000') {
                            alert(this.deleteAgent.data.ResponseDesc + ' to Delete')
                            this.Clearagent()
                        }else{
                            alert(this.deleteAgent.data.ResponseDesc)
                            this.Clearagent()
                        }
                });
            },
            DeleteRekening(){
            let getToken = this.$refs.checkToken.value;
               axios({
                    method:'post',
                    url:'https://gtw-stg.posfin.id/v1/pos/delete-pembukaan-rekening',
                    crossdomain: true, 
                    headers: {
                        "Content-Type": 'application/json',
                        "ESB-JWT": "Token " + getToken,
                    },
                    data:{
                        "TxnRefNo":"APPS01203903",
                        "ChannelId":"APPS01",
                        "RequestTime":"20190224120000",
                        "ServiceCode":"DELETE_PEMBUKAAN_REKENING",
                        "KodeAgent": this.kode_agent_rekening
                    }
                }).then(response => {
                        let datauserakses = response
                        this.deleteRek = datauserakses
                        if (this.deleteRek.data.ResponseCode == '000000') {
                            alert(this.deleteRek.data.ResponseDesc + ' to Delete')                            
                            window.location.reload(true)
                        }else{
                            alert(this.deleteRek.data.ResponseDesc)
                        }
                });
            },
            deletePetugasDb(){
            let getToken = this.$refs.checkToken.value;
               axios({
                    method:'post',
                    url:'https://gtw-stg.posfin.id/v1/pos/delete-petugas-agency',
                    crossdomain: true, 
                    headers: {
                        "Content-Type": 'application/json',
                        "ESB-JWT": "Token " + getToken,
                    },
                    data:{
                    "TxnRefNo":"APPS01203904",
                    "ChannelId":"APPS01",
                    "RequestTime":"20190224120000",
                    "ServiceCode":"DELETE_PETUGAS_AGENCY",
                    "KodeAgent": this.kode_agent_petugas,
                    "IdPetugas": this.id_petugas
                    }
                }).then(response => {
                        let datauserakses = response
                        this.deleteRek = datauserakses
                        if (this.deleteRek.data.ResponseCode == '000000') {
                            alert(this.deleteRek.data.ResponseDesc + ' to Delete')
                            this.Clearpetugas()
                        }else{
                            alert(this.deleteRek.data.ResponseDesc)
                            this.Clearpetugas()
                        }
                });
            },
        updateUserAkses(){
               let getid = this.$refs.checkKode.value;
                axios({
                method: 'post',
                url: 'http://localhost/posapi/public/userAkses/updateData/' + getid,
                crossdomain: true, 
                "Content-Type": 'application/json',
                data: {
                    // id_user: this.id_user,
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
                    status_aktif: this.status
                }
                }).then(response => {
                    alert(response.data.message)
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                });
            },
            updateAgentDb(){
                this.submitted = true;
                this.$validator.validate().then(valid => {
                let getToken = this.$refs.checkToken.value;
                let status = String(parseInt(this.status_agent))
                // console.log(this.lastdate_agent)
                axios({
                        method: 'post',
                        url: 'https://gtw-stg.posfin.id/v1/pos/agent/update',
                        crossdomain: true, 
                        headers: {
                            "Content-Type": 'application/json',
                            "ESB-JWT": "Token " + getToken,
                        },
                        data: {
                            "TxnRefNo":"APPS01203902",
                            "ChannelId":"APPS01",
                            "RequestTime":this.RequestTime(this.dateRequest),
                            "ServiceCode":"UPDATE_AGENT",
                            "TipeAgen":"Agen",
                            "KodeAgen": this.kode_agent,
                            "NamaAgen":this.nama_agent,
                            "Alamat1":this.alamat_agent,
                            "Alamat2":this.alamat_agents,
                            "Kota":this.kota_agent,
                            "KodePos":this.kodepos,
                            "Propinsi":this.propinsi,
                            "NoTelp":this.telp,
                            "Email":this.email_agent,
                            "KontakPerson":this.pic_agent,
                            "NoTelpKontakPerson":this.telp_pic,
                            "KoordinatorAgen":"",
                            "KoordinatorLapangan":"",
                            "MainAgen":"843",
                            "StatusActive":status,
                            "WaktuRegional":this.waktu,
                            "DateLastUpdate":this.BackEndDateFormat(this.lastdate_agent),
                            "UserId":this.id_update_agent
                            
                        }
                        }).then(response => {
                            console.log(response)
                            if (response.data.ResponseMessage == 'Success') {                              
                                alert(response.data.ResponseMessage + ' to Update')
                            this.Clearagent()
                            } else {
                                alert(response.data.ResponseMessage)                                
                            }
                        }).catch(error => {
                            console.log(error)
                        }); 
                    });
            },
            updatePetugasDb(){
                this.submitted = true;
                this.$validator.validate().then(valid => {
                let getToken = this.$refs.checkToken.value;
                let hakakses = String(parseInt(this.akses_petugas))
                let status = String(parseInt(this.status_petugas))
                // console.log(this.lastdate_agent)
                axios({
                        method: 'post',
                        url: 'https://gtw-stg.posfin.id/v1/pos/edit-petugas-agency',
                        crossdomain: true, 
                        headers: {
                            "Content-Type": 'application/json',
                            "ESB-JWT": "Token " + getToken,
                        },
                        data: {
                             "TxnRefNo":"APPS01203902",
                            "ChannelId":"APPS01",
                            "RequestTime":this.RequestTime(this.dateRequest),
                            "ServiceCode":"EDIT_PETUGAS_AGENCY",
                            "KodeAgent": this.kode_agent_petugas,
                            "IdPetugas": String(this.id_petugas),
                            "NamaPetugas": this.nm_petugas,
                            "Password": this.password_petugas,
                            "IdTerminal":this.id_terminal,
                            "TanggalRegistrasi": this.BackEndDateFormat(this.tglreg),
                            "TanggalKadaluarsa": this.BackEndDateFormat(this.tglexptugas),
                            "TanggalKadaluarsaPassword": this.BackEndDateFormat(this.tglexppassword),
                            "Email": this.email_petugas,
                            "HddSerialNumber": this.hdd,
                            "StatusAktif":status,
                            "LastAccess": this.BackEndDateFormat(this.lastakses_petugas),
                            "UserId": this.id_update_petugas,
                            "LastUpdate": this.BackEndDateFormat(this.lastdate_petugas),
                            "HakAkses": hakakses
                        }
                        }).then(response => {
                            console.log(response)
                            if (response.data.ResponseCode == '000000') {                              
                                alert(response.data.ResponseDesc + ' to Update')
                                this.Clearpetugas()
                            } else {
                                alert(response.data.ResponseDesc)                                
                            }
                        }).catch(error => {
                            console.log(error)
                        });
                    });
            },
        },
        
    }
</script>
