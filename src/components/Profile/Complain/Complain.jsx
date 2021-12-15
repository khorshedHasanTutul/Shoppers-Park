import InputControl from "../../utilities/InputControl/InputControl";
import Button from "../../utilities/Button/Button";
import Card from '../../utilities/Card/Card';
import { useEffect, useState } from "react";
import { http } from "../../../Service/httpService";
import { endpoints } from "../../../lib/endpoints";
import Popup from "../../utilities/Popup/Popup";
import ComplainModalBody from "./ComplainModalBody";

const Complain = () => {
  let validityMessageTitle;
  const [title, settitle] = useState('')
  const [remarks, setremarks] = useState('')
  const [titleTouched, settitleTouched] = useState(false)
  const [remarksTouched, setremarksTouched] = useState(false)
  const [remarksValidityStatus, setremarksValidityStatus] = useState(false)
  const [popUpModel, setpopUpModel] = useState(false)
  const titleChangeHandler=({target})=>{
    settitle(target.value)
  }
  const titleIsTouched=()=>{
    settitleTouched(true)
  }
  const remarksChangeHandler=({target})=>{
    setremarks(target.value)
  }
  const remarksIsTouched=()=>{
    setremarksTouched(true)
  }

  const titleLength=title.length!==0;
  const remarksLength=remarks.length!==0;

  if(titleTouched && !titleLength){
    validityMessageTitle="This field is required."
  }
  useEffect(() => {
    if(remarksTouched && !remarksLength){
      setremarksValidityStatus(true)
    }
    if(remarksTouched && remarksLength){
      setremarksValidityStatus(false)
    }
  }, [remarksTouched,remarksLength])

  const saveButtonHandler=()=>{
    if(typeof(validityMessageTitle)==='undefined' && !remarksValidityStatus){
      http.post({
        url:endpoints.complainUrl,
        payload:{
        ContentTitle: title,
        Content: remarks,
        ActivityId: '00000000-0000-0000-0000-000000000000',
        Remarks: ''
        },
        before:()=>{
          console.log('function start')
        },
        successed:(data)=>{
          settitle('')
          setremarks('')
          settitleTouched(false)
          setremarksValidityStatus(false)
          setpopUpModel(prevState => !prevState)
        },
        failed:()=>{
          console.log('failed')
        },
        always:()=>{
          console.log("function end")
        }
      })
    }
  }


  return (
    <Card className='mt-8'>
      <div className="form__control mb-16">
        <InputControl
         name={"complain-title"}
        label={"Title"}
        error={validityMessageTitle}
        onChange={titleChangeHandler}
        onBlur={titleIsTouched}
        value={title}
          />
      </div>
      <div className="form__control mb-16">
        <div className="form__control--text-area h-100p">
          <label htmlFor="remarks">Remarks</label>
          <textarea 
          name="remarks"
           id="remarks"
           value={remarks}
           onChange={remarksChangeHandler}
           onBlur={remarksIsTouched}
           ></textarea>
           {
             (remarksValidityStatus)&& <div class="alert alert-error">This field is required.</div>
           }
          
        </div>
      </div>
      {
        (popUpModel)&& <Popup title={"Alert"} onClose={setpopUpModel} BodyComponent={ComplainModalBody}/>
      }
      <div className="flex justify-end">
        <Button
          type="button"
          text="Send"
          icon="/contents/assets/images/plane.ea6d3406.svg"
          buttonClasses={["submit-compline-new primary brick fill rounded-corner flex gc-8 icon-small"]}
          click={saveButtonHandler}
          disabled={title.length===0 && remarks.length===0}
        />
      </div>
    </Card>
  );
};

export default Complain;
