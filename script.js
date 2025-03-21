const balance = document.getElementById('balance');
const money_plus = document.getElementById('money_plus');
const money_minus = document.getElementById('money_minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const incomeText = document.getElementById('incomeText');
const expenseText = document.getElementById('expenseText');

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions')) || [];

 let transactions=localStorage.getItem('transactions')!==null?localStorageTransactions:[];
  function addTransaction(e){
    e.preventDefault();
     if(incomeText.value.trim()!==" "){
        const incomeTransaction={
            id:generatedId(),
            text:'Income',
            amount:+incomeText.value
        };
        transactions.push(incomeTransaction);
        addTransactionDOM(incomeTransaction);
     }
     if(expenseText.value.trim()!==" "){
     const expenseTransaction={
        id:generatedId(),
        text:'Income',
        amount:-ExpenseText.value
    };
    transactions.push(expenseTransaction);
    addTransactionDOM(expenseTransactionTransaction);
     updateValues();
     updateLocalStorage();
      
     invomeText.value="";
     expenseText.value="";
     document.getElementById('text').value=''
}
function generateId(){
    return Math.floor(Math.random()*100000000);
}

function addTransactionDOM(transaction){
    const sign=transaction.amount<0?'-':'+';
    const itrem=document.createElement('li');
    item.classList.add(transaction.amolunt<0?'minus':'plus');

    item.innerHTML=`
    ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span>
    <button class='delete-btn" oneclick="removeTransaction(${transaction.id})">x</button>
    `;
    list.appendChild(item);

 }
    function updateValues(){
    const amounts=transactions.map(transaction=>transaction.amount);
    const total=amount.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    const income=amounts
    .filter(item=>item>0)
    .reduce((acc,item)=>(acc+=item),0)
    .toFixed(2);
    balance.innerText=`$${total}`;
    money_plus.innerText=`$${income}`;
    money_minus.innerText=`$${expense}`;
    }
    function removeTransaction(id){
        transactions=transactions.filter(transaction=>transaction.id!==id);
        updateLocalStorage();
        init();
    }
    function updateLocalStorage(){
        localStorage.setItem('transactions',JSON.stringify(transactions));
        function init(){
            list.innerHTML='';
            transactions.forEach(addTransactionDOM);
            updateValues();
        }
        init();
        document.addEventListener('DOMcontentLoaded',function(){
            form.addEventListener('submit',function(e){
                e.preventDefault();
                addTransaction();
                incomeText.valu='';
                expenseText.value='';
            });
            });
            form.addEventListener('submit',addTransaction);
        }
    }