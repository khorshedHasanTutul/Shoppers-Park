import InputControl from "../../utilities/InputControl/InputControl";
import Card from "../../utilities/Card/Card";
import './PrescriptionForm.css';
import { useEffect, useRef, useState } from "react";

const PrescriptionForm = ({onSubmit}) => {
  const inputRef = useRef(null)
  const [clickedFile, setclickedFile] = useState(false)
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
  const fileUploadHandler=()=>{
    setclickedFile(true)
  }
  useEffect(() => {
     console.log(inputRef.current)

  }, [])

  const submitHandler = () => {
    if(title === ''){
      alert('title is required');
      return;
    }

    onSubmit({title, remarks, file});
  }


  return (
    <Card className="prescription-form mb-16 mt-8">
      <div class="flex g-8 wrap preview">
        <div class="h-100-min w-100-min bg-gray center pointer">
          <div>
            <span class="t-48 t-bold t-center t-white" onClick={fileUploadHandler}>+</span>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="form__control">
          <InputControl
            name={"presription-upload"}
            label={"Upload Images"}
            type="file"
            onChange={fileChangeHandler}
            ref={inputRef}
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
          <button className='new-save-history primary brick fill rounded-corner' onClick={submitHandler}>Order Now</button>
        </div>
      </div>
    </Card>
  );
};

export default PrescriptionForm;
