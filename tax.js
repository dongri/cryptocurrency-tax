
var hash = [
    {amount: 0,    percent: 5},
    {amount: 195,  percent: 10},
    {amount: 330,  percent: 20},
    {amount: 695,  percent: 23},
    {amount: 900,  percent: 33},
    {amount: 1800, percent: 40},
    {amount: 4000, percent: 45}
]

hash.sort(function(a,b){
    if(a.amount < b.amount) return 1;
    if(a.amount > b.amount) return -1;
    return 0;
});

function calcTax(amount) {
    var tax = 0;
    var formula = "";
    hash.some(function(val, key) {
        console.log(val.amount);
        if (amount > val.amount * 10000) {
            tax = amount * (val.percent * 0.01);
            formula = amount + " x " + val.percent + "% = " + tax;
            return true;
        }
    });
    return [tax, formula];
}

$(document).ready(function(){
    $("#amount").keyup(function() {
        amount = $(this).val();
        result = calcTax(amount);
        tax = result[0];
        formula = result[1];
        $("#tax").html("￥"+numeral(tax).format('0,0'));
        $("#formula").html(formula);
    });
});
