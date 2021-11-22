import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { callBack } from '../../../Service/AppService'
import SearchProduct from './SearchPortal/SearchProduct'


const HeaderSearch = () => {
    const [SearchValue, setSearchValue] = useState('')
    const getInputValue=(evt)=>{
        evt.preventDefault();
        setSearchValue(evt.target.value);
        // Window.addEventListener('click',function(){
        //     evt.target.value='';
        // })


    }
    const closeSearch=(evt)=>{
        setSearchValue('');
    }
    return (
        <>
        <div class="header-middle-search">
            <form autocomplete="off">
                <div class="search-inner-area autocomplete">
                    <input id="myInput" type="text" placeholder="I'm looking for" onChange={callBack(getInputValue)}/>
                    <button onClick={getInputValue}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    {
                        (SearchValue)&& <SearchProduct SearchValue={SearchValue} closeSearch={closeSearch} />
                    }
                </div>
            </form>
        </div>
       
        </>
    )
}
export default HeaderSearch;
