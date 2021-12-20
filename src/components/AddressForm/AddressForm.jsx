import InputControl from "../utilities/InputControl/InputControl";
import "./AddressForm.css";
import AddressList from "./AddressList";
import { Link } from "react-router-dom";
import { callBack, Checkout } from "../../Service/AppService";
import { useContext, useEffect, useState } from "react";
import SavingAddressTab from "./SavingAddressTab";
import { http } from "../../Service/httpService";
import { endpoints } from "../../lib/endpoints";
import Select from "../utilities/Select/Select";
import authContext from "../../Store/auth-context";

const AddressForm = ({ proceedOrder,selectedShippingInfo }) => {
  //From Address Saved
  const [phone, setphone] = useState('');
  const [phoneIsTouched, setphoneIsTouched] = useState(false)
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [nameIsTouched, setnameIsTouched] = useState(false)
  const [district, setdistrict] = useState([]);

  const [division, setdivision] = useState([]);
  const [area, setarea] = useState([]);
  const [address, setaddress] = useState("");
  const [addressIsTouched, setaddressIsTouched] = useState(false)
  const [checkBox, setcheckBox] = useState(false)

  const [addressSaved, setaddressSaved] = useState(false);
  const authCtx=useContext(authContext);
  const [addressButtonIndex, setaddressButtonIndex] = useState(0);

  const [divisionId, setdivisionId] = useState('')
  const [districtId, setdistrictId] = useState('')
  const [areaId, setareaId] = useState('')
  const [divisionIsTouched, setdivisionIsTouched] = useState(false)

  const [getAddressData,setgetAddressData] = useState([])
  const [activeValue, setactiveValue] = useState('')
  const savedAddressInfo=Checkout.SavingAddressTabData;
  const [activeButtonText, setactiveButtonText] = useState(savedAddressInfo[0].text);
  const getCheckedData=getAddressData.find(item=>item.IsDefault===true)
  // //delivary Charge System
  // const findDiscountCharge=district.find(item=>item.id===districtId);
  const [delivaryCharge, setdelivaryCharge] = useState('')

  //phone saved
  const phoneChangeHandler = ({ target }) => {
    setphone(target.value.trim());
  };
  const phoneTouched=()=>{
    setphoneIsTouched(true)
  }

  // Email Set
  const emailChangeHandler = ({ target }) => {
    setemail(target.value.trim());
  };
  //Name Set
  const nameChangeHandler = ({ target }) => {
    setname(target.value);
  };
  const nameTouched=()=>{
    setnameIsTouched(true)
  }
  //Address saved
  const addressChangeHandler = ({ target }) => {
    setaddress(target.value);
  };
  const addressTouched=()=>{
    setaddressIsTouched(true)
  }
  const checkBoxChangeHandler=()=>{
    setcheckBox(prevState => !prevState)
  }
  const checkBoxStatteChangeHandler=()=>{
    setcheckBox(false)
  }
  const divisionTocuhedHandler=()=>{
    setdivisionIsTouched(true)
  }
  console.log({activeButtonText})
  //Save Button Handler
  const saveHandler = () => {
      setaddressSaved(true);
      http.post({
        url:endpoints.createAddress,
        payload:{
          CustomerId:authCtx.user.id,
          DistrictId: districtId.id,
          IsDefault: checkBox,
          Name: name,
          ProvinceId: divisionId.id,
          Type: activeButtonText,
          UpazilaId: areaId.id,
          email: email,
          mobile: phone,
          Remarks: address,
        },
        before:()=>{
          console.log('submit adress Data')
        },
        successed:(data)=>{
          getAddress();
        },
        failed:()=>{
          console.log('failed');
        },
        always:()=>{
          console.log('request end')
        }
      })
  };

  // element[0].childNodes[0].classList.add('active')
  const activeButtonAddress = (index,item, event) => {
    setactiveButtonText(item.text);
    setaddressButtonIndex(index);
    var element = document.querySelectorAll(".address-btn-group");
    for (let i = 0; i < element[0].childNodes.length - 1; i++) {
      element[0].childNodes[i].classList.remove("active");
    }
    event.target.className += " active";
    setaddressSaved(false);
  };

  const getDivisions = () => {
    http.get({
      url: endpoints.division,
      before: () => {
        console.log("function started");
      },
      successed: (data) => {
        const transformedDistricts = [];

    data.Data[0].forEach(district => {
        transformedDistricts.push({
            id: district[1],
            name: district[0]
        });
    })
    setdivision(transformedDistricts);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {
        console.log("request end");
      },
    });
  };



  const getDistricts = (divisionId) => {
    http.post({
      url: endpoints.getDistricts,
      payload: {
        PageNumber: 1,
        PageSize: 1000,
        filter: [{ Operation: 0, field: "ProvinceId", value: divisionId }],
      },
      before: () => {
        console.log("Getting Districts");
      },
      successed: (data) => {
        const transformedDistricts = [];
        console.log('heyDatadata',data)

        data.Data[0].forEach(district => {
            transformedDistricts.push({
                id: district[1],
                name: district[0],
                charge: district[2]
            });
        })
        setdistrict(transformedDistricts);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {
        console.log("Got Districts");
      },
    });
  };


  const getAreas = (districtId) => {
    http.post({
      url: endpoints.getAreas,
      payload: {
        PageNumber: 1,
        PageSize: 1000,
        filter: [{ Operation: 0, field: "DistrictId", value: districtId }],
      },
      before: () => {
        console.log("Getting Areas");
      },
      successed: (data) => {
       
        const transformedDistricts = [];

        data.Data[0].forEach(area => {
            transformedDistricts.push({
                id: area[1],
                name: area[0],
                charge: area[2]
            });
        })
        setarea(transformedDistricts);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {
        console.log("Got Districts");
      },
    });
  };



  const divisionSelectHandler = (division) => {
    setdivisionId(division);
    getDistricts(division.id);
  };

  const districtSelectHandler=(district) =>{
    setdistrictId(district)
    getAreas(district.id)
  }
  
  const areaSelectHandler=(area)=>{
    setareaId(area)
  }

  useEffect(() => {
    getDivisions();
    getDistricts();
    getAreas();
  }, []);

  // useEffect(() => {
  //   const getCheckedData=getAddressData.find(item=>item.IsDefault===true)
  //   if(getCheckedData){
  //   setactiveButtonText(getCheckedData.Type)
  //   const activeTab=savedAddressInfo.find(item=>item.text===getCheckedData.Type);
  //   const activeTabIndex=activeTab.id-1;

  //   var element = document.querySelectorAll(".address-btn-group");
  //   for (let i = 0; i < element[0].childNodes.length - 1; i++) {
  //     element[0].childNodes[i].classList.remove("active");
  //   }
  //   element[0].childNodes[activeTabIndex].className +=" active";
  // }
  // else{
  //   setactiveButtonText(savedAddressInfo[0].text)
  // }

  // }, [getAddressData,savedAddressInfo])

  useEffect(() => {
    const activeInputValue=getAddressData.find(item=>item.Type==activeButtonText)
    console.log({activeInputValue})
    if(activeInputValue){
      setphone(activeInputValue.Mobile)
      setemail(activeInputValue.Email)
      setname(activeInputValue.Name)
      setaddress(activeInputValue.Remarks)
      setdivisionId({name:activeInputValue?.Province,id:activeInputValue?.ProvinceId})
      setdistrictId({name:activeInputValue?.District,id:activeInputValue?.DistrictId})
      setareaId({name:activeInputValue?.Upazila,id:activeInputValue?.UpazilaId})
    }else{
      setphone('')
      setemail('')
      setname('')
      setaddress('')
      setdivisionId({name:'',id:''})
      setdistrictId({name:'',id:''})
      setareaId({name:'',id:''})
    }
  }, [activeButtonText,getAddressData])




  const getAddress=()=>{
    http.post({
    url:endpoints.getAddress,
    payload:{
      PageNumber: 1,
      PageSize: 3,
      filter: [{
          field: "CustomerId",
          value: authCtx.user.id,
          "Operation": 0
      }]
    },
    before:()=>{
      console.log('get address started')
    },
    successed:(data)=>{
      setgetAddressData(data.Data);
    },
    failed:()=>{
      console.log('failed')
    },
    always:()=>{
      console.log('end function')
    }
  })
  } 
  useEffect(() => {
    getAddress();
  }, [])


  return (
    <>
      <div className="admin-all-detalics">
        <div className="add-left-content mb-16">
          <h3 className="t-uppercase t-14 mb-8">Your contact information</h3>

          <div className="form__control mb-16">
            <InputControl
              name={"name"}
              label={"Name"}
              required
              className="brick"
              value={name}
              error={(nameIsTouched && name.length===0) && "Name is required."}
              onChange={nameChangeHandler}
              onBlur={nameTouched}
            />
          </div>

          <div className="form__control mb-16">
            <InputControl
              name={"phone"}
              label={"Phone Number"}
              required
              className="brick"
              value={phone}
              error={(phoneIsTouched && phone.length===0) && "Phone is required."}
              onChange={phoneChangeHandler}
              onBlur={phoneTouched}
            />
          </div>

          <div className="form__control mb-16">
            <InputControl
              name={"email"}
              label={"Email"}
              required
              className="brick"
              value={email}
              onChange={emailChangeHandler}
            />
          </div>

          <div className="grid-3 mb-16 g-8">
            <Select
            label={'Select Region'}
            name={'division'}
            config={ {searchPath: "name", textPath : "name", keyPath : "id"} }
            onSelect={divisionSelectHandler}
            options={division}
            onBlur={divisionTocuhedHandler}
            selectedOption={divisionId}
            // error={ "Name is required."}
            />

          <Select 
                label={'Select City'}
                name={'district'}
                config={ {searchPath: "name", textPath : "name", keyPath : "id"} }
                onSelect={districtSelectHandler}
                options={district || []}
                previewText={'Select Region first'} 
                onBlur={()=>{}}
                selectedOption={districtId}
              />

            <Select 
                label={'Select Area'}
                name={'area'}
                config={ {searchPath: "name", textPath : "name", keyPath : "id"} }
                onSelect={areaSelectHandler}
                options={area || []}
                previewText={'Select City first'} 
                onBlur={()=>{}}
                selectedOption={areaId}
              />
          </div>

          <div className="form__control mb-16">
            <div className="form__control--text-area">
              <label htmlFor="address">Address</label>
              <textarea
                name="address"
                id="address"
                rows="1"
                className="brick"
                value={address}
                onChange={addressChangeHandler}
                onBlur={addressTouched}
              ></textarea>
              {
                (addressIsTouched && address.length===0) &&<div className="alert alert-error">Address is required.</div>
              }
             
            </div>
          </div>
          <div className={`address-btn-group align-start g-8`}>
            <SavingAddressTab activeButtonAddress={activeButtonAddress} />
            <div>
              <button
                className="brick fill secondary t-16 mb-8 save-btn"
                onClick={saveHandler}
              >
                Save Address
              </button>
              <div>
                {
                  (getCheckedData?.Type===activeButtonText) ?
                  <input type="checkbox" name="primaryCheck" id="primary-check" onClick={checkBoxStatteChangeHandler} checked/>:
                  <input type="checkbox" name="primaryCheck" id="primary-check" onClick={checkBoxChangeHandler} />
                }
                
                <label htmlFor="primary-check" className="t-bold ml-8">
                  Set as primary
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="add-right-content">
          <AddressList
            addressSaved={addressSaved}
            addressButtonIndex={addressButtonIndex}
            getAddressData={getAddressData}
            activeButtonText={activeButtonText}
            selectedShippingInfo={selectedShippingInfo}
          ></AddressList>
        </div>
      </div>
      {/* <div class="cart_navigation">
        <Link class="prev-btn" to="/">
          <i class="fa fa-angle-left check-ang-left" aria-hidden="true"></i>{" "}
          Continue shopping
        </Link>
        <a
          class="next-btn"
          href
          onClick={callBack(
            proceedOrder,
            phone,
            email,
            name,
            district,
            division,
            area
          )}
        >
          {" "}
          Proceed to order{" "}
          <i class="fa fa-angle-right check-ang-right" aria-hidden="true"></i>
        </a>
      </div> */}
    </>
  );
};

export default AddressForm;
