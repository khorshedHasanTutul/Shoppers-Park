const CartService={};
const WishService={};
(function(){
    const CartModel={TotalAmount:0,TotalItem:0,Items:[]};

    this.Get=function(){
        return {TotalAmount:CartModel.TotalAmount,TotalItem:CartModel.TotalItem,Items:CartModel.Items};
    };
    this.Add=function(item){
        CartModel.Items.push(item);
        CartModel.TotalAmount+=item.MRP;
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