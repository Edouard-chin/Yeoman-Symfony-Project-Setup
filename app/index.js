'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var async = require('async');
var exec = require('child_process').execFile;

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.scriptPath = path.join(this.sourceRoot(), '..', 'packageChecker.sh');
    this.packages = [
      'nginx-extras',
      'php5-fpm',
      'php5-mysql',
      'php5-cli',
      'php-apc',
      'php5-intl',
      'php5-gd',
      'php5-curl',
      'mysql-server',
      'git',
      'unison',
      'npm',
      'nodejs-legacy',
      'xclip',
      'openjdk-7-jre-headless',
      'elasticsearch',
    ];
  },

  prompting: {
    checkPackages: function () {
      var done = this.async();
      var packages = this.packages;
      packages.unshift(this.scriptPath)
      var self = this;
      exec('bash', packages, function (err, stdout, stderr) {
        self.packagesToInstall = stdout.split("\n");
        done();
      });
    },

    confirmMissingPackages: function () {
      var options = {
        name: 'packages',
        type: 'confirm',
        message: 'The following packages are missing on your system: ' + chalk.red(this.packagesToInstall) + ' would you like me to install them for you?'
      };
      var done = this.async();
      this.prompt(options, function (answer) {
        if (answer.packages) {
          this.installPackages = true;
        }
        done();
      }.bind(this));
    }
  },

  writing: {
    projectfiles: function () {

      // console.log(test);
    }
  }
});
