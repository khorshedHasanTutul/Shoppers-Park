import InputControl from "../utilities/InputControl/InputControl";
import "./AddressForm.css";
import AddressList from "./AddressList";
import { Link } from "react-router-dom";
import { callBack } from "../../Service/AppService";
import { useState } from "react";
import SavingAddressTab from "./SavingAddressTab";

const AddressForm = ({proceedOrder}) => {

//Phone validation

  const [phoneTouched, setphoneTouched] = useState(false)
  const [phoneFormValidation, setPhoneFormValidation] = useState(false)
  const [phone, setphone] = useState('')

const phoneChangeHandler=({target})=>{
  setphone(target.value.trim())
}
var phoneLength=phone.length!==0;
if((phoneTouched && !phoneLength) || (!phoneTouched && phoneFormValidation)){
  var phoneValidityMessage='Phone number is required!';
}

if(phoneTouched&& phone.length>11){
  phoneValidityMessage='Number should be less than 11 charecter';
}
if(phoneTouched&& phone.length>0 &&  phone.length<11){
  phoneValidityMessage='Number should be 11 charecter';
}

if(phoneTouched && phone.length>0 &&  (phone[0]!=='0' || phone[1]!=='1')){
  phoneValidityMessage='Phone number format is Invalid';
}

const phoneIsTouched=()=>{
  setphoneTouched(true);
}


//Email Validation
const [email, setemail] = useState('')
const [emailisTouched, setemailTouched] = useState(false)
const [emailIsValidated, setemailIsValidated] = useState(false)

const emailChangeHandler=({target})=>{
  setemail(target.value.trim())
}
var emailValidated=email.match(
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
if(emailValidated!==null){
  emailValidated=true;
}
const emailIsTouched=()=>{
  setemailTouched(true)
}
var emailLength=email.length!==0;
if((emailisTouched && !emailLength)|| (!emailisTouched && emailIsValidated)){
  var emailValidityMessage='Email field is required!'
}
if(emailisTouched && email.length>0 && emailValidated!==true){
  emailValidityMessage='Email Format is Invalid!'
}

//Name Validity
const [name, setname] = useState('')
const [nameTouched, setnameTouched] = useState(false)
const [nameValidated, setnameValidated] = useState(false)
const nameChangeHandler=({target})=>{
  setname(target.value.trim())
}
var nameLength=name.length!==0;

const nameIsTouched=()=>{
  setnameTouched(true);
}
if((nameTouched && !nameLength)|| (!nameTouched && nameValidated)){
  var nameValidityMessage="Name is required!";
}

//district validation
const [district, setdistrice] = useState('');
const [districtTouched, setdistrictTouched] = useState(false);
const [districtValidity, setdistrictValidity] = useState(false)

const districtChangeHandler=({target})=>{
  setdistrice(target.value)
}
const districtisTouched=()=>{
  setdistrictTouched(true);
}
var districtLength=district.length!==0;
if((districtTouched && !districtLength) || (!districtTouched && districtValidity)) var districtValidityMessage='District field is required';

//Division validation
const [division, setdivision] = useState('');
const [divisionTouched, setdivisionTouched] = useState(false);
const [divisionValidity, setdivisionValidity] = useState(false)

const divisionChangeHandler=({target})=>{
  setdivision(target.value)
}
const divisionisTouched=()=>{
  setdivisionTouched(true);
}
var divisionLength=division.length!==0;
if((divisionTouched && !divisionLength) || (!divisionTouched && divisionValidity)) var divisionValidityMessage='Division field is required';

//Area validation

const [area, setarea] = useState('');
const [areaTouched, setareaTouched] = useState(false);
const [areaValidity, setareaValidity] = useState(false)

const areaChangeHandler=({target})=>{
  setarea(target.value)
}
const areaisTouched=()=>{
  setareaTouched(true);
}
var areaLength=area.length!==0;
if((areaTouched && !areaLength) || (!areaTouched && areaValidity)) var areaValidityMessage='Area field is required';

//Adress
const [address, setaddress] = useState('')
const addressChangeHandler=({target})=>{
  setaddress(target.value)
}
//Saving Address State 
const [addressSaved, setaddressSaved] = useState(false)
//Saving Address Button 
const saveHandler=()=>{
  phoneTouched && typeof(phoneValidityMessage)==='undefined' &&emailisTouched && typeof(emailValidityMessage)==='undefined' && nameTouched && typeof(nameValidityMessage)==='undefined' && districtTouched && typeof(districtValidityMessage)==='undefined' && divisionTouched && typeof(divisionValidityMessage)==='undefined' && areaTouched && typeof(areaValidityMessage)==='undefined' ? setaddressSaved(true) : alert('Form Validation Error');
  setPhoneFormValidation(true)
  setemailIsValidated(true)
  setnameValidated(true)
  setdistrictValidity(true)
  setdivisionValidity(true)
  setareaValidity(true)

}

//saving Address Button index State

const [addressButtonIndex, setaddressButtonIndex] = useState('')

// element[0].childNodes[0].classList.add('active')
const activeButtonAddress=(index,event)=>{
  setaddressButtonIndex(index);
  var element =document.querySelectorAll('.address-btn-group')
  for(let i=0;i<element[0].childNodes.length-1;i++){
    element[0].childNodes[i].classList.remove('active');
  }
  event.target.className+=' active';
  setaddressSaved(false)
}

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
              error={emailValidityMessage}
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailIsTouched}
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
            <div className="form__control profile-arrow">
              <InputControl
                name={"district"}
                label={"Select District"}
                required
                list="districts"
                className="brick"
                error={districtValidityMessage}
                value={district}
                onChange={districtChangeHandler}
                onBlur={districtisTouched}
              />
            </div>
            <datalist id="districts">
              <option value="Tangail" />
              <option value="Khulna" />
              <option value="Faridpur" />
              <option value="Noahkhali" />
              <option value="Gazipur" />
            </datalist>
            
            <div className="form__control profile-arrow">
              <InputControl
                name={"division"}
                label={"Select Divison"}
                required
                list="divisions"
                className="brick"
                error={divisionValidityMessage}
                value={division}
                onChange={divisionChangeHandler}
                onBlur={divisionisTouched}
              />
            </div>
            <datalist id="divisions">
              <option value="Dhaka" />
              <option value="Barisal" />
              <option value="Chittagong" />
              <option value="Rangpur" />
              <option value="Sylhet" />
            </datalist>
            <div className="form__control profile-arrow">
              <InputControl
                name={"area"}
                label={"Select Area"}
                required
                list="areas"
                className="brick"
                error={areaValidityMessage}
                value={area}
                onChange={areaChangeHandler}
                onBlur={areaisTouched}
              />
            </div>
            <datalist id="areas">
              <option value="Mirpur 0000" />
              <option value="Mirpur 0001" />
              <option value="Mirpur 0010" />
              <option value="Mirpur 0011" />
              <option value="Mirpur 0100" />
            </datalist>
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
           <SavingAddressTab activeButtonAddress={activeButtonAddress}/>
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
          <AddressList addressSaved={addressSaved} addressButtonIndex={addressButtonIndex} phone={phone} email={email} name={name} district={district} division={division} area={area} ></AddressList>
        </div>
      </div>
      <div class="cart_navigation">
        <Link class="prev-btn" to="/">
          <i class="fa fa-angle-left check-ang-left" aria-hidden="true"></i>{" "}
          Continue shopping
        </Link>
        <a class="next-btn" href onClick={callBack(proceedOrder)}>
          {" "}
          Proceed to order{" "}
          <i class="fa fa-angle-right check-ang-right" aria-hidden="true"></i>
        </a>
      </div>
    </>
  );
};

export default AddressForm;
