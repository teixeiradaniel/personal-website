angular.module('resumeApp', ['chart.js'])
    .factory('IsMobileService', function () {
        function Android() {
            return navigator.userAgent.match(/Android/i);
        };
        function BlackBerry() {
            return navigator.userAgent.match(/BlackBerry/i);
        };
        function iOS() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        };
        function Opera() {
            return navigator.userAgent.match(/Opera Mini/i);
        };
        function Windows() {
            return navigator.userAgent.match(/IEMobile/i);
        };
        function any() {
            return (Android() || BlackBerry() || iOS() || Opera() || Windows());
        }

        return {
            Android: Android,
            BlackBerry: BlackBerry,
            iOS: iOS,
            Opera: Opera,
            Windows: Windows,
            any: any
        }
    })
    .factory('ResumeService', function () {
        var skills = {
            "programmingLanguages": [
                {
                    "name": "JavaScript",
                    "percent": 94,
                    "level": "3",
                    "time": 72,
                    "color": "#F0DB4F"
                },
                {
                    "name": "PHP",
                    "percent": 56,
                    "level": "2",
                    "time": 48,
                    "color": "#474A8A"
                },
                {
                    "name": "Java",
                    "percent": 15,
                    "level": "1",
                    "time": 18,
                    "color": "#5382a1"
                }
            ],
            "frameworksLibrariesTools": [
                {
                    "name": "AngularJS",
                    "percent": 90,
                    "level": "3",
                    "time": 48
                },
                {
                    "name": "VueJS",
                    "percent": 25,
                    "level": "1",
                    "time": 12
                },
                {
                    "name": "React",
                    "percent": 10,
                    "level": "1",
                    "time": 6
                },
                {
                    "name": "jQuery",
                    "percent": 65,
                    "level": "2",
                    "time": 48
                },
                {
                    "name": "Express",
                    "percent": 53,
                    "level": "2",
                    "time": 36
                },
                {
                    "name": "NodeJS",
                    "percent": 55,
                    "level": "2",
                    "time": 36
                },
                {
                    "name": "Gulp",
                    "percent": 55,
                    "level": "2",
                    "time": 36
                },
                {
                    "name": "Ionic",
                    "percent": 80,
                    "level": "3",
                    "time": 12
                },
                {
                    "name": "Spring",
                    "percent": 15,
                    "level": "1",
                    "time": 18
                },
                {
                    "name": "CodeIgniter",
                    "percent": 80,
                    "level": "3",
                    "time": 24
                },
                {
                    "name": "Slim",
                    "percent": 60,
                    "level": "2",
                    "time": 12
                },
                {
                    "name": "Bootstrap v3",
                    "percent": 90,
                    "level": "3",
                    "time": 48
                }
            ],
            "otherLanguages": [
                {
                    "name": "HTML",
                    "percent": 90,
                    "level": "3",
                    "time": 84,
                    "color": "#E44D26"
                },
                {
                    "name": "CSS",
                    "percent": 90,
                    "level": "3",
                    "time": 84,
                    "color": "#2965F1"
                },
                {
                    "name": "SQL",
                    "percent": 90,
                    "level": "3",
                    "time": 84,
                    "color": "#66757F"
                },
                {
                    "name": "Sass",
                    "percent": 20,
                    "level": "1",
                    "time": 18,
                    "color": "#CD6799"
                }
            ],
            "dataBases": [
                {
                    "name": "PostgreSQL",
                    "percent": 85,
                    "level": "3",
                    "time": 48,
                    "color": "#0064A5"
                },
                {
                    "name": "MongoDB",
                    "percent": 45,
                    "level": "2",
                    "time": 24,
                    "color": "#4DB33D"
                },
                {
                    "name": "Redis",
                    "percent": 15,
                    "level": "1",
                    "time": 12,
                    "color": "#D82C20"
                }
            ],
            "versionControl": [
                {
                    "name": "SVN",
                    "percent": 60,
                    "level": "3",
                    "time": 84,
                    "color": "#B6C6DF"
                },
                {
                    "name": "Git",
                    "percent": 80,
                    "level": "3",
                    "time": 48,
                    "color": "#333333"
                }
            ],
            "others": [
                {
                    "name": "REST",
                    "percent": 80,
                    "level": "3",
                    "time": 48,
                    "color": "#27ae60"
                },
                {
                    "name": "Heroku",
                    "percent": 65,
                    "level": "2",
                    "time": 24,
                    "color": "#8e44ad"
                },
                {
                    "name": "Docker",
                    "percent": 45,
                    "level": "2",
                    "time": 18,
                    "color": "#0DB7ED"
                },
                {
                    "name": "AWS (s3)",
                    "percent": 25,
                    "level": "1",
                    "time": 18,
                    "color": "#FF9900"
                },
                {
                    "name": "Jenkins",
                    "percent": 15,
                    "level": "1",
                    "time": 18,
                    "color": "#D33834"
                }
            ],
            "oldSkills": [
                {
                    "name": "Delphi 7",
                    "percent": 70,
                    "level": "3",
                    "time": 84,
                    "color": ""
                },
                {
                    "name": "Firebird",
                    "percent": 80,
                    "level": "3",
                    "time": 84,
                    "color": ""
                }
            ]
        };

        var translates = {
            hello: {
                pt_br: "Olá!",
                en: "Hello!"
            },
            whoAmI: {
                pt_br: "Me chamo Daniel, Desenvolvedor de software com experiência profissional de aproximadamente 8 anos, " +
                    "tenho formação acadêmica em análise e desenvolvimento de sistemas, e sólida experiência em software ERP. " +
                    "Tenho habilidades em frameworks e bibliotecas JavaScript (Vue.JS, AngularJS, jQuery, " +
                    "Socket.IO, Gulp, Node.JS, express.JS, MongoDB)." +
                    "Intenso contato com desenvolvimento front-end, e também com experiência back-end na " +
                    "linguagem Java (framework Spring) e modelagem de bancos de dados MySQL e PostgreSQL. " +
                    "Experiência de 18 meses em projeto internacional na área da educação.",
                en: "My name is Daniel, Software developer with professional experience of approximately 8 years, " +
                    "I have academic background in analysis and systems development, and solid experience in ERP software. " +
                    "I have skills in JavaScript frameworks and libraries (Vue.JS, AngularJS, jQuery, " +
                    "Socket.IO, Gulp, Node.JS, express.JS, MongoDB). " +
                    "Intense contact with front-end development, and also with back-end experience in the " +
                    "Java language (Spring framework) and modeling of MySQL and PostgreSQL databases. " +
                    "18 months experience in an international project in the area of education."
            },
            softwareDeveloper: {
                pt_br: "Desenvolvedor de Software",
                en: "Software Developer"
            },
            workExperience: {
                pt_br: "Experiência Profissional",
                en: "Work Experience"
            },
            education: {
                pt_br: "Formação Acadêmica",
                en: "Education"
            },
            skills: {
                pt_br: "Habilidades",
                en: "Skills"
            },
            all: {
                pt_br: "Todos",
                en: "All"
            },
            timeExperience: {
                pt_br: "Tempo de Experiência",
                en: "Months of Experience"
            },
            levelExperience: {
                pt_br: "Nível de Experiência",
                en: "Experience Level"
            },
            percentExperience: {
                pt_br: "Conhecimento da documentação",
                en: "Knowledge of documentation"
            },
            skillsTypes: {
                "programmingLanguages": {
                    pt_br: "Linguagens de Programação",
                    en: "Programming Languages"
                },
                "frameworksLibrariesTools": {
                    pt_br: "Frameworks, bibliotecas e ferramentas",
                    en: "Frameworks, libraries & tools"
                },
                "otherLanguages": {
                    pt_br: "Outras Linguagens",
                    en: "Other languages"
                },
                "dataBases": {
                    pt_br: "Bancos de dados",
                    en: "Databases"
                },
                "versionControl": {
                    pt_br: "Controle de versão",
                    en: "Version control"
                },
                "others": {
                    pt_br: "Outros",
                    en: "Others"
                }
            }
        };

        var charts = {};
        var languages = { pt_br: "pt_br", en: "en" };
        var language = { selected: languages.pt_br };

        function getLevelTitle(level) {
            var advanced = (language.selected === 'en' ? 'Advanced' : 'Avançado');
            var intermediate = (language.selected === 'en' ? 'Intermediate' : 'Intermediário');
            var basic = (language.selected === 'en' ? 'Basic' : 'Básico');

            return (level.toString() === '3' ? advanced : (level.toString() === '2' ? intermediate : basic));
        };

        function getTimeTranslate(time) {
            return time.toString() + (language.selected === 'en' ? ' months' : ' meses');
        };

        return {
            charts: charts,
            skills: skills,
            language: language,
            languages: languages,
            translates: translates,
            getLevelTitle: getLevelTitle,
            getTimeTranslate: getTimeTranslate
        };
    })
    .controller('ResumeController', ['$scope', 'ResumeService', 'IsMobileService', function ($scope, resumeService, IsMobileService) {
        var resume = this;

        resume.languages = resumeService.languages;
        resume.language = resumeService.language;

        resume.charts = resumeService.charts;
        resume.translate = resumeService.translates;
        resume.skills = resumeService.skills;

        function chartsFilter(skillType, fieldName) {
            if (!skillType || !fieldName) { return; }

            var labels = resume.skills[skillType].sort(function (a, b) { return a.percent > b.percent }).map(function (s) { return s.name });
            var data = resume.skills[skillType].sort(function (a, b) { return a.percent > b.percent }).map(function (s) { return s[fieldName] });
            var colors = resume.skills[skillType].sort(function (a, b) { return a.percent > b.percent }).map(function (s) { return s.color });

            resume.charts[skillType] = {
                type: 'horizontalBar',
                colors: colors,
                labels: labels,
                data: data,
                options: {
                    responsive: true,
                    maintainAspectRatio: IsMobileService.any() ? true : false,
                    legend: {
                        display: true,
                        onClick: null
                    },
                    tooltips: {
                        enabled: false
                    }
                }
            };
        };

        function changeChartType(skillType, type, field) {
            chartsFilter(skillType, field);

            resume.charts[skillType].options.scales = (type === 'horizontalBar' ? { xAxes: [{ ticks: { beginAtZero: true } }], yAxes: [{ ticks: { beginAtZero: true } }] } : {});
            resume.charts[skillType].options.legend = (type === 'horizontalBar' ? {} : { display: true, onClick: null });

            resume.charts[skillType].type = type;

            resume.charts[skillType].ChartJS = true;
        }

        resume.changeChartType = changeChartType;
        resume.getLevelTitle = resumeService.getLevelTitle;
        resume.getTimeTranslate = resumeService.getTimeTranslate;

    }])
    .directive('chartsFilter', function () {
        return {
            restrict: 'E',
            scope: {
                type: '@'
            },
            controller: 'ResumeController',
            controllerAs: 'resume',
            template:
                '<div class="row row-pb-md">' +
                '<div class="col-sm-12">' +
                '<h3>{{resume.translate.skillsTypes[type][resume.language.selected]}}</h3>' +
                '<div class="btn-margin">' +
                '<button type="button" class="btn btn-default btn-sm"' +
                'ng-click="resume.charts[type].ChartJS = false">{{resume.translate.all[resume.language.selected]}}</button>' +
                '<button type="button" class="btn btn-default btn-sm"' +
                'ng-click="resume.changeChartType(type,\'pie\', \'time\')"><i class="icon-clock2"></i> {{resume.translate.timeExperience[resume.language.selected]}}</button>' +
                '<button type="button" class="btn btn-default btn-sm"' +
                'ng-click="resume.changeChartType(type,\'doughnut\', \'level\')"><i class="icon-stack"></i> {{resume.translate.levelExperience[resume.language.selected]}}</button>' +
                '<button type="button" class="btn btn-default btn-sm"' +
                'ng-click="resume.changeChartType(type,\'horizontalBar\', \'percent\')"><i class="icon-books"></i> {{resume.translate.percentExperience[resume.language.selected]}}</button>' +
                '</div>' +
                '</div>' +
                '<div ng-if="resume.charts[type].ChartJS" class="col-sm-12" style="max-height: 250px;"><canvas class="chart-base"' +
                'chart-type="resume.charts[type].type"' +
                'chart-data="resume.charts[type].data"' +
                'chart-labels="resume.charts[type].labels"' +
                'chart-colors="resume.charts[type].colors"' +
                'chart-options="resume.charts[type].options"></canvas></div>' +
                '<div ng-if="!resume.charts[type].ChartJS" class="col-sm-12" style="min-height: 150px;">' +
                '<div ng-repeat="item in resume.skills[type]"' +
                'class="progress-wrap col-md-12 col-sm-12 col-xs-12">' +
                '<div class="row">' +
                '<div class="col-md-6">' +
                '<h3>' +
                '<span class="name-left">{{item.name}} -' +
                '<small>{{resume.getTimeTranslate(item.time)}}</small></span>' +
                '<span class="value-right">{{resume.getLevelTitle(item.level)}}</span>' +
                '</h3>' +
                '</div>' +
                '<div class="col-md-6">' +
                '<div class="progress">' +
                '<div class="progress-bar progress-bar-striped active"' +
                'role="progressbar" aria-valuenow="{{item.percent}}"' +
                'aria-valuemin="0" aria-valuemax="100"' +
                'ng-style="{\'width\': item.percent + \'%\', \'background-color\': item.color}">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>'
        };
    });