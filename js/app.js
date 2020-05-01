(function(){
    const cartInfor = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfor.addEventListener('click', () => {
        cart.classList.toggle('show-cart');
    })
})();
(() => {
    const cartBtn = document.querySelectorAll('.store-item-icon');
    cartBtn.forEach((btn)=>{
        btn.addEventListener('click', (e) =>{
            // console.log(e.target);
            if(e.target.parentElement.classList('store-item-icon')){

            }
            // const goods = e.target.getAttribute('data-goods');
            // if(goods){
            //     if(goods === 'macaroons'){
            //         console.log('mac')
            //     }

            //     console.log('true')
            // }else{
            //     console.log('false')
            // }
        })
    })
})()