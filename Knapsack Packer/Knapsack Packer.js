//
// Krokhmaliuk Vitalii
// 


let v = [60, 100, 120]; //value
let w = [10, 20, 30];   //weight
let W = 50;             //max weight

function packBagpack(value, weights, capacity) 
{
    
  let n = weights.length;     //number of items
  let dp = new Array;  
    
  for (let i = 0; i <= capacity; i++) 
  {
    dp[i] = new Array(n + 1).fill(0);     //fill array with 0
  }
    
  for (let i = 1; i <= n; i++)                //
  {                                           //iterating over the array
    for (let j = 1; j <= capacity; j += 1)    //
    {
      if (weights[i - 1] <= j) 
      {
        dp[j][i] = Math.max(dp[j][i - 1], dp[j - weights[i - 1]] [i - 1] + value[i-1]);  //add the max value to the array
      } 
      
      else 
      {
        dp[j][i] = dp[j][i - 1];  //take the value of previous element of the array
      }
    }
  }
  
  return dp[capacity][n]; // return the last element of array

  // function findAns(capacity, n)
  // {
  //   let answer = [];
  //   if (dp[capacity][n] == 0 && answer.length >)
  //   {
  //     return;
  //   }

  //   if (dp[capacity][n - 1] == dp[capacity][n])
  //   {
  //     findAns(capacity, n - 1);
  //   }
        
  //   else
  //   {
  //     findAns(capacity - weights[n], n - 1);
  //     answer.push(n);
  //   }

  //   return answer;
  // }

  // return findAns(capacity, n)

}

console.log('value: ',v);
console.log('weight: ',w);
console.log('max weight: ',W);
console.log('Max value: ',packBagpack(v, w, W)); //output the  result
