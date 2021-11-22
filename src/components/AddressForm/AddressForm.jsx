
import InputControl from "../utilities/InputControl/InputControl";
import "./AddressForm.css";
import AddressList from "./AddressList";

const AddressForm = () => {
  
  return (
    <div className="admin-all-detalics">
      <div className="add-left-content mb-16">
      <h3 className="t-uppercase t-14 mb-8">Your contact information</h3>
        <div className="form__control mb-16">
          <InputControl
            name={"phone"}
            label={"Phone Number"}
            required
            className="brick"
          />
        </div>
        <div className="form__control mb-16">
          <InputControl
            name={"email"}
            label={"Email"}
            required
            className="brick"
          />
        </div>
        <div className="form__control mb-16">
          <InputControl
            name={"name"}
            label={"Name"}
            required
            className="brick"
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
            ></textarea>
            <div className="alert alert-error"> </div>
          </div>
        </div>
        <div className={`address-btn-group align-start g-8`}>
          <button className="brick fill primary t-16  active">Home</button>
          <button className="brick fill primary t-16 ">Office</button>
          <button className="brick fill primary t-16 ">Home Town</button>
          <div>
            <button className="brick fill secondary t-16 mb-8 save-btn">
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
      <AddressList></AddressList>
      </div>
    </div>
   
  );
};

export default AddressForm;
