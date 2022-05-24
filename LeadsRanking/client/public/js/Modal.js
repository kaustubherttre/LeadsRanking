// Create an immediately invoked functional expression to wrap our code
(function () {

  // Define our constructor 
  this.Modal = function () {

    // Create global element references
    this.closeButton = null;
    this.modal = null;
    this.overlay = null;

    // Determine proper prefix
    this.transitionEnd = transitionSelect();

    // Define option defaults 
    var defaults = {
      autoOpen: false,
      className: 'fade-and-drop',
      closeButton: true,
      content: "",
      maxWidth: 600,
      minWidth: 280,
      overlay: true
    }

    // Create options by extending defaults with the passed in arugments
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }

    if (this.options.autoOpen === true) this.open();

  }

  // Public Methods

  Modal.prototype.close = function () {
    var _ = this;
    this.modal.className = this.modal.className.replace(" central-login-module-login-module-container", "");
    this.overlay.className = this.overlay.className.replace(" central-login-module-login-module-container",
      "");
    this.modal.addEventListener(this.transitionEnd, function () {
      _.modal.parentNode.removeChild(_.modal);
    });
    this.overlay.addEventListener(this.transitionEnd, function () {
      if (_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);
    });
  }

  Modal.prototype.open = function () {
    buildOut.call(this);
    initializeEvents.call(this);
    window.getComputedStyle(this.modal).height;
    this.modal.className = this.modal.className +
      (this.modal.offsetHeight > window.innerHeight ?
        " central-login-module-login-module-container scotch-anchored" : " central-login-module-login-module-container");
   // this.overlay.className = this.overlay.className + " central-login-module-login-module-container";
    prefeildData.call(this);;
  }
  Modal.prototype.open1 = function (mobileInputVal) {
    var thisObj = this;
    this.modal.className = this.modal.className.replace(" central-login-module-login-module-container", "");
    this.overlay.className = this.overlay.className.replace(" central-login-module-login-module-container",
      "");
    thisObj.modal.parentNode.removeChild(thisObj.modal);
    if (thisObj.overlay.parentNode) thisObj.overlay.parentNode.removeChild(thisObj.overlay);
    // this.modal.addEventListener(this.transitionEnd, function () {
    //   _.modal.parentNode.removeChild(_.modal);
    // });
    // this.overlay.addEventListener(this.transitionEnd, function () {
    //   if (_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);
    // });
    buildOut1.call(this, mobileInputVal);
    initializeEvents.call(this);
    window.getComputedStyle(this.modal).height;
    this.modal.className = this.modal.className +
      (this.modal.offsetHeight > window.innerHeight ?
        " central-login-module-login-module-container scotch-anchored" : " central-login-module-login-module-container");
    //this.overlay.className = this.overlay.className + " central-login-module-login-module-container";
  }
  Modal.prototype.close1 = function (mobileInputVal, responseData) {
    var _ = this;
    this.modal.className = this.modal.className.replace(" central-login-module-login-module-container", "");
    this.overlay.className = this.overlay.className.replace(" central-login-module-login-module-container",
      "");
    _.modal.parentNode.removeChild(_.modal);
    if (_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);

  }
  Modal.prototype.close2 = function () {
    var _ = this;
    this.modal.className = this.modal.className.replace("central-login-module-login-module-container", "");
    this.overlay.className = this.overlay.className.replace("central-login-module-login-module-container",
      "");
    _.modal.parentNode.removeChild(_.modal);
    if (_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);

  }

  // Private Methods

  function buildOut() {
    
    var content, contentHolder, docFrag;
    var HTML = ' <div class="login-module-inner"> <div class="central-login-card"> <div class="central-login-card-header"><img id="close-by-image" class="popup-close " src="https://static.pbcdn.in/myaccount-cdn/images/login-close-icon.svg" alt=""> <div class="central-login-card-header-block"> <div class="img-wrapper"> <img class="login-img" src="https://static.pbcdn.in/myaccount-cdn/images/login-logo.svg" alt=""> <img class="desktop-img" src="https://static.pbcdn.in/myaccount-cdn/images/login-illusion.png" alt=""> </div> <div class="text-wrapper"> <h6>To sign in, please enter <span>your mobile number below</span> </h6> </div> </div> </div> <div class="central-login-card-body"> <div class="central-login-card-form-wrapper"> <div class="input-block"> <div id="central-login-floating-login" class="floating-placeholder "> <input type="number" name="" id="central-login-module-sign-mobile" value="" /> <label for="central-login-module-sign-mobile">Mobile Number</label> </div> <span id="error-sign-in"></span></div> </div> </div> <div class="central-login-card-footer"> <div class="btn-control-block" > <button id="btn-sign-in-submit" class="btn-loader btn-sign-in"> <div class="pre__loader" id="btn-sign-in-submit-div"> <img id="loader_image" src="https://static.pbcdn.in/myaccount-cdn/images/loader.gif" /> </div> <span id="SigninwithOTP">Sign in with OTP</span> </button> </div> </div> </div> </div> '
    /*
     * If content is an HTML string, append the HTML string.
     * If content is a domNode, append its content.
     */

    if (typeof this.options.content === "string") {
      content = this.options.content;
    } else {
      this.options.content.innerHTML = HTML;
      content = this.options.content.innerHTML;
    }

    // Create a DocumentFragment to build with
    docFrag = document.createDocumentFragment();

    // Create modal element
    this.modal = document.createElement("div");
    this.modal.className = "central-login-module-login-module-container " + this.options.className;
    this.modal.style.minWidth = this.options.minWidth + "px";
    this.modal.style.maxWidth = this.options.maxWidth + "px";

    // If closeButton option is true, add a close button
    if (this.options.closeButton === true) {
     // this.closeButton = document.createElement("button");
      //this.closeButton.className = "scotch-close close-button";
     // this.closeButton.innerHTML = "&times;";
      //this.modal.appendChild(this.closeButton);
    }
    // If overlay is true, add one
    if (this.options.overlay === true) {
      this.overlay = document.createElement("div");
      this.overlay.className = "central-login-module-login-module-backdrop " + this.options.className;
      docFrag.appendChild(this.overlay);
    }

    // Create content area and append to modal
    contentHolder = document.createElement("div");
    contentHolder.className = "scotch-content";
    contentHolder.innerHTML = content;
    this.modal.appendChild(contentHolder);

    // Append modal to DocumentFragment
    docFrag.appendChild(this.modal);

    // Append DocumentFragment to body
    document.body.appendChild(docFrag);

  }
  function buildOut1(mobileInputVal) {
    // this = __this;
    var content, contentHolder, docFrag;
    var HTML = ' <div class="login-module-inner"> <div class="central-login-card"> <div class="central-login-card-header"> <img id="close-by-image" class="popup-close" src="https://static.pbcdn.in/myaccount-cdn/images/login-close-icon.svg" alt=""> <div class="central-login-card-header-block"> <div class="img-wrapper"> <img class="login-img" src="https://static.pbcdn.in/myaccount-cdn/images/login-logo.svg" alt="">  <img class="desktop-img" src="https://static.pbcdn.in/myaccount-cdn/images/login-illusion.png" alt=""> </div> <div id="central-otp-text-wrapper" class="text-wrapper"> <h6>Please enter 4 digit OTP <span>sent on <span id="sent-mobile">' + mobileInputVal + '</span></span></h6> <a href="#" id="change_mobile_number">Change mobile number</a> </div> </div> </div> <div id="central-login-card-body-otp-text" class="central-login-card-body"> <div class="central-login-card-form-wrapper"> <div class="input-block"> <div id="central-login-floating-otp" class="floating-placeholder"> <input type="number" name="" id="central-login-module-resendOtp-otp-id" /> <label for="">Enter OTP</label>  </div> </div><span id="error-sentotp-in"></span> <p>Didn&apos;t receive the OTP yet? <a href="#" id="central-login-module-resendOtp">Resend OTP</a> <span id="centarla-login-module-resentotp-message" class="centarla-login-module-resentotp-message-class"></span></p> </div> </div> <div class="central-login-card-footer"> <div id="btn-control-block-otp" class="btn-control-block"><button id="sentOtpButton" class="btn-loader btn-sign-in"> <div id="btn-sign-in-varify-otp" class="pre__loader"> <img id="loader_image" src="https://static.pbcdn.in/myaccount-cdn/images/loader.gif" /> </div> <span id="sentOTPnwithOTP">Confirm OTP</span>  </div> </div> </div> </div> '
    /*
     * If content is an HTML string, append the HTML string.
     * If content is a domNode, append its content.
     */

    if (typeof this.options.content === "string") {
      content = this.options.content;
    } else {
      this.options.content.innerHTML = HTML;
      content = this.options.content.innerHTML;
    }

    // Create a DocumentFragment to build with
    docFrag = document.createDocumentFragment();

    // Create modal element
    this.modal = document.createElement("div");
    this.modal.className = "central-login-module-login-module-container " + this.options.className;
    this.modal.style.minWidth = this.options.minWidth + "px";
    this.modal.style.maxWidth = this.options.maxWidth + "px";

    // If closeButton option is true, add a close button
    if (this.options.closeButton === true) {
      //this.closeButton = document.createElement("button");
      //this.closeButton.className = "scotch-close close-button";
     // this.closeButton.innerHTML = "&times;";
     // this.modal.appendChild(this.closeButton);
    }

    // If overlay is true, add one
    if (this.options.overlay === true) {
      this.overlay = document.createElement("div");
      this.overlay.className = "central-login-module-login-module-backdrop " + this.options.className;
      docFrag.appendChild(this.overlay);
    }

    // Create content area and append to modal
    contentHolder = document.createElement("div");
    contentHolder.className = "scotch-content";
    contentHolder.innerHTML = content;
    this.modal.appendChild(contentHolder);

    // Append modal to DocumentFragment
    docFrag.appendChild(this.modal);

    // Append DocumentFragment to body
    document.body.appendChild(docFrag);

  }

  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

  function initializeEvents() {

    if (this.closeButton) {
      this.closeButton.addEventListener('click', this.close.bind(this));
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', this.close.bind(this));
    }

  }

  function transitionSelect() {
    var el = document.createElement("div");
    if (el.style.WebkitTransition) return "webkitTransitionEnd";
    if (el.style.OTransition) return "oTransitionEnd";
    return 'transitionend';
  }

}());
var gaFuncations = function(parms){
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-136507308-1', 'auto');
    ga('send', parms.eventName, parms.eventCategoryName, parms.eventActionName,parms.eventLabel , {
      'customerId': parms.custId && parms.custId!=="" ? parms.custId:'',
    });
}
var myContent = document.getElementById('central-login-module-content');

