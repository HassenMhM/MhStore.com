
getAddAcc();
let currentIndex1=0
setTimeout(() => {
    let spans=document.getElementById('accessories').querySelectorAll(".list p span")
    spans.forEach(function(span){
        span.onclick=function(){
            let activeSpan=document.getElementById('accessories').querySelector('span.active')
            activeSpan.classList.remove('active')
            currentIndex1=span.innerHTML   
            span.classList='active'
            let accBoxes=document.getElementById('accessories').querySelector('.container').querySelectorAll('.box')
            accBoxes.forEach(box => {
                box.remove()
        });
        let myRequest=new XMLHttpRequest();
        myRequest.onreadystatechange=function(){
            if(this.readyState===4 && this.status===200){
                let accObject=JSON.parse(this.responseText),
                accContainer=document.getElementById('accessories').querySelector('.container'),
                index=currentIndex1*12-12
                for(let i=index;i<index+12;i++){
                    accBox=document.createElement('div'),
                    accName=document.createElement('h1'),
                    accImg=new Image(),
                    accPrice=document.createElement('p'),
                    accBrand=document.createElement('p'),
                    a=document.createElement('a')
                    icon=document.createElement('i')
                    icon.className='fa fa-shopping-cart'
                    a.innerHTML='Buy'
                    a.appendChild(icon)
                    accBox.className='box'
                    accName.innerHTML=accObject[i].name;
                    accImg.src=accObject[i].imgPath;
                    accPrice.innerHTML=accObject[i].price;
                    accBrand.innerHTML=accObject[i].brand;
                    accContainer.appendChild(accBox);
                    accBox.appendChild(accName);
                    accBox.appendChild(accImg);
                    accBox.appendChild(accPrice);
                    accBox.appendChild(accBrand);
                    accBox.appendChild(a);
                }
            }
        }
        myRequest.open("GET","accessoire.json",true);
        myRequest.send();
    }
})
}, 2000);
function getAddAcc(){
    let myRequest=new XMLHttpRequest();
    myRequest.onreadystatechange=function(){
        if(this.readyState===4 && this.status===200){
            let accObject=JSON.parse(this.responseText),
            accContainer=document.getElementById('accessories').querySelector('.container');
            for(let i=0;i<12;i++){
                accBox=document.createElement('div'),
                accName=document.createElement('h1'),
                accImg=new Image(),
                accPrice=document.createElement('p'),
                accBrand=document.createElement('p'),
                a=document.createElement('a')
                icon=document.createElement('i')
                icon.className='fa fa-shopping-cart'
                a.innerHTML='Buy'
                a.appendChild(icon)
                accBox.className='box'
                accName.innerHTML=accObject[i].name;
                accImg.src=accObject[i].imgPath;
                accPrice.innerHTML=accObject[i].price;
                accBrand.innerHTML=accObject[i].brand;
                accContainer.appendChild(accBox);
                accBox.appendChild(accName);
                accBox.appendChild(accImg);
                accBox.appendChild(accPrice);
                accBox.appendChild(accBrand);
                accBox.appendChild(a);
            }
            for(let i=1;i<=accObject.length/12;i++){
                //listOfNumber
                let listContainer=document.getElementById('accessories').querySelector('.list p')
                spanOfNumber=document.createElement('span')
                spanOfNumber.innerHTML=Math.round(i)
                if(spanOfNumber.innerHTML==1){
                    spanOfNumber.classList='active'
                }
                listContainer.appendChild(spanOfNumber)
            }
        }
    };
    myRequest.open("GET","accessoire.json",true);
    myRequest.send();
}