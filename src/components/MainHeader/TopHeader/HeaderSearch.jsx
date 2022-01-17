import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { callBack } from '../../../Service/AppService'
import SearchProduct from './SearchPortal/SearchProduct'
import PopUpAlert from '../../utilities/Alert/PopUpAlert'


const HeaderSearch = () => {
    const [SearchValue, setSearchValue] = useState('')
    const getInputValue=(evt)=>{
        evt.preventDefault();
        setSearchValue(evt.target.value);
    }
    const closeSearch=(evt)=>{
        setSearchValue('');
    }
    const [alert, setalert] = useState(false)
    const closeModal=()=>{
        setalert(prevState=>!prevState)
    }
    return (
        <>
         {
      (alert)&&<PopUpAlert content={'Already in your cart.'} closeModal={closeModal} />
  }

        <div class="header-middle-search">
            <form autocomplete="off">
                <div class="search-inner-area autocomplete">
                    <input id="myInput" type="text" placeholder="I'm looking for" value={SearchValue} onChange={callBack(getInputValue)}/>
                    <button onClick={getInputValue}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    {
                        (SearchValue)&& <SearchProduct SearchValue={SearchValue} closeSearch={closeSearch} setalert={closeModal}/>
                    }
                </div>
            </form>
        </div>
       
        </>
    )
}
export default HeaderSearch;
