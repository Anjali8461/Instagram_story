// var arr=[
//     {
//         dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"},
//         dp:""},
//         dp:"",
//         dp:"",
//         dp:"",
//         dp:""
//     }
// ]
// var clutter="";
// arr.forEach(function(elem){
//     clutter +=`<div class="story">
//     <div id="0" class="overlay"></div>
//     <img src="${e.dp}" alt="">
// </div>`

// })
// document.querySelector("#stories").innerHTML=clutter;
var arr=[
        {dp:'https://images.unsplash.com/photo-1572391265816-07565ce7e55b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889&q=80'},
        {dp:'https://images.unsplash.com/photo-1560087637-bf797bc7796a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},
        {dp:'https://images.unsplash.com/photo-1544507888-56d73eb6046e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'},
        {dp:'https://images.unsplash.com/photo-1603300206635-70d7a388c31f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},
        {dp:'https://images.unsplash.com/photo-1616142799329-39d432cf1d72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}
    
]
var clutter="";
arr.forEach(function(elem,i){
    clutter+=`
    <div class="story">
        <img id="${i}" src="${elem.dp}" alt="">
                </div>
    `
})
document.querySelector("#stories").innerHTML=clutter;

var clutter="";
arr.forEach(function(elem,i){
    clutter+=`
    <div class="story">
      <img id="${i}" 
    `
})


// document.querySelector("#stories").addEventListener("click",function(dets){
//     document.querySelector("#fullpreview").style.display="initial";
//     document.querySelector("#fullpreview").style.backgroundImage=`url(${arr[dets.target.id].image})`;
//     setTimeout(function(){
//         document.querySelector("#fullpreview").style.display="none";

//     },2500)
//     setTimeout(function(){
//         document.querySelector("#growth").style.width=`${grow++}%`
//     },25)

// })
document.querySelectorAll(".story").forEach(function(elem,i){
    elem.addEventListener("click",function(){
        var grow=0;
        document.querySelector("#fullpreview").style.display="initial";
        document.querySelector("#fullpreview").style.backgroundImage=`url(${arr[i].dp})`;
        setTimeout(function(){
            
            document.querySelector("#fullpreview").style.display="none";
            clearInterval(a);
    
        },2500)
        var a=setInterval(function(){
            document.querySelector("#growth").style.width=`${grow++}%`
        },25);


    })

})
