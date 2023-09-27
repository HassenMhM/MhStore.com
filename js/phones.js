getAddPhones();
let currentIndex=0
setTimeout(() => {
    let spans=document.querySelectorAll(".phones .list p span")
    spans.forEach(function(span){
    span.onclick=function(){
        currentIndex=span.innerHTML  
        let activeSpan=document.querySelector('.phones span.active')
        activeSpan.classList.remove('active')   
        span.classList='active'   
        let phonesBoxes=document.querySelector('.phones .container').querySelectorAll('.box')
        phonesBoxes.forEach(box => {
            box.remove()
        });
        let myRequest=new XMLHttpRequest();
        myRequest.onreadystatechange=function(){
            if(this.readyState===4 && this.status===200){
                let phoneObject=JSON.parse(this.responseText),
                phonesContainer=document.querySelector('.phones .container'),
                index=currentIndex*16-16
                for(let i=index;i<index+16;i++){
                    phoneBox=document.createElement('div'),
                    phoneName=document.createElement('h1'),
                    PhoneImg=new Image(),
                    phonePrice=document.createElement('p'),
                    phoneBrand=document.createElement('p'),
                    phoneCpu=document.createElement('P'),
                    phoneRom=document.createElement('p'),
                    phoneRam=document.createElement('p');
                    a=document.createElement('a')
                    icon=document.createElement('i')
                    icon.className='fa fa-shopping-cart'
                    a.innerHTML='Buy'
                    a.appendChild(icon)
                    phoneBox.className='box'
                    phoneName.innerHTML=phoneObject[i].name;
                    PhoneImg.src=phoneObject[i].imgPath;
                    phonePrice.innerHTML=phoneObject[i].price;
                    phoneBrand.innerHTML=phoneObject[i].brand;
                    phoneCpu.innerHTML=phoneObject[i].proccessor;
                    phoneRom.innerHTML=phoneObject[i].rom;
                    phoneRam.innerHTML=phoneObject[i].ram;
                    phonesContainer.appendChild(phoneBox);
                    phoneBox.appendChild(phoneName);
                    phoneBox.appendChild(PhoneImg);
                    phoneBox.appendChild(phonePrice);
                    phoneBox.appendChild(phoneBrand);
                    phoneBox.appendChild(phoneCpu);
                    phoneBox.appendChild(phoneRom);
                    phoneBox.appendChild(phoneRam);
                    phoneBox.appendChild(a)
                }
            }
        }
        myRequest.open("GET","phones.json",true);
        myRequest.send();
    }
})
}, 2000);
function getAddPhones(){
    let myRequest=new XMLHttpRequest();
    myRequest.onreadystatechange=function(){
        if(this.readyState===4 && this.status===200){
            let phoneObject=JSON.parse(this.responseText),
            phonesContainer=document.querySelector('.phones .container');
            for(let i=0;i<16;i++){
            phoneBox=document.createElement('div'),
            phoneName=document.createElement('h1'),
            PhoneImg=new Image(),
            phonePrice=document.createElement('p'),
            phoneBrand=document.createElement('p'),
            phoneCpu=document.createElement('P'),
            phoneRom=document.createElement('p'),
            phoneRam=document.createElement('p');
            a=document.createElement('a')
            icon=document.createElement('i')
            icon.className='fa fa-shopping-cart'
            a.innerHTML='Buy'
            a.appendChild(icon)
            phoneBox.className='box'
            phoneName.innerHTML=phoneObject[i].name;
            PhoneImg.src=phoneObject[i].imgPath;
            phonePrice.innerHTML=phoneObject[i].price;
            phoneBrand.innerHTML=phoneObject[i].brand;
            phoneCpu.innerHTML=phoneObject[i].proccessor;
            phoneRom.innerHTML=phoneObject[i].rom;
            phoneRam.innerHTML=phoneObject[i].ram;
            phonesContainer.appendChild(phoneBox);
            phoneBox.appendChild(phoneName);
            phoneBox.appendChild(PhoneImg);
            phoneBox.appendChild(phonePrice);
            phoneBox.appendChild(phoneBrand);
            phoneBox.appendChild(phoneCpu);
            phoneBox.appendChild(phoneRom);
            phoneBox.appendChild(phoneRam);
            phoneBox.appendChild(a)
            }
            for(let i=1;i<=phoneObject.length/16;i++){
                //listOfNumber
                let listContainer=document.querySelector('.phones .list p')
                spanOfNumber=document.createElement('span')
                spanOfNumber.innerHTML=Math.round(i)
                if(spanOfNumber.innerHTML==1){
                    spanOfNumber.classList='active'
                }
                listContainer.appendChild(spanOfNumber)
            }
        }
    };
    myRequest.open("GET","phones.json",true);
    myRequest.send();
}