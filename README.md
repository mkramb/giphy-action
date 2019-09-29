# Giphy Action

Searches for `/giphy <query>` in the last PR comment and appends a new comment with Giphy GIF.

## Inputs

* `giphy-secret` - **Required**. The token to use for authentication with the Giphy API.
* `github-secret` - **Required**. The token to use for authentication with the GitHub.

## Example usage

```
name: "Giphy"

on: 
  issue_comment:
    types: [created]

jobs:
  giphy:
    runs-on: ubuntu-latest
    steps:
    - uses: mkramb/giphy-action@releases/v1
    with:
      giphy-secret: ${{ secrets.GIPHY_API_SECRET }}
      github-secret: ${{ secrets.GITHUB_API_SECRET }}
```