var myModal = new Modal({
  content: myContent
});

var triggerSubmitButton = document.getElementById('btn-sign-in-submit');
// triggerButton.addEventListener('click', function () {
// });
// document.addEventListener('click', function (event) {
// }, false);
var listenerFunction = function(event){ 

  var tragetMatch3 = event.target.matches ? event.target.matches('#central-login-module-trigger') : event.target.msMatchesSelector('#central-login-module-trigger');
  if (tragetMatch3) {    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var responseData = JSON.parse(this.response);
        if (responseData.success && typeof responseData.data !== undefined && (responseData.data === '' || Object.keys(responseData.data).length <= 0)) {
          myModal.open();
          gaFuncations({
            eventName:'eventTracking',
            eventCategoryName:'loginWidget',
            eventActionName:'sign-in',
            eventLabel:'visible'
          });
        }
      }
    };
    xhttp.open("GET", "https://myaccqa.policybazaar.com/Service/Logins/GetLoginCookie/", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.setRequestHeader('authorization', 'cG9saWN5 YmF6YWFy');
    xhttp.setRequestHeader('Accept', '*/*'); // accept all
    xhttp.send();  
  }
  var tragetMatch4 = event.target.matches ? event.target.matches('#close-by-image') : event.target.msMatchesSelector('#close-by-image');
  if(tragetMatch4){
    myModal.close2();
    gaFuncations({
      eventName:'eventTracking',
      eventCategoryName:'loginWidget',
      eventActionName:'sign-in',
      eventLabel:'widget-closed',
    });
  }
  var tragetMatch5 = event.target.matches ? event.target.matches('#change_mobile_number') : event.target.msMatchesSelector('#change_mobile_number');
  if (tragetMatch5) {
    myModal.close2();
    myModal.open();
  }
  var tragetMatch6 = event.target.matches ? event.target.matches('#central-login-module-resendOtp') : event.target.msMatchesSelector('#central-login-module-resendOtp');
  if (tragetMatch6) {
    var image_loader = document.getElementsByClassName("scotch-content")[0].querySelectorAll('#loader_image');
    var sentOtpwithOTPSpan = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#sentOTPnwithOTP");
    // var submitError = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#error-sentotp-in");
    var sentOTPSubmitError = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#error-sentotp-in");
    var reSentOTPSubmitError = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#centarla-login-module-resentotp-message");
    //sentOTPSubmitError[0].textContent  = "Please try once again";
    //return false;
    var xhttp = new XMLHttpRequest();
    var bodyData = {};
    var span = document.getElementById("sent-mobile");
    bodyData.SMSType = 1;
    bodyData.CountryCode = "91";
    bodyData.Mobile = span.textContent;
    bodyData.OTPLogin = true;
    bodyData.isCustReg=true;
    xhttp.onreadystatechange = function () {
      if (this.readyState == 1) {
        image_loader[0].style.display = "inline-block";
        sentOtpwithOTPSpan[0].textContent = "";
      }
      if (this.readyState == 4 && this.status == 200) {
        image_loader[0].style.display = "none";

        var responseData = JSON.parse(this.response);
        if (responseData.success === true) {
          gaFuncations({
            eventName:'eventTracking',
            eventCategoryName:'loginWidget',
            eventActionName:'sign-in',
            eventLabel:'otp-sent'
          });
          sentOtpwithOTPSpan[0].textContent = "Confirm OTP";
          reSentOTPSubmitError[0].textContent = "OTP has been sent successfully";        
          let centralLoginClock = setInterval(function() {
            clearInterval(centralLoginClock);
            centralLoginClock = null;
            reSentOTPSubmitError[0].textContent = "";
          }, 10000);
        } else if(!responseData.success && responseData.errors && responseData.errors!=="") {	
          sentOtpwithOTPSpan[0].textContent = "Confirm OTP";	
          sentOTPSubmitError[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> '+responseData.errors;	
          //sentOTPSubmitError[0].textContent = "Please try once again";	
        }else {
          sentOtpwithOTPSpan[0].textContent = "Confirm OTP";
          sentOTPSubmitError[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Please try once again';
        }
        //document.getElementById("demo").innerHTML = this.responseText;
      } else if (this.readyState == 4 && this.status != 200) {
        image_loader[0].style.display = "none";
        sentOtpwithOTPSpan[0].textContent = "Confirm OTP";
      }
    };

    xhttp.open("POST", "https://myaccqa.policybazaar.com/Service/Logins/SendOTP/", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.setRequestHeader('Accept', '*/*'); // accept all
    xhttp.send(JSON.stringify(bodyData));
  }
  // If the clicked element doesn't have the right selector, bail
  var targetMatch20 = event.target.matches ? event.target.matches('#central-login-module-sign-mobile') : event.target.msMatchesSelector('#central-login-module-sign-mobile');
  var tragetMatch7 = event.target.matches ? event.target.matches('#btn-sign-in-submit') : event.target.msMatchesSelector('#btn-sign-in-submit');	
  var tragetMatch8 = event.target.matches ? event.target.matches('#btn-sign-in-submit-div') : event.target.msMatchesSelector('#btn-sign-in-submit-div');	
  if ((tragetMatch7 || tragetMatch8) || (targetMatch20 && event.code==="Enter")) {
    var image_loader = document.getElementsByClassName("scotch-content")[0].querySelectorAll('#loader_image');
    var SigninwithOTPSpan = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#SigninwithOTP");
    var submitError = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#error-sign-in");
    var mobileInputVal = document.getElementById("central-login-module-sign-mobile").value
    if (!mobileInputVal || mobileInputVal === ''|| mobileInputVal.length < 10) {
//      submitError[0].innerHTML ='<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> This field cannot be left blank';
      //submitError[0].textContent = "Please enter mobile number ";
      return false;
    }
    // image_loader[0].style.display = "block";
    // SigninwithOTPSpan[0].textContent = "";
    // return false;
    var xhttp = new XMLHttpRequest();
    var bodyData = {};
    bodyData.SMSType = 1;
    bodyData.CountryCode = "91";
    bodyData.Mobile = mobileInputVal;
    bodyData.OTPLogin = true;
    bodyData.isCustReg=true;
    xhttp.onreadystatechange = function () {
      if (this.readyState == 1) {
        image_loader[0].style.display = "inline-block";
        SigninwithOTPSpan[0].textContent = "";
      }
      if (this.readyState == 4 && this.status == 200) {
        image_loader[0].style.display = "none";
        SigninwithOTPSpan[0].textContent = "Sign in with OTP";
        var responseData = JSON.parse(this.response);
        if (responseData.success === true) {
          gaFuncations({
            eventName:'eventTracking',
            eventCategoryName:'loginWidget',
            eventActionName:'sign-in',
            eventLabel:'otp-sent'
          });
          const container = document.getElementById("central-login-module-content");
          container.innerHTML = ""
          document.getElementById("central-login-module-content").innerHTML = '';
          myModal.open1(mobileInputVal);
          // document.getElementById('sent-mobile-number').textContent = mobileInputVal;
        } else if(!responseData.success && responseData.errors && responseData.errors!=="")  {	
          submitError[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" />'+responseData.errors;	
          //submitError[0].textContent = "Please try once again";	
        }else {
          submitError[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Please try once again';
          //submitError[0].textContent = "Please try once again";
        }
        //document.getElementById("demo").innerHTML = this.responseText;
      } else if (this.readyState == 4 && this.status != 200) {
        image_loader[0].style.display = "none";
        SigninwithOTPSpan[0].textContent = "Sign in with OTP";
      }
    };

    xhttp.open("POST", "https://myaccqa.policybazaar.com/Service/Logins/SendOTP/", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.setRequestHeader('Accept', '*/*'); // accept all
    xhttp.send(JSON.stringify(bodyData));

  }
  var targetMatch21 = event.target.matches ? event.target.matches('#central-login-module-resendOtp-otp-id') : event.target.msMatchesSelector('#central-login-module-resendOtp-otp-id'); 
  var tragetMatch9 = event.target.matches ? event.target.matches('#btn-sign-in-varify-otp') : event.target.msMatchesSelector('#btn-sign-in-varify-otp');	
  var tragetMatch10 = event.target.matches ? event.target.matches('#sentOtpButton') : event.target.msMatchesSelector('#sentOtpButton');	
  if ((tragetMatch9 || tragetMatch10) || (targetMatch21 && event.code==="Enter")) {
    var xhttp = new XMLHttpRequest();
    var bodyData = {};
    var span = document.getElementById("sent-mobile");
    var otp = document.getElementById("central-login-module-resendOtp-otp-id").value;
    var image_loader = document.getElementsByClassName("scotch-content")[0].querySelectorAll('#loader_image');
    var sentOtpwithOTPSpan = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#sentOTPnwithOTP");
    // var submitError = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#error-sentotp-in");      
    var submitError = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#error-sentotp-in");
    if (!otp || otp === '' || span.textContent === '' || otp.length < 4 ) {
    //  submitError[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" />This field cannot be left blank ';
     // submitError[0].textContent = "Please enter OTP ";
      return false;
    }
    if(otp.length < 4){
      return false;
   }
    bodyData.isCustReg = true;
    bodyData.SMSType = 1;
    bodyData.CountryCode = "91";
    bodyData.Mobile = span.textContent;
    bodyData.OTPLogin = true;
    bodyData.OTP = otp,
      bodyData.registrationFlow = false;
    xhttp.onreadystatechange = function () {
      if (this.readyState == 1) {
        image_loader[0].style.display = "inline-block";
        sentOtpwithOTPSpan[0].textContent = "";
      }
      if (this.readyState == 4 && this.status == 200) {
        image_loader[0].style.display = "none";
        sentOtpwithOTPSpan[0].textContent = "Confirm OTP";
        var responseData = JSON.parse(this.response);
        if (responseData.success === true) {
          var responseData1 = JSON.parse(this.response);
          var setSuccesMessage = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#central-otp-text-wrapper");
          var setSuccesMessageButtonDiv = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#btn-control-block-otp");
          var setSuccesMessageTaxt = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#central-login-card-body-otp-text");
          setSuccesMessage[0].innerHTML = '<div class="central-login-module-success-message"><h6><span>You have successfully logged in</span></h6></div>';
          setSuccesMessageTaxt[0].innerHTML='';
          setSuccesMessageButtonDiv[0].innerHTML = '';
          sentOtpwithOTPSpan[0].textContent = "Confirm OTP";
          let centralLoginClockA = setInterval(function() {
            clearInterval(centralLoginClockA);
            centralLoginClockA = null;
            myModal.close1(span.textContent, responseData1);
          }, 5000);
          if(responseData1 && responseData1.data && Object.keys(responseData1.data).length > 0 && responseData1.data.UniqueID){
            gaFuncations({
              eventName:'eventTracking',
              eventCategoryName:'loginWidget',
              eventActionName:'sign-in',
              eventLabel:'login-success',
              custId : responseData1.data.UniqueID,
            });
          }
          try {            
            if(responseData1 && responseData1.data && Object.keys(responseData1.data).length > 0 && responseData1.data.lstCookiesDetails && responseData1.data.lstCookiesDetails.length > 0){
              for (var i = 0; i < responseData1.data.lstCookiesDetails.length; i++) {
                if(responseData1.data.lstCookiesDetails[i].CookieDuration && responseData1.data.lstCookiesDetails[i].CookieKey && responseData1.data.lstCookiesDetails[i].CookieValue && responseData1.data.lstCookiesDetails[i].CookieDuration !=="" && responseData1.data.lstCookiesDetails[i].CookieKey!=="" && responseData1.data.lstCookiesDetails[i].CookieValue !==""){
                  let todayDate = new Date();
                  let duration = responseData1.data.lstCookiesDetails[i].CookieDuration && responseData1.data.lstCookiesDetails[i].CookieDuration !==""? responseData1.data.lstCookiesDetails[i].CookieDuration :2;
                  todayDate.setDate(todayDate.getDate() + duration);
                  document.cookie = ''+responseData1.data.lstCookiesDetails[i].CookieKey+'='+responseData1.data.lstCookiesDetails[i].CookieValue+';expires = '+todayDate+';domain=.policybazaar.com;path=/;';
                }
              }
              // responseData1.data.lstCookiesDetails.map((element,index)=>{
              //   if(element.CookieDuration && element.CookieKey && element.CookieValue && element.CookieDuration !=="" && element.CookieKey!=="" && element.CookieValue !==""){
              //     let todayDate = new Date();
              //     let duration = element.CookieDuration && element.CookieDuration !==""? element.CookieDuration :2;
              //     todayDate.setDate(todayDate.getDate() + duration);
              //     document.cookie = `${element.CookieKey}=${element.CookieValue};expires = ${todayDate};domain=.policybazaar.com;path=/;`;
              //     //   todayDate.setDate(todayDate.getDate() + duration);
              //   }
              // });
            }
            //** close */
          }
          catch (err) {
            console.log("Cannot set cookies");
          }
          try {            
            centralLoginOnSuccess();
            //const event = new Event('CentralLoginSuccess');

          }
          catch (err) {
            console.log("function not found ");
          }
        } else if (!responseData.success || !responseData.IsValidOTP) {
          submitError[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> '+responseData.Message;
          gaFuncations({
            eventName:'eventTracking',
            eventCategoryName:'loginWidget',
            eventActionName:'sign-in',
            eventLabel:'wrongOTP'
          });
          //submitError[0].textContent = "Invalid otp please try once again";
        } else if (!responseData.success) {
          submitError[0].innerHTML = '<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Please try once again';
          //submitError[0].textContent = "Please try once again";
        }
      }
    };

    xhttp.open("POST", "https://myaccqa.policybazaar.com/Service/Logins/Validate/", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.setRequestHeader('Accept', '*/*'); // accept all
    // xhttp.getResponseHeader('Content-Type');
    //xhttp.getResponseHeader('Cache-Control');
    xhttp.send(JSON.stringify(bodyData));
  }
};
document.addEventListener('click', listenerFunction, false);
document.addEventListener('keyup', function(event) {
  if (event.code === 'Enter') {
    event.preventDefault();
    listenerFunction(event);
  }
}, false);
var input = document.getElementById('central-login-module-sign-mobile');
document.addEventListener('keyup', function (event) {
var tragetMatch1 = event.target.matches ? event.target.matches('#central-login-module-sign-mobile') : event.target.msMatchesSelector('#central-login-module-sign-mobile');	
  if (tragetMatch1) {
    var span_error = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#error-sign-in");
    var mobileNumberInput = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#central-login-module-sign-mobile");
    var submitButton = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#btn-sign-in-submit");
    var floatingDiv = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#central-login-floating-login");

    var n = event.target.value;
    n = Number(n);
    var y = event.target.value;
    if(y > 0){
      floatingDiv[0].classList.add('active');
    }else{
      floatingDiv[0].classList.remove('active');
    }
    if (isNaN(y) || y.indexOf(" ") != -1) {
      span_error[0].innerHTML ='<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Enter mobile number' ;
     // span_error[0].textContent = "Enter mobile number";
      return false;
    }
    if (y.length > 10) {
      submitButton[0].classList.add('active');
      var finalNumber = event.target.value.slice(0, 10);
      document.getElementById("central-login-module-sign-mobile").value = finalNumber;
      //span_error[0].textContent = "Enter only 10 numbers";
      // span_error[0].innerHTML ='<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Enter only 10 numbers' ;
      mobileNumberInput[0].value = finalNumber;
      return false;
    }
    if (y.length === 10) {
      submitButton[0].classList.add('active');
    }
    if (y.length < 10) {
      submitButton[0].classList.remove('active');
    }
    if (y.charAt(0) == "0" || y.charAt(0) == "1" || y.charAt(0) == "2" || y.charAt(0) == "3" || y.charAt(0) == "4" || y.charAt(0) == "5") {
      span_error[0].innerHTML ='<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Invalid number' ;
      document.getElementById("central-login-module-sign-mobile").value = '';
      mobileNumberInput[0].value = '';
      //span_error[0].textContent = "It should not start with 0";
      return false
    }else{
      span_error[0].innerHTML ='' ;
    } 
    // if (n < 0) { 
    //     $('#span-error-signin').html('Type number between 0-100'); 
    //     event.target.value = 0; 
    // } else if (n > 11) { 
    //     $('#span-error-signin').html('Type number between 0-100'); 
    //     event.target.value = 11; 
    // } else { 
    //     $('#span-error-signin').html('You typed the valid Number.'); 
    //     event.target.value = n; 
    // } 
    document.getElementById("central-login-module-sign-mobile").value = event.target.value;
  }
  var tragetMatch2 = event.target.matches ? event.target.matches('#central-login-module-resendOtp-otp-id') : event.target.msMatchesSelector('#central-login-module-resendOtp-otp-id');	
  if (tragetMatch2) {
    var span_error = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#error-sentotp-in");
    var otpNumber = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#central-login-module-resendOtp-otp-id");
    var submitButton = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#sentOtpButton");
    
    var floatingOtpDiv = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#central-login-floating-otp");

    var n = event.target.value;
    n = Number(n);
    var y = event.target.value;
    if(y > 0 ){
      floatingOtpDiv[0].classList.add('active');
    }else{
      floatingOtpDiv[0].classList.remove('active');
    }
    if (isNaN(y) || y.indexOf(" ") != -1) {
      span_error[0].innerHTML ='<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Enter valid otp' ;
      //span_error[0].textContent = "Enter valid otp";
      return false;
    }
    if (y.length > 4) {
      
      submitButton[0].classList.add('active');
      var finalNumber = event.target.value.slice(0, 4);
      document.getElementById("central-login-module-resendOtp-otp-id").value = finalNumber;
      span_error[0].innerHTML ='<img src="https://static.pbcdn.in/myaccount-cdn/images/error.svg" alt="error-img" /> Must be 4 digits' ;
      //span_error[0].textContent = "Enter valid otp";
      otpNumber[0].value = finalNumber;
      return false;
    }
    if (y.length === 4) {
      submitButton[0].classList.add('active');
      span_error[0].innerHTML = "";
    }
    if (y.length < 4) {
      submitButton[0].classList.remove('active');
    }
    // if (y.charAt(0) == "0") {
    //   span_error[0].textContent = "it should not start with 0";
    //   return false
    // }
    document.getElementById("central-login-module-resendOtp-otp-id").value = event.target.value;
  }
});
function mobNoFieldRestrictions(value) {
  if (!value) return "";
  let returnedMobileNumber;
  if (value) {
    if (!Number.isInteger(Number(value))) {
      let length = value.length;
      for (let i = 0; i < length; i++) {
        if (!Number.isInteger(Number(value.charAt(i)))) {
          value = value.slice(0, i) + value.slice(i + 1, length);
        }
      }
    }
    if (countryCode === "91") {
      if (value.length > 10) {
        returnedMobileNumber = value.slice(0, 10);
      } else {
        returnedMobileNumber = value;
      }
    } else {
      if (value.length > 13) {
        returnedMobileNumber = value.slice(0, 13);
      } else {
        returnedMobileNumber = value;
      }
    }
  }
  return returnedMobileNumber;
};
function prefeildData(){
 
  var xhttp = new XMLHttpRequest();  
  xhttp.onreadystatechange = function () {   
    if (this.readyState == 4 && this.status == 200) {
      var responseData = JSON.parse(this.response);
      if (responseData.success === true) {
        var mobileNumberInput = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#central-login-module-sign-mobile");  
        var submitButton = document.getElementsByClassName("scotch-content")[0].querySelectorAll("#btn-sign-in-submit");      
        if(responseData.data && responseData.data!==""){
          mobileNumberInput[0].value = responseData.data;
          document.getElementById("central-login-module-sign-mobile").value = responseData.data;
          submitButton[0].classList.add('active');
        }        
      } 
    }
  }; 
  xhttp.open("GET", "https://myaccqa.policybazaar.com/Service/Logins/GetMobileNoByCookies/", true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.setRequestHeader('Accept', '*/*'); // accept all
  xhttp.send();
}