import fetch from "node-fetch";

let catche = {};

const getProgramId = async (id, start, end) => {
    if (catche[`${id}-${start}-${end}`]) {
        return catche[`${id}-${start}-${end}`];
    }
    try {
        
        let day = getDate() - getDate(start);
        let r = await fetch(
			`https://jiotv.data.cdn.jio.com/apis/v1.3/getepg/get?channel_id=${id}&offset=-${day}&langId=6`
		);
        const {epg} = await r.json();
        for (let i = 0; i < epg.length; i++) {
            const element = epg[i];
            if (element['startEpoch'] >= start && element['endEpoch'] >= end && (!element['endEpoch'] > start)) {
                catche[`${id}-${start}-${end}`] = element['srno'];
                
                return element['srno'];
            }
        }
        return "231110144020"; // dummy value
    } catch (error) {
        return "231110144020"; // dummy value
    }
};  

function getDate(ep = Date.now()){
    const d = new Date(ep);
    return d.getDate()
}


export default getProgramId;