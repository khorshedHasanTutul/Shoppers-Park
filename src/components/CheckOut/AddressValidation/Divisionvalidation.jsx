import React, { useEffect, useState } from "react";
import { addressDivisions } from "../../../lib/endpoints";
import { httpV2 } from "../../../Service/httpService2";
import Select from "../../utilities/Select/Select";

const Divisionvalidation = ({
  clicked,
  getDistrictHandler,
  fixDivision,
  setDivisionId,
}) => {
  const [divisionList, setDivisionList] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState({});
  const [selectedValue, setSelectedValue] = useState("");
  const [divisionIsTouched, setDivisionIsTouched] = useState(false);
  const [divisionIsValid, setDivisionIsValid] = useState(false);

  const divisionSelectHandler = (divisionList) => {
    setSelectedDivision(divisionList);
    getDistrictHandler(divisionList.id);
  };

  const divisionBlurHandler = () => {
    setDivisionIsTouched(true);
  };

  //api request for get divisions
  const getDivisionsHttp = () => {
    httpV2.get({
      url: addressDivisions,
      before: () => {},
      successed: (data) => {
        setDivisionList(data.data);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {},
    });
  };

  //effect for get divisions function call
  useEffect(() => {
    getDivisionsHttp();
  }, []);
  //effect for  set database division value
  useEffect(() => {
    if (fixDivision) {
      setSelectedValue(fixDivision);
      setSelectedDivision(fixDivision);
      setDivisionId(fixDivision.id);
    }
  }, [fixDivision, setDivisionId]);

  //effect for validation rules
  useEffect(() => {
    if (clicked) {
      if (
        (divisionIsTouched && !selectedDivision?.name) ||
        (!divisionIsTouched && !selectedDivision?.name)
      ) {
        setDivisionIsValid(true);
      } else setDivisionIsValid(false);
    }
  }, [divisionIsTouched, selectedDivision?.name, clicked]);

  return (
    <Select
      label="Select Region"
      name="division"
      options={divisionList || []}
      onSelect={divisionSelectHandler}
      config={{ searchPath: "name", keyPath: "id", textPath: "name" }}
      selectedOption={selectedDivision}
      // previewText={
      //   districtStatus === "pending" ? "Loading data..." : ""
      // }
      error={
        divisionIsValid
          ? "Region is required"
          : divisionIsTouched && !selectedDivision?.name && !divisionIsValid
          ? "Region is required"
          : ""
      }
      onBlur={divisionBlurHandler}
    />
  );
};

export default Divisionvalidation;
