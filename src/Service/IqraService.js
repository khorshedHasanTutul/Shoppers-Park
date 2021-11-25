
import { baseUrl } from "./ImgService";




var IqraForm ={};
(function (none) {
    
    (function (t1, t2, t3, t4) {
        var monthsName = {
            mmmm: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augost', 'September', 'October', 'November', 'December'],
            mmm: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        };

        var precisionValues = [
            [1, 1, 1],
            [100, 10, 10],
            [1000, 10, 100],
            [10000, 10, 1000],
            [100000, 10, 10000],
            [1000000, 10, 100000],
            [10000000, 10, 1000000],
            [100000000, 10, 10000000],
            [1000000000, 10, 100000000],
            [10000000000, 10, 1000000000],
            [100000000000, 10, 10000000000]
        ], precisionValue;
        t1.New = function () { return []; };
        t1.each = function (func) {
            for (var i = 0; i < this.length; i++) {
                func.call(this[i], i);
            }
        };
        t1.orderBy = function (name, isDesc) {
            var i = 1, j,t;
            if (isDesc) {
                for (; i < this.length; i++) { j = i; t = this[j]; while (j > 0 && this[j - 1][name] < t[name]) { this[j] = this[j - 1]; j--; } this[j] = t; }
            } else {
                for (; i < this.length; i++) { j = i; t = this[j]; while (j > 0 && this[j - 1][name] > t[name]) { this[j] = this[j - 1]; j--; } this[j] = t; }
            }
            return this;
        };
        if (!t2.trim) {
            t2.trim = function () {
                return this.replace(/^\s+|\s+$/g, '');
            };
        }
        t2.getDate = function (hour, isMiliseconds) {
            if (hour) {
                hour = isMiliseconds ? hour : hour * 3600000;
            } else {
                hour = 0;
            }
            return new Date(parseInt(this.substring(6), 10) + hour);
        };

    
        t3.format = function (format) {
            var d = this, isSort = false;
            if (!d)
                return "";
            var value = format.replace(/hh|HH|mmmm|mmm|mm|MM|dd|ss|yyyy/g, function (match) {
                isSort = isSort || (match === 'hh');
                return d.getValue(match);
            });
            value += isSort ? d.getHours() > 11 ? ' PM' : ' AM' : '';
            return value;
        };
        t3.Date = function () {
            return new Date(this.getFullYear(), this.getMonth(), this.getDate());
        };
        t3.getValue = function (parm) {
            switch (parm) {
                case "mmmm":
                case "mmm":
                    return monthsName[parm][this.getMonth()];
                case "mm":
                    return parm = this.getMinutes(), parm < 10 && '0' + parm || parm;
                case "HH":
                    return parm = this.getHours(), parm < 10 && '0' + parm || parm;
                case "hh":
                    parm = this.getHours();
                    parm = parm > 12 ? parm % 12 : parm;
                    parm = parm < 10 && '0' + parm || parm;
                    return parm;
                case "MM":
                    return parm = this.getMonth() + 1, parm < 10 && '0' + parm || parm;
                case "dd":
                    return parm = this.getDate(), parm < 10 && '0' + parm || parm;
                case "ss":
                    return parm = this.getSeconds(), parm < 10 && '0' + parm || parm;
                case "yyyy":
                    return this.getFullYear();
                    default :
                    return parm;
            }
        };
        t4.MoneySeperatedRange = [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1];
        t4.toMoney = function () {
            var sing = '', newValue = "", index = this.MoneySeperatedRange[0], j = 0, value = (Math.round(this * 10000000) / 10000000);
            if (value < 0) {
                sing = "-";
                value = -value;
            }
            value = value.toFixed(2);
            for (var i = value.length - 1; i > -1; i--, j++) {
                if (this.MoneySeperatedRange[j]) {
                    newValue = ', ' + newValue;
                }
                newValue = value[i] + newValue;
            }
            return sing + newValue;
        };
        t4.toFloat = function (precision) {
            if (arguments.length < 1 || typeof (precision) != 'number')
                precision = 2;
            if (precision < 0)
                precision = 0;
            if (precision > 10)
                precision = 10;
            precisionValue = precisionValues[precision];
            return parseInt(Math.round(this * precisionValue[0]) / precisionValue[1]) / precisionValue[2];
        };
        var value = 0, frac1 = 1, frac2 = 1, strNum = '';
        t4.div = function (num) {
            frac1 = 1;
            frac2 = 1;
            value = parseInt(this);
            if (value != this) {
                strNum = (this + '').split('.');
                frac1 = Math.pow(10, (strNum[1] || '').length);
                value = parseInt(strNum[0] + strNum[1]);
            }
            //value = parseInt(num);
            if (num != parseInt(num)) {
                strNum = (num + '').split('.');
                frac2 = Math.pow(10, (strNum[1] || '').length);
                num = parseInt(strNum[0] + strNum[1]);
            }
            return value * frac2 / (num * frac1)
        };
        t4.mlt = function (num) {
            frac1 = 1;
            frac2 = 1;
            value = parseInt(this);
            if (value != this) {
                strNum = (this + '').split('.');
                frac1 = Math.pow(10, (strNum[1] || '').length);
                value = parseInt(strNum[0] + strNum[1]);
            }
            //value = parseInt(num);
            if (num != parseInt(num)) {
                strNum = (num + '').split('.');
                frac2 = Math.pow(10, (strNum[1] || '').length);
                num = parseInt(strNum[0] + strNum[1]);
            }
    
            return value * num / (frac2 * frac1);
        };
    })(Array.prototype, String.prototype, Date.prototype, Number.prototype);



    var label2 = this, node, input = ['INPUT', 'TEXTAREA', 'SCRIPT'];
    function bind(model, elm, key) {
        model[key] = typeof model[key] === typeof none ? '' : model[key];
        if (elm.type == 'checkbox' || elm.type == 'radio') {
            elm.checked = model[key];
            Object.defineProperty(model, key, {
                get: function () {
                    return elm.checked;
                },
                set: function (val) {
                    elm.checked = val;
                }
            });
        } else {
            Object.defineProperty(model, key, {
                get: function () {
                    return elm.value;
                },
                set: function (val) {
                    elm.value = val;
                }
            });
        }
        label2.Validation.BindElm(elm);
    };

    (function () {
        var label3 = this, maxDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            regx = {
                'int': /^-?\d+$/,
                'float': { test: function (str) { return /^-?\d*\.?\d*$/.test(str) && str.trim(); } },
                'double': { test: function (str) { return /^-?\d*\.?\d*$/.test(str) && str.trim(); } },
                'int|null': /^\s*-?\d*\s*$/,
                'float|null': /^\s*-?\d*\.?\d*\s*$/,
                'double|null': /^\s*-?\d*\.?\d*\s*$/,
                'string': { test: function () { return true; } }
            };
        function setValid() {
            this.classList.remove('input-validation-error');
        };
        this.SetInValid = function () {
            this.classList.add('input-validation-error');
        };
        function setInValid() {
            label3.SetInValid.call(this);
        };
        function checkForDataType() {
            this.dataset.type = regx[this.dataset.type] ? this.dataset.type : 'string';
            if (regx[this.dataset.type].test(this.value)) {
                return checkForCustomValidation.call(this);
            }
            switch (this.dataset.type) {
                case 'int':
                    this.setCustomValidity("Value should be number only.");
                    break;
                case 'float':
                    this.setCustomValidity("Value should be number only.");
                    break;
                case 'double':
                    this.setCustomValidity("Value should be number only.");
                    break;
                case 'int|null':
                    this.setCustomValidity("Value should be number or empty only.");
                    break;
                case 'float|null':
                    this.setCustomValidity("Value should be number or empty only.");
                    break;
                case 'double|null':
                    this.setCustomValidity("Value should be number or empty only.");
                    break;
                default:
                    this.setCustomValidity("Value should be number.");
                    break;
            }
            setInValid.call(this);
            return false;
        }
        function checkForMaxMin() {
            var value = this.value;
            if (!/^\d+$/.test(value)) {
                this.setCustomValidity("Invalid value.");
                setInValid.call(this);
                return false;
            } else if ((this.max == '0' || this.max) && parseInt(value) > parseInt(this.max)) {
                this.setCustomValidity('Invalid! Max value is ' + this.max);
                setInValid.call(this);
                return false;
            } else if ((this.min == '0' || this.min) && parseInt(value) < parseInt(this.min)) {
                this.setCustomValidity('Invalid! Min value is ' + this.min);
                setInValid.call(this);
                return false;
            }
            setValid.call(this);
            return true;
        };
        function checkForPhoneNumber() {
            var value = this.value;
            if (value[0] !== '0' || value[1] != 7) {
                this.setCustomValidity("PhoneNumber should be started with \"07\".");
                setInValid.call(this);
                return false;
            } else if (value.length != 10) {
                this.setCustomValidity("Phone number should be 10 charecters long.");
                setInValid.call(this);
                return false;
            } else if (!/^[0][7][\d]{8}$/.test(value)) {
                this.setCustomValidity("Invalid Phone number.");
                setInValid.call(this);
                return false;
            }
            return true;
        };
        function checkForCustomValidation() {
            if (this.type == 'email' && this.value && !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.value)) {
                this.setCustomValidity("The email format is invalid.");
                setInValid.call(this);
                return false;
            } else if (this.dataset.minlength && this.value.length < this.dataset.minlength) {
                this.setCustomValidity("Text should be minimum " + this.dataset.minlength + " characters.");
                setInValid.call(this);
                return false;
            } else if (this.maxLength > 0 && this.value.length > this.maxLength) {
                this.setCustomValidity("Text should be maximum " + this.maxLength + " characters.");
                setInValid.call(this);
                return false;
            } else if (this.type == 'tel' && this.value && !checkForPhoneNumber.call(this)) {
                return false;
            } else if ((this.max == '0' || this.min == '0' || this.max || this.min) && !checkForMaxMin.call(this)) {
                return false;
            }
            setValid.call(this);
            return true;
        };
        function checkValidation() {
            this.setCustomValidity("");
            if (this.checkValidity()) {
                return this.dataset.type != 'string' ? checkForDataType.call(this) : checkForCustomValidation.call(this);
            } else {
                setInValid.call(this);
                return false;
            }
        };
        this.Bind = function (model, inputs) {
            Object.defineProperty(model, 'IsValid', {
                get: function () {
                    var isValid = true;
                    inputs.each(function () {
                        isValid = checkValidation.call(this) && isValid;
                    });
                    return isValid;
                },
                set: function (val) {
                    alert('You can not set this attributes. Its only readable.');
                },
                configurable: true
            });
        };
        this.BindElm = function (input) {
            input.addEventListener('focus', setValid);
            input.addEventListener('blur', checkValidation);
        };
    }).call(this.Validation={});
    function find(elm, list) {
        list = list || [];
        for (var i = 0; i < elm.children.length; i++) {
            node = elm.children[i];
            if (node.dataset.binding && (node.nodeName == input[0] || node.nodeName == input[1] || node.nodeName == input[2])) {
                list.push(node);
            }

            node.children.length && find(node, list);
        }
        return list;
    };
    this.Bind = function (model, elm) {
        var elmModel = {}, list = [];
        find(elm, list).each(function () {
            var key = this.dataset.binding;
            elmModel[key] = this;
            key && bind(model, this, key);
        });
        label2.Validation.Bind(model, list);
        return elmModel;
    };
}).call(IqraForm);



