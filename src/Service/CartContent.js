const CartService={};
const WishService={};

(function(){
    var CartModel={TotalAmount:0,TotalItem:0,Items:[]};
    
    let getData=localStorage.getItem('cartModel');
    if(getData){
        getData=JSON.parse(getData);
        getData.Items && (CartModel=getData);
    }

    this.Get=function(){
        return {...CartModel};
    };

    this.Add=function(item){ 
        console.log('cart',CartModel.Items)
        CartModel.Items.push(item);
        console.log('item',localStorage.getItem('cartModel'))
        CartModel.TotalAmount+=item.MRP;
        localStorage.setItem('cartModel',JSON.stringify(CartModel));
        this.Refresh(this.Get());
    };

    this.Refresh=function(){}

}).call(CartService);


(function(){
    const wishModel={Items:[]};
    this.Get=function(){
        return {Items:wishModel.Items};
    };
    this.Add=function(item){
        wishModel.Items.push(item);
        this.Refresh(this.Get());
    };
    this.Refresh=function(){}
}).call(WishService);

const cartAddedButton=(item,evt)=>{
    //  console.log(['itemEdit',item,CartService.Refresh,CartService.Get()])
    evt.preventDefault();
    CartService.Add(item);
}
const WishAddedButton=(item,evt)=>{
    evt.preventDefault();
    WishService.Add(item);
}
export {cartAddedButton,CartService,WishAddedButton,WishService}