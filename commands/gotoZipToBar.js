let {translateZipcodeToBarcode}=require('./tranformZipToBar');

function gotoBarToZip() {
    return {
        text:`please input zip code:`,
        newMapping:{"*":translateZipcodeToBarcode}
    }
}

module.exports={gotoBarToZip};