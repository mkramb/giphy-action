const searchByQuery = require("./searchByQuery");
const getBestImage = require("./getBestImage");

module.exports = async function getNewCommentBody(giphy, lastComment) {
  const query = "cat";
  const response = await searchByQuery(giphy, query);
  const imageUrl = getBestImage(response);

  return `![${query}](${imageUrl})`;
};
