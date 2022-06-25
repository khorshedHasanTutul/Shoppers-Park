import React, { forwardRef } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import SignupNoti from "./SignupNoti";

const TopHeader = forwardRef((props, ref) => {
  return (
    <div class="header-top-flex" ref={ref}>
      <HeaderLogo />
      <HeaderSearch />
      <SignupNoti />
    </div>
  );
});
export default TopHeader;
