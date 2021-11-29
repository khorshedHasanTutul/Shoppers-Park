import React from 'react';
import { callBack } from '../../../Service/AppService';

const AddressFrom = () => {
    const nameField=(evt)=>{
        var letters = /^[A-Za-z]+$/;
        const trimword=evt.target.value.trim();
        if(trimword.match(letters)){
            console.log('true')
        }
        else console.log('false')
    }
    return (
        <div class="address-info-from">

        <form>
            <div class="address-info-inner-content">
                <div class="custom-input">
                    <label for="name">Name</label>
                    <input onChange={callBack(nameField)} type="text" name="" id="name" required="" />
                    <div class="alert alert-error">Name only contains Letters</div>
                </div>
                <div class="custom-input">
                    <label for="mobile">Mobile</label>
                    <input type="text" name="" id="mobile" required="" />
                    <div class="alert alert-error">Phone Number is Invalid</div>
                </div>
                <div class="custom-input">
                    <label for="email">Email</label>
                    <input type="text" name="" id="email" required="" />
                </div>
                <div class="address-inner-select-item">
                    <div class="custom-input">
                        <label for="district">Select District</label>
                        <select id="district">
                            <option value="">Dhake</option>
                            <option value="">Rangpur</option>
                            <option value="">Dinajpur</option>
                        </select>
                    </div>
                    <div class="custom-input">
                        <label for="district">Select Division</label>
                        <select id="district">
                            <option value="">Dhake</option>
                            <option value="">Rangpur</option>
                            <option value="">Dinajpur</option>
                        </select>
                    </div>
                    <div class="custom-input">
                        <label for="district">Select Area</label>
                        <select id="district">
                            <option value="">Dhake</option>
                            <option value="">Rangpur</option>
                            <option value="">Dinajpur</option>
                        </select>
                    </div>
                </div>
                <div class="address-textarea">
                    <label for="message">Address</label>
                    <textarea class="effect2" name="" id="message" required=""></textarea> 
                </div>
                <div class="all-address-save-btn">
                    <div class="chosse-your-fvt-btn">
                        <ul>
                            <li class="active"><a href>Home</a></li>
                            <li><a href>Office</a></li>
                            <li><a href>Home Town</a></li>
                        </ul>
                    </div>
                    <div class="chosse-another-address">
                        <a href>Save as Home Address</a>
                    </div>
                </div>
            </div>
        </form>

    </div>
    );
};

export default AddressFrom;