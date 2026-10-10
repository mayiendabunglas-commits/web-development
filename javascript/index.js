/*
{let bank_balance = 2000;
const fuliza_limit = 200;

const can_fuliza = (amount) => {
    if (amount <= bank_balance){
        return " You can Transact using your balance"

    }
    else if(amount <= bank_balance + fuliza_limit){
        return "You can complete transaction using fuliza"
    }
    else {
        return "YOU CAN'T TRANSACT"
   
    }
   
    
}

 console.log(`Hello chiko, ${can_fuliza(200)}`);
}
*/

for (i = 1; i <= 90; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is Even`);
  } else {
    console.log(`${i} is Odd`);
  }
}

let run = true;
while (run) {
  for (i = 1; i <= 100; i++) {
    if ((i == 90)) {
      console.log(i);

      run = false;
    }
  }
}

let j = 10;
while (j <= 100) {
  console.log(j);
  j++;
}
