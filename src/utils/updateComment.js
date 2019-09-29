const github = require("@actions/github");

module.exports = async function updateComment(
  octokit,
  lastComment,
  newCommentBody
) {
  await octokit.issues.updateComment({
    owner: github.context.actor,
    repo: github.context.payload.repository.name,
    comment_id: lastComment.id,
    body: newCommentBody
  });
};
