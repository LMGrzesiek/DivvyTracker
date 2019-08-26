$(document).ready(function () {
    $.getJSON("https://data.cityofchicago.org/resource/fg6s-gzvg.json?$select=trip_id,%20start_time,%20stop_time,%20bike_id&$order=start_time%20DESC&$limit=1000", function (data) {
        var divvy_data = '';
        $.each(data, function (_key, value) {
            divvy_data += '<tr>';
            divvy_data += '<td>' + value.trip_id + '</td>';
            divvy_data += '<td>' + value.start_time + '</td>';
            divvy_data += '<td>' + value.stop_time + '</td>';
            divvy_data += '<td>' + value.bike_id + '</td>';
            divvy_data += '</tr>';
        });
        $("#divvy_table").append(divvy_data);
        $("#divvy_table").dataTable();
    });
});

