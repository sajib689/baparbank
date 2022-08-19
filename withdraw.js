document.getElementById('btn-deposit').addEventListener('click', function () {
    const withdrawButton = document.getElementById('user-ammount');
    const withdrawButtonTotalString = withdrawButton.value;
    const withdrawButtonTotal = parseFloat(withdrawButtonTotalString);
    
    // step-02
    const depositBalance = document.getElementById('deposit-balance');
    const depositBalanceTotalString = depositBalance.innerText;
    const depositBalanceTotaol = parseFloat(depositBalanceTotalString);
   
    const deposit = withdrawButtonTotal + depositBalanceTotaol;
    depositBalance.innerText = deposit;
    // step-03
    const balance = document.getElementById('balance-total');
    const balanceTotalString = balance.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    
    const totalBalance =  balanceTotal + withdrawButtonTotal ;
    balance.innerText = totalBalance;

})

