const link = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var dataUser = [];
var itemVegetables = [
    {
        img:'./assets/img/mangtay1.png',
        name: 'Măng tây xanh',
        priceLow : '37.000',
        price : '48.000',
    },
    {
        img:'./assets/img/duahau.jpg',
        name: 'Dưa hấu đỏ không hạt',
        priceLow : '30.000',
        price : '47.000',
    },
    {
        img:'./assets/img/taoxanh.jpg',
        name: 'Táo xanh New Zealand',
        priceLow : '39.000',
        price : '42.000',
    },
    {
        img:'./assets/img/hungbacha___.jpg',
        name: 'Húng bạc hà',
        priceLow : '10.800',
        price : '11.700',
    },
    {
        img:'./assets/img/raumuong___.jpg',
        name: 'Rau muống',
        priceLow : '11.000',
        price : '18.000',
    },
    {
        img:'./assets/img/rauday_vineco.jpg',
        name: 'Rau đay L1 Vineco',
        priceLow : '26.200',
        price : '',
    },
    {
        img:'./assets/img/oile___.jpg',
        name: 'Ổi lê',
        priceLow : '20.000',
        price : '',
    },
    {
        img:'./assets/img/hongxiemsapo.jpg',
        name: 'Hồng xiêm (Sapo)',
        priceLow : '75.000',
        price : '80.000',
    },

]
var itemMeats = [
    {
        img:'./assets/img/tomthetuoi.jpg',
        name: 'Tôm thẻ tươi 80-100 con/kg',
        priceLow : '92.000',
        price : '99.000',
    },
    {
        img:'./assets/img/nhongtam.jpg',
        name: 'Nhộng tằm',
        priceLow : '51.000',
        price : '',
    },
    {
        img:'./assets/img/thitbe.jpg',
        name: 'Thịt bê',
        priceLow : '69.000',
        price : '',
    },
    {
        img:'./assets/img/thanbo.jpg',
        name: 'Thăn bò',
        priceLow : '100.000',
        price : '',
    },
    {
        img:'./assets/img/ganga.jpg',
        name: 'Gan gà',
        priceLow : '29.000',
        price : '',
    },
    {
        img:'./assets/img/ucgacongnghiep.jpg',
        name: 'Ức gà công nghiệp',
        priceLow : '87.500',
        price : '',
    },
    {
        img:'./assets/img/bachtuottuoi.jpg',
        name: 'Bạch tuột tươi',
        priceLow : '79.500',
        price : '',
    },
    {
        img:'./assets/img/cahoifillet.jpg',
        name: 'Cá hồi fillet HRC',
        priceLow : '75.000',
        price : '80.000',
    },
]
var dataBackgroundImageBody = [
    "url('/assets/img/vegetable1.png')",
    "url('/assets/img/vegetable4.png')",
    "url('/assets/img/vegetable3.png')"
];
// header_login
var btnLogin=link('.btn-login');
var btnLogout=link('.btn-logout');
var headerAccoutLists=$$('.header__account-list');
var nameUserLogin =link('.name__user-login');
// regester
var switchBtnLogin = link('.register .auth-form__swtich-btn');
var btnRegester=link('.btn-regester');
var overlay  = link('.overlay');
var regesterComeback = $$('.auth-form__controls-back');
var inputForms = $$('.auth-form__input');
var confirmDataFormRegister = link('.register .btn-confirm');
var inputEmailRegister = link('input[name="email_register"]');
var inputPasswordRegister = link('input[name="password_register"]');
var reInputPasswordRegister= link('input[name="reinputpassword"]');
// login
var switchBtnRegister=link('.login .auth-form__swtich-btn');
var login =link('.login');
var register = link('.register');
var loginBtn = link('.login .btn-confirm');
var valueLoginEmail = link('input[name="email_login"]');
var valueloginPassWord = link('input[name="password_login"]');
// resolve line header
var itemLines = $$('.header__nav-item');
var line= link('.line');
// ---------------------------------------
// handle body background image
var bodyHeader=link('.body__header')
var bodyHeaderNextBtn=link('.body__header-next-btn');
var bodyHeaderPrevBtn=link('.body__header-prev-btn');
// handle product food
var ourProductFoods = $$('.our-product-food');
var ourProducts = $$('.our__product-container');
// resolve img__body-one
var imgBodyInfomations = $$('.img__body-infomation');
var iconTabActives = $$('.icon-tab-active');
//produc item
var productVegetable = link('.product-vegetable');
var productMeat = link('.product-meat');
// header_login ---------------------------------
function handleHeaderLogin()
{
    btnLogin.onclick = function()
{
    overlay.style.display = 'block';
    register.style.display='none';
    login.style.display='block';
    valueLoginEmail.value='';
    valueloginPassWord.value=''; 
  
}

// header_out
btnLogout.onclick = function()
{

    $('.header__account-list.active').classList.remove('active');
    $('.header__account-list').classList.add('active'); 
}
// switch-formlogin
switchBtnRegister.onclick = function()
{
    let r = confirm("Chọn Cancel để tiếp tục và OK để thoát");
        if(r == true )
        {
            register.style.display='block';
            login.style.display='none';
        }
}
switchBtnLogin.onclick= function()
{
    let r = confirm("Chọn Cancel để tiếp tục và OK để thoát");
        if(r == true )
        {
            register.style.display='none';
            login.style.display='block';
        }
}  
// regester
btnRegester.onclick = function()
{
    overlay.style.display = 'block';
    register.style.display='block';
    login.style.display='none';
   
}
regesterComeback.forEach(comback => {
    comback.onclick = function()
    {
    
        let r = confirm("Chọn Cancel để tiếp tục và OK để thoát");
        if(r == true )
        {
            overlay.style.display = 'none';
        }
        inputForms.forEach(inputForm => {
            inputForm.value = '';
        });
    }
});
}
// get user from form Register;
function getDataUserFromRegister()
{
        function checkEmail()
        {
            
                var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
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
    confirmDataFormRegister.onclick = function()
    {

       if(checkEmail()&&checkPassword()&&checkRePassword()&&checkEmailHaved())
       {
            var user = {
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
    }
}
// handle login from form login
function handleLoginUserData()
{
    
    loginBtn.onclick = function()
    {   var check=0;
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
    }  
}
// xử lí line header
function lineHeader()
{
    itemLines.forEach(itemLine =>
        {
            itemLine.onmouseenter=function()
            {
                line.style.left = this.offsetLeft + 'px';
                line.style.width = this.offsetWidth + 'px';
            }
            itemLine.onmouseleave=function()	
            {
                line.style.width = 0;
           
            }
        });
}
// xử lí background image body
function handleBackgroundImage()
{
    let index = 0;
    bodyHeader.style.backgroundImage = dataBackgroundImageBody[index];
    bodyHeaderNextBtn.onclick = function()
        {
            index++;
            if(index>=dataBackgroundImageBody.length)
            {
                index=0;
            }
            bodyHeader.style.backgroundImage = dataBackgroundImageBody[index];
            bodyHeader.style.animation='headerNotifyGrowth ease 0.3s';
        }
    bodyHeaderPrevBtn.onclick = function()
        {
            index--;
            if(index<0)
            {
                index=dataBackgroundImageBody.length-1;
            }
            bodyHeader.style.backgroundImage = dataBackgroundImageBody[index];
        } 
}
function handleTime()
{
        // resolve time clock
    var day = link('.day');
    var hours=link('.hours');
    var mins= link('.mins');
    var secs=link('.secs ');
    day.innerHTML = Math.floor(Math.random()*365);
    hours.innerHTML = Math.floor(Math.random()*24);
    mins.innerHTML=Math.floor(Math.random()*60);
    secs.innerHTML=Math.floor(Math.random()*60);
    var checkSecs = Number(secs.innerHTML);
    var checkMins = Number(mins.innerHTML);
    var checkHours = Number(hours.innerHTML);
    var checkDay = Number(day.innerHTML);
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
}
function handleChooseFood()
{
    ourProductFoods.forEach((ourProductFood,index) =>{
        ourProductFood.onclick = function ()
        {
            ourProduct = ourProducts[index];
            link('.our-product-food.active').classList.remove('active');
            link('.our__product-container.active').classList.remove('active');
            ourProduct.classList.add('active');
            this.classList.add('active');
        }
    });
}
function handleBodyImfomation()
{
    iconTabActives.forEach((iconTabActive,index) => {
        
        iconTabActive.onclick = function()
        {
            imgBodyInfomation= imgBodyInfomations[index];
            link('.img__body-infomation.active').classList.remove('active');
            link('.icon-tab-active.active').classList.remove('active');
            imgBodyInfomation.classList.add('active');
            this.classList.add('active');
        }
    });
    imgBodyInfomations.forEach((imgBodyInfomation,index) => {
        
        imgBodyInfomation.drop = function()
        {
            console.log('123');
        }
    });
}
function renderVegetabe()
{
    var html = itemVegetables.map(function(vegetable,index){
        return `
        <div class="col l-3 m-6 c-12">
            <div class="our__product-item">
                <a href="#" class="our__product-item-link">
                    <div class="our__product-img-background"><img src="${vegetable.img}" alt="" class="our__product-item-img"></div>
                    <p class="our__product-item-text">${vegetable.name}</p>
                    <div class="our__product-item-price">
                        <p class="our__product-item-price-1"><span class="our__product-item-price-main">${vegetable.priceLow}</span><span>đ</span></p>
                        <p class="our__product-item-price-1">${vegetable.price ===''? '' : vegetable.price  + '<span>đ</span>'}</p>
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
                        <a href="#" class="our__product-overlay-add">
                            <div class="our__product-overlay-add-icon"><i class="fas fa-cart-arrow-down"></i></div>
                            <p class="our__product-overlay-add-text">ADD TO CART</p>
                        </a> 
                </div>
            </div>
         </div>
        `
    });
    productVegetable.innerHTML = html.join(' ');
}
function renderMeat()
{
    var html = itemMeats.map(function(meat,index){
        return `
        <div class="col l-3 m-6 c-12">
            <div class="our__product-item">
                <a href="#" class="our__product-item-link">
                    <div class="our__product-img-background"><img src="${meat.img}" alt="" class="our__product-item-img"></div>
                    <p class="our__product-item-text">${meat.name}</p>
                    <div class="our__product-item-price">
                        <p class="our__product-item-price-1"><span class="our__product-item-price-main">${meat.priceLow}</span><span>đ</span></p>
                        <p class="our__product-item-price-1">${meat.price ===''? '' : meat.price + '<span>đ</span>'}</p>
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
                        <a href="$" class="our__product-overlay-add">
                            <div class="our__product-overlay-add-icon"><i class="fas fa-cart-arrow-down"></i></div>
                            <p class="our__product-overlay-add-text">ADD TO CART</p>
                        </a> 
                </div>
            </div>
         </div>
        `
    });
    productMeat.innerHTML = html.join(' ');
}
function flyItemCartAndAddCart()
{
    $(document).on('click','.our__product-overlay-add-text',function(e){
        e.preventDefault(); 
        if($(this).hasClass('disable'))
        {   
            return false;
        }
        $(document).find('.our__product-overlay-add-text').addClass('disable');
        var parent = $(this).parents('.our__product-item');
        var src = parent.find('.our__product-item-img').attr('src');
        //web
        var cartItem = $('.web-cart');
        // mobile
        //  //handle add item cart 
        // 
        var showTotalPrice = $(document).find(".show-total-price");
        //header__nav-cart-info
        var headerCart = $(document).find(".header__nav-cart-info");
        var countIn; // bien dem gio hang;
        var cartList = $(document).find(".web-cart-show");
        var nameProduct  = parent.find('.our__product-item-text').text();
        var priceProuct =  parent.find('.our__product-item-price-main').text();   
        var img = $('<img />',
             { class: 'my-img-cart',
               src: src,
             });
             img.appendTo($('body')).css({
                 'top': parent.offset().top,
                 'left':parent.offset().left + parent.width() - 50,
             }) 
        setTimeout(() => {
            $(document).find('.my-img-cart').css({
                'top': cartItem.offset().top,
                'left':cartItem.offset().left - cartItem.width(),
            });
        }, 500);
        setTimeout(() => {
            countIn = $(document).find('.header__nav-cart-text').data('count')+1;
            $(document).find('.my-img-cart').remove();
            $(document).find('.header__nav-cart-text').text(countIn).data('count',countIn);
            $(document).find('.our__product-overlay-add-text').removeClass('disable');
        }, 1500);
        // handle add cart
        var html = `<li class="header__nav-cart-item">                      
                        <div class="img-item-cart">
                            <img class="img-detail-item" src="${src}" alt="item-img">
                        </div>
                        <div class="name-item-cart">
                            ${nameProduct}
                        </div>
                        <div class="price-item-cart">
                        <span class="price-item-cart-detail">${priceProuct}</span><span>đ</span>
                        </div>
                        <button class="price-item-cart-btn">
                            Xóa
                        </button>
                     </li>`;
        cartList.append(html);
        // handle delete , price all of cart
        var itemCartList = $(cartList).find(".header__nav-cart-item");
        var buttonDeleteItemCart = $(itemCartList).find("button");
        var priceEveryProduct = $(itemCartList).find(".price-item-cart-detail");
        var showAllPriceText;
        var allPrice;
        // remove product in cart  

        buttonDeleteItemCart.each(function(index,value){
            value.onclick=function()
            {
                $(this).parents(".header__nav-cart-item").remove();
                priceEveryProduct = $(document).find(".web-cart-show").find(".header__nav-cart-item").find(".price-item-cart-detail");
                countIn = $(document).find('.header__nav-cart-text').data('count')-1;
                $(document).find('.header__nav-cart-text').text(countIn).data('count',countIn);
                showPriceAll();
            }
        })
        //handle show price total
        function showPriceAll()
        {
            allPrice=0;
            priceEveryProduct.each(function(index, value) {
                var price = parseFloat($(value).text());
                return allPrice = allPrice + price;
              });
            showAllPriceText = allPrice!== 0 ? `<span><span>Total price :</span> ${(allPrice*1000).toLocaleString()}<span>đ</span></span>`:""
            $(showTotalPrice).html(showAllPriceText);  
        }
        showPriceAll();  
    });
}      
renderVegetabe();
renderMeat();
handleBodyImfomation();
handleTime();
handleHeaderLogin();
getDataUserFromRegister();
handleLoginUserData();
lineHeader();
handleChooseFood();
handleBackgroundImage();
flyItemCartAndAddCart();






