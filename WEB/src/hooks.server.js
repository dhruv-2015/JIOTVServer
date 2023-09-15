
/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ event, request, fetch }) {

  let fetchResult;
  try {
      fetchResult = await fetch(request);
  } catch (error) {
      // Log info from event and request here.
  }

  return fetchResult;
}