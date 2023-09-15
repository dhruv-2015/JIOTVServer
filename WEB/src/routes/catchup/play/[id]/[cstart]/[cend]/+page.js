export const load = async ({ fetch }) => {
	let r = await fetch(
		'/playlist/json'
	);
	let data = await r.json();
	return data;
};

export const ssr = false;