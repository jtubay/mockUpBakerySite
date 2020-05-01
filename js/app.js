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
            if(e.target.parentElement.classList.contains('store-item-icon')){
                // console.log(e.target.parentElement.previousElementSibling)
                let fullPath = e.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf('img') + 3;
                let partPath = fullPath.slice(pos);

                const item = {};
                item.img = `img-cart${partPath}`;
                let name = e.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                item.name = name;
                console.log(item)

                // console.log(e.target.dataset.goods);


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