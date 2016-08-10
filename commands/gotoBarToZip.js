let {translateBarcodeToZipcode}=require('./tranformBarToZip');

function gotoBarToZip() {
    return {
        text:`please input bar code:`,
        newMapping:{"*":translateBarcodeToZipcode}
    }
}

module.exports={gotoBarToZip};