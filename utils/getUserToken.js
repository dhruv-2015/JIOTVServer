import fs from 'fs';
const pwd=process.cwd();
try{
    var userToken = JSON["parse"](
        fs["readFileSync"](pwd+"/data/tokenData.jiotv", { encoding: "utf8", flag: "r" }));
    }
catch{
    var userToken = {};
}

export function getUserToken() {
    return userToken;
}
