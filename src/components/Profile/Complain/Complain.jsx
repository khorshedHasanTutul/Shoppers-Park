import { useEffect, useState } from "react";
import PopAlert from "../../utilities/Alert/PopAlert";
import Suspense from "../../utilities/Suspense/Suspense";
import Select from "../../utilities/Select/Select";
import { httpV2 } from "../../../Service/httpService2";
import { postComplain } from "../../../lib/endpoints";

const Complain = () => {
  //complain states
  const [complainIsTouched, setComplainIsTouched] = useState(false);
  const [complainIsInvalid, setComplainIsInvalid] = useState(false);
  const [selectedComplain, setSelectedComplain] = useState({});
  
  //Remarks validation start
  const [remark, setRemark] = useState("");
  const [remarkIsTouched, setRemarkIsTouched] = useState(false);
  const [remarkIsValid, setRemarkIsValid] = useState(false);
  //submit state
  const [clicked, setClicked] = useState(false);
  //Alert PopUp
  const [isAlertHidden, setIsAlertHidden] = useState(false);
  //Loading Snippet
  const [isLoading, setIsLoading] = useState(false);
  //respond failed
  const [isFailedRes, setIsFailedRes] = useState(false);

  //object of complain Type
  const complainList = [
    {
      id: 0,
      name: "Website",
    },
    {
      id: 1,
      name: "Delivary",
    },
    {
      id: 2,
      name: "Agent Behaviors",
    },
    {
      id: 3,
      name: "Products",
    },
    {
      id: 4,
      name: "Others",
    },
  ];

  const remarkChangeHandler = ({ target }) => {
    setRemark(target.value);
  };
  const remarkTouchedHandler = () => {
    setRemarkIsTouched(true);
  };
  const complainSelectHandler = (complainList) => {
    setSelectedComplain(complainList);
  };
  const complainBlurHandler = () => {
    setComplainIsTouched(true);
  };
  const closeAlertHandler = () => {
    setIsAlertHidden((prevState) => !prevState);
  };
  const closeResAlerthandler = () => {
    setIsFailedRes((prevState) => !prevState);
  };

  const submitButtonHandler = (e) => {
    e.preventDefault();
    setClicked(true);
    if (remark.length > 0 && selectedComplain.name) {
      //api post request send
      httpV2.post({
        url: postComplain,
        payload: {
          activityId: "00000000-0000-0000-0000-000000000000",
          complainType: selectedComplain.id,
          message: remark,
        },
        before: () => {
          setIsLoading(true);
        },
        successed: (data) => {
          setIsAlertHidden(true);
          setClicked(false);
          setRemark("");
          setRemarkIsValid(false);
          setRemarkIsTouched(false);
          setSelectedComplain({});
          setIsFailedRes(false);
          setComplainIsTouched(false);
        },
        failed: () => {
          setIsFailedRes(true);
        },
        always: () => {
          setIsLoading(false);
        },
      });
    }
  };

  useEffect(() => {
    if (clicked) {
      if (
        (remarkIsTouched && remark.length === 0) ||
        (!remarkIsTouched && remark.length === 0)
      ) {
        setRemarkIsValid(true);
      } else setRemarkIsValid(false);
      if (
        (complainIsTouched && !selectedComplain?.name) ||
        (!complainIsTouched && !selectedComplain?.name)
      ) {
        setComplainIsInvalid(true);
      } else {
        setComplainIsInvalid(false);
      }
    }
  }, [
    selectedComplain?.name,
    complainIsTouched,
    remarkIsTouched,
    remark.length,
    clicked,
  ]);

  return (
    <>
      <div class="submit-compline-main-flex edit-profile-main-flex">
        <form>
          <div class="custom-input">
            <label for="msg">Describe Your Complain</label>
            <textarea
              name=""
              id="msg"
              value={remark}
              onChange={remarkChangeHandler}
              onBlur={remarkTouchedHandler}
            ></textarea>
            {remarkIsValid && (
              <div class="alert alert-error">Text is required.</div>
            )}
            {remarkIsTouched && remark.length === 0 && !remarkIsValid && (
              <div class="alert alert-error">Text is required.</div>
            )}
          </div>

          <div className="group-complain_type">
            <Select
              label="Select Complain"
              name="complain"
              options={complainList || []}
              onSelect={complainSelectHandler}
              config={{ searchPath: "name", keyPath: "id", textPath: "name" }}
              error={
                complainIsInvalid
                  ? "Complain Type is required."
                  : complainIsTouched &&
                    !selectedComplain.name &&
                    !complainIsInvalid
                  ? "Complain Type is required."
                  : ""
              }
              onBlur={complainBlurHandler}
              selectedOption={selectedComplain}
            />
            <div className="complain_button">
              <button
                type="submit"
                onClick={submitButtonHandler}
                style={{
                  height: "37px",
                  width: "100%",
                  border: "1px solid #df2c8a",
                  color: "#df2c8a",
                }}
              >
                Send <i class="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      {isAlertHidden && (
        <PopAlert
          content={"Submit Complain Successfully."}
          closeModal={closeAlertHandler}
        />
      )}
      {isFailedRes && (
        <PopAlert
          content={"Something went wrong."}
          closeModal={closeResAlerthandler}
        />
      )}
      {isLoading && <Suspense />}
    </>
  );
};

export default Complain;
