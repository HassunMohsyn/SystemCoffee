let left_card = document.querySelectorAll(".cover .left .card");
let img = document.querySelector(".cover .left .card img");
let h3 = document.querySelector(".cover .left .card .name-price h3");
let p = document.querySelector(".cover .left .card .name-price p");
let clear_btn = document.querySelector(".cover .up .order-bar p");

left_card.forEach( (e) => {
    e.addEventListener ('click' , (card) => {
        let 
        div = document.createElement("div");
        ImgSrc =  document.createElement("img");
        ImgSrc.src = img.src;
        H3Val =  document.createElement("h3");
        PVal =  document.createElement("p");
        input_number =  document.createElement("input");
        input_number.type = "number";
        textH3 = document.createTextNode(h3.innerText);
        textP = document.createTextNode(p.innerText);
    PVal.appendChild(textP);
    div.className = "order-card" ;
    H3Val.appendChild(textH3);
    H3Val.appendChild(PVal);
    div.appendChild(ImgSrc);
    div.appendChild(H3Val);
    div.appendChild(input_number);
        
document.querySelector(".cover .right .up").appendChild(div);
    })
})


// left_card.addEventListener ( 'click' , (e) => {
//     // console.log(img.src);
//     // console.log(h3.innerText);
//     // console.log(p.innerText);
            
//     let 
//         div = document.createElement("div");
//         ImgSrc =  document.createElement("img");
//         ImgSrc.src=img.src;
//         H3Val =  document.createElement("h3");
//         PVal =  document.createElement("p");
//         input_number =  document.createElement("input");
//         input_number.type = "number";
//         textH3 = document.createTextNode(h3.innerText);
//         textP = document.createTextNode(p.innerText);
//     PVal.appendChild(textP);
//     div.className = "order-card" ;
//     H3Val.appendChild(textH3);
//     H3Val.appendChild(PVal);
//     div.appendChild(ImgSrc);
//     div.appendChild(H3Val);
//     div.appendChild(input_number);
        
// document.querySelector(".cover .right .up").appendChild(div);
//         });
    

clear_btn.addEventListener('click' , () => {
    document.querySelector(".cover .right .up")
})
