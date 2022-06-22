import InputControl from "../../utilities/InputControl/InputControl";
import Card from "../../utilities/Card/Card";
import "./PrescriptionForm.css";
import { useEffect, useRef, useState } from "react";

const PrescriptionForm = ({ onSubmit }) => {
  const inputRef = useRef(null);
  const [remarks, setRemarks] = useState("");
  const [file, setFile] = useState();
  const [preview, setpreview] = useState();
  const [imageIsInvalid, setImageIsInvalid] = useState(false);

  const remarksChangeHandler = ({ target }) => {
    setRemarks(target.value.trim());
  };

  const fileChangeHandler = ({ target }) => {
    const file = target.files[0];
    if (!file) return;
    const allowedExtensions = ["jpg", "jpeg", "png", "pdf", "doc", "docx"];

    const subs = file.name.toLowerCase().split(".");

    if (!allowedExtensions.includes(subs[subs.length - 1])) {
      setImageIsInvalid(true);
      target.value = "";
      return false;
    } else setImageIsInvalid(false);
    
    setFile(file);
  };
  const fileUploadHandler = () => {
    inputRef.current.click();
  };

  const submitHandler = () => {
    onSubmit({ remarks, file });
    setpreview("");
    setFile("");
    setRemarks("");
  };
  const fileRemoveHandler = () => {
    setpreview("");
    setFile("");
  };

  useEffect(() => {
    if (!file) {
      setpreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setpreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <Card className="prescription-form mb-16 mt-8">
      <div class="flex g-8 wrap preview">
        {file && (
          <div className="h-100-min w-100-min image-preview justify-content">
            <div className="image-preview width-height ">
              {file && <img src={preview} alt="img" />}
              <span onClick={fileRemoveHandler} className="remove-font style">
                Remove
              </span>
            </div>
          </div>
        )}
        <div
          class="h-100-min w-100-min bg-gray center pointer"
          onClick={fileUploadHandler}
        >
          <div>
            <span class="t-48 t-bold t-center t-white">+</span>
            <input
              type="file"
              id="file"
              ref={inputRef}
              onChange={fileChangeHandler}
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
      <div className="grid" style={{marginBottom:"20px"}}>
        <div className="form__control">
          <InputControl
            name={"presription-upload"}
            label={"Upload Images"}
            type="file"
            onChange={fileChangeHandler}
          />
          {imageIsInvalid && (
            <div class="alert alert-error">
              Only JPG JPEG PNG format acceptable.
            </div>
          )}
        </div>
        <div className="form__control">
          <InputControl
            name={"presription-remarks"}
            label={"Remarks"}
            value={remarks}
            onChange={remarksChangeHandler}
          />
        </div>
        <div className="flex justify-start align-start">
          <button
            className="new-save-history primary brick fill rounded-corner"
            onClick={submitHandler}
          >
            Order Now
          </button>
        </div>
      </div>
    </Card>
  );
};

export default PrescriptionForm;
