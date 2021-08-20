/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
    SName = document.getElementById('shippingName').value;
    SZip = document.getElementById('shippingZip').value;
    if(document.getElementById('same').checked){
    document.getElementById('billingName').value = SName;
    document.getElementById('billingZip').value = SZip;}
    else{
      document.getElementById('billingName').value = '';
    document.getElementById('billingZip').value = '';
    }
}



