const searchByQuery = require("./searchByQuery");
const getBestImage = require("./getBestImage");

module.exports = async function getNewCommentBody(giphy, lastComment) {
  const query = "cat";
  const response = await searchByQuery(giphy, query);
  const imageUrl = getBestImage(response);

  core.info(
    JSON.stringify(
      {
        response,
        imageUrl
      },
      null,
      2
    )
  );

  return `![${query}](${imageUrl})`;
};
