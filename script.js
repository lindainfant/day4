//Do the below programs in anonymous function & IIFE
//Print odd numbers in an array
//Convert all the strings to title caps in a string array
//Sum of all numbers in an array
//Return all the prime numbers in an array
//Return all the palindromes in an array
//Return median of two sorted arrays of the same size.
//Remove duplicates from an array
//Rotate an array by k times


//Do the below programs in arrow functions.
//Print odd numbers in an array
////Convert all the strings to title caps in a string array
//Sum of all numbers in an array
//Return all the prime numbers in an array
//Return all the palindromes in an array



//PRINT ODD NUMBERS IN Array
var result=[]
 var a=function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0)
          {
            result.push(arr[i]);
          }
            
       } 
     }return result
  



 //USING IIFE:

 var result=[];
 (function (array){
   for(var i=0; i<array.length; i++)
    {
      if(array[i]%2!==0)
      {
         result.push(arr[i]);
      }
    }
    console.log(result);
 })([1,3,3,4,5,6,7,8,9])

//b.Convert all the strings to title caps in a string array
anonymous : 
var str="my name is LINDA";
function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}(str)

//IIFE :
var str="my name is linda";
(function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
})(str);

//Sum of all numbers in an array
//Anonymous:
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}(a);


//IIFE :
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
(function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
})(a);

//Return all the prime numbers in an array
//Anonymous Function:
                 

let n=34;
function (n)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
      console.log(i);
      }
   }
}
(n);

//IIFE :
let n=34;
(function (n)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
})(n);

//Return all the palindromes in an array

//Anonymous Function : 

function palindromes (arr)
    {
var result=[]
      for (var i = 0; i <arr.length; i++)
        {
            var data = arr[i].split("").reverse().join("")
        }
            if (data===arr[i]){
               result.push(arr[i])
            }
         
        }
        console.log(palindromes(["dad","mom","data"]));
        
    

    //IIFE : 

              (  function (arr, n)
        {
            // Traversing each element of the array
            // and check if it is palindrome or not
            for (let i = 0; i < n; i++)
            {
                let ans = isPalindrome(arr[i]);
                if (ans == false)
                    return false;
            }
            return true;
        })([1,2,3] , 3)
    
//Return median of two sorted arrays of the same size.
//Anonymous:
let arr1=[1,3,5,7]
let arr2=[2,4,6,8]
function median(arr1,arr2){
   let arr=[...arr1,...arr2]
   console.log(arr);
   arr.sort((a,b)=>a-b)
   console.log(arr)
   let n=arr.length;
   if(n%2===0){
      return((arr[n/2]+arr[n-1]))/2;
   }
else{
   return arr[math floor(n/2)]
}
}console.log(median(arr1,arr2));

//IIFE:
(function(nums1, nums2) {
   let s1= nums1.length
   let s2= nums2.length
   let index = s1+s2
   if(s1==0){
       if(s2%2==1){
           return nums2[Math.floor(index/2)]
       }else{
           return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2
       }
   }
   for(let i=0 ; i<index/2+1;i++){
           nums1.push(nums2[i])
       }
   nums1.sort((a,b)=>a-b)
   console.log(nums1)
   if(index%2==1){
       return nums1[Math.floor(index/2)]
   }else{
       return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2
   }
   
});


//Remove duplicates from an array

//anonymous :
var array=[1,1,2,3,4,5];
function (array){
   let dup = [...new Set(array)];
   return(dup);
 }
 (array);

 //IIFE :
 var array=[1,1,2,3,4,5];
(function (array){
   let dup = [...new Set(array)];
   return(dup);
 })
 (array);

//Rotate an array by k times
//anonymous :
function (a, n, k)
{
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
           
            console.log(a[n + i - k] + " ");
        }
        else {
  
            
            console.log((a[i - k]) + " ");
        }
    }
   
}
  let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
(Array, N, K);

//IIFE :
var Array = [1, 2, 3, 4, 5];
var N = Array.length;
var K = 2;
(function (a, n, k)
{
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
           
            console.log(a[n + i - k] + " ");
        }
        else {
  
            
            console.log((a[i - k]) + " ");
        }
    }
   
})
(Array, N, K);

//QUESTION 4

//Print odd numbers in an array
//Arrow Function :
var y=[1,2,3,4,5,6,7]

var odd=(array)=>{
   let arr=[];
   for(let i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
      arr.push(array[i]);
     }
   }
   return arr;
}
console.log(odd(y));

//Convert all the strings to title caps in a string array
USING ARROW FUNCTION:
var str="my name is linda";
let def= (str)=>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(def(str));

//Sum of all numbers in an array
//BY USING ARROW FUNCTION:
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
let ghi=(a)=>
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(ghi(a));

//Return all the prime numbers in an array
//BY USING ARROW FUNCTION:
let n=34;
let l=(n)=>
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
}
console.log(l(n));

E.Return all the palindromes in an array
BY USING ARROW FUNCTION:
Palindrome = (arr, n) =>
    {
        
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }


    