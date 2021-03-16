"use strict";

$(document).ready(function () {
    init();
});

function init() {
    $("#btnSearch").click(search);
    $("#searchbox").keypress(enterHandling);
    myLoading.startBinding();
    myLoading.stopBinding();

}

var myLoading = (function () {
    return {
        startBinding: function () {
            $(document).ajaxStart(function () {
                $(".container").LoadingOverlay("show", {
                    image: "",
                    text: "Loading..."
                });
            });
        },
        stopBinding: function () {
            $(document).ajaxStop(function () {
                $(".container").LoadingOverlay("hide");
            });
        }
    };
})();

function enterHandling(e) {
    var key = e.which;
    if (key == 13) // the enter key code
    {
        search();
        return false;
    }
}

function search() {
    if ($("#searchbox").val() == "") return false;
    $("#result").html("");
    $.ajax(
            "/OnlineDictionary/Entry/findAll", {
                "type": "POST",
                "data": {
                    "keyword": $("#searchbox").val()
                }
            })
        .done(mappingResult)
        .fail(function (error) {
            console.log(error.statusText);
        });
}

function mappingResult(data) {
    for (let i = 0; i < data.length; i++) {
        let line = "<div class='result-item'><span>" + (i + 1) + ". (" + data[i].wordtype + ")</span><blockquote>" +
            data[i].definition + "</blockquote></div>";
        $("#result").append(line);
    }
    if (data.length == 0) {
        $("#result").append("<p class='result-item'>No result found! Please try again!</p>");
    }
}