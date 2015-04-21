'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var execFile = require('child_process').execFile;
var exec = require('child_process').exec;
var path = require('path');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.log(chalk.red('                         ,╥,') + chalk.yellow('                                        ╥╥'));
        this.log(chalk.red('                     ,╦╬▓▓▓▓▒') + chalk.blue('               .╥╥╥╗╗╗╗,') + chalk.yellow('          ╥╥▒▒▒▒▒▒'));
        this.log(chalk.red('                  ╥▒╬▓▓▓▓▓▓▓▒─') + chalk.blue('       .╓╥▒▒╬╫╫╫╫╫╫╫╫╫▒') + chalk.yellow('    .╥▒▒▒▒▒▒▒▒▒▒▒'));
        this.log(chalk.red('              ,╦╬▓▓▓▓▓▓▓▓▓▓▓▓U') + chalk.blue('  ,╥╗▒▒▓╫╫╫╫╫╫╫╫╫╫╫╫╫▒▒') + chalk.yellow('  ╥▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒'));
        this.log(chalk.red('           ╥▒╬▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒') + chalk.blue('▒╬╫╫╫╬╬╬╬╫╫╫╫╫╬╬╬╬╬╫╫╫▒') + chalk.yellow('▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒Ñ'));
        this.log(chalk.red('        ,▒╬▓▓▓▓▓▓▒   ▓▓▓   ▓▓╫╫╫▒ ````²╢▒M`````^╙╫▒▒▒"`    `²▒▒▒▒▒▒▒U'));
        this.log(chalk.red('      ╥╬▓▓▓▓▓▓▓▓▓▒   ▓▓▓   ▓▓▓╫╫▒  ▒▓▓▒  ▒┐ j╬▓▒≥ :▒"  ╥▒▒▒╥,  ²▒▒▒▒▒'));
        this.log(chalk.red('    ╦╬▓▓▓▓▓▓▓▓▓▓▓▒   ▓▓▓   ▓▓▓╫╫▒  ╨Å╨" :▒┐ ^╨╨╨  ╥U  j▒▒▒▒▒▒>  ]▒▒▒U'));
        this.log(chalk.red('    ╨╫▓▓▓▓▓▓▓▓▓▓▓▒   ▓▓▓   ▓▓▓╫╫▒  ╥╥╥╗▒╬▒┐ ╥╗╥  ▒▒▒  ²▒▒▒▒▒▒"  ]▒▒▒'));
        this.log(chalk.red('     `╨╣╫▓▓▓▓▓▓▓▓▒         ▓▓▓▓╫▒ .╫▓▒▒╫╫▒┐ ]╫▓m  ╨▒╥  `²╨╨"   ▒▒▒▒U'));
        this.log(chalk.red('           `╙╝╣╫▓▓▓▓▓▓▓▓▓▓▓▓▓▒⌂ `╨╣╫╫╫╫╫╫╫╫╫╫╫╫▒▒╨▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒U'));
        this.log(chalk.red('               ^╙╩╣╫▓▓▓▓▓▓▓▓▓▒     ^ß╣╫╫╫╫╫╫╫╫▒▒    ²╨▒▒▒▒▒▒▒▒▒▒▒▒Ü'));
        this.log(chalk.red('                   `²╨╝╣╬╬▓▓▓Ü        `²╨╫╬╬╬╬▒`       `²╨▒▒▒▒▒▒▒▒'));
        this.log(chalk.red('Author: Edouard CHIN'));
        var done = this.async();
        this.scriptPath = path.join(this.sourceRoot(), '..', 'packageChecker.sh');
        this.packageManager = {
            'Ubuntu': [
                'apt-get',
                'install',
                "dpkg-query -W -f='\${Status}'",
                'install ok installed',
                [
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
                    'openjdk-7-jre-headless',
                    'elasticsearch',
                    'acl'
                ]
            ],
            'ArchBang-Rc Linux': [
                'pacman',
                '-S',
                'pacman -Qi',
                'Version',
                [
                    'nginx',
                    'mysql',
                    'php',
                    'git',
                    'unison',
                    'nodejs',
                    'jre7-openjdk-headless',
                    'elasticsearch'
                ]
            ]
        };
        this.gitProject = {
            'digitalevent': 'git@github.com:upro/digitalevent.git',
            'netexplo-academy': 'git@github.com:upro/netexplo-academy.git',
            'netexplo-channel': 'git@github.com:upro/netexplo-channel.git'
        };
        console.log(chalk.blue('Your super user password may be required if not yet cached. Please input it, if it is the case. I need it to install missing packages/dependecies and setting proper rights on folders.'));
        var release = this.readFileAsString('/etc/os-release');
        var re = new RegExp('NAME="(.*)?"');
        this.distrib = re.exec(release)[1];
        console.log(chalk.green('You are running on ' + this.distrib));
        this.spawnCommand('sudo', ['echo']).on('close', function () {
            console.log(chalk.green('Thank you, we are ready to start'));
            done();
        });
    },

    prompting: {
        selectProject: function() {
            var done = this.async();
            var options = [
            {
                type: 'list',
                name: 'project',
                message: 'Which project would you like to setup?',
                choices: [
                {
                    name: 'DigitalEvent, the destroyer of the world',
                    value: 'digitalevent',
                    checked: false
                },
                {
                    name: 'Netexplo Channel',
                    value: 'netexplo-channel',
                    checked: false
                },
                {
                    name: 'Netexplo Academy',
                    value: 'netexplo-academy',
                    checked: false
                }
                ]
            }
            ];
            this.prompt(options, function (props) {
                this.project = props.project;
                done();
            }.bind(this));
        },

        createNginxConf: function () {
            this.projectDir = path.join(process.cwd(), this.project);
            var done = this.async();
            var options = [
            {
                type: 'confirm',
                name: 'nginx',
                message: 'Would you like me to setup the nginx configuration?'
            }
            ];
            this.prompt(options, function (answer) {
                this.installNginxConf = answer.nginx;
                done();
            }.bind(this));
        },

        nginxConfDetails: function () {
            if (!this.installNginxConf) {
                return;
            }
            var done = this.async();
            var options = [
                {
                    name: 'serverName',
                    message: 'Please input the server name to create the nginx configuration'
                },
                {
                    name: 'serverPort',
                    message: 'Please input the port the server is going to listen to',
                    default: 80
                }
            ];
            this.prompt(options, function (answer) {
                this.nginxName = answer.serverName;
                this.nginxPort = answer.serverPort;
                done();
            }.bind(this));
        },

        checkPackages: function () {
            var done = this.async();
            var distribSpecific = this.packageManager[this.distrib];
            var packages = distribSpecific[4];
            packages.unshift(distribSpecific[3]);
            packages.unshift(distribSpecific[2]);
            packages.unshift(this.scriptPath);
            var self = this;
            execFile('bash', packages, function (err, stdout, stderr) {
                var re = new RegExp('elasticsearch');
                self.isElasticsearchInstalled = !re.test(stdout);
                var packages = stdout.split("\n");
                packages.pop();
                self.packagesToInstall = packages;
                done();
            });
        },

        confirmMissingPackages: function () {
            if (!this.packagesToInstall.length) {
                return ;
            }
            var options = {
                name: 'packages',
                type: 'confirm',
                message: 'The following packages are missing on your system: ' + chalk.red(this.packagesToInstall) + '. Would you like me to install them for you?'
            };
            var done = this.async();
            this.prompt(options, function (answer) {
                this.installPackages = answer.packages;
                done();
            }.bind(this));
        }
    },

    writing: {
        cloningProject: function () {
            var done = this.async();
            chalk.red('Cloning the project');
            this.spawnCommand('git', ['clone', this.gitProject[this.project]]).on('close', function () {
                done();
            })
        },

        createDirectories: function () {
            process.chdir(this.projectDir);
            console.log(chalk.green('Creating directories'));
            this.mkdir('app/cache');
            this.mkdir('app/logs');
            this.mkdir('app/tmp');
            this.mkdir('app/files');
            this.mkdir('app/var/sessions');
            this.mkdir('web_private');
        }
    },
    install: {
        checkElasticSearch: function () {
            if (this.isElasticsearchInstalled || !this.installPackages) {
                return;
            }
            var sourcesList = this.readFileAsString('/etc/apt/sources.list');
            var re = new RegExp('elasticsearch\/.*?\/');
            if (re.test(sourcesList)) {
                return;
            }
            var done = this.async();
            console.log(chalk.green('Writing elasticsearch repo in sources.list'));
            exec('echo "deb http://packages.elasticsearch.org/elasticsearch/1.5/debian stable main" | sudo tee -a /etc/apt/sources.list', [], function () {
                done();
            })
        },

        updatePackages: function () {
            if (this.isElasticsearchInstalled || !this.installPackages) {
                return;
            }
            var done = this.async();
            console.log(chalk.green('Updating packages'));
            if (this.distrib == "Ubuntu") {
                exec('sudo apt-get update', [], function () {
                    done();
                })
            } else if (this.distrib == 'ArchBang-Rc Linux') {
                exec('sudo pacman -Syyu', [], function () {
                    done();
                })
            }
        },

        installMissingPackages: function () {
            if (this.installPackages) {
                console.log(chalk.green('Installing missing packages'));
                var done = this.async();
                var packages = this.packagesToInstall;
                packages.unshift(this.packageManager[this.distrib][1]);
                packages.unshift(this.packageManager[this.distrib][0]);
                this.spawnCommand('sudo', packages).on('close', function () {
                    done();
                });
            }
        },

        setPermissions: function () {
            console.log(chalk.green('Setting facl'));
            exec('ps aux | grep -E \'[a]pache|[h]ttpd|[_]www|[w]ww-data|[n]ginx\' | grep -v root | head -1 | cut -d\ \' \' -f1', [], function (err, stdout, stderr) {
                var data = stdout.split("\n");
                var user = data[0];
                exec('sudo setfacl -R -m u:' + user + ':rwX -m u:`whoami`:rwX app/cache app/logs app/tmp app/files app/var/sessions web_private');
                exec('sudo setfacl -dR -m u:' + user + ':rwX -m u:`whoami`:rwX app/cache app/logs app/tmp app/files app/var/sessions web_private');
            })
        },

        downloadComposer: function () {
            console.log(chalk.green('Downloading composer...'));
            var done = this.async();
            exec('php -r "readfile(\'https://getcomposer.org/installer\');" | php', [], function () {
                done();
            });
        },

        checkNpmPackages: function () {
            var re = new RegExp("empty", 'i');
            exec('npm -g list less', [], function (err, stdout, stderr) {
                if (re.test(stdout)) {
                    console.log(chalk.green('Installing less'));
                    exec('sudo npm -g install less');
                }
            })
            exec('npm -g list uglify-js', [], function (err, stdout, stderr) {
                if (re.test(stdout)) {
                    exec('sudo npm -g install uglify-js');
                }
            })
            exec('npm -g list uglifycss', [], function (err, stdout, stderr) {
                if (re.test(stdout)) {
                    exec('sudo npm -g install uglifycss');
                }
            })
        },

        createFiles: function () {
            if (!this.installNginxConf) {
                return;
            }
            var nginxConf = this.readFileAsString('/etc/nginx/nginx.conf');
            var re = new RegExp('upload_progress (.*)? \\d{1}\\w');
            if (re.test(nginxConf)) {
                this.uploadProgress = {exists: true, name: re.exec(nginxConf)[1]};
            } else {
                this.uploadProgress = {exists: false, name: this.project + '_proxied'};
            }
            this.template('nginx', 'nginx');
        },

        nginx: function () {
            if (!this.installNginxConf) {
                return;
            }
            var done = this.async();
            var self = this;
            exec('sudo mv nginx /etc/nginx/sites-enabled/' + this.project, function (err, stdout, stderr) {
                console.log(chalk.green('Successfuly created the nginx configuration under /etc/nginx/sites-enabled/' + self.project));
                done();
            });
        },

        installVendor: function () {
            var done = this.async();
            this.spawnCommand('php', ['composer.phar', 'install']).on('close', done);
        },

        createDatabase: function () {
            var done = this.async();
            this.spawnCommand('php', ['app/console', 'doctrine:database:create']).on('close', function () {
                done();
            })
        },

        resetDb: function () {
            var done = this.async();
            this.spawnCommand('bash', ['reset_db.sh']).on('close', function () {
                done();
            });
        },

        restartingNginx: function () {
            var done = this.async();
            exec('sudo service nginx restart', [], function (err, stdout, stderr) {
                console.log(stdout);
                done();
            })
        },

        finishing: function () {
            console.log(yosay('Thank you, everything was setup correctly. You are ready to go!'));
            if (this.installNginxConf) {
                console.log(chalk.blue('Please add this line    ') + chalk.yellow('127.0.0.1      ' + this.nginxName) + chalk.blue(' in your /etc/hosts file.'));
            }
        }
    }
});
