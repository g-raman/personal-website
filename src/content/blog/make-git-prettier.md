---
title: How to make Git aesthetic
publishedAt: 2025-11-22
---

Git is a boring, verbose, but industry dominating tool.
Most people never take the time to configure it besides setting their username and email.

This article will cover how to improve the Git UX and make the output more concise and pretty.

This guide is largely inspired by [this video](https://www.youtube.com/watch?v=G3NJzFX6XhY) from [@codingjerk](https://www.youtube.com/@codingjerk).

_Note: I'm too lazy to add all the screenshots for the outputs of these commands, so you can't see the colored version for some of them._

## Improving Git status

Just look at the output of `git status`. Unnecessarily overwhelming and confusing.

```text
git status
On branch feat/first-blog
Your branch is ahead of 'origin/feat/first-blog' by 1 commit.
  (use "git push" to publish your local commits)

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        src/posts/

nothing added to commit but untracked files present (use "git add" to track)
```

These few lines in the `gitconfig` can drastically improve the readability.

```toml
[status]
  branch = true
  short = true
  showUntrackedFiles = "all"
```

The output turns to this:

```text
## feat/first-blog...origin/feat/first-blog [ahead 1]
?? src/posts/make-git-prettier.md
```

Way more readable without all the distracting information and suggestions. They're nice as a beginner but eventually become annoying.

## Improving the Git log command

If people do configure something beyond the basics, it's usually this command. You can find many online, but a simple one like this:

```bash
git log --graph --all --pretty=format:"%C(bold blue)%h %C(bold green)(%ar) %C(white)- %an%C(reset)%C(auto)%d%n %C(white)%s %n"
```

Will take your output from this:

```console
commit e0e9d3b (HEAD -> feat/first-blog)
Author: Raman Gupta <email>
Date:   Sat Nov 22 09:24:21 2025 -0500

    refactor: move mdsvex config to separate file

commit 9d1b2f9 (origin/feat/first-blog)
Author: Raman Gupta <email>
Date:   Fri Nov 21 23:17:11 2025 -0500

    feat: remove padding on y axis for container

commit be24f97
Author: Raman Gupta <email>
Date:   Fri Nov 21 23:11:52 2025 -0500

    feat: increase horizontal padding on desktop
```

To this:

```console
* e0e9d3b (7 hours ago) - Raman Gupta (HEAD -> feat/first-blog)
|  refactor: move mdsvex config to separate file
|
* 9d1b2f9 (17 hours ago) - Raman Gupta (origin/feat/first-blog)
|  feat: remove padding on y axis for container
|
* be24f97 (17 hours ago) - Raman Gupta
|  feat: increase horizontal padding on desktop
```

## Better Git Diffs

The worst, aesthetically speaking, native Git command is probably the `git diff` command.

```console
diff --git a/src/lib/utils/dates.ts b/src/lib/utils/dates.ts
index cbc3ddf..c2c651d 100644
--- a/src/lib/utils/dates.ts
+++ b/src/lib/utils/dates.ts
@@ -1,6 +1,6 @@
 export function formatDateFriendly(date: string) {
        return new Date(date).toLocaleDateString('en-CA', {
-               year: 'numeric',
+               year: 'long',
                month: 'long',
                weekday: 'long',
                day: 'numeric',
```

The output is absolutely horrendous and way too verbose.

To fix this problem you're going to have to install a third-party Git diff tool.
I prefer to use [diff-so-fancy](https://github.com/so-fancy/diff-so-fancy), I find it's the most minimal and no-nonsense.

I used to use [delta](https://dandavison.github.io/delta/), but found the syntax highlighting to be a bit distracting and overkill.

After you've installed these, you just need to adjust a few settings in your Git config.

```toml
[pager]
  branch = true
  tag = false
  diff = "diff-so-fancy | less --tabs=4 -RFX"

[diff]
  context = 3
  renames = "copies"
  interHunkContext = 10

[diff-so-fancy]
    markEmptyLines = false
```

Then your output becomes this:
<img class="rounded-md" src="/better-git-output.png" alt="Output of git diff command"/>

## Better branch switching

A majority of people that use Git use branches as a part of their workflow.
However, if you work with them long enough, the list of branches grows, and it gets harder to keep track of them and remember their names.

To solve the problem, you can switch branches via [fzf](https://junegunn.github.io/fzf/).

```bash
alias gb="git switch \$(git branch | fzf | sed 's/^..//')"
```

This simple alias let's you fuzzy search your branches, select one, and moves you to it.

<img class="rounded-md" src="/fzf-branch-switcher.png" alt="Fzf Git branch switcher"/>

## Better Git UI

Now, I don't like, nor recommend, the idea of installing a separate app like the GitHub app or using
VSCode's built in Git UI as a part of your workflow.

It feels overkill, 90% of your needs can be met with just the basic commands from the CLI. That being said sometimes, a UI is useful.

Often when I'm coding, I forget to commit my changes and follow the atomic commit practice.
So I use [lazygit](https://github.com/jesseduffield/lazygit), to select specific hunks and files to reduce the size of each commit and make it more _atomic_.

Though it's possible to do the same with the Git CLI, it's not practical to do so.
But because I don't want to leave the terminal, lazygit is a good compromise.

Lazygit gives a simple, albeit overwhelming at first, TUI for interacting with your git repo.
However, it has sane shortcuts and is fairly easy to pick up.

## My Aliases

These are the aliases I use, they're probably 90% of what I do with Git minus the occasional `git reflog` to revert a horrible mistake.

I used to hate the idea of aliases for git because I thought I would "forget" the underlying CLI.
But, even though you only save 0.2s, it feels nice not having to write out an entire command.

```bash
alias gs="git status"
alias gl='git log --graph --all --pretty=format:"%C(bold blue)%h %C(bold green)(%ar) %C(white)- %an%C(reset)%C(auto)%d%n %C(white)%s %n"'
alias gb="git switch \$(git branch | fzf | sed 's/^..//')"
alias gsm="git switch main"
alias grm="git rebase main"
alias gd='git diff'
alias gds="gd --staged"
alias gpom="git pull origin main"
alias gfom="git fetch origin main:main"
alias lg="lazygit"
```

## Easier cloning

This one is a definitely a bit of a min-maxing tip, but you can set url shortcuts in your git config.

```toml
[url "git@github.com:g-raman/"]
  insteadOf = "raman:"
```

So to clone my `dotfiles` repo, I can do:

```bash
git clone raman:dotfiles
```

Instead of:

```bash
git clone git@github.com:g-raman/dotfiles.git
```

Comes in handy when you know the repo name but don't want to go to GitHub to copy and paste the cloning link.

## Local Git Config

If you want to store your dotfiles on GitHub, you'll run into the issue of having to store your personal information in your git config.

To avoid this, you can make use of the `include` setting.

```toml
[include]
  path = "~/.gitconfig.local"
```

Now you can make this file on your local machine and add in information like your E-mail.
You get the best of both worlds. You get to store your dotfiles online for easy reproducibility, and keep your private information private.

## No-Brainer

Just add this one in your config, it saves you the extra step of adding the whole `--set-upstream origin my-branch` when you're trying to push up a branch.

```toml
[push]
  autoSetupRemote = true
```

## Conclusion

As a programmer, you should strive to remove as many pain points and frictions in your workflow.
You don't have to hyper-optimize every last dependency, but being aware of these things makes your life significantly easier.

There's a lot of other things that you can tweak such as the specific colours of the output of specific commands.
If you're curious you can take a look at my config [here](https://github.com/g-raman/dotfiles).
