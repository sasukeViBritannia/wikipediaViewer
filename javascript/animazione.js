'use strict';
$(document).ready(function() {


    /*var link = '';*/

    /*Apertura pagina casuale in wikipedia*/
    $('#casuale').on('click', function() {
        window.open('https://it.wikipedia.org/wiki/Special:Random');
    });

    $('form').submit(function(event) {
        event.preventDefault();
        var testo = $('input[name="ricerca"]').val();
        window.alert('Form attivata con testo: ' + testo);
        $.ajax({
                url: 'https://it.wikipedia.org///w/api.php?action=query&format=json&list=search&utf8=1&srsearch=' + testo,
                type: 'GET',
                dataType: 'jsonp',
            })
            .done(function(data) {
                console.log("success");
                var trovati = data.query.searchinfo.totalhits;
                if (trovati > 0) {
                    for (var i = 0; i < 9; i++) {
                        var link = data.query.search[i].title;
                        var snippet = data.query.search[i].snippet;
                        var codificato = encodeURI(link);
                        console.log(link);
                        $('.risultati').find('div').eq(i).slideDown('slow').find('p').eq(0).text(link);
                        $('.risultati').find('div').eq(i).slideDown('slow').find('p').eq(1).html(snippet);
                        $('.risultati').find('div').eq(i).slideDown('slow').find('p').eq(2).find('a').attr({'href': 'https://it.wikipedia.org/wiki/'+codificato, 'target': '_blank'});
                    }

                } else {
                    window.alert('Nessun risultato trovato');
                }

            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
    });

    $('.card').find('p').last().children().on('click', function() {
        $(this).toggleClass('testoNonEspanso testoEspanso');
   
    });

});

