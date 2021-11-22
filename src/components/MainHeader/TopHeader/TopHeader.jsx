import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderSearch from './HeaderSearch'
import SignupNoti from './SignupNoti'

const TopHeader = () => {
    return (
        <div class="header-top-flex">
            <HeaderLogo />
            <HeaderSearch />
            <SignupNoti />
        </div>
    )
}
export default TopHeader;