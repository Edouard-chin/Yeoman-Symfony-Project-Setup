## Getting Started

### Installation

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-fast-setup from npm, run:

```bash
git clone git@github.com:upro/edouard-yeoman.git
cd Yeoman-Symfony-Project-Setup
sudo npm link
```

Finally, initiate the generator:

```bash
yo fast-setup
```

### What it does

Suited for our needs at the office, it automatically setup a symfony project, here are the automated tasks:

- Checking missing packages, installing them if needed
- Selecting a project to setup
- Creating a nginx configuration
- Cloning the project
- Creating necessary folders
- Setting facl
- Download composer
- Install vendor dependencies
- Install npm dependencies
- Create database
- Create database schema
- Loading fixtures

Tested and working on Ubuntu / Fedora / Arch linux
