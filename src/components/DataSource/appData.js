import { faFacebookF,faYoutube,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons"

var appData = {
    // TopCategories: [
    //   {
    //     Id: "e1324f4c-4445-45b3-8d89-b70378500fb1",
    //     Nm: "Covit-19",
    //     Pt: "e1324f4c-4445-45b3-8d89-b70378500fb1.jpg",
    //   },
    //   {
    //     Id: "661cdd7f-c949-40e1-a211-2a32980b82ef",
    //     Nm: "Women Care",
    //     Pt: "661cdd7f-c949-40e1-a211-2a32980b82ef.jpg",
    //   },
    // ],
    // DisplayCategories: [
    //   {
    //     Id: "e1324f4c-4445-45b3-8d89-b70378500fb1",
    //     Nm: "Covit-19",
    //     Pt: [
    //       {
    //         Id: "8edcd73d-f733-4552-a870-0002a314f1ed",
    //         Nm: "ELTROXIN",
    //         GN: "LEVOTHYROXINE SODIUM",
    //         St: "50 MCG",
    //         Ct: "Tab",
    //         Sp: "GSK BANGLADESH LTD",
    //         MRP: 255,
    //         Ds: 0,
    //         Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //       {
    //         Id: "7486379c-bcbb-417f-9907-000d13ab55cc",
    //         Nm: "CISPLATIN HEXAL ",
    //         GN: "DURCHSTECHFLASCHE IM ONCOSAFE ",
    //         St: "10 mg",
    //         Ct: "Injection",
    //         Sp: "NOVARTIS (BANGLADESH) LTD.",
    //         MRP: 419,
    //         Ds: 0,
    //         Pt: "aef955ba-a5f0-4f2f-8516-85aa03073f7dinjection (1).jpg",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //       {
    //         Id: "14496621-fa26-416e-9e62-000f7aae20fd",
    //         Nm: "ACTIKID MAGIC BEANS",
    //         GN: "VITAMIN C",
    //         St: ".",
    //         Ct: "Tab",
    //         Sp: "CATALYST HEALTH CARE",
    //         MRP: 950,
    //         Ds: 0,
    //         Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //       {
    //         Id: "668f1e62-a58e-43dd-9ec0-0013dbb70d42",
    //         Nm: "LACTOGIN",
    //         GN: "IMPROVE LACTATION",
    //         St: ".",
    //         Ct: "Cap",
    //         Sp: "MIX MEDICAL",
    //         MRP: 25,
    //         Ds: 0,
    //         Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
    //         Tp: "0",
    //         Stk: 60,
    //       },
    //       {
    //         Id: "d2605b95-b067-4170-a624-001c1f21f194",
    //         Nm: "ANXIO",
    //         GN: "BROMAZEPAM",
    //         St: "3 MG",
    //         Ct: "Tab",
    //         Sp: "UNIMED\u0026UNIHEALTH MFG.LTD",
    //         MRP: 4.5,
    //         Ds: 0,
    //         Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
    //         Tp: "0",
    //         Stk: 20,
    //       },
    //       {
    //         Id: "02defa41-158b-4d2d-90bd-0024c0d8b226",
    //         Nm: "HIMALAYA ANTI-WRINKLE",
    //         GN: "BEAUTY CREAM",
    //         St: "50 GM",
    //         Ct: "CREAM (TOILETIES)",
    //         Sp: "RIGS MARKETING",
    //         MRP: 450,
    //         Ds: 0,
    //         Pt: "",
    //         Tp: "0",
    //         Stk: 3,
    //       },
    //       {
    //         Id: "14bec93c-1cc1-44db-9c84-0024e74118f8",
    //         Nm: "FULSPEC",
    //         GN: "MEROPENEM",
    //         St: "1 G",
    //         Ct: "Injection IV",
    //         Sp: "ACME LABORATORIES LTD.",
    //         MRP: 1208.15,
    //         Ds: 0,
    //         Pt: "5b84c53a-e20b-4fea-b862-4a7a11e98ae3injection (1).jpg",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //       {
    //         Id: "bfad512d-3cb1-4f67-b65c-0028485da9df",
    //         Nm: "ONRIVA PLUS BEXICAP",
    //         GN: "Glycopyrronium,Glicopironio",
    //         St: "50 GM",
    //         Ct: "Cap",
    //         Sp: "BEXIMCO CONSUMER LTD",
    //         MRP: 2100,
    //         Ds: 0,
    //         Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
    //         Tp: "0",
    //         Stk: 1,
    //       },
    //       {
    //         Id: "f317f99e-603d-44f5-995e-002c82ca9f45",
    //         Nm: "MILAM",
    //         GN: "MIDAZOLAM",
    //         St: "15MG",
    //         Ct: "Injection IM/IV",
    //         Sp: "TRANSCOM DISTRIBUTION COMPANY LTD(SK+F)",
    //         MRP: 120,
    //         Ds: 0,
    //         Pt: "8875663c-91cb-47c5-ac2a-84972a64173finjection (1).jpg",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //       {
    //         Id: "7c159a2d-ed4a-483f-96a9-003111c84f06",
    //         Nm: "IGLOO STRAWBERRY CHEESECAKE",
    //         GN: "ICE CREAM",
    //         St: ".",
    //         Ct: "Toiletries",
    //         Sp: "IGLOO ICE CREAM",
    //         MRP: 50,
    //         Ds: 0,
    //         Pt: "",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //     ],
    //   },
    //   {
    //     Id: "661cdd7f-c949-40e1-a211-2a32980b82ef",
    //     Nm: "Women Care",
    //     Pt: [
    //       {
    //         Id: "8edcd73d-f733-4552-a870-0002a314f1ed",
    //         Nm: "ELTROXIN",
    //         GN: "LEVOTHYROXINE SODIUM",
    //         St: "50 MCG",
    //         Ct: "Tab",
    //         Sp: "GSK BANGLADESH LTD",
    //         MRP: 255,
    //         Ds: 0,
    //         Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //       {
    //         Id: "7486379c-bcbb-417f-9907-000d13ab55cc",
    //         Nm: "CISPLATIN HEXAL ",
    //         GN: "DURCHSTECHFLASCHE IM ONCOSAFE ",
    //         St: "10 mg",
    //         Ct: "Injection",
    //         Sp: "NOVARTIS (BANGLADESH) LTD.",
    //         MRP: 419,
    //         Ds: 0,
    //         Pt: "aef955ba-a5f0-4f2f-8516-85aa03073f7dinjection (1).jpg",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //       {
    //         Id: "14496621-fa26-416e-9e62-000f7aae20fd",
    //         Nm: "ACTIKID MAGIC BEANS",
    //         GN: "VITAMIN C",
    //         St: ".",
    //         Ct: "Tab",
    //         Sp: "CATALYST HEALTH CARE",
    //         MRP: 950,
    //         Ds: 0,
    //         Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //       {
    //         Id: "668f1e62-a58e-43dd-9ec0-0013dbb70d42",
    //         Nm: "LACTOGIN",
    //         GN: "IMPROVE LACTATION",
    //         St: ".",
    //         Ct: "Cap",
    //         Sp: "MIX MEDICAL",
    //         MRP: 25,
    //         Ds: 0,
    //         Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
    //         Tp: "0",
    //         Stk: 60,
    //       },
    //       {
    //         Id: "d2605b95-b067-4170-a624-001c1f21f194",
    //         Nm: "ANXIO",
    //         GN: "BROMAZEPAM",
    //         St: "3 MG",
    //         Ct: "Tab",
    //         Sp: "UNIMED\u0026UNIHEALTH MFG.LTD",
    //         MRP: 4.5,
    //         Ds: 0,
    //         Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
    //         Tp: "0",
    //         Stk: 20,
    //       },
    //       {
    //         Id: "02defa41-158b-4d2d-90bd-0024c0d8b226",
    //         Nm: "HIMALAYA ANTI-WRINKLE",
    //         GN: "BEAUTY CREAM",
    //         St: "50 GM",
    //         Ct: "CREAM (TOILETIES)",
    //         Sp: "RIGS MARKETING",
    //         MRP: 450,
    //         Ds: 0,
    //         Pt: "",
    //         Tp: "0",
    //         Stk: 3,
    //       },
    //       {
    //         Id: "14bec93c-1cc1-44db-9c84-0024e74118f8",
    //         Nm: "FULSPEC",
    //         GN: "MEROPENEM",
    //         St: "1 G",
    //         Ct: "Injection IV",
    //         Sp: "ACME LABORATORIES LTD.",
    //         MRP: 1208.15,
    //         Ds: 0,
    //         Pt: "5b84c53a-e20b-4fea-b862-4a7a11e98ae3injection (1).jpg",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //       {
    //         Id: "bfad512d-3cb1-4f67-b65c-0028485da9df",
    //         Nm: "ONRIVA PLUS BEXICAP",
    //         GN: "Glycopyrronium,Glicopironio",
    //         St: "50 GM",
    //         Ct: "Cap",
    //         Sp: "BEXIMCO CONSUMER LTD",
    //         MRP: 2100,
    //         Ds: 0,
    //         Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
    //         Tp: "0",
    //         Stk: 1,
    //       },
    //       {
    //         Id: "f317f99e-603d-44f5-995e-002c82ca9f45",
    //         Nm: "MILAM",
    //         GN: "MIDAZOLAM",
    //         St: "15MG",
    //         Ct: "Injection IM/IV",
    //         Sp: "TRANSCOM DISTRIBUTION COMPANY LTD(SK+F)",
    //         MRP: 120,
    //         Ds: 0,
    //         Pt: "8875663c-91cb-47c5-ac2a-84972a64173finjection (1).jpg",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //       {
    //         Id: "7c159a2d-ed4a-483f-96a9-003111c84f06",
    //         Nm: "IGLOO STRAWBERRY CHEESECAKE",
    //         GN: "ICE CREAM",
    //         St: ".",
    //         Ct: "Toiletries",
    //         Sp: "IGLOO ICE CREAM",
    //         MRP: 50,
    //         Ds: 0,
    //         Pt: "",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //     ],
    //   },
    // ],
    // Products: [
    //   {
    //     Id: "cc7badb7-44be-4b63-adaa-0a6118746768",
    //     Nm: "Special Products",
    //     Pt: [
    //       {
    //         Id: "8edcd73d-f733-4552-a870-0002a314f1ed",
    //         Nm: "ELTROXIN",
    //         GN: "LEVOTHYROXINE SODIUM",
    //         St: "50 MCG",
    //         Ct: "Tab",
    //         Sp: "GSK BANGLADESH LTD",
    //         MRP: 255,
    //         Ds: 0,
    //         Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //       {
    //         Id: "7486379c-bcbb-417f-9907-000d13ab55cc",
    //         Nm: "CISPLATIN HEXAL ",
    //         GN: "DURCHSTECHFLASCHE IM ONCOSAFE ",
    //         St: "10 mg",
    //         Ct: "Injection",
    //         Sp: "NOVARTIS (BANGLADESH) LTD.",
    //         MRP: 419,
    //         Ds: 0,
    //         Pt: "aef955ba-a5f0-4f2f-8516-85aa03073f7dinjection (1).jpg",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //       {
    //         Id: "14496621-fa26-416e-9e62-000f7aae20fd",
    //         Nm: "ACTIKID MAGIC BEANS",
    //         GN: "VITAMIN C",
    //         St: ".",
    //         Ct: "Tab",
    //         Sp: "CATALYST HEALTH CARE",
    //         MRP: 950,
    //         Ds: 0,
    //         Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //       {
    //         Id: "668f1e62-a58e-43dd-9ec0-0013dbb70d42",
    //         Nm: "LACTOGIN",
    //         GN: "IMPROVE LACTATION",
    //         St: ".",
    //         Ct: "Cap",
    //         Sp: "MIX MEDICAL",
    //         MRP: 25,
    //         Ds: 0,
    //         Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
    //         Tp: "0",
    //         Stk: 60,
    //       },
    //       {
    //         Id: "d2605b95-b067-4170-a624-001c1f21f194",
    //         Nm: "ANXIO",
    //         GN: "BROMAZEPAM",
    //         St: "3 MG",
    //         Ct: "Tab",
    //         Sp: "UNIMED\u0026UNIHEALTH MFG.LTD",
    //         MRP: 4.5,
    //         Ds: 0,
    //         Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
    //         Tp: "0",
    //         Stk: 20,
    //       },
    //       {
    //         Id: "02defa41-158b-4d2d-90bd-0024c0d8b226",
    //         Nm: "HIMALAYA ANTI-WRINKLE",
    //         GN: "BEAUTY CREAM",
    //         St: "50 GM",
    //         Ct: "CREAM (TOILETIES)",
    //         Sp: "RIGS MARKETING",
    //         MRP: 450,
    //         Ds: 0,
    //         Pt: "",
    //         Tp: "0",
    //         Stk: 3,
    //       },
    //       {
    //         Id: "14bec93c-1cc1-44db-9c84-0024e74118f8",
    //         Nm: "FULSPEC",
    //         GN: "MEROPENEM",
    //         St: "1 G",
    //         Ct: "Injection IV",
    //         Sp: "ACME LABORATORIES LTD.",
    //         MRP: 1208.15,
    //         Ds: 0,
    //         Pt: "5b84c53a-e20b-4fea-b862-4a7a11e98ae3injection (1).jpg",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //       {
    //         Id: "bfad512d-3cb1-4f67-b65c-0028485da9df",
    //         Nm: "ONRIVA PLUS BEXICAP",
    //         GN: "Glycopyrronium,Glicopironio",
    //         St: "50 GM",
    //         Ct: "Cap",
    //         Sp: "BEXIMCO CONSUMER LTD",
    //         MRP: 2100,
    //         Ds: 0,
    //         Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
    //         Tp: "0",
    //         Stk: 1,
    //       },
    //       {
    //         Id: "f317f99e-603d-44f5-995e-002c82ca9f45",
    //         Nm: "MILAM",
    //         GN: "MIDAZOLAM",
    //         St: "15MG",
    //         Ct: "Injection IM/IV",
    //         Sp: "TRANSCOM DISTRIBUTION COMPANY LTD(SK+F)",
    //         MRP: 120,
    //         Ds: 0,
    //         Pt: "8875663c-91cb-47c5-ac2a-84972a64173finjection (1).jpg",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //       {
    //         Id: "7c159a2d-ed4a-483f-96a9-003111c84f06",
    //         Nm: "IGLOO STRAWBERRY CHEESECAKE",
    //         GN: "ICE CREAM",
    //         St: ".",
    //         Ct: "Toiletries",
    //         Sp: "IGLOO ICE CREAM",
    //         MRP: 50,
    //         Ds: 0,
    //         Pt: "",
    //         Tp: "0",
    //         Stk: 0,
    //       },
    //     ],
    //   },
    // ],
    // TopSlider: [
    //   { Pt: "a6d548ad-a146-4e34-b18e-3801e83bd19a.jpg", Ur: "" },
    //   { Pt: "baacf82e-aad7-435d-b9c8-f02719d815cf.jpg", Ur: "" },
    //   { Pt: "36db1b35-649a-41d8-a115-42cc61b9dc49.jpg", Ur: "" },
    //   { Pt: "f9aca78d-f570-47b0-bc58-d3885229cfe8.PNG", Ur: "" },
    // ],
    // BottomSlider: [{ Pt: "8cd72c34-6a43-4a19-b696-8800a832eb36.PNG", Ur: "" }],

    MainCategory:[
      {
        index:0,
        name:'Cosmetics'
      },
      {
        index:1,
        name:'Jewellery'
      },
      {
        index:2,
        name:'Baby Product'
      }
    ],
    
    HeaderData:{
      Headerlogo:{
        id:1,
        img:"/contents/assets/images/sp.jpeg"
      }

    },
    BottomAdress:{
      address:"Genetic Plaza, Shop -222, Dhaka ",
      mobile:"01780390222",
      email:"shoppersperk16@gmail.com ",
      img:"/contents/assets/images/sp.jpeg",
      contact_header:"Please send your message below. We will get back to you at the earliest!"
    },


    BottomLinks:[
      {
        to:"/contact",
        text:"Contact Us"
      },
      {
        to:"/privacy",
        text:"Privacy Policy" 
      },
      {
        to:"/termscondition",
        text:"Terms & Conditions" 
      },
      {
        to:"/return",
        text:"Return Policy" 
      }

    ],
    BottomSocial:[
      {
        to:"/facebook",
        icon:faFacebookF
      },
      {
        to:"/twitter",
        icon:faTwitter
      },
      {
        to:"/youtube",
        icon:faYoutube
      },
      {
        to:"/instagram",
        icon:faInstagram
      }
    ],
    BottomPayments:[
      {
        img:"/contents/assets/images/card4.png"
      },
      {
        img:"/contents/assets/images/card6.png"
      }
    ],
    BottomShipping:
      {
        img:"/contents/assets/images/shipping.png"
      },
    BottomCopyRight:{
        text:"www.iqrasys.com",
        mobile:"01778-772327"
      },
    BottomParkContent:[
      {
        h6:"Free Shipping.",
        text:"No one rejects, dislikes.",
        img:"/contents/assets/images/ff1.png"
    },
    {
        h6:"Support.",
        text:"It has survived not only.",
        img:"/contents/assets/images/ff2.png"
    },
    {
        h6:"Online Payment.",
        text:"All the Lorem Ipsum on.",
        img:"/contents/assets/images/ff3.png"
    },
    {
        h6:"Fast Delivery.",
        text:"Many desktop page now.",
        img:"/contents/assets/images/ff4.png"
    }
    ],
    BannerParkItem:[
      {
        colorText:"Free ",
        Boldtext:"order & collect ",
        normalText:"and pick up in 30 mins from any Superdrug store*"
        
      },
      {
        colorText:"Free",
        Boldtext:"delivery when you spend £25 ",
        normalText:"or spend £15 for Health Beautycard members!"
        
      },
      {
        colorText:"Available in over 250 stores",
        Boldtext:"Rapid Same Day Delivery ",
        normalText:""
        
      }
    ],
    BannerNotice:{
      BoldText:"TODAY ONLY - Earn Triple points ",
      NormalText:"on everything with your Health & Beautycard**"
    },
    BannerImage:[
      {
        id:1,
        image:"/contents/assets/images/Banner111.jpg",
        to:"/product/668f1e62-a58e-43dd-9ec0-0013dbb70d42c"
      },
      {
        id:2,
        image:"contents/assets/images/banner222.jpg",
        to:"/product/7c159a2d-ed4a-483f-96a9-003111c84f06c"
      },
      {
        id:3,
        image:"contents/assets/images/banner3.jpg",
        to:"/brands/5"
      }
    ],
    categoryProducts: [
          {
            Id: "8edcd73d-f733-4552-a870-0002a314f1edc",
            Nm: "ELTROXIN",
            GN: "LEVOTHYROXINE SODIUM",
            St: "50 MCG",
            Ct: "Tab",
            Sp: "GSK BANGLADESH LTD",
            MRP: 255,
            Ds: 10,
            Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
            Tp: "0",
            Stk: 0,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:1,
            category_id:1,
            subCategory_id:1,
            subCategory_item_id:1,
            offer_status:false,
            FestivalCategory_id:null,
            created_at:(new Date().getDate()+10)
          },
          {
            Id: "7486379c-bcbb-417f-9907-000d13ab55ccc",
            Nm: "CISPLATIN HEXAL ",
            GN: "DURCHSTECHFLASCHE IM ONCOSAFE ",
            St: "10 mg",
            Ct: "Injection",
            Sp: "NOVARTIS (BANGLADESH) LTD.",
            MRP: 419,
            Ds: 15,
            Pt: "aef955ba-a5f0-4f2f-8516-85aa03073f7dinjection (1).jpg",
            Tp: "0",
            Stk: 0,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:1,
            category_id:2,
            subCategory_id:1,
            subCategory_item_id:2,
            offer_status:true,
            FestivalCategory_id:null,
            created_at:(new Date().getDate()+11)
          },
          {
            Id: "14496621-fa26-416e-9e62-000f7aae20fdc",
            Nm: "ACTIKID MAGIC BEANS",
            GN: "VITAMIN C",
            St: ".",
            Ct: "Tab",
            Sp: "CATALYST HEALTH CARE",
            MRP: 950,
            Ds: 0,
            Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
            Tp: "0",
            Stk: 0,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:1,
            category_id:2,
            subCategory_id:1,
            subCategory_item_id:3,
            offer_status:false,
            FestivalCategory_id:null,
            created_at:(new Date().getDate()-7)
          },
          {
            Id: "668f1e62-a58e-43dd-9ec0-0013dbb70d42c",
            Nm: "LACTOGIN",
            GN: "IMPROVE LACTATION",
            St: ".",
            Ct: "Cap",
            Sp: "MIX MEDICAL",
            MRP: 25,
            Ds: 20,
            Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
            Tp: "0",
            Stk: 60,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:2,
            category_id:1,
            subCategory_id:1,
            subCategory_item_id:4,
            offer_status:true,
            FestivalCategory_id:3,
            created_at:(new Date().getDate()-7)
          },
          {
            Id: "d2605b95-b067-4170-a624-001c1f21f194c",
            Nm: "ANXIO",
            GN: "BROMAZEPAM",
            St: "3 MG",
            Ct: "Tab",
            Sp: "UNIMED\u0026UNIHEALTH MFG.LTD",
            MRP: 4.5,
            Ds: 10,
            Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
            Tp: "0",
            Stk: 20,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:3,
            category_id:1,
            subCategory_id:1,
            subCategory_item_id:5,
            offer_status:false,
            FestivalCategory_id:null,
            created_at:(new Date().getDate()-7)
          },
          {
            Id: "02defa41-158b-4d2d-90bd-0024c0d8b226c",
            Nm: "HIMALAYA ANTI-WRINKLE",
            GN: "BEAUTY CREAM",
            St: "50 GM",
            Ct: "CREAM (TOILETIES)",
            Sp: "RIGS MARKETING",
            MRP: 450,
            Ds: 0,
            Pt: "",
            Tp: "0",
            Stk: 3,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:4,
            category_id:1,
            subCategory_id:1,
            subCategory_item_id:4,
            offer_status:true,
            FestivalCategory_id:null,
            created_at:(new Date().getDate()-7)
          },
          {
            Id: "14bec93c-1cc1-44db-9c84-0024e74118f8c",
            Nm: "FULSPEC",
            GN: "MEROPENEM",
            St: "1 G",
            Ct: "Injection IV",
            Sp: "ACME LABORATORIES LTD.",
            MRP: 1208.15,
            Ds: 25,
            Pt: "5b84c53a-e20b-4fea-b862-4a7a11e98ae3injection (1).jpg",
            Tp: "0",
            Stk: 0,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:5,
            category_id:1,
            subCategory_id:3,
            subCategory_item_id:1,
            offer_status:false,
            FestivalCategory_id:null,
            created_at:(new Date().getDate()-7)
          },
          {
            Id: "bfad512d-3cb1-4f67-b65c-0028485da9dfc",
            Nm: "ONRIVA PLUS BEXICAP",
            GN: "Glycopyrronium,Glicopironio",
            St: "50 GM",
            Ct: "Cap",
            Sp: "BEXIMCO CONSUMER LTD",
            MRP: 2100,
            Ds: 15,
            Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
            Tp: "0",
            Stk: 1,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:6,
            category_id:2,
            subCategory_id:5,
            subCategory_item_id:4,
            offer_status:true,
            FestivalCategory_id:3,
            created_at:(new Date().getDate())
          },
          {
            Id: "f317f99e-603d-44f5-995e-002c82ca9f45c",
            Nm: "MILAM",
            GN: "MIDAZOLAM",
            St: "15MG",
            Ct: "Injection IM/IV",
            Sp: "TRANSCOM DISTRIBUTION COMPANY LTD(SK+F)",
            MRP: 120,
            Ds: 35,
            Pt: "8875663c-91cb-47c5-ac2a-84972a64173finjection (1).jpg",
            Tp: "0",
            Stk: 0,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:7,
            category_id:2,
            subCategory_id:3,
            subCategory_item_id:2,
            offer_status:false,
            FestivalCategory_id:1,
            created_at:(new Date().getDate())
          },
          {
            Id: "7c159a2d-ed4a-483f-96a9-003111c84f06c",
            Nm: "IGLOO STRAWBERRY CHEESECAKE",
            GN: "ICE CREAM",
            St: ".",
            Ct: "Toiletries",
            Sp: "IGLOO ICE CREAM",
            MRP: 50,
            Ds: 0,
            Pt: "",
            Tp: "0",
            Stk: 0,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:8,
            category_id:2,
            subCategory_id:4,
            subCategory_item_id:5,
            offer_status:true,
            FestivalCategory_id:null,
            created_at:(new Date().getDate())
          },
          {
            Id: "8edcd73d-f733-4552-a870-0002a314f1ed",
            Nm: "ELTROXIN",
            GN: "LEVOTHYROXINE SODIUM",
            St: "50 MCG",
            Ct: "Tab",
            Sp: "GSK BANGLADESH LTD",
            MRP: 255,
            Ds: 25,
            Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
            Tp: "0",
            Stk: 0,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:2,
            category_id:1,
            subCategory_id:2,
            subCategory_item_id:3,
            offer_status:false,
            FestivalCategory_id:3,
            created_at:(new Date().getDate())
          },
          {
            Id: "7486379c-bcbb-417f-9907-000d13ab55cc",
            Nm: "CISPLATIN HEXAL ",
            GN: "DURCHSTECHFLASCHE IM ONCOSAFE ",
            St: "10 mg",
            Ct: "Injection",
            Sp: "NOVARTIS (BANGLADESH) LTD.",
            MRP: 419,
            Ds: 50,
            Pt: "aef955ba-a5f0-4f2f-8516-85aa03073f7dinjection (1).jpg",
            Tp: "0",
            Stk: 0,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:14,
            category_id:2,
            subCategory_id:1,
            subCategory_item_id:3,
            offer_status:true,
            FestivalCategory_id:1,
            created_at:(new Date().getDate())
          },
          {
            Id: "14496621-fa26-416e-9e62-000f7aae20fd",
            Nm: "ACTIKID MAGIC BEANS",
            GN: "VITAMIN C",
            St: ".",
            Ct: "Tab",
            Sp: "CATALYST HEALTH CARE",
            MRP: 950,
            Ds: 35,
            Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
            Tp: "0",
            Stk: 0,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:15,
            category_id:1,
            subCategory_id:3,
            subCategory_item_id:4,
            offer_status:false,
            FestivalCategory_id:2,
            created_at:(new Date().getDate())
          },
          {
            Id: "668f1e62-a58e-43dd-9ec0-0013dbb70d42",
            Nm: "LACTOGIN",
            GN: "IMPROVE LACTATION",
            St: ".",
            Ct: "Cap",
            Sp: "MIX MEDICAL",
            MRP: 25,
            Ds: 20,
            Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
            Tp: "0",
            Stk: 60,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:16,
            category_id:2,
            subCategory_id:3,
            subCategory_item_id:5,
            offer_status:true,
            FestivalCategory_id:3,
            created_at:(new Date().getDate())
          },
          {
            Id: "d2605b95-b067-4170-a624-001c1f21f194",
            Nm: "ANXIO",
            GN: "BROMAZEPAM",
            St: "3 MG",
            Ct: "Tab",
            Sp: "UNIMED\u0026UNIHEALTH MFG.LTD",
            MRP: 4.5,
            Ds: 10,
            Pt: "d7b6b788-671e-4d5c-a935-e01f95c54b77tablet (1).jpg",
            Tp: "0",
            Stk: 20,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:1,
            category_id:1,
            subCategory_id:3,
            subCategory_item_id:4,
            offer_status:false,
            FestivalCategory_id:null,
            created_at:(new Date().getDate())
          },
          {
            Id: "02defa41-158b-4d2d-90bd-0024c0d8b226",
            Nm: "beauty Cream",
            GN: "BEAUTY CREAM",
            St: "50 GM",
            Ct: "CREAM (TOILETIES)",
            Sp: "RIGS MARKETING",
            MRP: 450,
            Ds: 0,
            Pt: "",
            Tp: "0",
            Stk: 3,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:1,
            category_id:2,
            subCategory_id:3,
            subCategory_item_id:4,
            offer_status:true,
            FestivalCategory_id:1,
            created_at:(new Date().getDate())
          },
          {
            Id: "14bec93c-1cc1-44db-9c84-0024e74118f8",
            Nm: "FULSPEC",
            GN: "MEROPENEM",
            St: "1 G",
            Ct: "Injection IV",
            Sp: "ACME LABORATORIES LTD.",
            MRP: 1208.15,
            Ds: 0,
            Pt: "5b84c53a-e20b-4fea-b862-4a7a11e98ae3injection (1).jpg",
            Tp: "0",
            Stk: 0,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:1,
            category_id:2,
            subCategory_id:3,
            subCategory_item_id:5,
            offer_status:false,
            FestivalCategory_id:2,
            created_at:(new Date().getDate())
          },
          {
            Id: "bfad512d-3cb1-4f67-b65c-0028485da9df",
            Nm: "ONRIVA PLUS BEXICAP",
            GN: "Glycopyrronium,Glicopironio",
            St: "50 GM",
            Ct: "Cap",
            Sp: "BEXIMCO CONSUMER LTD",
            MRP: 2100,
            Ds: 15,
            Pt: "1d8cfe83-f254-4289-81c0-d54ea15f597acapsule (2).jpg",
            Tp: "0",
            Stk: 1,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:4,
            category_id:1,
            subCategory_id:3,
            subCategory_item_id:4,
            offer_status:true,
            FestivalCategory_id:3,
            created_at:(new Date().getDate())
          },
          {
            Id: "f317f99e-603d-44f5-995e-002c82ca9f45",
            Nm: "MILAM",
            GN: "MIDAZOLAM",
            St: "15MG",
            Ct: "Injection IM/IV",
            Sp: "TRANSCOM DISTRIBUTION COMPANY LTD(SK+F)",
            MRP: 120,
            Ds: 10,
            Pt: "8875663c-91cb-47c5-ac2a-84972a64173finjection (1).jpg",
            Tp: "0",
            Stk: 0,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:13,
            category_id:2,
            subCategory_id:3,
            subCategory_item_id:4,
            offer_status:false,
            FestivalCategory_id:1,
            created_at:(new Date().getDate()-5)
          },
          {
            Id: "7c159a2d-ed4a-483f-96a9-003111c84f06",
            Nm: "IGLOO STRAWBERRY CHEESECAKE",
            GN: "ICE CREAM",
            St: ".",
            Ct: "Toiletries",
            Sp: "IGLOO ICE CREAM",
            MRP: 50,
            Ds: 0,
            Pt: "",
            Tp: "0",
            Stk: 0,
            image: "/contents/assets/images/Shreddy-Peach-Iced-Tea-Daily-Dose-812033.jpg",
            brand_id:12,
            category_id:2,
            subCategory_id:5,
            subCategory_item_id:1,
            offer_status:true,
            FestivalCategory_id:2,
            created_at:(new Date().getDate()-5)
          }
        ],
       
        BrandSuperDrug:[
          {
            image:"/contents/assets/images/partner4.png"
          },
          {
            image:"/contents/assets/images/partner2.png"
          },
          {
            image:"/contents/assets/images/partner3.png"
          },
          {
            image:"/contents/assets/images/partner4.png"
          },
          {
            image:"/contents/assets/images/partner2.png"
          },
          {
            image:"/contents/assets/images/partner3.png"
          }
        ],
        DiscountShopProduct:[
          {
            image:"/contents/assets/images/e1121_gs_skin_cerave_mob.jpg",
            text:"Shop Now"
          },
          {
            image:"/contents/assets/images/e1121_gs_skin_cerave_mob.jpg",
            text:"Shop Now"
          },
          {
            image:"/contents/assets/images/e1121_gs_skin_cerave_mob.jpg",
            text:"Shop Now"
          },
          {
            image:"/contents/assets/images/e1121_gs_skin_cerave_mob.jpg",
            text:"Shop Now"
          },
          {
            image:"/contents/assets/images/e1121_gs_skin_cerave_mob.jpg",
            text:"Shop Now"
          },
          {
            image:"/contents/assets/images/e1121_gs_skin_cerave_mob.jpg",
            text:"Shop Now"
          },
          {
            image:"/contents/assets/images/e1121_gs_skin_cerave_mob.jpg",
            text:"Shop Now"
          }
        ],

        ShopCategory:[
          {
            categoryId:1,
            categoryVisible:true,
            created_at:(new Date().getDate()+10),
            categoryName:"Make Up",
            image:"/contents/assets/images/halloween/n1.png",
            buttonText:"Shop All",
            subCategory:[
              {
                subCategory_id:1,
                subCategoryName:"Face MakeUp",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Foundation"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Concealer"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Colour Corrector"
                  },
                  {
                    subCategory_item:4,
                    itemName:"BB Cream"
                  },
                  {
                    subCategory_item:5,
                    itemName:"CC Cream"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Primers"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Powders"
                  },
                  {
                    subCategory_item:8,
                    itemName:"Setting Sprays"
                  },
                  {
                    subCategory_item:9,
                    itemName:"Bronzer"
                  },
                  {
                    subCategory_item:10,
                    itemName:"Contour"
                  },
                  {
                    subCategory_item:11,
                    itemName:"Highlighter"
                  },
                  {
                    subCategory_item:12,
                    itemName:"Blusher"
                  },
                  {
                    subCategory_item:13,
                    itemName:"Face Makeup Brushes"
                  }
                ]
              },
              { 
                subCategory_id:2,
                subCategoryName:"Lips",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Lip Glosses"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Lipstick"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Lip Plumpers"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Lip Balm"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Lip Scrub"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Lip Liners"
                  }
                ]
              },
              { 
                subCategory_id:3,
                subCategoryName:"Eye Make Up",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Mascara"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyeliner"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Eye Shadow Palettes"
                  },
                  {
                    subCategory_item:4,
                    itemName:"False Eyelashes"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Eyelash Glue"
                  }
                ]
              },
              { 
                subCategory_id:4,
                subCategoryName:"Eyebrows",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Eyebrow Pencils"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyebrow Gel"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Eyebrow Pomade"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Brow Palettes"
                  }
                ]
              },
              { 
                subCategory_id:5,
                subCategoryName:"Brushes",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Makeup Brush"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyebrow Brush"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Face Brush"
                  }
                ]
              },
              { 
                subCategory_id:6, 
                subCategoryName:"Nails",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Nail Polish"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Gel Nail Polish"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Base Top Coats"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Fake Nails"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Nail Care"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Nail Tools"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Nail Polish Remover"
                  }
                ]
              }
            ]
           },
           {
            categoryId:2,
            categoryVisible:true,
            created_at:(new Date().getDate()+7),
            image:"/contents/assets/images/halloween/n1.png",
            categoryName:"Skin",
            buttonText:"Shop All",
            subCategory:[
              { 
                subCategory_id:1, 
                subCategoryName:"Skin Face MakeUp",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Foundation"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Concealer"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Colour Corrector"
                  },
                  {
                    subCategory_item:4,
                    itemName:"BB Cream"
                  },
                  {
                    subCategory_item:5,
                    itemName:"CC Cream"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Primers"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Powders"
                  },
                  {
                    subCategory_item:8,
                    itemName:"Setting Sprays"
                  },
                  {
                    subCategory_item:9,
                    itemName:"Bronzer"
                  },
                  {
                    subCategory_item:10,
                    itemName:"Contour"
                  },
                  {
                    subCategory_item:11,
                    itemName:"Highlighter"
                  },
                  {
                    subCategory_item:12,
                    itemName:"Blusher"
                  },
                  {
                    subCategory_item:13,
                    itemName:"Face Makeup Brushes"
                  }
                ]
              },
              { 
                subCategory_id:2,
                subCategoryName:"Skin Lips",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Lip Glosses"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Lipstick"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Lip Plumpers"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Lip Balm"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Lip Scrub"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Lip Liners"
                  }
                ]
              },
              { 
                subCategory_id:3,
                subCategoryName:"Skin Eye Make Up",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Mascara"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyeliner"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Eye Shadow Palettes"
                  },
                  {
                    subCategory_item:4,
                    itemName:"False Eyelashes"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Eyelash Glue"
                  }
                ]
              },
              { 
                subCategory_id:4,
                subCategoryName:"Eyebrows",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Eyebrow Pencils"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyebrow Gel"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Eyebrow Pomade"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Brow Palettes"
                  }
                ]
              },
              { 
                subCategory_id:5,
                subCategoryName:"Brushes",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Makeup Brush"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyebrow Brush"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Face Brush"
                  }
                ]
              },
              { 
                subCategory_id:6, 
                subCategoryName:"Nails",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Nail Polish"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Gel Nail Polish"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Base Top Coats"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Fake Nails"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Nail Care"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Nail Tools"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Nail Polish Remover"
                  }
                ]
              }
            ]
           },
           {
            categoryId:3,
            categoryVisible:true,
            created_at:(new Date().getDate()+7),
            image:"/contents/assets/images/halloween/n1.png",
            categoryName:"Hair",
            buttonText:"Shop All",
            subCategory:[
              { 
                subCategory_id:1, 
                subCategoryName:"Skin Face MakeUp",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Foundation"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Concealer"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Colour Corrector"
                  },
                  {
                    subCategory_item:4,
                    itemName:"BB Cream"
                  },
                  {
                    subCategory_item:5,
                    itemName:"CC Cream"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Primers"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Powders"
                  },
                  {
                    subCategory_item:8,
                    itemName:"Setting Sprays"
                  },
                  {
                    subCategory_item:9,
                    itemName:"Bronzer"
                  },
                  {
                    subCategory_item:10,
                    itemName:"Contour"
                  },
                  {
                    subCategory_item:11,
                    itemName:"Highlighter"
                  },
                  {
                    subCategory_item:12,
                    itemName:"Blusher"
                  },
                  {
                    subCategory_item:13,
                    itemName:"Face Makeup Brushes"
                  }
                ]
              },
              { 
                subCategory_id:2,
                subCategoryName:"Skin Lips",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Lip Glosses"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Lipstick"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Lip Plumpers"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Lip Balm"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Lip Scrub"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Lip Liners"
                  }
                ]
              },
              { 
                subCategory_id:3,
                subCategoryName:"Skin Eye Make Up",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Mascara"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyeliner"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Eye Shadow Palettes"
                  },
                  {
                    subCategory_item:4,
                    itemName:"False Eyelashes"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Eyelash Glue"
                  }
                ]
              },
              { 
                subCategory_id:4,
                subCategoryName:"Eyebrows",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Eyebrow Pencils"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyebrow Gel"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Eyebrow Pomade"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Brow Palettes"
                  }
                ]
              },
              { 
                subCategory_id:5,
                subCategoryName:"Brushes",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Makeup Brush"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyebrow Brush"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Face Brush"
                  }
                ]
              },
              { 
                subCategory_id:6, 
                subCategoryName:"Nails",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Nail Polish"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Gel Nail Polish"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Base Top Coats"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Fake Nails"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Nail Care"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Nail Tools"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Nail Polish Remover"
                  }
                ]
              }
            ]
           },
           {
            categoryId:4,
            categoryVisible:true,
            created_at:(new Date().getDate()+7),
            image:"/contents/assets/images/halloween/n1.png",
            categoryName:"Perfume",
            buttonText:"Shop All",
            subCategory:[
              { 
                subCategory_id:1, 
                subCategoryName:"Skin Face MakeUp",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Foundation"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Concealer"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Colour Corrector"
                  },
                  {
                    subCategory_item:4,
                    itemName:"BB Cream"
                  },
                  {
                    subCategory_item:5,
                    itemName:"CC Cream"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Primers"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Powders"
                  },
                  {
                    subCategory_item:8,
                    itemName:"Setting Sprays"
                  },
                  {
                    subCategory_item:9,
                    itemName:"Bronzer"
                  },
                  {
                    subCategory_item:10,
                    itemName:"Contour"
                  },
                  {
                    subCategory_item:11,
                    itemName:"Highlighter"
                  },
                  {
                    subCategory_item:12,
                    itemName:"Blusher"
                  },
                  {
                    subCategory_item:13,
                    itemName:"Face Makeup Brushes"
                  }
                ]
              },
              { 
                subCategory_id:2,
                subCategoryName:"Skin Lips",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Lip Glosses"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Lipstick"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Lip Plumpers"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Lip Balm"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Lip Scrub"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Lip Liners"
                  }
                ]
              },
              { 
                subCategory_id:3,
                subCategoryName:"Skin Eye Make Up",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Mascara"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyeliner"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Eye Shadow Palettes"
                  },
                  {
                    subCategory_item:4,
                    itemName:"False Eyelashes"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Eyelash Glue"
                  }
                ]
              },
              { 
                subCategory_id:4,
                subCategoryName:"Eyebrows",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Eyebrow Pencils"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyebrow Gel"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Eyebrow Pomade"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Brow Palettes"
                  }
                ]
              },
              { 
                subCategory_id:5,
                subCategoryName:"Brushes",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Makeup Brush"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyebrow Brush"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Face Brush"
                  }
                ]
              },
              { 
                subCategory_id:6, 
                subCategoryName:"Nails",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Nail Polish"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Gel Nail Polish"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Base Top Coats"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Fake Nails"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Nail Care"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Nail Tools"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Nail Polish Remover"
                  }
                ]
              }
            ]
           },
           {
            categoryId:5,
            categoryVisible:true,
            created_at:(new Date().getDate()+7),
            image:"/contents/assets/images/halloween/n1.png",
            categoryName:"Baby & Child",
            buttonText:"Shop All",
            subCategory:[
              { 
                subCategory_id:1, 
                subCategoryName:"Skin Face MakeUp",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Foundation"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Concealer"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Colour Corrector"
                  },
                  {
                    subCategory_item:4,
                    itemName:"BB Cream"
                  },
                  {
                    subCategory_item:5,
                    itemName:"CC Cream"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Primers"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Powders"
                  },
                  {
                    subCategory_item:8,
                    itemName:"Setting Sprays"
                  },
                  {
                    subCategory_item:9,
                    itemName:"Bronzer"
                  },
                  {
                    subCategory_item:10,
                    itemName:"Contour"
                  },
                  {
                    subCategory_item:11,
                    itemName:"Highlighter"
                  },
                  {
                    subCategory_item:12,
                    itemName:"Blusher"
                  },
                  {
                    subCategory_item:13,
                    itemName:"Face Makeup Brushes"
                  }
                ]
              },
              { 
                subCategory_id:2,
                subCategoryName:"Skin Lips",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Lip Glosses"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Lipstick"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Lip Plumpers"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Lip Balm"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Lip Scrub"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Lip Liners"
                  }
                ]
              },
              { 
                subCategory_id:3,
                subCategoryName:"Skin Eye Make Up",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Mascara"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyeliner"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Eye Shadow Palettes"
                  },
                  {
                    subCategory_item:4,
                    itemName:"False Eyelashes"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Eyelash Glue"
                  }
                ]
              },
              { 
                subCategory_id:4,
                subCategoryName:"Eyebrows",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Eyebrow Pencils"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyebrow Gel"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Eyebrow Pomade"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Brow Palettes"
                  }
                ]
              },
              { 
                subCategory_id:5,
                subCategoryName:"Brushes",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Makeup Brush"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyebrow Brush"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Face Brush"
                  }
                ]
              },
              { 
                subCategory_id:6, 
                subCategoryName:"Nails",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Nail Polish"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Gel Nail Polish"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Base Top Coats"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Fake Nails"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Nail Care"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Nail Tools"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Nail Polish Remover"
                  }
                ]
              }
            ]
           },
           {
            categoryId:6,
            categoryVisible:true,
            created_at:(new Date().getDate()+7),
            image:"/contents/assets/images/halloween/n1.png",
            categoryName:"Acceesories & Lifestyle",
            buttonText:"Shop All",
            subCategory:[
              { 
                subCategory_id:1, 
                subCategoryName:"Skin Face MakeUp",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Foundation"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Concealer"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Colour Corrector"
                  },
                  {
                    subCategory_item:4,
                    itemName:"BB Cream"
                  },
                  {
                    subCategory_item:5,
                    itemName:"CC Cream"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Primers"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Powders"
                  },
                  {
                    subCategory_item:8,
                    itemName:"Setting Sprays"
                  },
                  {
                    subCategory_item:9,
                    itemName:"Bronzer"
                  },
                  {
                    subCategory_item:10,
                    itemName:"Contour"
                  },
                  {
                    subCategory_item:11,
                    itemName:"Highlighter"
                  },
                  {
                    subCategory_item:12,
                    itemName:"Blusher"
                  },
                  {
                    subCategory_item:13,
                    itemName:"Face Makeup Brushes"
                  }
                ]
              },
              { 
                subCategory_id:2,
                subCategoryName:"Skin Lips",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Lip Glosses"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Lipstick"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Lip Plumpers"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Lip Balm"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Lip Scrub"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Lip Liners"
                  }
                ]
              },
              { 
                subCategory_id:3,
                subCategoryName:"Skin Eye Make Up",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Mascara"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyeliner"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Eye Shadow Palettes"
                  },
                  {
                    subCategory_item:4,
                    itemName:"False Eyelashes"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Eyelash Glue"
                  }
                ]
              },
              { 
                subCategory_id:4,
                subCategoryName:"Eyebrows",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Eyebrow Pencils"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyebrow Gel"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Eyebrow Pomade"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Brow Palettes"
                  }
                ]
              },
              { 
                subCategory_id:5,
                subCategoryName:"Brushes",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Makeup Brush"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyebrow Brush"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Face Brush"
                  }
                ]
              },
              { 
                subCategory_id:6, 
                subCategoryName:"Nails",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Nail Polish"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Gel Nail Polish"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Base Top Coats"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Fake Nails"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Nail Care"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Nail Tools"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Nail Polish Remover"
                  }
                ]
              }
            ]
           },
           {
            categoryId:7,
            categoryVisible:true,
            created_at:(new Date().getDate()+7),
            image:"/contents/assets/images/halloween/n1.png",
            categoryName:"Health & Wealbeing",
            buttonText:"Shop All",
            subCategory:[
              { 
                subCategory_id:1, 
                subCategoryName:"Skin Face MakeUp",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Foundation"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Concealer"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Colour Corrector"
                  },
                  {
                    subCategory_item:4,
                    itemName:"BB Cream"
                  },
                  {
                    subCategory_item:5,
                    itemName:"CC Cream"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Primers"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Powders"
                  },
                  {
                    subCategory_item:8,
                    itemName:"Setting Sprays"
                  },
                  {
                    subCategory_item:9,
                    itemName:"Bronzer"
                  },
                  {
                    subCategory_item:10,
                    itemName:"Contour"
                  },
                  {
                    subCategory_item:11,
                    itemName:"Highlighter"
                  },
                  {
                    subCategory_item:12,
                    itemName:"Blusher"
                  },
                  {
                    subCategory_item:13,
                    itemName:"Face Makeup Brushes"
                  }
                ]
              },
              { 
                subCategory_id:2,
                subCategoryName:"Skin Lips",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Lip Glosses"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Lipstick"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Lip Plumpers"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Lip Balm"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Lip Scrub"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Lip Liners"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Lip"
                  },
                  {
                    subCategory_item:8,
                    itemName:"Liners"
                  },
                  {
                    subCategory_item:9,
                    itemName:"Lip Liners Bum"
                  },
                  {
                    subCategory_item:10,
                    itemName:"Lip Liners Gelly"
                  }
                ]
              },
              { 
                subCategory_id:3,
                subCategoryName:"Skin Eye Make Up",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Mascara"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyeliner"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Eye Shadow Palettes"
                  },
                  {
                    subCategory_item:4,
                    itemName:"False Eyelashes"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Eyelash Glue"
                  }
                ]
              },
              { 
                subCategory_id:4,
                subCategoryName:"Eyebrows",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Eyebrow Pencils"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyebrow Gel"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Eyebrow Pomade"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Brow Palettes"
                  }
                ]
              },
              { 
                subCategory_id:5,
                subCategoryName:"Brushes",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Makeup Brush"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Eyebrow Brush"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Face Brush"
                  }
                ]
              },
              { 
                subCategory_id:6, 
                subCategoryName:"Nails",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Nail Polish"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Gel Nail Polish"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Base Top Coats"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Fake Nails"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Nail Care"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Nail Tools"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Nail Polish Remover"
                  }
                ]
              },
              { 
                subCategory_id:7, 
                subCategoryName:"Lip Gels",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Nail Polish"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Gel Nail Polish"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Base Top Coats"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Fake Nails"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Nail Care"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Nail Tools"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Nail Polish Remover"
                  }
                ]
              },
              { 
                subCategory_id:8, 
                subCategoryName:"Nail Palish",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Nail Polish"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Gel Nail Polish"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Base Top Coats"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Fake Nails"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Nail Care"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Nail Tools"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Nail Polish Remover"
                  }
                ]
              },
              { 
                subCategory_id:9, 
                subCategoryName:"Nails Remover",
                subCategoryItem:[
                  {
                    subCategory_item:1,
                    itemName:"Nail Polish"
                  },
                  {
                    subCategory_item:2,
                    itemName:"Gel Nail Polish"
                  },
                  {
                    subCategory_item:3,
                    itemName:"Base Top Coats"
                  },
                  {
                    subCategory_item:4,
                    itemName:"Fake Nails"
                  },
                  {
                    subCategory_item:5,
                    itemName:"Nail Care"
                  },
                  {
                    subCategory_item:6,
                    itemName:"Nail Tools"
                  },
                  {
                    subCategory_item:7,
                    itemName:"Nail Polish Remover"
                  }
                ]
              }
            ]
           }
        ]
    
  };
  export default appData;
  