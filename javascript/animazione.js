'use strict';
$(document).ready(function() {


    var link = '';

    /*Apertura pagina casuale in wikipedia*/
    $('#casuale').on('click', function() {
        window.open('https://it.wikipedia.org/wiki/Special:Random');
    });

    /*Bloccata azione generata dalla form*/
    $('form').submit(function(event) {
        event.preventDefault();
    });

    /*Pressione tasto ricerca*/
    $('#invia').on('click', function() {
        $('.risultati').empty();
        $('.risultati').css('padding', '0');
        var testo = $('input[name="ricerca"]').val();
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
                        link = data.query.search[i].title;
                        var snippet = data.query.search[i].snippet;
                        var codificato = encodeURI(link);
                        $('.risultati').css('padding', '20px');
                        $('.risultati').append('<div class="card"><p>Titolo</p><p>Contenuto</p><p>' +
                            '<a href="#">Continua su Wikipedia</a><span id="freccia" class="espandi testoNonEspanso"></span></p></div>');
                        $('.risultati').find('div').eq(i).slideDown('slow').find('p').eq(0).text(link);
                        $('.risultati').find('div').eq(i).slideDown('slow').find('p').eq(1).html('<i>' + snippet + '</i>');
                        $('.risultati').find('div').eq(i).slideDown('slow').find('p').eq(2).find('a').attr({ 'href': 'https://it.wikipedia.org/wiki/' + codificato, 'target': '_blank' });
                    }

                } else {
                    $('.risultati').append('<h2 style="text-align: center">Nessun risultato trovato</h2>');
                }
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
    });

    /*Animazione espansione testo dei risultati ottenutiS*/
    $('.risultati').on('click', '#freccia', function() {
        $(this).toggleClass('testoNonEspanso testoEspanso');
        $(this).closest('div').children('p').eq(1).toggle('300ms');
    });

});
