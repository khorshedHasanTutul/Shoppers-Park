const CartService = {};
const WishService = {};

(function () {
    var CartModel = { TotalAmount: 0, TotalItem: 0, Items: [], qty: [], MRP: [] };

    let getData = localStorage.getItem('cartModel');

    if (getData) {
        getData = JSON.parse(getData);
        getData.Items && (CartModel = getData);
    }
    this.Get = function () {
        return { ...CartModel };
    };

    function ifExists(item) {
        const foundData = CartModel.Items.find(item2 => item2.Id === item.Id);
        if (foundData) return true;
        return false;
    }
    this.Add = function (item) {
        if (ifExists(item)) {
            alert('Already in your Cart.');
        } else {
            CartModel.Items.push(item);
            CartModel.qty.push(1);
           if(item.Ds>0){
               let productPrice=(item.MRP-((item.MRP)*item.Ds)/100);
               CartModel.MRP.push(productPrice);
               CartModel.TotalAmount += productPrice;
           }
           else{
               CartModel.MRP.push(item.MRP);
               CartModel.TotalAmount += item.MRP;
           } 
            localStorage.setItem('cartModel', JSON.stringify(CartModel));
            this.Refresh(this.Get());
        }

    };
    this.SingleAdd=function(item,count){
        if(ifExists(item)){
            alert('Already in your Cart.');
        }
        else{
            CartModel.Items.push(item);
            CartModel.qty.push(count);
            if(item.Ds>0){
                let productPrice=(item.MRP-((item.MRP)*item.Ds)/100);
                CartModel.MRP.push(productPrice*count);
                CartModel.TotalAmount=CartModel.TotalAmount+(productPrice*count);
            }
            else{
                  CartModel.MRP.push(item.MRP*count);
                  CartModel.TotalAmount=CartModel.TotalAmount+(item.MRP*count);
            }
            localStorage.setItem('cartModel', JSON.stringify(CartModel));
            this.Refresh(this.Get());
        }
    }

    this.Remove = function (item) {
        if (ifExists(item)) {
            const index = CartModel.Items.findIndex(item2 => item2.Id === item.Id);
            CartModel.Items.splice(index, 1);
            CartModel.qty.splice(index,1);
            CartModel.MRP.splice(index,1);
            CartModel.TotalAmount=CartModel.MRP.reduce(function(a, b){
                return a + b;
            }, 0);
            this.Refresh(this.Get());
        }
        localStorage.setItem('cartModel', JSON.stringify(CartModel));
        return CartModel.Items;
    }
    this.ClearCart=function(){
        CartModel.Items.splice(0, CartModel.Items.length);
        CartModel.qty.splice(0,CartModel.qty.length);
        CartModel.MRP.splice(0,CartModel.MRP.length);
        CartModel.TotalAmount=0;
        this.Refresh(this.Get());
        localStorage.removeItem("cartModel"); 
    }

    this.increment = function (item) {
        var index = CartModel.Items.findIndex(item2 => item2.Id === item.Id);
        if(item.Ds>0){
            let product_price=CartModel.Items[index].MRP
            product_price=(product_price-((product_price)*item.Ds)/100);
            CartModel.TotalAmount=CartModel.TotalAmount+product_price;
            CartModel.MRP[index] =product_price + CartModel.MRP[index];

        }
        else{
            CartModel.TotalAmount=CartModel.TotalAmount+CartModel.Items[index].MRP;
            CartModel.MRP[index] = CartModel.Items[index].MRP + CartModel.MRP[index];
        }
        
        CartModel.qty[index] =CartModel.qty[index]+ 1;
       
        this.Refresh(this.Get());
        localStorage.setItem('cartModel', JSON.stringify(CartModel));
        return CartModel.Items;
    }

    this.decrement = function (item) {
        const index = CartModel.Items.findIndex(item2 => item2.Id === item.Id);
        if(item.Ds>0){
            let product_price=CartModel.Items[index].MRP;
            product_price=(product_price-((product_price)*item.Ds)/100);
            CartModel.TotalAmount=CartModel.TotalAmount-product_price;
            CartModel.MRP[index] = CartModel.MRP[index] - product_price;
        }
        else{
            CartModel.TotalAmount=CartModel.TotalAmount-CartModel.Items[index].MRP;
            CartModel.MRP[index] = CartModel.MRP[index] - CartModel.Items[index].MRP;
        }
        
        CartModel.qty[index] = CartModel.qty[index] - 1;
        this.Refresh(this.Get());
        localStorage.setItem('cartModel', JSON.stringify(CartModel));
        return CartModel.Items;
    }
    this.QtyUpdate=function(item,qtyChangeedValue){
        const index = CartModel.Items.findIndex(item2 => item2.Id === item.Id);
        if(item.Ds>0){
            let productPrice=(item.MRP-((item.MRP)*item.Ds)/100);
            CartModel.MRP[index]=(productPrice*qtyChangeedValue);
            const ammount=CartModel.MRP.reduce(function(a, b){
                return a + b;
            }, 0);
            CartModel.TotalAmount = ammount;
        }
        else{
            CartModel.MRP[index]=(item.MRP*qtyChangeedValue);
            const ammount=CartModel.MRP.reduce(function(a, b){
                return a + b;
            }, 0);
            CartModel.TotalAmount = ammount;
        }

        CartModel.qty[index] = parseInt(qtyChangeedValue);
        this.Refresh(this.Get());
        localStorage.setItem('cartModel', JSON.stringify(CartModel));
        return CartModel.Items;
    }
    this.Refresh = function () { }

}).call(CartService);


