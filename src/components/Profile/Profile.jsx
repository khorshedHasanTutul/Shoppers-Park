import { Fragment, useEffect, useState } from "react";
import { getProfileInfo, updateProfileInfo } from "../../lib/endpoints";
import { BASE_URL, httpV2 } from "../../Service/httpService2";
import Suspense from "../utilities/Suspense/Suspense";
import "./Profile.css";

const Profile = ({ getProfileInformation }) => {
  const [clicked, setClicked] = useState(false);
  //name state
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  //phone state
  const [phone, setPhone] = useState("");
  //email state
  const [email, setEmail] = useState("");
  //file state
  const [files, setFiles] = useState();
  //image preview
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const nameChangeHandler = ({ target }) => {
    setName(target.value);
  };
  const nameTouchedHandler = () => {
    setNameIsTouched(true);
  };
  const emailChangeHandler = ({ target }) => {
    setEmail(target.value);
  };

  const fileUploadHandler = (e) => {
    setFiles(e.target.files[0]);
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  //save button handler
  const saveButtonHandler = (e) => {
    e.preventDefault();
    setClicked(true);
    if (name.length !== 0 || email.length !== 0 || files !== undefined) {
      let formData = new FormData();
      if (name.length !== 0) formData.append("Name", name);
      if (email.length !== 0) formData.append("Email", email);
      if (files !== undefined) formData.append("ProfilePicture", files);
      //api request for update profile information
      httpV2.put({
        url: updateProfileInfo,
        payload: formData,
        before: () => {
          setIsLoading(true);
        },
        successed: (data) => {
          getProfileInformation();
        },
        failed: () => {
          console.log("failed");
        },
        always: () => {
          setIsLoading(false);
        },
      });
    }
  };

  const getProfileInfoHttp = () => {
    //api request for get profile information
    httpV2.get({
      url: getProfileInfo,
      before: () => {
        setIsLoading(true);
      },
      successed: (data) => {
        if (data.data.name !== null) {
          setName(data.data.name);
        }
        setPhone(data.data.phone);
        if (data.data.email !== null) {
          setEmail(data.data.email);
        }
        if (data.data.imageURL !== null) {
          setPreview(BASE_URL + data.data.imageURL);
        }
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {
        setIsLoading(false);
      },
    });
  };
  //api call function useEffect
  useEffect(() => {
    getProfileInfoHttp();
  }, []);

  //validation controller useEffect
  useEffect(() => {
    if (clicked) {
      if (
        (nameIsTouched && name.length === 0) ||
        (!nameIsTouched && name.length === 0)
      ) {
        setNameIsValid(true);
      } else setNameIsValid(false);
    }
  }, [clicked, name.length, nameIsTouched]);

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <Fragment>
      {!isLoading && (
        <div class="edit-profile-main-flex">
          <form className="form-parrent">
            <div class="edit-profile-main-form first-column">
              <div class="custom-input">
                <label for="name">Name</label>
                <input
                  type="text"
                  name=""
                  id="name"
                  required=""
                  value={name}
                  onChange={nameChangeHandler}
                  onBlur={nameTouchedHandler}
                />

                {nameIsValid && (
                  <div class="alert alert-error">Name is required.</div>
                )}
                {nameIsTouched && name.length === 0 && !nameIsValid && (
                  <div class="alert alert-error">Name is required.</div>
                )}
              </div>
              <div class="custom-input">
                <label for="name">Email</label>
                <input
                  type="email"
                  name=""
                  id="name"
                  required=""
                  value={email}
                  onChange={emailChangeHandler}
                />
              </div>
              <div class="custom-input">
                <label for="name">Phone Number</label>
                <input
                  type="text"
                  class="disabled"
                  name=""
                  id="name"
                  disabled
                  value={phone}
                />
              </div>
            </div>
            <div class="edit-profile-main-form second-column">
              <div className="image_preview">
                {preview && <img src={preview} alt="" />}
              </div>
              <div className="container-file-button">
                <div class="custom-input" style={{ flex: "0 0 68%" }}>
                  <label for="name">Upload Photo</label>
                  <input
                    type="file"
                    name=""
                    id="name"
                    required=""
                    onChange={fileUploadHandler}
                  />
                  {/* <div class="alert alert-error">Photo is required.</div> */}
                </div>
                <button
                  type="submit"
                  onClick={saveButtonHandler}
                  style={{ position: "relative", top: "6px", height: "34px" }}
                >
                  Save
                  {/* <i class="fa fa-floppy-o" aria-hidden="true"></i> */}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {isLoading && <Suspense />}
    </Fragment>
  );
};

export default Profile;
