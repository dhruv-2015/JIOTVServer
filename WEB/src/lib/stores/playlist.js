import { writable } from "svelte/store"


export const createSearchStore = ( data ) => {
	const { subscribe, set, update } = writable({
		data: data,
		filtered: data,
		selected: data,
		search: ''
	});
	return {
		subscribe,
		set,
		update,
	}
}

export const searchHandler = ( store ) => {
	const searchTerm = store.search.toLowerCase() || ""
	store.filtered = store.data.filter((item) => {
		return item.searchTerms.toLowerCase().includes(searchTerm)
	})
}


export const selectHandler = (store) => {
	
	const searchTerm = store.search.toLowerCase() || '';
	store.filtered = store.data.filter((item) => {
		return item.searchTerms.toLowerCase().includes(searchTerm);
	});
}