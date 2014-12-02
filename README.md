## ignore-pipe

`ignore-pipe` filters stdin to files that to do not match the patterns in
`$HOME/.gitignore`.

### Installation

```sh
$ npm install -g ignore-pipe
```

### Example

```sh
$ find .
./module.py
./module.pyc
./tests/__init__.py
./node_modules/one/index.js
./node_modules/one/package.json

$ cat $HOME/.gitignore
*.pyc
node_modules

$ find . | ignore-pipe
./module.py
./tests/__init__.py
```
