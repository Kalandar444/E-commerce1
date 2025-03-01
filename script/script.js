let container=document.getElementById("cardContainer");
let count=document.getElementById('count');

let url='https://dummyjson.com/products';
let dataProm=fetchData(url);
let myCartArray=[];

updateCartCount();

async function fetchData(url){
    let prom=fetch(url);
    return await prom;

}

dataProm.then((data)=>{
    return data.json();

}).then((dataj)=>{
    dataj.products.forEach(element => {
        upadtaeProductUI(element);
    });

})

function upadtaeProductUI(obj){
    let card=document.createElement('div');
    card.setAttribute('class','card');
    card.innerHTML=` <div class="card">
            <div class="left-c">
                <img src="${obj.thumbnail}" alt=""class="image-c">

            </div>
            <div class="right-c">
                <div class="right-c-child">
                    <h3>${obj.title}</h>
                    <p>${obj.price}</p>
                </div>
                <div class="right-c-child">
                    <p>${obj.description}</p>
                </div>
                <div class="right-c-child"></div>
                <button class="btn" name="btn">Add to cart</button>

            </div>
        </div>`;
        card.addEventListener('click',(event)=>{
            if(event.target.name=='btn'){
                myCartArray.push(obj);
                updateCartCount();
            }

        })
        container.appendChild(card);
}

function updateCartCount(){
    let length=myCartArray.length;
    count.innerText=length;

}