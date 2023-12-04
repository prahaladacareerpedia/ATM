const prompt=require("prompt-sync")()


const SBI={
    BankName:'SBI',
    UserName:'prahalada',
    UserPwd : 1234,
    TranferUserName:'satya',
    AccountNumber:'26666'
}

const HDFC={
    BankName:'HDFC',
    UserName:'veeresh',
    UserPwd : 12345,
    TranferUserName:'praha1',
    AccountNumber:'26667'
}
const AXIS={
    BankName:'AXIS',
    UserName:'raghu',
    UserPwd : 123456,
    TranferUserName:'praha2',
    AccountNumber:'26668'
}



var BankBalance=1000;
var TransferBankBalance=1000;

var Notes_2000=false;
var Notes_500=true;
var Notes_200=true;
var Notes_100=true;

let user=prompt("enter your name:")

let password= parseInt(prompt("enter your password: "));






if((user==HDFC.UserName)&&(password==HDFC.UserPwd)
|| (user==SBI.UserName)&&(password==SBI.UserPwd) 
|| (user==AXIS.UserName)&&(password==AXIS.UserPwd)){
console.log("Welcome to banking process")



while(true){

    const options={
        Deposit:'1',
        Withdraw:'2',
        BalanceEnquiry:'3',
        MoneyTransfer:'4',
        MiniStatement:'5',
        Exit:"6"
     }
     console.table(options)
     const option=prompt('Choose your option')
     if(option==options.Deposit){
        console.log('Welcome to the deposite process:')

        var DepositAmount=parseInt(prompt('Enter the Deposite Amount:'));
        if((DepositAmount==0)||(DepositAmount<0)||(DepositAmount>0)){
                 BankBalance+=DepositAmount;
                 console.log('Deposit Amount:',DepositAmount)

        }


     }
     else if(option==options.Withdraw){
        console.log('Welcome to the withdraw process:')
        var WithdrawAmount=parseInt(prompt('Enter the withdraw Amount:'));
        if(WithdrawAmount<=BankBalance){
            BankBalance -= WithdrawAmount;
            console.log("withdraw amount:",WithdrawAmount)
            var count=0;
            if(Notes_2000 && WithdrawAmount>=2000){
                var Notes_2000_count=Math.floor(WithdrawAmount/2000)
                console.log('count 2000:',Notes_2000_count)
                count=count+Notes_2000_count
                WithdrawAmount-=Notes_2000_count *2000
            }
            if(Notes_500&&WithdrawAmount>=500){
                var Notes_500_count=Math.floor(WithdrawAmount/500)
                console.log('count 500:',Notes_500_count)
                count=count+Notes_500_count
                WithdrawAmount -= Notes_500_count*500
            }
            if(Notes_200&&WithdrawAmount>=200){
                var Notes_200_count=Math.floor(WithdrawAmount/200)
                console.log('count 200:',Notes_200_count)
                count=count+Notes_200_count
                WithdrawAmount -= Notes_200*200
            }
            if(Notes_100&&WithdrawAmount>=100){
                var Notes_100_count=Math.floor(WithdrawAmount/100)
                console.log('count 100:',Notes_100_count)
                count=count+Notes_100_count
                WithdrawAmount -= Notes_100*100
            }
            

        }else{
            console.log('Insuffient balance')
        }
      
    
     }
     else if(option==options.BalanceEnquiry){
        console.log('Welcome to the BalanceEnquery process:')
        console.log(BankBalance)
    
     }
     else if(option==options.MoneyTransfer){
        console.log('Welcome to the Moneytrafer process: ')
        let TransferUseId= prompt('Enter the transfer user id : ')
        let TransferAccountNumber=prompt('Enter the transfer account number : ')
        if((TransferUseId==SBI.TranferUserName)&&(TransferAccountNumber==SBI.AccountNumber)||
          ((TransferUseId==HDFC.TranferUserName)&&(TransferAccountNumber==HDFC.AccountNumber)||
          ((TransferUseId==AXIS.TranferUserName)&&(TransferAccountNumber==AXIS.AccountNumber)))){
                  var TransferAmount=parseInt(prompt('Enter the Transfer Amount'));
                 if(TransferAmount<=BankBalance){
                    TransferBankBalance+=TransferAmount;
                    BankBalance -= TransferAmount;
                    console.log(' Bank Balance:',BankBalance);
                    console.log('Transfer Bank Balance:',TransferAmount);

                 }
        }
    
     }
     else if(option==options.MiniStatement){
        console.log('Welcome to the Ministatement process:')
    
     }
     else if(option==options.Exit){
        console.log('Thank you for banking');
        break;
    
     }else{
        console.log('Choose is your correct option:')

     }

}
 

} else{
    console.log("Invalid credentials")
}
//////////////////////////////////////////////////////////


// const Account=[ 
//     {
//     UserName :'prahalada007.@axis.com',
//     UserPassword :'123456'
// },
// {
//     UserName :'prahalada.@sbi.com',
//     UserPassword :'12345'
// }

// ]

// let user1 = prompt('enter you id: ');
// let pwd=prompt('enter your password: ');

// for(let i=0; i<Account.length; i++){
//     if(Account[i].UserName == user1){
//         console.log("correct");
//         break;
//     }
//     else{
//         console.log("Incoreect");
//     }
// }


////////////////////////////////////////////////////


// const Axis={
//     UserName :'prahalada007.@axis.com',
//     UserPassword :'123456'
// };

// const userId=prompt('Enter user id :');



// if(userId===Axis.UserName){
//     const userPwd=prompt('Enter user password :')
//     if(userPwd==Axis.UserPassword){
//         console.log("welcome")

//     }
//     else{
//         console.log("Invalid your password")
//     }
// }
// else{
//     console.log('Invalid your user id')
// }



//////////////////////////////////////////////////////////
// const AxisBank={
//     UserName :'prahalada007.@axis.com',
//     UserPassword :123456
// }

// const SBI={
//      UserName :'raghu',
//     UserPassword :1234567
// }

// const HDFC={
//      UserName :'veeresh',
//     UserPassword :12345
// }


// console.table(AxisBank);
// console.table(SBI);
// console.table(HDFC)


// let  User=prompt('Enter your username:');
// let Pwd=prompt('Enter your password:')

// if(((User==HDFC.UserName) && (Pwd==HDFC.UserPassword)) || ((User==SBI.UserName)&&(Pwd==SBI.UserPassword))||((User==AxisBank.UserName)&&(Pwd==AxisBank.UserPassword))){
//     console.log('Welcome to  the ATM');
// }else{
//     console.log('Check your credentials')
// }










