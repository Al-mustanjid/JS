/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument. 
cid is a 2D array listing available currency. The checkCashRegister() function should always return an object with a status key and a change key. 
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change. 
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due. Otherwise, 
return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, 
as the value of the change key. */

let denom = [
	{ name: 'ONE HUNDRED', val: 100},
	{ name: 'TWENTY', val: 20},
	{ name: 'TEN', val: 10},
	{ name: 'FIVE', val: 5},
	{ name: 'ONE', val: 1},
	{ name: 'QUARTER', val: 0.25},
	{ name: 'DIME', val: 0.1},
	{ name: 'NICKEL', val: 0.05},
	{ name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
//setting basic output status
 var output = {status: null, change: []};
 //getting the chnage amount
 var change = cash - price;
 //counting total amount in cash in drawer
 var register = cid.reduce(function(acc, next) {
 acc.total += next[1];
 acc[next[0]] = next[1];
 return acc;
 }, {total: 0});

 //checking the change amount with the total amount
 if(register.total === change) {
 output.status = 'CLOSED';
 output.change = cid;
 return output;
 }
 if(register.total < change) {
 output.status = 'INSUFFICIENT_FUNDS';
 return output;
 }

 //if changes are maded then updating the information in cid
 var change_arr = denom.reduce(function(acc, next) {
 var value = 0;
 while(register[next.name] > 0 && change >= next.val) {
 change -= next.val;
 register[next.name] -= next.val;
 value += next.val;
 change = Math.round(change * 100) / 100;
 }
 if(value > 0) {
 acc.push([ next.name, value ]);
 }
 return acc;
 }, []);

 if(change_arr.length < 1 || change > 0) {
 output.status = 'INSUFFICIENT_FUNDS';
 return output;
 }
 output.status = 'OPEN';
 output.change = change_arr;
 return output;
}

let result = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(result)