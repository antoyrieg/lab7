var total = 0;
var groceries = [ {name:"Oranges", price: 1},
                 {name:"Bottled Water", price: 2},
                 {name:"Chips", price: 1},
                 {name:"Salsa", price: 3} ];

groceries.forEach(function(grocery) {
  console.log(grocery.name + " cost $" + grocery.price);
});

for (var i=0; i < groceries.length; i++) {
 total += groceries[i].price;
}
console.log("The subtotal of the objects is $" + total + ".");

function endingTotal(total)  {
 return (total * .06) + total ; }

var totalCost = endingTotal(total);
console.log("With tax, the total cost is $" + totalCost);