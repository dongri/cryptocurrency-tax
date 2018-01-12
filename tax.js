
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
    hash.some(function(val, key) {
        console.log(val.amount);
        if (amount > val.amount * 10000) {
            console.log("percent", val.percent);
            tax = amount * (val.percent * 0.01);
            return true;
        }
    });
    return tax;
}

console.log(calcTax(4001 * 10000));

$(document).ready(function(){
    $("#amount").keyup(function() {
        amount = $(this).val();
        tax = calcTax(amount);
        $("#tax").html("￥"+numeral(tax).format('0,0'));
    });
});
