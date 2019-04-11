<template>
    <div>
      <div class="contain">
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
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama User</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Password</label>
                                        <div class="col-xs-9"><input type="password" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID Terminal</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">HDD Serial Number</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Hak Akses</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Email Address</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Koordinator Lapangan</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Koordinator</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Ref User/Kode Koordinator</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Date Last Update</label>
                                        <div class="col-xs-9"><input type="text" class="form-control" placeholder="01/01/2003"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID User Update</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID User Update</label>
                                        <div class="col-xs-9"><input type="text" class="form-control" placeholder="01/01/2003"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Status Aktif</label>
                                        <div class="col-xs-9"><input type="text" class="form-control" placeholder="0 - Aktif"></div>
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
                <div class="tab-pane" id="2">
                    <div class="body-registrasi">
                        <h5>KOORDINATOR AGEN</h5>
                        <div class="row">
                            <form class="form-horizontal">
                              <div class="col-md-12 col-sm-12">
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kode Koordinator</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Koordinator</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Alamat</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3"></label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kota</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Kontak Person</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">No. Telp/HP</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Email Address</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Date Last Update</label>
                                        <div class="col-xs-9"><input type="text" class="form-control" placeholder="01/01/2003"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID User Update</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
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
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Agent</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Alamat</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3"></label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kota</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kode Pos</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Propinsi</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">No. Telp/HP</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Email Address</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Kontak Person</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">No. Telpon Kontak Person</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Koordinator Agen</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Waktu Regional</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Status Aktif</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">KPRK POS</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama KPRK</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Date Last Update</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">ID User Update</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
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
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Nama Agent</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Account Buffer</label>
                                        <div class="col-xs-9"><input type="text" class="form-control"></div>
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
                    <h3>Notice the gap between the content and tab after applying </h3>
                </div>
                <div class="tab-pane" id="6">
                    <h3>Notice the gap between the content and tab after applying a background </h3>
                </div>
                
             </div>
          </div>
      </div>  
    </div>
</template>

<script lang="ts">
    export default {
        name: 'registrasi'
    }
</script>
