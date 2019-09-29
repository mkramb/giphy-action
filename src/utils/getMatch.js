const GIPHY_REGEX = /\/giphy\s(\w+)/im;

module.exports = function getMatch(body) {
  const matches = String(body).match(GIPHY_REGEX);

  if (matches && matches.length > 1) {
    return matches[1].trim();
  }

  return null;
};
