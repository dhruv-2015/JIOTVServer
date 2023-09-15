export const load = async ({ fetch, params }) => {
	async function fetchData() {
		let r = await fetch(
			`https://jiotv.data.cdn.jio.com/apis/v1.3/getepg/get?channel_id=${params.id}&offset=${(params.day == '0') ? '0' : '-' + params.day}&langId=6`
		);
		return await r.json();
		
	}
	
		return fetchData();
	
};