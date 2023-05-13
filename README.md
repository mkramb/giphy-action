# Giphy Action

Searches for `/giphy <query>` in the last PR comment and appends a new comment with Giphy GIF.

## Inputs

* `giphy-secret` - **Required** The token for authentication with the Giphy API.
* `github-secret` - **Required** The token for authentication with the GitHub.

## Example usage

```
name: "Giphy"

on: 
  issue_comment:
    types: [created]

jobs:
  giphy:
    runs-on: ubuntu-latest
    permissions:
      issues: write
    steps:
      - uses: mkramb/giphy-action@master
        with:
          giphy-secret: ${{ secrets.GIPHY_TOKEN }}
          github-secret: ${{ secrets.GITHUB_TOKEN }}
```
