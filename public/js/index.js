$(document).ready(function(){
    $('.load').text('Loading...')
    $.ajax({
        method: 'GET',
        url: 'http://localhost:4006/getBitcoinInfo',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data, status){
            $('.load').text('')
            $('.append-data').html('')
            var html = '';
            for(var i = 0; i < data.length; i++){
                html += '<tr>';
                html +=     '<td>'+data[0].data[i].current+'</td>';
                html +=     '<td>'+data[0].data[i].date_lowest+'</td>';
                html +=     '<td>'+data[0].data[i].lowest+'</td>';
                html +=     '<td>'+data[0].data[i].date_highest+'</td>';
                html +=     '<td>'+data[0].data[i].highest+'</td>';
                html += '<tr>';
            }
            $('.append-data').append(html)
        },
        error: function(err){
            $('.load').text('')
            $('.append-data').html('')
            $('.append-data').append('<tr><td colspan="3">Empty Data.. '+err.status+' '+err.statusText+'</td></tr>')
        }
    })
    $.ajax({
        method: 'GET',
        url: '/currency_list',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data, status){
            $('.currency-list-body').html('')
            var html = '<ul class="list-group">';
            for(var i = 0; i < data[0].data.length; i++){
                html +=     '<li id="currency-select-name" class="list-group-item" style="cursor: pointer" name="'+data[0].data[i].name+'">'+data[0].data[i].name+'</li>';
            }
            html += '<ul>';
            $('.currency-list-body').append(html)
        },
        error: function(err){
            $('.currency-list-body').html('')
            $('.currency-list-body').append('<span>Empty Data.. '+err.status+' '+err.statusText+'</span>')
        }
    })
})
$(document).on('click', '#currency-select-name', function(){
    var name = $(this).attr('name')
    $.ajax({
        method: 'GET',
        url: 'http://localhost:4006/currency?currency='+name,
        dataType: 'json',
        contentType: 'application/json',
        success: function(data, status){
            $('.append-data-select').html('')
            var html = '';
            for(var i = 0; i < data[0].data.length; i++){
                html += '<tr>';
                html +=     '<td>'+data[0].data[i].name+'</td>';
                html +=     '<td>'+data[0].data[i].current+'</td>';
                html +=     '<td>'+data[0].data[i].date_lowest+'</td>';
                html +=     '<td>'+data[0].data[i].lowest+'</td>';
                html +=     '<td>'+data[0].data[i].date_highest+'</td>';
                html +=     '<td>'+data[0].data[i].highest+'</td>';
                html += '<tr>';
            }
            $('.append-data-select').append(html)
        },
        error: function(err){
            $('.append-data-select').html('')
            $('.append-data-select').append('<span>Empty Data.. '+err.status+' '+err.statusText+'</span>')
        }
    })
})