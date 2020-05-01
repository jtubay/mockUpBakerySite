(function(){
    const cartInfor = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfor.addEventListener('click', () => {
        cart.classList.toggle('show-cart');
    })
})();
(() => {
    const cartBtn = document.querySelectorAll('.store-item-icon');
    const show = document.getElementById('testCart')
    const shop = document.getElementById('shop');
    cartBtn.forEach((btn)=>{
        btn.addEventListener('click', (e) =>{
            shop.classList.add('hide')
            show.classList.remove("hide")
            
            // console.log(e.target);
            if(e.target.parentElement.classList.contains('store-item-icon')){
                // console.log(e.target.parentElement.previousElementSibling)
                let fullPath = e.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf('img') + 3;
                let partPath = fullPath.slice(pos);
                

                const item = {};
                item.img = `img-cart${partPath}`;
                let name = e.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                let price = e.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                item.name = name;
                let finalPirce = price.slice(1).trim();
                item.price = finalPirce;
                console.log(item)

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3');

                cartItem.innerHTML = `
                    <img src="${item.img}" alt="" class="img-fluid rounded-circle" id="item-img">
                    <div class="item-text">
                        <p id="cart-item-title" class="font-weight-bold mb0">${item.name}</p>
                        <span>$</span>
                        <span id="cart-item-price" class="cart-item-price mb-0">${item.price}</span>
                    </div>
                    <a href="#" class="cart-item-remove">
                        <i class="fas fa-trash"></i>
                    </a>
                </div>
                `;
            const cart = document.getElementById('cart');
            const total = document.querySelector('.cart-total-container');

            cart.insertBefore(cartItem, total);
            alert('gang')
            showTotals();


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
    const showTotals = () =>{
        const total = [];
         const items = document.querySelectorAll('.cart-item-price');
        // const items = [...document.getElementsByClassName('cart-item-price')];
        for(let i = 0; i < items.length; i++){
            total.push(parseFloat(items[i].textContent))
        }

        // items.forEach((item)=>{
        //     total.push(parseFloat(item.textContent))
        // })

        const totalMoney = total.reduce((total, item) => {
            total += item;
            return total
        },0)
        const finalMoney = totalMoney.toFixed(2);
        console.log(finalMoney)

        document.getElementById('cart-total').textContent = finalMoney;
        document.querySelector('.item-total').textContent = finalMoney;
        document.getElementById('item-count').textContent = total.length;

    }
})();