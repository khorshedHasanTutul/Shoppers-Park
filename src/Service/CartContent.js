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

    function ifExists(item){
        const foundData=CartModel.Items.find(item2=>item2.Id===item.Id);
        if(foundData) return true;
        return false;
    }
    this.Add=function(item){
        if(ifExists(item)){
            alert('Already in your Cart.');
        }
        else{
            CartModel.Items.push(item);
            CartModel.TotalAmount+=item.MRP;
            localStorage.setItem('cartModel',JSON.stringify(CartModel));
            this.Refresh(this.Get());
        }
       
    };
    this.Remove=function(item){
        if(ifExists(item)){
            const index=CartModel.Items.findIndex(item2=>item2.Id===item.Id);
            CartModel.Items.splice(index,1);
            this.Refresh(this.Get());
        }
        localStorage.setItem('cartModel',JSON.stringify(CartModel));
        return CartModel.Items;
    }
    this.Update=function(item){
        console.log('buttonClicked')
        // const index=CartModel.Items.findIndex(item2=>item2.Id==item.Id);
        // const MRP= CartModel.Items[index].MRP;
        // if(ifExists(item)){
        //     this.Refresh(this.Get());
        // }
        // localStorage.setItem('cartModel',JSON.stringify(CartModel));
        // return CartModel.Items;
    }
    this.Refresh=function(){}

}).call(CartService);


(function(){
    var WishModel={Items:[]};
    let getData=localStorage.getItem('wishModel');

    if(getData){
        getData=JSON.parse(getData);
        getData.Items && (WishModel=getData);
    }

    function ifExists(item){
        const foundData=WishModel.Items.find(item2=>item2.Id===item.Id);
        if(foundData) return true;
        return false;
    }


    this.Get=function(){
        return {Items:WishModel.Items};
    };

    this.Add=function(item){
        if(ifExists(item)){
            alert('Already in your Wishlist.');
        }
        else{
            WishModel.Items.push(item);
            localStorage.setItem('wishModel',JSON.stringify(WishModel));
            this.Refresh(this.Get());
        }
       
    };

    this.Remove=function(item){
        if(ifExists(item)){
            const index=WishModel.Items.findIndex(item2=>item2.Id===item.Id);
            WishModel.Items.splice(index,1);
            this.Refresh(this.Get());
        }
        localStorage.setItem('wishModel',JSON.stringify(WishModel));
        return WishModel.Items;
    }
    this.Refresh=function(){}
}).call(WishService);

const cartAddedButton=(item,evt)=>{
    evt.preventDefault();
    CartService.Add(item);
}
const WishAddedButton=(item,evt)=>{
    evt.preventDefault();
    WishService.Add(item);
}
const RemoveItem=(item,evt)=>{
    evt.preventDefault();
    CartService.Remove(item);
}
const WishRemoveItem=(item,evt)=>{
    evt.preventDefault();
    WishService.Remove(item);
}
const ButoonInc=(item,evt)=>{
    CartService.Update(item);
}
export {cartAddedButton,ButoonInc,WishRemoveItem,CartService,WishAddedButton,WishService,RemoveItem}