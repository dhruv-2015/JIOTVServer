import { writable } from "svelte/store"


export const createSearchStore = ( data ) => {
	const { subscribe, set, update } = writable({
		data: data,
		filtered: data,
		search: "",
	})
	return {
		subscribe,
		set,
		update,
	}
}

export const searchHandler =( store ) => {
	const searchTerms = store.search.toLowerCase().split(' ') || [];
	store.filtered = store.data.filter((item) => {
		return searchTerms.every(term => item.searchTerms.toLowerCase().includes(term));
	});
}
