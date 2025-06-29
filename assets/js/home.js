
var currentDate = new Date();

function scrollIntoView(){
    let myTimeout = setTimeout(() => {
        document.getElementById('main').scrollIntoView();
        clearTimeout(myTimeout);
      }, 3000);
     
   
}


function loadYrOfExperience() {
    var firstDay = new Date("02-22-2017");
    var exp = getExperience(firstDay, currentDate, true);
    var totalYrOfExpEles = document.getElementsByClassName("total-yr-exp");

    for (var i = 0; i < totalYrOfExpEles.length; i++) {
        totalYrOfExpEles[i].innerText = exp.years;
    }

    new PureCounter({
        selector: '#total-yr-exp-counter',
        start: 0,
        end: exp.years,
        duration: 2,
        delay: 10,
        once: true,
        repeat: false,
        decimals: 0,
        legacy: true,
        filesizing: false,
        currency: false,
        separator: false,
    });

    
    

   
    var expString = getExperience(firstDay, currentDate, false);
    document.getElementById("full-experience").innerText = expString;

}

function loadIndividualExp() {
    var companyList = [
        { eleId: "aspire-exp", startDay: new Date("06-23-2022"), endDay: new Date() },
        { eleId: "mindtree-exp", startDay: new Date("05-24-2021"), endDay: new Date("06-22-2022") },
        { eleId: "iexed-exp", startDay: new Date("05-02-2019"), endDay: new Date("06-18-2021") },
        { eleId: "omnificence-exp", startDay: new Date("02-20-2017"), endDay: new Date("04-29-2019") },
    ]

    companyList.forEach(company => {
        var exp = getExperience(company.startDay, company.endDay, true);
        var ele = document.getElementById(company.eleId);
        if (exp && ele) {
            var res = "";
            if (exp.years) {
                res = pluralize(exp.years, 'Year');
            }
            if (exp.months) {
                res = res + " " + pluralize(exp.months, 'Month');
            }
            if (!exp.years && exp.days) {
                res = res + " " + pluralize(exp.days, 'Day');
            }
            ele.innerText = res;
        }
    });


}

function pluralize(num, word) {
    return num + ' ' + word + (num === 1 ? '' : 's');
}

function getExperience(startDate, endDate, type) {
    var startDateObj = moment(startDate);
    var endDateObj = moment(endDate);
    var exp = moment.preciseDiff(endDateObj, startDateObj, type);
    console.log(exp);
    return exp;
}

loadYrOfExperience();
loadIndividualExp();
scrollIntoView();
