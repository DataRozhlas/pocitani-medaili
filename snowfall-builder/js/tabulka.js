 $.ajax({
   type: "GET",  
   // url: "https://dev.datarozhlas.cz/pocitani-medaili/snowfall-builder/data/medaile.csv",
   url: "https://www.irozhlas.cz/sites/default/files/uploader_unmanaged/medaile_180222-181420_zlo.csv",
   dataType: "text",       
   success: function(response)  
   {
 data = $.csv.toArrays(response);
 generateHtmlTable(data);
   }   
 });

function generateHtmlTable(data) {
    var html = '<table id="dt" class="" width="100%" cellspacing="0">';
      if(typeof(data[0]) === 'undefined') {
        return null;
      } else {
 $.each(data, function( index, row ) {
   //bind header
   if(index == 0) {
 html += '<thead>';
 html += '<tr>';
 $.each(row, function( index, colData ) {
 html += '<th>';
 html += colData;
 html += '</th>';
 });
 html += '</tr>';
 html += '</thead>';
 html += '<tbody>';
   } else {
 html += '<tr>';
 $.each(row, function( index, colData ) {
 html += '<td>';
 html += colData;
 html += '</td>';
 });
 html += '</tr>';
   }
 });
 html += '</tbody>';
 html += '</table>';
 $('#tabulka').append(html);
 $('#dt > tbody > tr > td:nth-child(6)').each(function() {
    if ($(this).text() == "bronz") {
        $(this).parent().addClass("bronz");
    } else if ($(this).text() == "stříbro") {
        $(this).parent().addClass("stribro");
    } else if ($(this).text() == "zlato") {
        $(this).parent().addClass("zlato");
    }

 });
 $('#dt').DataTable({
    "responsive": true,
    "language": {
        "url": "https://interaktivni.rozhlas.cz/tools/datatables/Czech.json" 
    },
    "order": [[0, "desc"], [3, "asc"]],
    "columnDefs": [
        {
            "targets": [7,8],
            "visible": false,
            "searchable": false
        },
        {
            "targets": [1],
            "render": function ( data, type, row ) {
                               return data + " " + row[0];
                           },
        },
        {
            "targets": [3],
            "render": function ( data, type, row ) {
                               if (type == "sort") {
                                return data;
                               }

                               return row[2] + " " + data;
                           },
        },
        {
            "targets": [6],
            "render": function ( data, type, row ) {
                               return Math.round(parseInt(data));
                           },
        },
        {
            "targets": [0, 2, 5],
            "visible": false
        },
    ]
    });
   }
 } 