const Server={}, Iqra={},Activity={};

(function(){
    var that=this;
    
    function getFormData(obj, model_data, hrk) {
        hrk = hrk || "";
        var cc = model_data;
        for (var prop in model_data) {
            if (model_data.hasOwnProperty(prop) && model_data[prop] != null && typeof model_data[prop]) {
                if (typeof model_data[prop] == 'object' && !model_data[prop].IsFile) {
                    if (model_data[prop] instanceof Array) {
                        for (var i = 0; i < model_data[prop].length; i++) {
                            if (model_data[prop][i].IsFile) {
                                obj.append(hrk + prop + '[' + i + ']', model_data[prop][i].File);
                            } else {
                                getFormData(obj, model_data[prop][i], hrk + prop + '[' + i + '].');
                            }
                        }
                    } else {
                        getFormData(obj, model_data[prop], hrk + prop + '.');
                    }
                } else {
                    if (model_data.hasOwnProperty(prop)) {
                        if (model_data[prop].IsFile) {
                            obj.append(hrk + prop, model_data[prop].File);
                        } else {
                            obj.append(hrk + prop, model_data[prop]);
                        }
                    }
                }
            }
        }
    };
    this.Get= async function(url,success,error){
        const response = await fetch(baseUrl+url, { });
          const responseData=response.json();
          success&&success(responseData);
          return responseData;
        
    };
    this.Post= async function(url,data,success,error){
        const response = await fetch(baseUrl + url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            //mode: 'cors', // no-cors, *cors, same-origin
            //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            //redirect: 'follow', // manual, *follow, error
            //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          const responseData=await response.json();
          success&&success(responseData);
          return responseData;

    };
    this.Upload = function (options) {
        var formData = new FormData();
        options.data = getFormData(formData, options.data);
        var xhr;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xhr = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xhr = new window.ActiveXObject("Microsoft.XMLHTTP");
        }
        options.onProgress && xhr.upload.addEventListener("progress", options.onProgress, false);
        options.onComplete && xhr.addEventListener("load", function (response) {
            if (this.status == 200) {
                options.onComplete && options.onComplete(JSON.parse(this.response));
            } else {
                options.onError && options.onError(this);
            }
        }, false);
        options.onError && xhr.addEventListener("error", function () { options.onError(this) }, false);
        options.onCanceled && xhr.addEventListener("abort", options.onCanceled, false);
        xhr.open("POST", baseUrl+ options.url);
        xhr.send(formData);
        return xhr;
    }
    this.SendOTP= async function(url,phone,success){

        Server.Post('/MessagingArea/OtpMessage/'+url,{"Phone":phone,ActivityId:window.ActivityId},success);

    };
    this.VerifyOTP= async function(model,success){
        model.ActivityId=window.ActivityId;
        Server.Post('/MessagingArea/OtpMessage/Check',model,success);
    };
}).call(Server);

