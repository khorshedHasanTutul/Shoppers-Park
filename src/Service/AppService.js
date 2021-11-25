function callBack(func,...params){
    params=params||[];
    return function (evt) {
      params.push(evt);
      func.apply(this,params);
    }
  }
  const month=["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// const RecentPosts=[
//     {
//         id:1,
//         image:"/contents/assets/images/blog/b1.jpg",
//         title:"A companion for extra sleeping",
//         created_date:new Date().toLocaleDateString()
//     },
//     {
//         id:2,
//         image:"/contents/assets/images/blog/b1.jpg",
//         title:"A companion for extra sleeping",
//         created_date:new Date().toLocaleDateString()
//     },
//     {
//         id:3,
//         image:"/contents/assets/images/blog/b1.jpg",
//         title:"A companion for extra sleeping",
//         created_date:new Date().toLocaleDateString()
//     },
//     {
//         id:4,
//         image:"/contents/assets/images/blog/b1.jpg",
//         title:"A companion for extra sleeping",
//         created_date:new Date().toLocaleDateString()
//     },
//     {
//         id:5,
//         image:"/contents/assets/images/blog/b1.jpg",
//         title:"A companion for extra sleeping",
//         created_date:new Date().toLocaleDateString()
//     }
// ]

const BlogCommentData=[
    {
        blog_id:1,
        commenter_name:"Md. Sabbir Rahman",
        comment_content:"A class medicine store in Bangladesh........ Best wishes for LazzPharma",
        date:new Date().toLocaleTimeString(),
        image:"/contents/assets/images/halloween/h1.png"
    },
    {
        blog_id:2,
        commenter_name:"Md. Sabbir Rahman",
        comment_content:"A class medicine store in Bangladesh........ Best wishes for LazzPharma",
        date:new Date().toLocaleTimeString(),
        image:"/contents/assets/images/halloween/h1.png"
    },
    {
        blog_id:3,
        commenter_name:"Md. Sabbir Rahman",
        comment_content:"A class medicine store in Bangladesh........ Best wishes for LazzPharma",
        date:new Date().toLocaleTimeString(),
        image:"/contents/assets/images/halloween/h1.png"
    },
    {
        blog_id:1,
        commenter_name:"Md. Sabbir Rahman",
        comment_content:"A class medicine store in Bangladesh........ Best wishes for LazzPharma",
        date:new Date().toLocaleTimeString(),
        image:"/contents/assets/images/halloween/h1.png"
    },
    {
        blog_id:4,
        commenter_name:"Md. Sabbir Rahman",
        comment_content:"A class medicine store in Bangladesh........ Best wishes for LazzPharma",
        date:new Date().toLocaleTimeString(),
        image:"/contents/assets/images/halloween/h1.png"
    }
]


const BlogData={
    HeaderAreaText:"SHOP YOUR WAY WITH SuperPark",
    BlogArea:[
    {
        id:1,
        category_id:1,
        postedBy:'Tutul',
        postName:"Online Doctor",
        postContent:"Find the right contraception for you with Superdrug Online Doctor.",
        buttonText:"Order Now",
        buttonImage:"/contents/assets/images/3dot.png",
        image:"/contents/assets/images/e1220-morefrom-contraceptive-pinkgif.gif",
        date:new Date().getDate(),
        month:month[new Date().getMonth()] ,
        created_at:(new Date().getDate()+10)
    },
    {
        id:2,
        category_id:1,
        postedBy:'Yeasin',
        postName:"Online Doctor",
        postContent:"Find the right contraception for you with Superdrug Online Doctor.",
        buttonText:"Order Now",
        buttonImage:"/contents/assets/images/3dot.png",
        image:"/contents/assets/images/e1220-morefrom-contraceptive-pinkgif.gif",
        date:new Date().getDate(),
        month:month[new Date().getMonth()] ,
        created_at:(new Date().getDate()-5)
    },
    {
        id:3,
        category_id:1,
        postedBy:'Yeasin',
        postName:"Online Doctor",
        postContent:"Find the right contraception for you with Superdrug Online Doctor.",
        buttonText:"Order Now",
        buttonImage:"/contents/assets/images/3dot.png",
        image:"/contents/assets/images/e1220-morefrom-contraceptive-pinkgif.gif",
        date:new Date().getDate(),
        month:month[new Date().getMonth()] ,
        created_at:(new Date().getDate()+7)
    },
    {
        id:4,
        category_id:2,
        postedBy:'Akash',
        postName:"Online Doctor",
        postContent:"Find the right contraception for you with Superdrug Online Doctor.",
        buttonText:"Order Now",
        buttonImage:"/contents/assets/images/3dot.png",
        image:"/contents/assets/images/e1220-morefrom-contraceptive-pinkgif.gif",
        date:new Date().getDate(),
        month:month[new Date().getMonth()] ,
        created_at:(new Date().getDate()+7)
    },
    {
        id:5,
        category_id:2,
        postedBy:'TutulMia',
        postName:"Online Doctor",
        postContent:"Find the right contraception for you with Superdrug Online Doctor.",
        buttonText:"Order Now",
        buttonImage:"/contents/assets/images/3dot.png",
        image:"/contents/assets/images/e1220-morefrom-contraceptive-pinkgif.gif",
        date:new Date().getDate(),
        month:month[new Date().getMonth()] ,
        created_at:(new Date().getDate()+7)
    },
    {
        id:6,
        category_id:2,
        postedBy:'TutulMia',
        postName:"Online Doctor",
        postContent:"Find the right contraception for you with Superdrug Online Doctor.",
        buttonText:"Order Now",
        buttonImage:"/contents/assets/images/3dot.png",
        image:"/contents/assets/images/e1220-morefrom-contraceptive-pinkgif.gif",
        date:new Date().getDate(),
        month:month[new Date().getMonth()] ,
        created_at:(new Date().getDate()+7)
    }
]

}


const Priivacy={
    header:"What personal data we collect and why we collect it",
    itemText:"Account & Security ",
    paragraph:"You will receive a notification stating that the account and password have been created, shortly after the registration process. You will be responsible for maintaining the confidentiality of your account & its password, as well as all the transactions received under your password or account. "
}

const HalloweenSlider=[
    {
        image:"/contents/assets/images/halloween/1-e1021-Halloween-Cat-Cubs-with-cta.jpg",
        innerImage:"/contents/assets/images/halloween/1-e1021-Halloween-Cloud-Nine.jpg"
    },
    {
        image:"/contents/assets/images/halloween/1-e1021-Halloween-Cat-Cubs-with-cta.jpg",
        innerImage:"/contents/assets/images/halloween/1-e1021-Halloween-Cloud-Nine.jpg"
    },
    {
        image:"/contents/assets/images/halloween/1-e1021-Halloween-Cat-Cubs-with-cta.jpg",
        innerImage:"/contents/assets/images/halloween/1-e1021-Halloween-Cloud-Nine.jpg"
    }
]
const BrandData=[
    {
        category_id:1,
        brand_id:1,
        brand_name:"A Vogel"
    },
    {
        category_id:1,
        brand_id:2,
        brand_name:"Abidec"
    },
    {
        category_id:2,
        brand_id:3,
        brand_name:"ABata"
    },
    {
        category_id:1,
        brand_id:4,
        brand_name:"Bata"
    },
    {
        category_id:2,
        brand_id:5,
        brand_name:"CBata"
    },
    {
        category_id:1,
        brand_id:6,
        brand_name:"DBata"
    },
    {
        category_id:2,
        brand_id:7,
        brand_name:"HBata"
    },
    {
        category_id:1,
        brand_id:8,
        brand_name:"MBata"
    },
    {
        category_id:2,
        brand_id:9,
        brand_name:"QBata"
    },
    {
        category_id:1,
        brand_id:10,
        brand_name:"FBata"
    },
    {
        category_id:2,
        brand_id:11,
        brand_name:"XBata"
    },
    {
        category_id:1,
        brand_id:12,
        brand_name:"8Bata"
    },
    {
        category_id:2,
        brand_id:13,
        brand_name:"LBata"
    },
    {
        category_id:1,
        brand_id:14,
        brand_name:"LBata"
    },
    {
        category_id:2,
        brand_id:15,
        brand_name:"YBata"
    },
    {
        category_id:2,
        brand_id:16,
        brand_name:"ZBata"
    }
]
const ReleatedPOst=[
    {
        category_id:1,
        posted_by:"Tutul",
        post_name:"Online Doctor",
        post_content:"Find the right contraception for you with Superdrug Online Doctor.",
        button_text:"Order Now",
        image:"",
        date:new Date().getDate(),
        month:new Date().getMonth(),

    },
    {
        category_id:2,
        posted_by:"Tutul",
        post_name:"Online Doctor",
        post_content:"Find the right contraception for you with Superdrug Online Doctor.",
        button_text:"Order Now",
        image:"",
        date:new Date().getDate(),
        month:new Date().getMonth(),

    },
    {
        category_id:1,
        posted_by:"Tutul",
        post_name:"Online Doctor",
        post_content:"Find the right contraception for you with Superdrug Online Doctor.",
        button_text:"Order Now",
        image:"",
        date:new Date().getDate(),
        month:new Date().getMonth(),

    },
    {
        category_id:2,
        posted_by:"Tutul",
        post_name:"Online Doctor",
        post_content:"Find the right contraception for you with Superdrug Online Doctor.",
        button_text:"Order Now",
        image:"",
        date:new Date().getDate(),
        month:new Date().getMonth(),

    },
    {
        category_id:1,
        posted_by:"Tutul",
        post_name:"Online Doctor",
        post_content:"Find the right contraception for you with Superdrug Online Doctor.",
        button_text:"Order Now",
        image:"",
        date:new Date().getDate(),
        month:new Date().getMonth(),

    }
]
const BrandService={
    Get:function(func){
            return func(BrandData);
    }
}

const BlogService={

    Get:function(categoryId,func){

        if(categoryId){
            func(BlogData.BlogArea.filter((item)=>{return item.category_id===categoryId;}));
        }else{
            func(BlogData.BlogArea);
        }
    }
};

const Offers={
   OffersHeader:{
        text:"Top Offers",
        SliderInfo:[
            {
                image:"/contents/assets/images/offer/e1121_TopOffersGS_LighterLifeFast.jpg",
                url:"/product/668f1e62-a58e-43dd-9ec0-0013dbb70d42c"
            },
            {
                image:"/contents/assets/images/offer/e1121_TopOffersGS_LighterLifeFast.jpg",
                url:"/category/1"
            },
        ]
    },
    OffersBanner:{
        header:"UNMISSABLE BEAUTY OFFERS",
        
        offersImage:[
        {
            url:"/product/668f1e62-a58e-43dd-9ec0-0013dbb70d42c",
            image:"contents/assets/images/offer/o2.png"
        },
        {
            url:"/product/f317f99e-603d-44f5-995e-002c82ca9f45c",
            image:"contents/assets/images/offer/o2.png"
        },
        {
            url:"/product/f317f99e-603d-44f5-995e-002c82ca9f45c",
            image:"contents/assets/images/offer/o2.png"
        },
        {
            url:"/product/668f1e62-a58e-43dd-9ec0-0013dbb70d42c",
            image:"contents/assets/images/offer/o2.png"
        },
        {
            url:"/product/668f1e62-a58e-43dd-9ec0-0013dbb70d42c",
            image:"contents/assets/images/offer/o2.png"
        },
        {
            url:"/product/f317f99e-603d-44f5-995e-002c82ca9f45c",
            image:"contents/assets/images/offer/o2.png"
        }
    ]
    },
    OffersProductArea:{
        HeaderAreaText:"top discounted offers",
        buttonText:"Shop All TopOffers",
    }

}

const ocassionCategory=[
    {
        category_id:1,
        category_name:"Pohela boishakh"
    },
    {
        category_id:2,
        category_name:"Valentine's Day"
    },
    {
        category_id:3,
        category_name:"Eid ul fitr"
    }
]

const productdetailsAllData={
    Tabinfo:[
        {
            id:1,
            text:"Product Details"
        },
        {
            id:2,
            text:"Information"
        },
        {
            id:3,
            text:"review"
        }
    ],
    productDetails:[
        {
            id:"8edcd73d-f733-4552-a870-0002a314f1edc",
            info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            id:"7486379c-bcbb-417f-9907-000d13ab55ccc",
            info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            id:"14496621-fa26-416e-9e62-000f7aae20fdc",
            info:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            id:"668f1e62-a58e-43dd-9ec0-0013dbb70d42c",
            info:" 'Content here, content here', making it look like readable English."
        },
        {
            id:"d2605b95-b067-4170-a624-001c1f21f194c",
            info:" 'Content here, content here', making it look like readable English. Hello Tutul"
        },
        {
            id:"02defa41-158b-4d2d-90bd-0024c0d8b226c",
            info:" 'content here', making it look like readable English. Hello Tutul"
        },
        {
            id:"14bec93c-1cc1-44db-9c84-0024e74118f8c",
            info:" 'content here', making it look like readable English. Hello Tutul"
        },
        {
            id:"bfad512d-3cb1-4f67-b65c-0028485da9dfc",
            info:" look like readable English. Hello Tutul"
        },
        {
            id:"f317f99e-603d-44f5-995e-002c82ca9f45c",
            info:"readable English. Hello Tutul"
        },
        {
            id:"7c159a2d-ed4a-483f-96a9-003111c84f06c",
            info:" Hello Tutul"
        },


    ]
}
const Checkout={
    TabData:[
        {
            id:1,
            tabText:"01. Summary"
        },
        {
            id:2,
            tabText:"02. Address"
        },
        {
            id:3,
            tabText:"03. Payment"
        }
    ],
    DelivaryStatus:[
        {
            id:1,
            text:"Inside Dhaka"
        },
        {
            id:2,
            text:"Outside Dhaka"
        }
    ]
}
const NewInPage={
    Banner:
        {
            id:1,
            image:"/contents/assets/images/nn1.png"
        },
    HeaderAreaText:"new in shop by category",
    ProductAreaHeader :"TOP NEW IN PRODUCTS"
        
}
const ReturnPolicy={
    headertext:"Return Policy: ",
    list:[
        {
            id:1,
            text:"Wrong medicine provided."
        },
        {
            id:1,
            text:"Wrong medicine provided."
        },
        {
            id:1,
            text:"Wrong medicine provided."
        },
        {
            id:1,
            text:"Wrong medicine provided."
        }
    ],
    paragraphtext:[
        {
            text:"Note: Customers must check the product before NOC signing."
        },
        {
            text:"Note: Customers must check the product before NOC signing."
        },
        {
            text:"Note: Customers must check the product before NOC signing."
        }
    ]
}

export {BlogService,ReturnPolicy,NewInPage,callBack,BrandService,ReleatedPOst,BlogData,BlogCommentData,HalloweenSlider,Priivacy,BrandData,Offers,ocassionCategory,productdetailsAllData,Checkout};
