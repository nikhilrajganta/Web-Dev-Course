# Git

- History of GIT.
- To maintain version of code.

# Commands

- `git init`
- `git add .`
- `git commit -m ""`
- `git log` => to show all commits
- `git status` => to check staged or not
- `git checkout [commit ID]`
- `git log --author=nikhil` => will show all the commits by author name
- `git log --author=nikhil -1` => will show all the commits by author name by commits limit
- `git log -p`[patch] => show all the changes made in terminal
- `git log -S<word>[called as pick-axe]` to see <words> mentioned commits

  `ex:
git log -Ssum -p`

# Git & GitHub

# Commits

- Logical
- Small
- Multiple commits
- Code should work
- Messages should be precise and informative

  `ex : Implemented basic arithmetic operation`

# Reset staging // To un-stage

`git reset HEAD <file_name>`
`git reset <file_name>`

# Git revert

- `git revert <commit-ID>`
- TO remove a commit that is committed

3.
