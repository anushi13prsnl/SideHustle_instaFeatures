// Add/Remove Friend Option
var btn1 = document.querySelector("#btn1");
var istatus = document.querySelector("#status");
flag=0;

btn1.addEventListener("click", function(){
    if(flag==0){
        btn1.innerHTML = "Following";
        btn1.style.backgroundColor = "grey";
        istatus.innerHTML="\" Friends \"";
        btn1.style.marginLeft = '118px';
        flag=1;
    }
    else{
        btn1.innerHTML = "Follow";
        btn1.style.backgroundColor = "rgb(7, 169, 219)";
        istatus.innerHTML="\" Stranger \"";
        btn1.style.marginLeft = "130px";
        flag=0;
    }
})

// Cursor Effect 
var hd = document.querySelector("#heading");
var crsr = document.querySelector("#crsr");

hd.addEventListener("mousemove", function(a){
    crsr.style.left = a.x + 'px';
    crsr.style.top = a.y +'px';
    
})

// like post
var like = document.querySelector("#like");
var icn = document.querySelector("#heart");
like.addEventListener("dblclick",function(){
    
    icn.style.opacity= 0.8;
    setTimeout(function(){
        icn.style.opacity= 0;
        // icn.style.transform = "scale(0)";
    },500)
})

//story section
let arr = [
    {dp: "https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1620336655055-088d06e36bf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FydG9vbnxlbnwwfDF8MHx8fDI%3D" },
    {dp:"https://images.unsplash.com/photo-1633069404479-2a8aa9526ea6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , story: "https://images.unsplash.com/photo-1570260918970-001c33fc800f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnRvb258ZW58MHwxfDB8fHwy"},
    {dp:"https://images.unsplash.com/photo-1537151672256-6caf2e9f8c95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , story: "https://images.unsplash.com/photo-1615756257997-2bad02de466d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnRvb258ZW58MHwxfDB8fHwy"},
    {dp: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnRvb258ZW58MHwxfDB8fHwy", story: "https://images.unsplash.com/photo-1590431257462-ae5c0e1baf1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnRvb258ZW58MHwxfDB8fHwy"},
    {dp: "https://images.unsplash.com/photo-1635586409095-b5d87cebe12b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnRvb258ZW58MHwxfDB8fHwy", story: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1633977264259-b3517c187e3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnRvb258ZW58MHwxfDB8fHwy", story: "https://images.unsplash.com/photo-1611991687319-5dabaabde43a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhcnRvb258ZW58MHwxfDB8fHwy"}
]

var clutter = "";
arr.forEach(function(elem,idx){
    clutter += ` <div class="prsn">
    <img class="prsn" id="${idx}" src="${elem.dp}" alt="">
</div>`
})

var pt = document.querySelector("#platform");
pt.innerHTML = clutter;

pt.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none";
    },1500)
    
});
