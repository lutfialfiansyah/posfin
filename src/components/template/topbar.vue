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
            <img class="img-fin" src="../../assets/images/logo-pos-fin-new@3x.png"><img class="img-logo" src="../../assets/images/logo@3x.png"><h4>BACK OFFICE AGENT</h4>
        <div id="navbar-collapse-02" class="collapse navbar-collapse pull-right">
          <ul class="nav navbar-nav">
            <li><a data-href="javascript:void(0)" v-on:click="logout"><img class="icon-menu" src="../../assets/images/outline-lock-24-px@3x.png"><p>LOGOUT</p> </a></li>
            <li><a data-href="/registrasi"><img class="icon-menu" src="../../assets/images/outline-assignment-24-px@3x.png"><p>REGISTRASI</p></a></li>
            <li><a data-href="/reconsiliasi"><img class="icon-menu" src="../../assets/images/outline-table-chart-24-px@3x.png"><p>RECONSILIASI</p></a></li>
            <li><a data-href="/saldoagent"> <img class="icon-menu" src="../../assets/images/outline-account-balance-wallet-24-px@3x.png"><p>SALDO AGEN</p></a></li>
            <li><a data-href="#" class="disabled"> <img class="icon-menu" src="../../assets/images/outline-class-24-px@3x.png"><p>LAPORAN</p></a></li>
            <li><a data-href="#" class="disabled"><img class="icon-menu" src="../../assets/images/outline-description-24-px@3x.png"><p>REKAM EXCEL</p></a></li>
            <li><a data-href="#" class="disabled"> <img class="icon-menu" src="../../assets/images/outline-supervised-user-circle-24-px@3x.png"><p>KOORD LAPANGAN</p></a></li>
            <li><a data-href="#" class="disabled"><img class="icon-menu" src="../../assets/images/outline-cancel-24-px@3x.png"><p>PEMBATALAN</p></a></li>
            <li><a data-href="/about"> <img class="icon-menu" src="../../assets/images/outline-info-24-px@3x.png"><p>TENTANG APP</p></a></li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
$("body").on("click", "a[data-href]", function() {
    var href = $(this).data("href");
    if (href) {
        location.href = href;
    }
});
// const testJson = [
//   {
//     Kode_Mitra: "0121",
//     Nama_Mitra: "Tony Peña",
//     Transaksi: "21",
//     Lembar: "7 lembar",
//     BSU_Transaksi: 23,
//     BSU_Fee: 42
//   },
//   {
//     Kode_Mitra: "0041",
//     Nama_Mitra: "Ahmad Santo",
//     Transaksi: "21",
//     Lembar: "9 lembar",
//     BSU_Transaksi: 13,
//     BSU_Fee: 23
//   }
// ];

// const testTypes = {
//   Kode_Mitra: "Number",
//   Nama_Mitra: "String",
//   Transaksi: "String",
//   Lembar: "String",
//   BSU_Transaksi: "Number",
//   BSU_Fee: "Number"
// };

  export default {
    // mounted: function() {
    //     this.handleDownload();
    //     },
    methods: {
        logout () {
        this.$session.destroy()
        this.$router.push('/login')
      },
      // emitXmlHeader: function() {
      //       return (
      //           '<?xml version="1.0"?>\n' +
      //           '<ss:Workbook xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">\n' +
      //           '<ss:Worksheet ss:Name="Sheet1">\n' +
      //           "<ss:Table>\n\n"
      //       );
      //       },
      //       emitXmlFooter: function() {
      //       return "\n</ss:Table>\n" + "</ss:Worksheet>\n" + "</ss:Workbook>\n";
      //       },
      //       jsonToSsXml: function(jsonObject) {
      //       var row;
      //       var col;
      //       var xml;
      //       var data =
      //           typeof jsonObject != "object" ? JSON.parse(jsonObject) : jsonObject;

      //       xml = this.emitXmlHeader();

      //       for (row = 0; row < data.length; row++) {
      //           xml += "<ss:Row>\n";

      //           for (col in data[row]) {
      //           xml += "  <ss:Cell>\n";
      //           xml += '    <ss:Data ss:Type="' + testTypes[col] + '">';
      //           xml += data[row][col] + "</ss:Data>\n";
      //           xml += "  </ss:Cell>\n";
      //           }

      //           xml += "</ss:Row>\n";
      //       }

      //       xml += this.emitXmlFooter();
      //       return xml;
      //       },
      //       download: function(content, filename, contentType) {
      //       if (!contentType) contentType = "application/octet-stream";
      //       var a = document.getElementById("test");
      //       var blob = new Blob([content], {
      //           type: contentType
      //       });
      //       a.href = window.URL.createObjectURL(blob);
      //       a.download = filename;
      //       },
      //       handleDownload: function() {
      //       this.download(
      //           this.jsonToSsXml(testJson),
      //           "Test-Agen.xls",
      //           "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      //       );
      //       },
    }
  }
</script>
