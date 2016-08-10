let {getMenu}=require('../commands/goto-main-page');
const defaultMapping={"*":getMenu};
let mapping=defaultMapping;
//console.log(commandMainPage[1]);

function route(input) {
    let command=mapping[input]||mapping["*"];
    // console.log(command);
    let response=command(input);
    // console.log(response);
    if(response.error){
        return{text:response.error}
    }
    if(response.reset){
        mapping=defaultMapping;
        return{
            text:response.text,
            return:true
        };
    }
    if(response.newMapping){
        mapping=response.newMapping;
        // console.log(mapping);
        return{
            text:response.text
        };
    }
    return{text:response.text}
}

module.exports={route};