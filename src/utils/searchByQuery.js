module.exports = function searchByQuery(client, query) {
  return client.search("gifs", {
    q: query,
    limit: 1
  });
};
