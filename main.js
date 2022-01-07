import {itemVegetables,itemMeats,backgroundBody} from "./data.js";
const $=document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const dataUser = [
    {
        email : 'minhliem10061@gmail.com',
        password:'111111',
    },
];
//change background
const bodyHeaderBG = $(".body__header");
const nextBG = $(".body__header-next-btn");
const prevBG = $(".body__header-prev-btn");
// lineHeader
const itemLines = $$(".header__nav-item");
const line= $(".line");

//handle register and login
//show modal
const overlay  = $(".overlay");
const btnRegester=$(".btn-regester");
//register
const register = $(".register");
const tranLoginBtn = $(".tran-login");
const submitResgister = $(".btn-submit-register");
const inputEmailRegister = $('input[name="email_register"]');
const inputPasswordRegister = $('input[name="password_register"]');
const reInputPasswordRegister= $('input[name="reinputpassword"]');
//login
const headerAccoutLists=$$('.header__account-list');
const nameUserLogin =$$('.name__user-login');
const btnLogin= $(".btn-login");
const login =$(".login");
const tranRegister = $(".tran-regist");
const btnComeback = $$(".auth-form__controls-back");
const submitLogin = $(".btn-submit-login");
const valueLoginEmail = $('input[name="email_login"]');
const valueloginPassWord = $('input[name="password_login"]');
//logout
const btnLogout  = $(".btn-logout");
//render vegetable
const productVegetable = $(".product-vegetable");
const productMeat = $(".product-meat")
const btnMeat = $(".meat-food");
const btnVegetable = $(".vegetable-food");
const isVegetable = $(".show-vegetable");
const isMeat= $(".show-meat");
//tab icon body
const tabIcons = $$(".icon-tab-active");
const imgBodyInfomations = $$('.img__body-infomation');
//fly 
const productBody = $(".body__product"); // relative so voi body
const body = $("body");
let takeHeight =0;
// cart
const cart = $(".header__nav-cart"); 
const count = $(".header__nav-cart-text");
const cartList = $(".web-cart-show");
const showTotalPrice = $(".show-total-price");
// handle logic show cart
const seenterCart = $(".header__nav-cart-info");