(function () {
    var WishModel = { Items: [] };
    let getData = localStorage.getItem('wishModel');

    if (getData) {
        getData = JSON.parse(getData);
        getData.Items && (WishModel = getData);
    }

    function ifExists(item) {
        const foundData = WishModel.Items.find(item2 => item2.Id === item.Id);
        if (foundData) return true;
        return false;
    }


    this.Get = function () {
        return { Items: WishModel.Items };
    };

    this.Add = function (item) {
        if (ifExists(item)) {
            alert('Already in your Wishlist.');
        } else {
            WishModel.Items.push(item);
            localStorage.setItem('wishModel', JSON.stringify(WishModel));
            this.Refresh(this.Get());
        }

    };

    this.Remove = function (item) {
        if (ifExists(item)) {
            const index = WishModel.Items.findIndex(item2 => item2.Id === item.Id);
            WishModel.Items.splice(index, 1);
            this.Refresh(this.Get());
        }
        localStorage.setItem('wishModel', JSON.stringify(WishModel));
        return WishModel.Items;
    }
    this.Refresh = function () { }
}).call(WishService);



const cartAddedButton = (item, e) => {
    e.preventDefault();
    CartService.Add(item);
}

const WishAddedButton = (item, evt) => {
    evt.preventDefault();
    WishService.Add(item);
}
const RemoveItem = (item, evt) => {
    evt.preventDefault();
    CartService.Remove(item);
}
const WishRemoveItem = (item, evt) => {
    evt.preventDefault();
    WishService.Remove(item);
}
const cartSingleButtonAdd=(item,count,evt)=>{
    evt.preventDefault();
    CartService.SingleAdd(item,count)
}
const ButoonInc = (item, evt) => {
    CartService.increment(item, evt);
}
const ButoonDec = (item, evt) => {
    CartService.decrement(item, evt);
}
const QtyChange=(item,qtyChangeedValue,evt)=>{
    evt.preventDefault();
    CartService.QtyUpdate(item,qtyChangeedValue)
}
const CartClear=(e)=>{
    e.preventDefault();
    CartService.ClearCart();
}
export { cartAddedButton,CartClear,cartSingleButtonAdd, ButoonInc, ButoonDec,QtyChange, WishRemoveItem, CartService, WishAddedButton, WishService, RemoveItem }