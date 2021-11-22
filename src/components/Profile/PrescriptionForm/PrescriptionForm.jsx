import InputControl from "../../utilities/InputControl/InputControl";
import Card from "../../utilities/Card/Card";
import './PrescriptionForm.css';
import { useState } from "react";

const PrescriptionForm = ({onSubmit}) => {
  const [title, setTitle] = useState('');
  const [remarks, setRemarks] = useState('');
  const [file, setFile] = useState('');

  const titleChangeHandler = ({target}) => {
    setTitle(target.value.trim());
  }

  const remarksChangeHandler = ({target}) => {
    setRemarks(target.value.trim());
  }

  const fileChangeHandler = ({target}) => {
    setFile(target.value);
  }

  const submitHandler = () => {
    if(title === ''){
      alert('title is required');
      return;
    }

    onSubmit({title, remarks, file});
  }


  return (
    <Card className="prescription-form mb-16 mt-8">
      <div className="grid">
        <div className="form__control">
          <InputControl
            name={"presription-upload"}
            label={"Upload Images"}
            type="file"
            onChange={fileChangeHandler}
          />
        </div>
        <div className="form__control">
          <InputControl
            name={"presription-title"}
            label={"Title"}
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="form__control">
          <InputControl name={"presription-remarks"} label={"Remarks"} 
            value={remarks}
            onChange={remarksChangeHandler}
          />
        </div>
        <div className='flex justify-end align-end'>
          <button className='new-save-history primary brick fill rounded-corner' onClick={submitHandler}>Save</button>
        </div>
      </div>
    </Card>
  );
};

export default PrescriptionForm;
