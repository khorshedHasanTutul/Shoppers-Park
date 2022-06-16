import { useEffect, useRef, useState } from "react";
import { useOutsideAlerter } from "../../../hooks/useOutsideClickHandler";
import classes from "./Select.module.css";

const Select = ({
  label,
  name,
  onSelect,
  options,
  config = {},
  selectedOption,
  previewText,
  error,
  onBlur,
}) => {
  const { searchPath = "text", textPath = "text", keyPath = "id" } = config;

  const [listIsShown, setListisShown] = useState(false);
  const inputRef = useRef();
  const selectRef = useRef();
  const [inputValue, setInputValue] = useState(
    selectedOption?.id ? selectedOption[textPath] : ""
  );
  const [optionList, setOptionList] = useState(options);

  useEffect(() => {
    if (selectedOption) {
      setInputValue(selectedOption[textPath]);
    }
    setOptionList(options);
  }, [options, selectedOption, textPath]);

  useOutsideAlerter(selectRef, () => {
    setListisShown(false);
  });

  const focusHandler = () => {
    setListisShown(true);
  };

  const blurHandler = () => {
    onBlur();
  };

  const iconClickHandler = () => {
    inputRef.current.focus();
  };

  const optionSelectHandler = (option) => {
    setInputValue(option[textPath]);
    setListisShown(false);
    onSelect && onSelect(option);
  };

  const inputChangeHandler = ({ target }) => {
    setInputValue(target.value);
    filterOptions(target.value.trim());
  };

  const filterOptions = (searchQuery) => {
    searchQuery.toLowerCase();

    if (searchQuery === "") {
      setOptionList(options);
      onSelect({});
      return;
    }

    const filteredOptions = options.filter((option) =>
      option[searchPath].toLowerCase().includes(searchQuery)
    );

    setOptionList(filteredOptions);
  };

  return (
    <div className={classes.select} ref={selectRef}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.input}>
        <div className={classes["input-box"]}>
          <input
            type="text"
            id={name}
            onFocus={focusHandler}
            onBlur={blurHandler}
            ref={inputRef}
            value={inputValue || ""}
            onChange={inputChangeHandler}
            autoComplete="off"
          />
          <div className={classes.icon} onClick={iconClickHandler}>
            &#9660;
          </div>
        </div>
        <div
          className={`${classes.options} ${
            listIsShown ? classes["on-focus"] : classes["off-focus"]
          }`}
        >
          <ul>
            {optionList.length < 1 && (
              <li>{previewText ?? "No data to show"}</li>
            )}
            {optionList.length > 0 &&
              optionList.map((option) => (
                <li
                  onClick={optionSelectHandler.bind(null, option)}
                  key={option[keyPath]}
                >
                  {option[textPath]}
                </li>
              ))}
          </ul>
        </div>
        <div className={classes.error}>{error}</div>
      </div>
    </div>
  );
};

export default Select;
