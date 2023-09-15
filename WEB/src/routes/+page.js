export const load = async ({ fetch }) => {
	let r = await fetch(
		'/playlist/json'
	);
	return await r.json();

};
export const ssr = false;