document.getElementById('deposit-btn').addEventListener('click', function (){
    const depositField = document.getElementById('deposit-field')
    const depositTotalValue = depositField.value;
    depositField.value = ''
    const depositTotalElement = document.getElementById('deposit-total')
    const depositTotal = depositTotalElement.innerText;

    const depositCurrent =  parseInt(depositTotalValue)  + parseInt(depositTotal)

    depositTotalElement.innerText = depositCurrent ;
    const totalBalance = document.getElementById('total-balance')
    const currentTotalBalance = totalBalance.innerText 
    const currentTotalParse = parseInt(currentTotalBalance)
    const totalCurrentBalance = currentTotalParse + parseInt(depositTotalValue)
    totalBalance.innerText = totalCurrentBalance

})