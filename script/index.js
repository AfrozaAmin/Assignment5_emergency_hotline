// // // console.log('hi connected')
// // document.getElementById('love1').addEventListener('click',function(e){
// //   e.preventDefault();
// // console.log('add money')
// // })
// // document.getElementById('love2').addEventListener('click',function(e){
// //   e.preventDefault();
// // console.log('add money')
// // })
// // document.getElementById('love3').addEventListener('click',function(e){
// //   e.preventDefault();
// // console.log('add money')
// // }
// // )
// // document.getElementById('love4').addEventListener('click',function(e){
// //   e.preventDefault();
// // console.log('add money')
// // }
// // )
// // document.getElementById('love5').addEventListener('click',function(e){
// //   e.preventDefault();
// // console.log('add money')
// // }
// // )
// // document.getElementById('love6').addEventListener('click',function(e){
// //   e.preventDefault();
// // console.log('add money')
// // }
// // )
// // document.getElementById('love7').addEventListener('click',function(e){
// //   e.preventDefault();
// // console.log('add money')
// // }
// // )
// // document.getElementById('love8').addEventListener('click',function(e){
// //   e.preventDefault();
// // console.log('add money')
// // }
// // )
// // document.getElementById('love9').addEventListener('click',function(e){
// //   e.preventDefault();
// // console.log('add money')
// // }
// // )

// // let no_of_love=document.getElementById('current_no_of_love').addEventListener('click',function(){


// // let currentLove=current_no_of_love++;


// //  document.getElementById(current_no_of_love).innerText('no_of_love')

// // console.log(currentLove)
// // });
// function putHeart(num){
//  const heartButton=document.getElementById("heart");
//  heartButton.innerText=num;
// }
// document.getElementById("button-1").addEventListener("click",function(){
//  putHeart("1");
// })
// document.getElementById("button-2").addEventListener("click",function(){
//  putHeart("2");
// })
// document.getElementById("button-3").addEventListener("click",function(){
//  putHeart("3");
// })
// document.getElementById("button-4").addEventListener("click",function(){
//  putHeart("4");
// })
// document.getElementById("button-5").addEventListener("click",function(){
//  putHeart("5");
// })
// document.getElementById("button-6").addEventListener("click",function(){
//  putHeart("6");
// })
// document.getElementById("button-7").addEventListener("click",function(){
//  putHeart("1");
// })
// document.getElementById("button-1").addEventListener("click",function(){
//  putHeart("7");
// })
// document.getElementById("button-8").addEventListener("click",function(){
//  putHeart("8");
// })
// document.getElementById("button-9").addEventListener("click",function(){
//  putHeart("9 ");
// })

let count=0;
const heartButton=document.getElementById("heartButton");
const heartButtonCount=document.querySelectorAll(".button")
heartButtonCount.forEach(btn=> {
  btn.addEventListener("click",()=>{
    Total=count++;
    heartButton.textContent= Total;
  })
})

// const call=document.querySelectorAll(".callbtn")
// for(let i=0;i<call.length();i++){
// call.addEventListener("click",function(){

// })
// }

// call history
document.getElementById("call-btn").addEventListener("click",function(){
  const currentTime= new Date();
  const timeString=currentTime.toLocaleTimeString();

  const updateHistory=document.createElement("updateHistory");
  updateHistory.innerText=timeString;
  document.getElementById("History").appendChild(updateHistory);


})

