// Step 1 selecting all the elements
var initialPrice=document.getElementById("initial-price");
var currentPrice=document.getElementById("current-price");
var stockQuantity=document.getElementById("stock-quantity");
var submitBtn=document.getElementById("submit-btn");
var outputBox=document.getElementById("output-box");

// other way to select elements
// var initialPrice=document.querySelector("#initial-price");
// var currentPrice=document.querySelector("#current-price");
// var stockQuantity=document.querySelector("#stock-quantity");
// var submitBtn=document.querySelector("#submit-btn");
// var outputBox=document.querySelector("#output-box");

function calculateProfitAndLoss(initial, quantity, current)
{
    if(initial>current){
    var loss=(initial-current)*quantity;
    var lossPercent=loss/initial*100;
    console.log(`Hey Loss is ${loss} and lossPercent is ${lossPercent}%`);
    }

    else if(current>initial){
    var profit=(current-initial)*quantity;
    var profitPercent=profit/initial*100;
    console.log(`Hey Profit is ${profit} and profitPercent is ${profitPercent}%`);
    }

    else
    console.log(`Hey no loss no pain and no gain no pain`);

}
// calculateProfitAndLoss(100,100,10) providing the inputs manually to calculate profit/loss


