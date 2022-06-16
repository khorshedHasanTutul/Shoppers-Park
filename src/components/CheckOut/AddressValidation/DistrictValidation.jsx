import React, { useEffect, useState } from "react";
import { addressDistrict } from "../../../lib/endpoints";
import { httpV2 } from "../../../Service/httpService2";
import Select from "../../utilities/Select/Select";

const DistrictValidation = ({
  clicked,
  divisionID,
  getAreaHandler,
  fixDistrict,
  setDistrictId,
}) => {
  const [selectedDistrict, setSelectedDistrict] = useState({});
  const [districtList, setDistrictList] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [districtIsTouched, setDistrictIsTouched] = useState(false);
  const [isValidDistrict, setIsValidDistrict] = useState(false);

  const districtSelectHandler = (districtList) => {
    setSelectedDistrict(districtList);
    getAreaHandler(districtList.id);
  };
  const districtBlurHandler = () => {
    setDistrictIsTouched(true);
  };
  //api request for get districts
  const getDistrictHttp = (divisionID) => {
    httpV2.get({
      url: addressDistrict + divisionID,
      before: () => {},
      successed: (data) => {
        setDistrictList(data.data);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {},
    });
  };
  //effect for getDistricts function call
  useEffect(() => {
    getDistrictHttp(divisionID);
  }, [divisionID]);

  //effect for set database information
  useEffect(() => {
    if (fixDistrict) {
      setSelectedValue(fixDistrict);
      setSelectedDistrict(fixDistrict);
      setDistrictId(fixDistrict.id);
    }
  }, [fixDistrict, setDistrictId]);

  useEffect(() => {
    if (clicked) {
      if (
        (districtIsTouched && !selectedDistrict?.name) ||
        (!districtIsTouched && !selectedDistrict?.name)
      ) {
        setIsValidDistrict(true);
      } else {
        setIsValidDistrict(false);
      }
    }
  }, [clicked, districtIsTouched, selectedDistrict?.name]);

  return (
    <Select
      label="Select City"
      name="district"
      options={districtList || []}
      onSelect={districtSelectHandler}
      config={{ searchPath: "name", keyPath: "id", textPath: "name" }}
      selectedOption={selectedDistrict}
      onBlur={districtBlurHandler}
      error={
        isValidDistrict
          ? "City is required"
          : districtIsTouched && !selectedDistrict?.name && !isValidDistrict
          ? "City is required"
          : ""
      }
      // previewText={
      //   districtStatus === "pending"
      //     ? "Loading data..."
      //     : "Select Region First"
      // }
    />
  );
};

export default DistrictValidation;
