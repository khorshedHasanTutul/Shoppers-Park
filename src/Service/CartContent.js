const cartStoreData=[''];

const CartService={};
(function(){
    const CartModel={TotalAmount:0,TotalItem:0,Items:[]};
    this.Get=function(){
        return {TotalAmount:CartModel.TotalAmount,TotalItem:CartModel.TotalItem,Items:CartModel.Items};
    };
    this.Add=function(item){
        CartModel.Items.push(item);
        this.Refresh(this.Get());
    };
    this.Refresh=function(){}
}).call(CartService);
const cartAddedButton=(item,evt)=>{
     console.log(['itemEdit',item,CartService.Refresh,CartService.Get()])
    evt.preventDefault();
    CartService.Add(item);
}
export {cartStoreData,cartAddedButton,CartService}