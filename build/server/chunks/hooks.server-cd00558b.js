async function handleFetch({ event, request, fetch }) {
  let fetchResult;
  try {
    fetchResult = await fetch(request);
  } catch (error) {
  }
  return fetchResult;
}

export { handleFetch };
//# sourceMappingURL=hooks.server-cd00558b.js.map
