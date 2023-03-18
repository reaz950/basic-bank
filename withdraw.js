document.getElementById('withdrew-btn').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field')
    const withdrawTotalValue = withdrawField.value;
    withdrawField.value = ''
    const withdrawTotal = document.getElementById('withdrw-total')
    const currentWithdraw = withdrawTotal.innerText
    const totalNewWithdraw = parseFloat(withdrawTotalValue) + parseFloat(currentWithdraw)
    withdrawTotal.innerText = totalNewWithdraw;
    const totalBalance = document.getElementById('total-balance')
    const totalBalanceString = totalBalance.innerText
    const currentTotalBalance = parseFloat(totalBalanceString)
    const newTotalBalance = currentTotalBalance - parseFloat(withdrawTotalValue)
    totalBalance.innerText = newTotalBalance
    console.log(currentTotalBalance);   
})