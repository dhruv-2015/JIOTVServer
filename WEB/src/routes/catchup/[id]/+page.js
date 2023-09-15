export const load = async ({ fetch, params }) => {
	let id = params.id;
	const fetchDay1 = async () => {
		let day1 = await fetch(
			`https://jiotv.data.cdn.jio.com/apis/v1.3/getepg/get?channel_id=${id}&offset=-1&langId=6`
		);
		return await day1.json();
	};
	const fetchDay2 = async () => {
		let day1 = await fetch(
			`https://jiotv.data.cdn.jio.com/apis/v1.3/getepg/get?channel_id=${id}&offset=-2&langId=6`
		);
		return await day1.json();
	};
	const fetchDay3 = async () => {
		let day1 = await fetch(
			`https://jiotv.data.cdn.jio.com/apis/v1.3/getepg/get?channel_id=${id}&offset=-3&langId=6`
		);
		return await day1.json();
	};
	const fetchDay4 = async () => {
		let day1 = await fetch(
			`https://jiotv.data.cdn.jio.com/apis/v1.3/getepg/get?channel_id=${id}&offset=-4&langId=6`
		);
		return await day1.json();
	};
	const fetchDay5 = async () => {
		let day1 = await fetch(
			`https://jiotv.data.cdn.jio.com/apis/v1.3/getepg/get?channel_id=${id}&offset=-5&langId=6`
		);
		return await day1.json();
	};
	const fetchDay6 = async () => {
		let day1 = await fetch(
			`https://jiotv.data.cdn.jio.com/apis/v1.3/getepg/get?channel_id=${id}&offset=-6&langId=6`
		);
		return await day1.json();
	};
	const fetchDay7 = async () => {
		let day1 = await fetch(
			`https://jiotv.data.cdn.jio.com/apis/v1.3/getepg/get?channel_id=${id}&offset=-7&langId=6`
		);
		return await day1.json();
	};
	return {
		day1: fetchDay1(),
		day2: fetchDay2(),
		day3: fetchDay3(),
		day4: fetchDay4(),
		day5: fetchDay5(),
		day6: fetchDay6(),
		day7: fetchDay7()
	};
};
