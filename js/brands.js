getAddBrands();
function getAddBrands(){
    let myRequest=new XMLHttpRequest();
    myRequest.onreadystatechange=function(){
        if(this.readyState===4 && this.status===200){
            let brandsObject=JSON.parse(this.responseText),   
            brandsContainer=document.querySelector('.brands .container')
            for(let i=0;i<brandsObject.length;i++){
                //brands section
                brandsBox=document.createElement('div')
                brandsBox.className='box'
                icon1=document.createElement('i')
                icon1.className='fa fa-shopping-cart'
                icon2=document.createElement('i')
                icon2.className='fa fa-mobile'
                brandImg=new Image()
                brand=document.createElement('a')
                brand.innerHTML=brandsObject[i].brand
                brandImg.src=brandsObject[i].imgPath
                brandsBox.appendChild(icon1);
                brandsBox.appendChild(icon2);
                brandsBox.appendChild(brandImg);
                brandsBox.appendChild(brand);
                brandsContainer.appendChild(brandsBox);
                //nav-bar brands
                if(i<=10){
                let brandsArea=document.querySelector('.nav-bar .box.brands h1')
                nBrandsBox=document.createElement('p')
                nBrandsBox.innerHTML=brandsObject[i].brand
                nBrandsImg=new Image();
                nBrandsImg.src=brandsObject[i].imgPath
                nBrandsBox.appendChild(nBrandsImg)
                brandsArea.appendChild(nBrandsBox)
                let brandsArea2=document.querySelector('.header .container ul li .nav-bar .box.brands h1')
                nBrandsBox2=document.createElement('p')
                nBrandsBox2.innerHTML=brandsObject[i].brand
                nBrandsImg2=new Image();
                nBrandsImg2.src=brandsObject[i].imgPath
                nBrandsBox2.appendChild(nBrandsImg2)
                brandsArea2.appendChild(nBrandsBox2)
                }
            }
        }
    }
    myRequest.open("GET","brands.json",true);
    myRequest.send();
}