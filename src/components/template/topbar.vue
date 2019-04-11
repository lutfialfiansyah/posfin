<template>
  <div>
    <div class="contain">
      <div class="main-header">
        <div class="navbar-left">
          <h4><img class="img-logo" src="../../assets/images/logo@3x.png">BACK OFFICE AGENT</h4>
        </div>
        <div class="navbar-right">
          <ul class="nav navbar-nav">
            <li><img class="icon-menu" src="../../assets/images/outline-lock-24-px@3x.png"><p>LOGOUT</p></li>
            <li><img class="icon-menu" src="../../assets/images/outline-assignment-24-px@3x.png"><p>REGISTRASI</p></li>
            <li><img class="icon-menu" src="../../assets/images/outline-table-chart-24-px@3x.png"><p>RECONSILIASI</p></li>
            <li><img class="icon-menu" src="../../assets/images/outline-account-balance-wallet-24-px@3x.png"><p>SALDO AGEN</p></li>
            <li><img class="icon-menu" src="../../assets/images/outline-class-24-px@3x.png"><p>LAPORAN</p></li>
            <li><img class="icon-menu" src="../../assets/images/outline-description-24-px@3x.png"><p>REKAM EXCEL</p></li>
            <li><img class="icon-menu" src="../../assets/images/outline-supervised-user-circle-24-px@3x.png"><p>KOORD LAPANGAN</p></li>
            <li><img class="icon-menu" src="../../assets/images/outline-cancel-24-px@3x.png"><p>PEMBATALAN</p></li>
            <li><img class="icon-menu" src="../../assets/images/outline-info-24-px@3x.png"><p>TENTANG APP</p></li>
          </ul>
        </div>
      </div>
      <div class="menu-home">
        <router-link to="/home"> <p><img class="icon-home" src="../../assets/images/outline-home-24-px@3x.png"> HOME</p></router-link>       
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    
  }
</script>
