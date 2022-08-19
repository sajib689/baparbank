document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInput = document.getElementById('btn-withdrawInput');
    const withdrawInputTotalString = withdrawInput.value;
    const withdrawButtonTotal = parseFloat(withdrawInputTotalString);
    // step-02

    const withdrawBalance = document.getElementById('withdraw-balance');
    const withdrawBalanceTotalString = withdrawBalance.innerText;
    const withdrawBalanceTotal = parseFloat(withdrawBalanceTotalString);
    const withdraw = withdrawBalanceTotal + withdrawButtonTotal;
    withdrawBalance.innerText = withdraw;

    // step-03
    const total = balanceTotal - withdrawButtonTotal;
    withdrawBalance.innerText = total;
})