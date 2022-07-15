import React, { useEffect, useState } from "react";
import { addressArea } from "../../../lib/endpoints";
import { httpV2 } from "../../../Service/httpService2";
import Select from "../../utilities/Select/Select";

const AreaValidation = ({
  clicked,
  districtId,
  getSelectAreaHandler,
  fixArea,
  setAreaId,
}) => {
  const [areaList, setAreaList] = useState([]);
  const [selectedArea, setSelectedArea] = useState();
  const [selectedValue, setSelectedValue] = useState("");
  const [upazilaIsTouched, setUpazilaIsTouched] = useState(false);
  const [isUpazilaValid, setIsUpazilaValid] = useState(false);

  const areaSelectHandler = (areaList) => {
    setSelectedArea(areaList);
    getSelectAreaHandler(areaList.id);
  };
  const upzilaBlurHandler = () => {
    setUpazilaIsTouched(true);
  };

  const getAreaHttp = (districtId) => {
    console.log({ districtId });
    httpV2.get({
      url: addressArea + districtId,
      before: () => {},
      successed: (data) => {
        setAreaList(data.data);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {},
    });
  };

  useEffect(() => {
    getAreaHttp(districtId);
  }, [districtId]);

  useEffect(() => {
    if (fixArea) {
      setSelectedValue(fixArea);
      setSelectedArea(fixArea);
      setAreaId(fixArea.id);
    }
  }, [fixArea, setAreaId]);

  useEffect(() => {
    if (clicked) {
      if (
        (upazilaIsTouched && !selectedArea?.name) ||
        (!upazilaIsTouched && !selectedArea?.name)
      ) {
        setIsUpazilaValid(true);
      } else {
        setIsUpazilaValid(false);
      }
    }
  }, [clicked, upazilaIsTouched, selectedArea?.name]);

  return (
    <Select
      label="Select Area"
      name="area"
      options={areaList || []}
      onSelect={areaSelectHandler}
      config={{ searchPath: "name", keyPath: "id", textPath: "name" }}
      selectedOption={selectedArea}
      onBlur={upzilaBlurHandler}
      error={
        isUpazilaValid
          ? "Area is required"
          : upazilaIsTouched && !selectedArea?.name && !isUpazilaValid
          ? "Area is required"
          : ""
      }
      // previewText={
      //   upzilaStatus === "pending"
      //     ? "Loading data..."
      //     : "Select City First"
      // }
    />
  );
};

export default AreaValidation;
