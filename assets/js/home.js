var firstDay = new Date("02-22-2017");
var currentDate = new Date();
var totalYrOfExp = 0;
function calculateExperience() {

    var firstDayObj = moment(firstDay);
    var currentDateObj = moment(currentDate);
    var diff = moment.preciseDiff(currentDateObj, firstDayObj, true);
    console.log(diff);

    var totalYrOfExpEles = document.getElementsByClassName("total-yr-exp");

    for (var i = 0; i < totalYrOfExpEles.length; i++) {
        var price = totalYrOfExpEles[i].innerText = diff.years;
    }
}

calculateExperience();