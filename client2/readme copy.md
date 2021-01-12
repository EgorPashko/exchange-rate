# IRIS Plus client

## How to start

To run IRIS app in local configuration:

```bash
yarn start
```

To run IRIS app in dev configuration:

```bash
yarn start:dev
```

To run PLATFORM app in local configuration:

```bash
yarn start:platform
```

To run PLATFORM app in dev configuration:

```bash
yarn start:platform:dev
```

## Description

Solution contain two main directories "apps" (contains all apps like iris, ecomm, etc) and "packages"(contains common packages for apps).

## Prerequirements

For working with current project you should install:

1. Node version not less then v10.14.1 (for checking current version run command node -v, if you have less just reinstall node)
2. yarn version not less then v1.12.3 (for checking current version run command yarn -v, if you have less just reinstall yarn)
3. Add "Prettier - Code formatter" extension to VSCode.

## Before you start

Install all npm packages:

```bash
yarn install
```

## Workplace commands

You can run commands from [package.json](package.json) for specific package.
Before start call command, write `yarn workspace {name of workspace}`. Then `yarn workspace iris start` (for local start iris workspace in development mode).

To start @westech/components workspace`s storybook server:

```bash
yarn workspace @westech/components start
```

To add package react to @westech/components workspace:

```bash
yarn workspace @westech/components add react
```

To add package react to iris workspace:

```bash
yarn workspace iris add react
```

> **WARNING:** After adding/updating/removing package for specific workspace please run `yarn install` in the root directory (client/admin-area).

## Help commands

###### For full solution:

Ts-linter checking:

```bash
yarn lint
```

Automatic fix ts-linter errors if it passible for solution:

```bash
yarn lint:fix
```

Clean node-modules and reinstall packages for solution:

```bash
yarn bootstrap
```

Clean node-modules for all packages:

```bash
yarn cleanModules
```

Run unit test for solution:

```bash
yarn test
```

###### For specific package or app:

```bash
yarn workspace package-or-app-name test
```

```bash
yarn workspace package-or-app-name test:watch
```

```bash
yarn workspace package-or-app-name test:coverage
```

## Add/upgrade/remove package

###### For full solution:

```bash
yarn {command-name}
```

###### For specific package or app:

```bash
yarn workspace {package-or-app-name} {command-name}
```

> **WARNING:** After adding/updating/removing package for specific workspace please run "yarn install" in the root directory (client/admin-area).

## Build Docker Image

```bash
docker build . -f Dockerfile -t {image_name} --build-arg solution_name={iris|platform} --build-arg url_prefix={irisplus|platform} 
```

> By default solution_name=iris and url_prefix=irisplus. So image for IRIS can be built with: `docker build . -f Dockerfile -t {image_name}`

## Lerna guide

If you don't have Lerna, install it globally with:

```bash
yarn global add lerna
```

To install any package as dependency into all packages, you can use the following command. For example `react`:

```bash
lerna add react
```

If you want to install some package as dependency only to a particular package, execute the following command:

```bash
lerna add `some-package` --scope `destination`
```

For example, with this command you install `react` to `@westech/utils` package:

```bash
lerna add react --scope @westech/utils
```

If you have installed `react` for every package but would like to upgrade/downgrade to a particular version only for a specific package then you can do it like this:

```bash
lerna add `some-package@version` --scope `destination`
```

For example, this command downgrades `react` package to version 16.0.0 in `@westech/utils`:

```bash
lerna add react@16.0.0 --scope @westech/utils
```

You can publish packages that have changed since the last release:

```bash
lerna publish
```

Bootstraping. To bootstrap the project, no `lerna bootstrap` is required. [It doesn’t make much sense](https://github.com/lerna/lerna/issues/1308#issuecomment-370848535) to invoke `lerna bootstrap` since it just calls `yarn install` itself. </br> So, just use:

```bash
yarn bootstrap
```

## Storybook

How to run Storybook app:

```bash
yarn start:storybook
```

How to build:

```bash
yarn build:storybook
```