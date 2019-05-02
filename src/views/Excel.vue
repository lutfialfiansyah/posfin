<template>
    <div>
        <div class="container">
            <div class="menu-excel">
                <a id="test">Export To Excel</a>
            </div>
          <div class="head-lap">
            <!-- <h4>LAPORAN EXPORT TO EXCEL<button type="button" class="close" v-on:click="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></h4> -->
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
const testJson = [
  {
    Kode_Mitra: "0121",
    Nama_Mitra: "Tony Peña",
    Transaksi: "21",
    Lembar: "7 lembar",
    BSU_Transaksi: 23,
    BSU_Fee: 42
  },
  {
    Kode_Mitra: "0041",
    Nama_Mitra: "Ahmad Santo",
    Transaksi: "21",
    Lembar: "9 lembar",
    BSU_Transaksi: 13,
    BSU_Fee: 23
  }
];

const testTypes = {
  Kode_Mitra: "Number",
  Nama_Mitra: "String",
  Transaksi: "String",
  Lembar: "String",
  BSU_Transaksi: "Number",
  BSU_Fee: "Number"
};
    export default {
        name: 'Excel',
        mounted: function() {
        this.handleDownload();
        },
        methods: {
            emitXmlHeader: function() {
            return (
                '<?xml version="1.0"?>\n' +
                '<ss:Workbook xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">\n' +
                '<ss:Worksheet ss:Name="Sheet1">\n' +
                "<ss:Table>\n\n"
            );
            },
            emitXmlFooter: function() {
            return "\n</ss:Table>\n" + "</ss:Worksheet>\n" + "</ss:Workbook>\n";
            },
            jsonToSsXml: function(jsonObject) {
            var row;
            var col;
            var xml;
            var data =
                typeof jsonObject != "object" ? JSON.parse(jsonObject) : jsonObject;

            xml = this.emitXmlHeader();

            for (row = 0; row < data.length; row++) {
                xml += "<ss:Row>\n";

                for (col in data[row]) {
                xml += "  <ss:Cell>\n";
                xml += '    <ss:Data ss:Type="' + testTypes[col] + '">';
                xml += data[row][col] + "</ss:Data>\n";
                xml += "  </ss:Cell>\n";
                }

                xml += "</ss:Row>\n";
            }

            xml += this.emitXmlFooter();
            return xml;
            },
            download: function(content, filename, contentType) {
            if (!contentType) contentType = "application/octet-stream";
            var a = document.getElementById("test");
            var blob = new Blob([content], {
                type: contentType
            });
            a.href = window.URL.createObjectURL(blob);
            a.download = filename;
            },
            handleDownload: function() {
            this.download(
                this.jsonToSsXml(testJson),
                "Test-Agen.xls",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            );
            },
            logout () {
            this.$session.destroy()
            this.$router.push('/login')
            },
        }
    }
</script>