(function () {
    var defaultValue = [0, 0, 0];
    function m2f(money) {
        return parseFloat((money + '').replace(/,/g, '').replace(/\s/g, ''));
    };
    function getValue(type, digit, value) {
        switch (type) {
            case 0:
                return parseInt(value || '0', 10);
            case 1:
                return value && value.toFloat ? value.toFloat(digit) : value;
            case 2:
                return value && value.toMoney ? value.toMoney(digit) : value;
            default:
                return value;
        }
    };
    function getNum(type, digit, value) {
        switch (type) {
            case 0:
                return parseInt(value || '0', 10);
            case 1:
                return value && value.toFloat ? value : m2f(value || '0');
            case 2:
                return value && value.toMoney ? value : m2f(value || '0');
            default:
                return value;
        }
    };
    Iqra.m2f=m2f;
    Iqra.AutoBind = function (model, elm, key, type, digit, is2Way) {
        var value;
        key = key || this.dataset.binding;
            if (key) {
                model[key] = value = typeof model[key] ? model[key] : (defaultValue[type] || '');
                if (elm.nodeName == "INPUT" || elm.nodeName == "TEXTAREA") {
                    if (elm.type == 'checkbox' || elm.type == 'radio') {
                        elm.checked = model[key];
                        Object.defineProperty(model, key, {
                            get: function () {
                                return elm.checked;
                            },
                            set: function (val) {
                                elm.checked = val;
                            }
                        });
                    } else {
                        Object.defineProperty(model, key, {
                            get: function () {
                                return is2Way ? getNum(type, digit, elm.value) : value;
                            },
                            set: function (val) {
                                value = val;
                                elm.value = getValue(type, digit, val);
                            }
                        });
                    }
                } else {
                    Object.defineProperty(model, key, {
                        get: function () {
                            return is2Way ? getNum(type, digit, elm.innerHTML) : value;
                        },
                        set: function (val) {
                            value = val;
                            elm.innerHTML = getValue(type, digit, val);
                        }
                    });
                }
            }
        return elm;
    };
    Iqra.AutoBindM = function (model, elm, key, digit, is2Way) {
        return this.AutoBind(model, elm, key, 2, digit, is2Way);
    };
    Iqra.AutoBindF = function (model, elm, key, digit, is2Way) {
        return this.AutoBind(model, elm, key, 1, digit, is2Way);
    };
    Iqra.AutoBind2 = function (model, elm, key, type, digit) {
        return this.AutoBind(model, elm, key, type, digit, true);
    };
}).call(Iqra);



(function () {
    var browserData = localStorage.getItem("Device");
    function checkActivity() {
        console.log(['checkActivity', browserData]);
        if (browserData) {
            var device = JSON.parse(browserData);
            if (device.Id) {
                getActivity(device);
            } else {
                setDevice();
            }
        } else {
            setDevice();
        }
    };
    function getActivity(device) {
        Server.Get('/SecurityArea/DeviceActivity/Set?deviceId=' + device.Id, function (response) {
            if (!response.IsError) {
                window.ActivityId = Activity.Id= response.ActivityId;
            } else {

            }
        }, function (response) {

        });
    };
    function setDevice() {
        var model = {
            AppName: navigator.appName,
            Language: navigator.language,
            Platform: navigator.platform,
            UserAgent: navigator.userAgent
        };
        Server.Post('/SecurityArea/Device/Set',model, function (response) {
            if (!response.IsError) {
                var device = { Id: response.Id, HasAccess: response.HasAccess };
                browserData=JSON.stringify(device);
                localStorage.setItem("Device", browserData);
                getActivity(device);
            } else {

            }
        }, function (response) {

        });
    };
    this.Set = checkActivity;
}).call(Activity);

export { IqraForm,Server,Iqra, Activity };