var searchHistory = [];

function getItems() {
    var storedCities = JSON.parse(localStorage.getItem("searchHistory"));
    if (storedCities !== null) {
        searchHistory = storedCities;
    };

    for (i = 0; i < searchHistory.length; i++) {
        if (i == 8) {
            break;
        }

        cityListButton = $("<a>").attr({
            class: "list-group-item list-group-item-action",
            href: "#"
        });

        cityListButton.text(searchHistory[i]);
        $(".list-group").append(cityListButton);
    }
};

$("#searchCity").click(function() {
    city = $("#city").val().trim();
    getData();
    var checkArray = searchHistory.includes(city);
    if (checkArray == true) {
        return
    }
    else {
        searchHistory.push(city);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
        var cityListButton = $("<a>").attr({
            
            class: "list-group-item list-group-item-action",
            href: "#"
        });
        cityListButton.text(city);
        $(".list-group").append(cityListButton);
    };
});

$(".list-group-item").click(function() {
    city = $(this).text();
    getData();
});

$("#searchCity").keypress(function () {  
    var _val = $("#searchCity").val();  
    var _txt = _val.charAt(0).toUpperCase() + _val.slice(1);  
    $("#searchCity").val(_txt);
});
