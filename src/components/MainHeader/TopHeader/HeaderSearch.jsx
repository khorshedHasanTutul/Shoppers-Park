import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchProduct from "./SearchPortal/SearchProduct";
import PopUpAlert from "../../utilities/Alert/PopUpAlert";
import { useOutsideAlerter } from "../../../hooks/useOutsideClickHandler";

const HeaderSearch = () => {
  const ref = useRef();
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [SearchValue, setSearchValue] = useState("");
  const [alert, setalert] = useState(false);

  const textChangeHandler = (evt) => {
    evt.preventDefault();
    setSearchValue(evt.target.value);
    setVisibleSearch(true);
  };
  const closeSearch = (evt) => {
    setSearchValue("");
  };
  const closeSearchTemplate = () => {
    setVisibleSearch(false);
  };

  const closeModal = () => {
    setalert((prevState) => !prevState);
  };
  useOutsideAlerter(ref, closeSearchTemplate);

  return (
    <>
      {alert && (
        <PopUpAlert content={"Already in your cart."} closeModal={closeModal} />
      )}

      <div class="header-middle-search">
        <form autocomplete="off">
          <div class="search-inner-area autocomplete">
            <input
              id="myInput"
              type="text"
              placeholder="I'm looking for"
              value={SearchValue}
              onChange={textChangeHandler}
            />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <div className="search-template-visible" ref={ref}>
              {SearchValue && (
                <SearchProduct
                  SearchValue={SearchValue}
                  closeSearch={closeSearch}
                  setalert={closeModal}
                  visibleSearch={visibleSearch}
                />
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default HeaderSearch;
