# animal

## Installation

```sh
# yarn
$ yarn global add @matoruru/animal

# npm
$ npm install -g @matoruru/animal
```

## Usage

```sh
$ animal -h
```

## How I published this as a scoped package

1. [Create a repo on GitHub](https://github.com/new).

1. Clone the repo: `git clone git@github.com:matoruru/animal` and then `cd animal`.

1. Run `npm init --scope=@matoruru`.

    This will show the prompts to initialize your package.

    ```
    $ npm init --scope=@matoruru
    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.

    See `npm help init` for definitive documentation on these fields
    and exactly what they do.

    Use `npm install <pkg>` afterwards to install a package and
    save it as a dependency in the package.json file.

    Press ^C at any time to quit.
    package name: (@matoruru/animal)
    ```

1. Run `npm login` to log in on registry.npmjs.org.

1. Run `npm publish --access public` to publish the package.
