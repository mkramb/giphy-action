const github = require("@actions/github");

function getLastPullRequestNumber() {
  return (
    github.context.payload &&
    github.context.payload.pull_request &&
    github.context.payload.pull_request.number
  );
}

module.exports = async function getLastComment(octokit) {
  const comments = await octokit.pulls.listComments({
    repo: github.context.repo.repo,
    owner: github.context.repo.owner,
    pull_number: getLastPullRequestNumber()
  });

  if (comments.data.length) {
    return comments.data[comments.data.length - 1];
  }

  return null;
};
