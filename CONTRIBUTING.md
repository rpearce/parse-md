# Contributing

1. Check out the [issues](https://github.com/rpearce/parse-md/issues)
1. [Fork](https://guides.github.com/activities/forking/) this repository
1. [Clone](https://help.github.com/articles/cloning-a-repository/) your fork
1. Add the upstream project (this one) as a git remote:
    ```sh
    git remote add upstream git@github.com:rpearce/parse-md.git
    git fetch upstream
    git rebase upstream/main
    ```
1. Check out a feature branch
    ```sh
    git checkout -b my-feature
    ```
1. Make your changes
1. Push your branch to your GitHub repo
    ```sh
    git push origin my-feature
    ```
1. Create a [pull request](https://help.github.com/articles/about-pull-requests/)
   from your branch to this repo's `main` branch
1. When all is merged, pull down the upstream changes to your main
    ```sh
    git fetch upstream
    git rebase upstream/main
    ```
1. Delete your feature branch (locally and then on GitHub)
    ```sh
    git branch -D my-feature
    git push origin :my-feature
    ```

## Testing

Tests are located in the `__tests__/` folder. Here's how to run them:

```sh
npm test
```
