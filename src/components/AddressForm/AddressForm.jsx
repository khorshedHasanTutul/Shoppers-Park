import InputControl from "../utilities/InputControl/InputControl";
import "./AddressForm.css";
import AddressList from "./AddressList";
import { Link } from "react-router-dom";
import { callBack } from "../../Service/AppService";
import { useContext, useEffect, useState } from "react";
import SavingAddressTab from "./SavingAddressTab";
import { http } from "../../Service/httpService";
import { endpoints } from "../../lib/endpoints";
import Select from "../utilities/Select/Select";
import authContext from "../../Store/auth-context";

const AddressForm = ({ proceedOrder }) => {
  //Phone validation

  const [phoneTouched, setphoneTouched] = useState(false);
  const [phoneFormValidation, setPhoneFormValidation] = useState(false);
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [nameTouched, setnameTouched] = useState(false);
  const [nameValidated, setnameValidated] = useState(false);
  const [district, setdistrict] = useState([]);
  const [districtTouched, setdistrictTouched] = useState(false);
  const [districtValidity, setdistrictValidity] = useState(false);
  const [division, setdivision] = useState([]);
  const [divisionTouched, setdivisionTouched] = useState(false);
  const [divisionValidity, setdivisionValidity] = useState(false);
  const [area, setarea] = useState([]);
  const [areaTouched, setareaTouched] = useState(false);
  const [areaValidity, setareaValidity] = useState(false);
  const [address, setaddress] = useState("");
  const [addressSaved, setaddressSaved] = useState(false);
  const authCtx=useContext(authContext);
  const [addressButtonIndex, setaddressButtonIndex] = useState(0);
  const [activeButtonText, setactiveButtonText] = useState('Home');
  const [divisionId, setdivisionId] = useState('')
  const [districtId, setdistrictId] = useState('')
  const [areaId, setareaId] = useState('')
  const [getAddressData,setgetAddressData] = useState([])
  const activeInputValue=getAddressData.find(item=>item.Type==activeButtonText)||{}

  const phoneChangeHandler = ({ target }) => {
    setphone(target.value.trim());
  };
  
  var phoneLength = phone?.length !== 0;
  if (
    (phoneTouched && !phoneLength) ||
    (!phoneTouched && phoneFormValidation)
  ) {
    var phoneValidityMessage = "Phone number is required!";
  }

  if (phoneTouched && phone.length > 11) {
    phoneValidityMessage = "Number should be less than 11 charecter";
  }
  if (phoneTouched && phone.length > 0 && phone.length < 11) {
    phoneValidityMessage = "Number should be 11 charecter";
  }

  if (
    phoneTouched &&
    phone.length > 0 &&
    (phone[0] !== "0" || phone[1] !== "1")
  ) {
    phoneValidityMessage = "Phone number format is Invalid";
  }

  const phoneIsTouched = () => {
    setphoneTouched(true);
  };

  // Email Validation
  

  const emailChangeHandler = ({ target }) => {
    setemail(target.value.trim());
  };
  //Name Validity

  const nameChangeHandler = ({ target }) => {
    setname(target.value);
  };
  var nameLength = name?.length !== 0;

  const nameIsTouched = () => {
    setnameTouched(true);
  };
  if ((nameTouched && !nameLength) || (!nameTouched && nameValidated)) {
    var nameValidityMessage = "Name is required!";
  }

  //district validation


  const districtisTouched = () => {
    setdistrictTouched(true);
  };
  var districtLength = district.length !== 0;
  if (
    (districtTouched && !districtLength) ||
    (!districtTouched && districtValidity)
  )
    var districtValidityMessage = "District field is required";

  //Division validation


  const divisionisTouched = () => {
    setdivisionTouched(true);
  };
  var divisionLength = division.length !== 0;
  if (
    (divisionTouched && !divisionLength) ||
    (!divisionTouched && divisionValidity)
  )
    var divisionValidityMessage = "Division field is required";

  //Area validation



  const areaisTouched = () => {
    setareaTouched(true);
  };
  var areaLength = area.length !== 0;
  if ((areaTouched && !areaLength) || (!areaTouched && areaValidity))
    var areaValidityMessage = "Area field is required";

  //Adress

  const addressChangeHandler = ({ target }) => {
    setaddress(target.value);
  };

  //Saving Address State

  console.log('authId=>',authCtx.login)
  //Saving Address Button
  const saveHandler = () => {
    if(
    phoneTouched &&
    typeof phoneValidityMessage === "undefined" &&
    nameTouched &&
    typeof nameValidityMessage === "undefined" &&
    districtTouched &&
    typeof districtValidityMessage === "undefined" &&
    divisionTouched &&
    typeof divisionValidityMessage === "undefined" &&
    areaTouched &&
    typeof areaValidityMessage === "undefined")
    {
      setaddressSaved(true);
      http.post({
        url:endpoints.createAddress,
        payload:{
          CustomerId:'f33e9fba-e50b-4ba7-b296-f4f44a49ed2b',
          DistrictId: districtId,
          IsDefault: false,
          Name: name,
          ProvinceId: divisionId,
          Type: activeButtonText,
          UpazilaId: areaId,
          email: email,
          mobile: phone,
          Remarks: address,
        },
        before:()=>{
          console.log('submit adress Data')
        },
        successed:(data)=>{
          console.log(data);
          getAddress();
        },
        failed:()=>{
          console.log('failed');
        },
        always:()=>{
          console.log('request end')
        }
      })
    }
    else{
      alert("Form Validation Error");
    }
    
    setPhoneFormValidation(true);
    setnameValidated(true);
    setdistrictValidity(true);
    setdivisionValidity(true);
    setareaValidity(true);
  };
  
  //saving Address Button index State

  
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
    console.log(transformedDistricts)
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

  console.log('transformedDistricts=>>>>>',district)

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
    setdivisionId(division.id)
    getDistricts(division.id);
  };

  const districtSelectHandler=(district) =>{
    setdistrictId(district.id)
    getAreas(district.id)
  }
  
  const areaSelectHandler=(area)=>{
    setareaId(area.id)
  }

  useEffect(() => {
    getDivisions();
    getDistricts();
    getAreas();
  }, []);

  //getAddressList



  useEffect(() => {
    if(activeInputValue){
      setphone(activeInputValue.Mobile)
      setemail(activeInputValue.Email)
      setname(activeInputValue.Name)
      setaddress(activeInputValue.Remarks)
      // setphoneTouched(true)
      // setnameTouched(true)
      // setdivisionTouched(true)
      // setdistrictTouched(true)
      // setareaTouched(true)
    }
  }, [activeInputValue])

  const getAddress=()=>{
    http.post({
    url:endpoints.getAddress,
    payload:{
      PageNumber: 1,
      PageSize: 3,
      filter: [{
          field: "CustomerId",
          value: 'f33e9fba-e50b-4ba7-b296-f4f44a49ed2b',
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
    return () => {
    }
  }, [])


  return (
    <>
      <div className="admin-all-detalics">
        <div className="add-left-content mb-16">
          <h3 className="t-uppercase t-14 mb-8">Your contact information</h3>
          <div className="form__control mb-16">
            <InputControl
              name={"phone"}
              label={"Phone Number"}
              required
              className="brick"
              error={phoneValidityMessage}
              value={phone}
              onChange={phoneChangeHandler}
              onBlur={phoneIsTouched}
            />
          </div>
          <div className="form__control mb-16">
            <InputControl
              name={"email"}
              label={"Email"}
              required
              className="brick"
              // error={emailValidityMessage}
              value={email}
              onChange={emailChangeHandler}
              // onBlur={emailIsTouched}
            />
          </div>
          <div className="form__control mb-16">
            <InputControl
              name={"name"}
              label={"Name"}
              required
              className="brick"
              error={nameValidityMessage}
              value={name}
              onChange={nameChangeHandler}
              onBlur={nameIsTouched}
            />
          </div>
          <div className="grid-3 mb-16 g-8">
            <Select 
            label={'Division'}
            name={'division'}
            config={ {searchPath: "name", textPath : "name", keyPath : "id"} }
            onSelect={divisionSelectHandler}
            options={division}
            previewText={'select Division'} 
            error={divisionValidityMessage}
            onBlur={divisionisTouched}
            selectedOption={{name:activeInputValue.Province,id:activeInputValue.ProvinceId}}
            />

          <Select 
                label={'District'}
                name={'district'}
                config={ {searchPath: "name", textPath : "name", keyPath : "id"} }
                onSelect={districtSelectHandler}
                options={district || []}
                previewText={'select Division first'} 
                error={districtValidityMessage}
                onBlur={districtisTouched}
                selectedOption={{name:activeInputValue.District,id:activeInputValue.districtId}}
              />

            <Select 
                label={'Area'}
                name={'area'}
                config={ {searchPath: "name", textPath : "name", keyPath : "id"} }
                onSelect={areaSelectHandler}
                options={area || []}
                previewText={'select District first'} 
                error={areaValidityMessage}
                onBlur={areaisTouched}
                selectedOption={{name:activeInputValue.Upazila,id:activeInputValue.areaId}}
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
              ></textarea>
              <div className="alert alert-error"> </div>
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
                <input type="checkbox" name="primaryCheck" id="primary-check" />
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
          ></AddressList>
        </div>
      </div>
      <div class="cart_navigation">
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
      </div>
    </>
  );
};

export default AddressForm;
