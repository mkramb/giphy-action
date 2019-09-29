const core = require("@actions/core");
const github = require("@actions/github");

module.exports = async function updateComment(
  octokit,
  lastComment,
  newCommentBody
) {
  const payload = {
    owner: github.context.actor,
    repo: github.context.payload.repository.name,
    comment_id: lastComment.id,
    body: newCommentBody
  };

  core.info(JSON.stringify(payload, null, 2));
  await octokit.issues.updateComment(payload);
};
