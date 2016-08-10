let {convertBarcodeToZipcode}=require('../core/main');

function translateBarcodeToZipcode(zipcode) {

    let coreResponse=convertBarcodeToZipcode(zipcode);

    if(coreResponse===false){
        return {
            error:'please input right input',
        }
    }else {
        return {
            text:'transLateResult is :'+coreResponse,
            reset:true
        };
    }
}

module.exports={
    translateBarcodeToZipcode
};