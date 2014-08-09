﻿$(function() {
    var ctx = $("#report-chart").get(0).getContext("2d"),
        dataTable = $("#commerce-report-data-table"),
        labels = dataTable.find("tbody tr td.description").map(function() { return $(this).html(); }),
        values = dataTable.find("tbody tr td.value").map(function () { return parseFloat($(this).data("value"), 10); }),
        chartType = dataTable.data("chart-type"),
        palette = ["hsla(164,34%,50%,1)","hsla(141,20%,64%,1)","hsla(34,54%,85%,1)","hsla(42,72%,68%,1)","hsla(7,68%,54%,1)","hsla(13,54%,33%,1)"],
        data = {
            labels: labels,
            datasets: [
                {
                    label: document.title,
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: values
                }
            ]
        },
        chart = new Chart(ctx)[chartType](data, { bezierCurve: false });

    $("#startDate,#endDate").calendarsPicker({
        showAnim: "",
        renderer: $.extend({}, $.calendars.picker.themeRollerRenderer, {
            picker: "<div {popup:start} id='ui-datepicker-div'{popup:end} class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all{inline:start} ui-datepicker-inline{inline:end}'><div class='ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all'>{link:prev}{link:today}{link:next}</div>{months}{popup:start}{popup:end}<div class='ui-helper-clearfix'></div></div>",
            month: "<div class='ui-datepicker-group'><div class='ui-datepicker-month ui-helper-clearfix'>{monthHeader:MM yyyy}</div><table class='ui-datepicker-calendar'><thead>{weekHeader}</thead><tbody>{weeks}</tbody></table></div>"
        })
    });
});