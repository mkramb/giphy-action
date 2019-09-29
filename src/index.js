const core = require("@actions/core");
const github = require("@actions/github");
const giphy = require("giphy-js-sdk-core");

const getNewCommentBody = require("./utils/getNewCommentBody");
const updateComment = require("./utils/updateComment");

async function run() {
  core.info(JSON.stringify(github.context, null, 2));

  try {
    const giphySecret = core.getInput("giphy-secret");
    const githubSecret = core.getInput("github-secret");

    const octokit = new github.GitHub(githubSecret);
    const lastComment = github.context.payload.comment;

    if (lastComment) {
      const newCommentBody = getNewCommentBody(giphy(giphySecret), lastComment);
      await updateComment(octokit, lastComment, newCommentBody);
    }
  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
}

run();