const app = {
    indexBG : 0,
    handleChangeBG(){
        bodyHeaderBG.style.backgroundImage = backgroundBody[this.indexBG];
        nextBG.addEventListener('click', ()=>{
            this.indexBG++;
            if(this.indexBG>backgroundBody.length-1)
            {
                this.indexBG=0;
            }
            bodyHeaderBG.style.backgroundImage = backgroundBody[this.indexBG];
        });
        prevBG.addEventListener('click', ()=>{
            this.indexBG--;
            if(this.indexBG<0)
            {
                this.indexBG=backgroundBody.length-1;
            }
            bodyHeaderBG.style.backgroundImage = backgroundBody[this.indexBG];
        });
    },
    lineHeader(){
        itemLines.forEach(item => {
            item.addEventListener('mouseenter',function(e){
                line.style.left = this.offsetLeft + 'px';
                line.style.width = this.offsetWidth + 'px';
            });
            item.addEventListener('mouseleave',function(e){
                line.style.width = 0;
            });
        });
    },
    handleTabIcon(){
        tabIcons.forEach((tab,index)=>{
            tab.addEventListener('click',function(e){
                const tabActive= $(".icon-tab-active.active");
                tabActive.classList.remove("active");
                this.classList.add("active");
                $('.img__body-infomation.active').classList.remove('active');
                let imgBodyInfomation = imgBodyInfomations[index];
                imgBodyInfomation.classList.add('active');
            })
        })

    }
    ,
    handleShow(){
        //show and off modal
        overlay.addEventListener('click',function(e){
            const resgistCheck = e.target.closest(".register");
            const loginCheck = e.target.closest(".login");
            if(resgistCheck){
                return false;
            }
            if(loginCheck){
                return false;
            }
            overlay.style.display = "none";
            register.style.display="none";
            login.style.display="none";

        })
        //register
        btnRegester.addEventListener('click',function(){
            console.log("register")
            overlay.style.display = "block";
            register.style.display="block";
        });
        btnLogin.addEventListener('click',function(){
            console.log("login")
            overlay.style.display = "block";
            login.style.display="block";
        });
        tranLoginBtn.addEventListener('click',function(){
            register.style.display="none";
            login.style.display="block";
        }); 
        tranRegister.addEventListener('click',function(){
            login.style.display="none";
            register.style.display="block";
        });
        btnComeback.forEach(function(ele){
            ele.addEventListener('click',function(){
                login.style.display="none";
                overlay.style.display = "none";
                register.style.display="none";
            });
        });
       
    },
    handleResAndLog(){
        function checkEmail()
        {
            
                const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (!filter.test(inputEmailRegister.value)) {
                alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
                inputEmailRegister.focus;
                return false;
                }
                else
                {
                return true;
                }
        }
        function checkEmailHaved()
        {       let check = 0;  
                dataUser.forEach(user =>
                        {
                            if(user.email===inputEmailRegister.value)
                            {
                                check++;
                            }
                        });
                if(check===0)
                {
                    return true;
                }
                else
                {
                    alert('Email đã tồn tại');
                    return false;
                }
                
        }
        function checkPassword()
        {
             if(inputPasswordRegister.value.length >=6)
             {
                 return true;
             }
             else
             {
                 alert('Password phải có từ 6 kí tự trở lên');
                 return false;
             }
        }
        function checkRePassword()
        {
            if(reInputPasswordRegister.value === inputPasswordRegister.value)
            {
                return true;
            }
            else
            {
                alert('Password nhập lại không đúng');
                return false;
            }
        }   
        submitResgister.addEventListener('click',function(){
            console.log("submit register");
            if(checkEmail()&&checkPassword()&&checkRePassword()&&checkEmailHaved())
                {
                        let user = {
                            email : inputEmailRegister.value,
                            password:inputPasswordRegister.value
                        }
                        dataUser.push(user);
                        overlay.style.display='none';
                        alert('Đăng kí thành công!');
                        inputEmailRegister.value='';
                        inputPasswordRegister.value='';
                        reInputPasswordRegister.value='';
                        return dataUser;
                }
        });
        submitLogin.addEventListener('click',function(){
                console.log("submit login");
                let check=0;
                dataUser.forEach(user =>
                    {
                        if(user.email === valueLoginEmail.value && user.password ===valueloginPassWord.value)
                        {
                            check++;
                            headerAccoutLists.forEach(headerAccoutList =>
                                {
                                    headerAccoutList.classList.remove('active');
                                })
                            nameUserLogin.innerHTML= valueLoginEmail.value;
                            headerAccoutLists[1].classList.add('active');
                            overlay.style.display='none';
                            alert('đăng nhập thành công');  
                        
                        }        
                    });
                if(check===0)
                {
                    alert('Thông tin đăng nhập không đúng');
                }
            });
            btnLogout.addEventListener('click',function(){
                console.log("logout");
                $('.header__account-list.active').classList.remove('active');
                $('.header__account-list').classList.add('active'); 
            });
        
    },
    handleTime(){
        const day = $('.day');
        const hours=$('.hours');
        const mins= $('.mins');
        const secs=$('.secs ');
        day.innerHTML = Math.floor(Math.random()*365);
        hours.innerHTML = Math.floor(Math.random()*24);
        mins.innerHTML=Math.floor(Math.random()*60);
        secs.innerHTML=Math.floor(Math.random()*60);
        let checkSecs = Number(secs.innerHTML);
        let checkMins = Number(mins.innerHTML);
        let checkHours = Number(hours.innerHTML);
        let checkDay = Number(day.innerHTML);
        setInterval(() => {
            checkSecs--;
            if(checkSecs<0)
            {
                checkSecs=59;
                checkMins--;
                if(checkMins<0)
                {
                    checkMins=59;
                    checkHours--;
                    if(checkHours<0)
                    {
                        checkHours = 23;
                        checkDay--;
                        if(checkDay<0)
                        {
                            checkDay=365;
                        }
                    }
                }
        
            }
            day.innerHTML = checkDay;
            hours.innerHTML = checkHours;
            mins.innerHTML= checkMins;
            secs.innerHTML= checkSecs; 
        }, 1000);
    },
    renderItems(items,root){
        let html = items.map(function(item){
            const {img,name,priceLow,price} = item
            return `
            <div class="col l-3 m-6 c-12">
                <div class="our__product-item">
                    <a href="#" class="our__product-item-link">
                        <div class="our__product-img-background"><img src="${img}" alt="" class="our__product-item-img"></div>
                        <p class="our__product-item-text">${name}</p>
                        <div class="our__product-item-price">
                            <p class="our__product-item-price-1"><span class="our__product-item-price-main">${priceLow}</span><span>đ</span></p>
                            <p class="our__product-item-price-1"><span class="our__product-item-price-low">${price ===''? '' : price  + '</span><span>đ</span>'}</p>
                        </div>
                    </a>
                    <div class="our__product-overlay-container">
                            <div class="our__product-overlay-star">
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                            <div class="our__product-overlay-icon">
                                <a href="#" class="our__product-overlay-link"><i class="our__product-icon far fa-eye"></i></a>
                                <a href="#" class="our__product-overlay-link"><i class="our__product-icon fas fa-cart-plus"></i></a>
                                <a href="#" class="our__product-overlay-link"><i class="our__product-icon fas fa-sync-alt"></i></a>
                            </div>
                            <div class="our__product-overlay-add">
                                <div class="our__product-overlay-add-icon"><i class="fas fa-cart-arrow-down"></i></div>
                                <p class="our__product-overlay-add-text">ADD TO CART</p>
                            </div> 
                    </div>
                </div>
             </div>
            `
        });
        root.innerHTML = html.join(' ');
    },
    handleRender(){
        btnMeat.addEventListener("click",(e)=>{
            this.renderItems(itemMeats,productMeat);
            btnMeat.classList.add("active");
            btnVegetable.classList.remove("active");
            isVegetable.classList.remove("active");
            isMeat.classList.add("active");
        });
        btnVegetable.addEventListener("click",(e)=>{
            this.renderItems(itemVegetables,productVegetable);
            btnMeat.classList.remove("active");
            btnVegetable.classList.add("active");
            isVegetable.classList.add("active");
            isMeat.classList.remove("active");
        });
    },
    handleAnimationFlyAndAddToCart(){
        productBody.addEventListener("click",(e)=>{
            const btnAddProduct = e.target.closest(".our__product-overlay-add-text");
            if(btnAddProduct)
            {
                const parent = btnAddProduct.parentNode;
                const parents = parent.parentNode;
                const parentss = parents.parentNode; //  Node parent all
                // check has class to countineu click
                if(parentss.classList.contains("active")){
                    return false;
                }

                // get text to show cart
                const imgEl = parentss.querySelector(".our__product-item-img");
                const nameEl = parentss.querySelector(".our__product-item-text"); // chilldren
                const priceEl = parentss.querySelector(".our__product-item-price-main"); //children
                // const priceElLow = parentss.querySelector(".our__product-item-price-low");//children
                if(imgEl)
                {
                    //get all items
                    const allItemProduct = $$(".our__product-item");
                    allItemProduct.forEach((iteamProduct)=>{
                        iteamProduct.classList.add("active");
                    })

                    const getSrc = imgEl.src;
                    const getName = nameEl.textContent;
                    const getPrice = priceEl.textContent;
                    // const getPriceLow = priceElLow.textContent;
                    const imgCreate = document.createElement('img');
                    imgCreate.classList.add("my-img-cart");
                    imgCreate.src = `${getSrc}`
                    imgCreate.style.top =parentss.offsetTop + productBody.offsetTop +'px';
                    imgCreate.style.left = parentss.offsetLeft + 'px';
                    // console.log(imgCreate);
                    body.appendChild(imgCreate);
                    setTimeout(() => {
                        const findImg = $('.my-img-cart');
                        if(findImg){
                            findImg.style.top = cart.offsetTop + takeHeight + 'px';
                            findImg.style.left = cart.offsetLeft + 'px';
                        }
                    }, 300);
                    // handle add cart
                    setTimeout(() => {
                        const findImgRM = $('.my-img-cart');
                        let countIndex = Number(count.dataset.count) + 1;
                        count.dataset.count = countIndex;
                        count.innerHTML = countIndex;
                        findImgRM.remove();
                        // remove all active
                        allItemProduct.forEach((iteamProduct)=>{
                            iteamProduct.classList.remove("active");
                        });
                        // creaete product and add to cart
                       
                    }, 1000);
                    const itemProduct = document.createElement("li");
                    itemProduct.classList.add("header__nav-cart-item");
                    itemProduct.innerHTML= `<div class="img-item-cart">
                                                <img class="img-detail-item" src="${getSrc}" alt="item-img">
                                            </div>
                                            <div class="name-item-cart">
                                                ${getName}
                                            </div>
                                            <div class="price-item-cart">
                                            <span class="price-item-cart-detail">${getPrice}</span><span>đ</span>
                                            </div>
                                            <button class="price-item-cart-btn">
                                                Xóa
                                            </button>`
                    cartList.appendChild(itemProduct);
                }
                const allProductToPrice = $$(".header__nav-cart-item");
                if(allProductToPrice)
                {
                    this.totolPriceCart(allProductToPrice);
                }
            }

        })
    },
    getHeight(){
        document.addEventListener("scroll",function(){
            takeHeight = document.documentElement.scrollTop || window.scrollY ;
        })
    },
    totolPriceCart(allProductToPrice){
        const dataPrice = [];
        allProductToPrice.forEach((product)=>{
            const priceItem = Number(product.querySelector(".price-item-cart-detail").textContent);
            dataPrice.push(priceItem);
        })
        const priceTotal = dataPrice.reduce((acc,curr)=>{
            return acc+curr;
        },0);
        const totalEl = document.createElement("span");
        totalEl.innerHTML = `${priceTotal>0?`<span>Total Price: ${(priceTotal*1000).toLocaleString()}</span><span>đ</span>`:""}`
        showTotalPrice.innerHTML = "";
        showTotalPrice.appendChild(totalEl);
        if(priceTotal==0){
            seenterCart.style.display = 'none'; 
        }
    },
    handleRemoveItem(){
        cartList.addEventListener("click",(e)=>{
            const btnRemoveItemCart = e.target.closest(".price-item-cart-btn");
            if(btnRemoveItemCart){
                const getParent = btnRemoveItemCart.parentNode;
                getParent.remove();
                const getCount = Number(count.dataset.count) - 1;
                count.dataset.count = getCount;
                count.innerHTML = getCount;
                const allProductToPrice = $$(".header__nav-cart-item");
                this.totolPriceCart(allProductToPrice);
            }
        });
    },
    handleShowCart(){
        let isShow = false;
        cart.addEventListener("click",function(e){
                const giohang = e.target.parentNode.parentNode ;
                const ulList = e.target.closest(".header__nav-cart-info")
                if(giohang===this && !ulList)
                {
                    isShow = !isShow;
                    if(isShow){
                        seenterCart.style.display = 'block';
                    }
                    else{
                        seenterCart.style.display = 'none'; 
                    }            
                }
        })
    },
    start(){
        this.handleChangeBG();
        this.lineHeader();
        this.handleShow();
        this.handleResAndLog();
        this.handleTime();
        this.renderItems(itemVegetables,productVegetable);
        this.renderItems(itemMeats,productMeat);
        this.handleRender();
        this.handleTabIcon();
        this.handleAnimationFlyAndAddToCart();
        this.getHeight();
        this.handleRemoveItem();
        this.handleShowCart();
    }
}
app.start();