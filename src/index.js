const core = require("@actions/core");
const github = require("@actions/github");
const giphyApi = require("giphy-js-sdk-core");

const getMatch = require("./utils/getMatch");
const getNewComment = require("./utils/getNewComment");
const updateComment = require("./utils/updateComment");

async function run() {
  try {
    const giphySecret = core.getInput("giphy-secret");
    const githubSecret = core.getInput("github-secret");

    const giphy = giphyApi(giphySecret);
    const octokit = new github.GitHub(githubSecret);
    const comment = github.context.payload.comment;

    if (comment) {
      const query = getMatch(comment.body);

      if (query) {
        const newCommentBody = await getNewComment(giphy, query);
        await updateComment(octokit, comment, newCommentBody);
      }
    }
  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
}

run();
