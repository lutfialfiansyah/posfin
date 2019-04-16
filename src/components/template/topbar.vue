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
            <img class="img-logo" src="../../assets/images/logo@3x.png"><h4>BACK OFFICE AGENT</h4>
        <div id="navbar-collapse-02" class="collapse navbar-collapse pull-right">
          <ul class="nav navbar-nav">
            <li><a href="javascript:void(0)" v-on:click="logout"><img class="icon-menu" src="../../assets/images/outline-lock-24-px@3x.png"><p>LOGOUT</p> </a></li>
            <li><router-link to="/registrasi"> <img class="icon-menu" src="../../assets/images/outline-assignment-24-px@3x.png"><p>REGISTRASI</p></router-link></li>
            <li><router-link to="/registrasi"> <img class="icon-menu" src="../../assets/images/outline-table-chart-24-px@3x.png"><p>RECONSILIASI</p></router-link></li>
            <li><router-link to="/registrasi"> <img class="icon-menu" src="../../assets/images/outline-account-balance-wallet-24-px@3x.png"><p>SALDO AGEN</p></router-link></li>
            <li><router-link to="/registrasi"> <img class="icon-menu" src="../../assets/images/outline-class-24-px@3x.png"><p>LAPORAN</p></router-link></li>
            <li><router-link to="/registrasi"> <img class="icon-menu" src="../../assets/images/outline-description-24-px@3x.png"><p>REKAM EXCEL</p></router-link></li>
            <li><router-link to="/koordinator"> <img class="icon-menu" src="../../assets/images/outline-supervised-user-circle-24-px@3x.png"><p>KOORD LAPANGAN</p></router-link></li>
            <li><router-link to="/registrasi"> <img class="icon-menu" src="../../assets/images/outline-cancel-24-px@3x.png"><p>PEMBATALAN</p></router-link></li>
            <li><router-link to="/registrasi"> <img class="icon-menu" src="../../assets/images/outline-info-24-px@3x.png"><p>TENTANG APP</p></router-link></li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    methods: {
        logout () {
        this.$session.destroy()
        this.$router.push('/login')
      }
    }
  }
</script>
