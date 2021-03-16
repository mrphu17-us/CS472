$(document).ready(function () {
    init();
});

function init() {
    $("#btnSearch").click(search);
    $("#searchbox").keypress(function (e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            search();
            return false;
        }
    });
    $(document).ajaxStart(function () {
        $(".container").LoadingOverlay("show", {
            image: "",
            text: "Loading..."
        });
    });
    $(document).ajaxStop(function () {
        $(".container").LoadingOverlay("hide");
    });
}

function search() {
	$("#searchbox").val("");
    $("#result").html("");
    $.ajax(
            "http://localhost:8080/OnlineDictionary/Entry/findAll", {
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
        console.log(data[i]);
        let item = data[i];
        let line = "<p class='result-item'> " + (i + 1) + "(" + item["wordtype"] + ") :: " + item["definition"] + "</p>";
        $("#result").append(line);
    }
    if (data.length == 0) {
        $("#result").append("<p class='result-item'>No result found! Please try again!</p>");
    }
}