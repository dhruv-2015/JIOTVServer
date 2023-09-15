export const load = async ({ fetch }) => {
	let r = await fetch(
		// 'https://jiotv.data.cdn.jio.com/apis/v1.4/getMobileChannelList/get/?os=android&devicetype=phone'
		'/playlist/json'
	);
	let data = await r.json();
	return data;
	
};

export const ssr = false;