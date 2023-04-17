let input=document.querySelector('input');
let para = document.createElement('p');
para.classList.add('para');
input.after(para);
input.addEventListener('input',()=>{
   let value = parseInt(input.value);
   
   
  if(input.value){
    if(value <0){
        para.innerHTML = "enter a positive value";
        
    }
    else if(value %2==0 || value%2 ==1){
        //calling the
     evenOdd(value);
    }
  }
else{
    para.innerHTML = "";
}
})

let evenOdd =(value)=>{
    let arr =[];
    let total = value;
for(let i=1;i<=3;i++){
 total+=2;
 arr.push(total);
}
  para.innerText = arr.toString();
}




