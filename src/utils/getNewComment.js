const searchByQuery = require("./searchByQuery");

function getImage(response) {
  const image =
    response.data &&
    response.data[0] &&
    response.data[0].images &&
    response.data[0].images.original &&
    response.data[0].images.original.url;

  if (image) {
    return image;
  }

  return null;
}

module.exports = async function getNewBody(giphy, query) {
  const response = await searchByQuery(giphy, query);
  const imageUrl = getImage(response);

  return `![${query}](${imageUrl})`;
};
