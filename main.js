// שאלה1
// var heightMove=0
// var stopMoveBox;
// var box=document.getElementById("anim_one");
// function moveBox(){
// stopMoveBox= setInterval(()=>{
//     box.style.height= heightMove++ +"px";
// },10)
// }
// function stopUp(){
// clearInterval(stopMoveBox);
// }

// function press_btn(event){
//     if(event.key=="Enter"){
//     stopUp()}
// }

//שאלה 5
// var h1_id=document.getElementById("cha");
// console.log(mycolor);
// var mycolor
// setInterval(()=>{
//     mycolor=Math.floor(Math.random()*7902);

//     h1_id.style.backgroundColor="#"+mycolor+"";

// },500)

//שאלה 6
// var boxheight=document.getElementById("user_h");
// var boxwidth=document.getElementById("user_w");
// var bigerBox=document.getElementById("bigBox");
// var boxh=10;
// var boxw=10;
// var boxInteval;
// function boxGrowsUp(){
// boxInteval=setInterval(()=>{
//     if(boxw==boxwidth.value||boxh==boxheight.value){
//     return ;
//     }
// bigerBox.style.width=boxw++ +"vw";
// bigerBox.style.height=boxh++ + "vh";
// },50)
// }

// function stopGron(event){
//     if(event.key==" "){
//         stopall()
//     }
// }
// function stopall(){
// clearInterval(boxInteval)}


//שאלה 7

// var userName;
// var userColor=document.getElementById("input_color")
// var printName=document.getElementById("divid");
// var colorarray=[];

// function saveName(){

//     userName=document.getElementById("input_name").value;

// }

// function pussColor(){
// if(colorarray.length<5){
//     colorarray.push(userColor.value);
    
// }
// }
// var nameAndColor;
// function generate(){
// printName.innerText=userName;
// nameAndColor=setInterval(()=>{
//     var i=Math.floor(Math.random()*colorarray.length);
//     printName.style.color=colorarray[i]
// },1000)
// }
// function stopColor(){
// clearInterval(nameAndColor)
// }
// function stopPrint(e){
//     if(e.key=="Shift"){
//         stopColor()
//     }
// }









