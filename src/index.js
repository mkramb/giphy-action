const core = require("@actions/core");
const github = require("@actions/github");
const giphy = require("giphy-js-sdk-core");

const postComment = require("./utils/postComment");
const getLastComment = require("./utils/getLastComment");
const getNewCommentBody = require("./utils/getNewCommentBody");

async function run() {
  try {
    const giphySecret = core.getInput("giphy-secret");
    const githubSecret = core.getInput("github-secret");

    const octokit = new github.GitHub(githubSecret);
    const lastComment = getLastComment(octokit);

    if (lastComment) {
      const newCommentBody = getNewCommentBody(giphy(giphySecret));
      await postComment(octokit, lastComment, newCommentBody);
    }
  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
}

run();
