let {convertZipcodeToBarcode}=require('../core/main');

function translateBarcodeToZipcode(barcode) {

    let coreResponse=convertZipcodeToBarcode(barcode);

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