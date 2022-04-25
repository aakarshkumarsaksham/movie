// Store the wallet amount to your local storage with key "amount"

let money = JSON.parse(localStorage.getItem('amount')) || [] ;


function addToWallet(){

     let money=document.getElementById('amount').value;
     localStorage.setItem('amount',JSON.stringify(money))

     let wallet=document.getElementById('wallet');
     wallet.innerText=money; 
}

