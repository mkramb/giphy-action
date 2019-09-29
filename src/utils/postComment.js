const github = require("@actions/github");

module.exports = async function postComment(
  octokit,
  lastComment,
  newCommentBody
) {
  await octokit.pulls.createCommentReply({
    repo: github.context.repo.repo,
    owner: github.context.issue.owner,
    commit_id: lastComment.commit_id,
    pull_number: lastComment.pull_request_review_id,
    position: lastComment.position,
    path: lastComment.path,
    body: newCommentBody
  });
};
