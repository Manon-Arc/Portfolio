import '../../style/components/Hardskills.css';
import '../../style/style_gen.css';
import csharpe from '../../assets/a_propos/compétences/c_sharpe.png'
import cplus from '../../assets/a_propos/compétences/cplus.png'
import java from '../../assets/a_propos/compétences/java.png'
import js from '../../assets/a_propos/compétences/js.png'
import ts from '../../assets/a_propos/compétences/ts.png'
import python from '../../assets/a_propos/compétences/python.png'
import go from '../../assets/a_propos/compétences/go.png'
import php from '../../assets/a_propos/compétences/php.png'

import react from '../../assets/a_propos/compétences/react.png'
import flask from '../../assets/a_propos/compétences/flask.png'
import django from '../../assets/a_propos/compétences/django.png'
import avalonia from '../../assets/a_propos/compétences/avalonia.png'
import net from '../../assets/a_propos/compétences/net.png'
import angular from '../../assets/a_propos/compétences/angular.png'
import symfony from '../../assets/a_propos/compétences/symfony.png'
import vite from '../../assets/a_propos/compétences/vitejs.png'

import postgre from '../../assets/a_propos/compétences/postgresql.png'
import mariadb from '../../assets/a_propos/compétences/mariadb2.png'
import sql from '../../assets/a_propos/compétences/sql.png'
import sqlite from '../../assets/a_propos/compétences/sqlite.png'
import mysql from '../../assets/a_propos/compétences/mysql.png'

import html from '../../assets/a_propos/compétences/html.png'
import css from '../../assets/a_propos/compétences/css.png'
import boostrap from '../../assets/a_propos/compétences/boostrap.png'

import linux from '../../assets/a_propos/compétences/linux.png'
import docker from '../../assets/a_propos/compétences/docker.png'
import bash from '../../assets/a_propos/compétences/bash.png'

import git from '../../assets/a_propos/compétences/git.png'
import github from '../../assets/a_propos/compétences/github.png'
import gitlab from '../../assets/a_propos/compétences/gitlab.webp'

import figma from '../../assets/a_propos/compétences/figma.webp'
import trello from '../../assets/a_propos/compétences/trello.png'
import miro from '../../assets/a_propos/compétences/miro.png'


const Hardskills = () => {
    return (
        <div className="Hardskills">
            <div className="title-line hardskills-title">
                <div className="line"></div>
                <p className="txt-title">Hardskills</p>
                <div className="line"></div>
            </div>
            <div className="tab-zone">
                <div className='tab-hardskills'>
                        <div className='tab-line'>
                            <div className='category-box'>
                                <p className='txt-hardsoft'>Langage de programmation</p>
                            </div>
                            <div className='logo-list'>
                                <a href="https://www.python.org">
                                    <img src={python} alt="python_logo" />
                                </a>
                                <a href="https://learn.microsoft.com/fr-fr/dotnet/csharp">
                                    <img src={csharpe} alt="csharpe_logo" />
                                </a>
                                <a href="https://learn.microsoft.com/fr-fr/cpp/cpp">
                                    <img src={cplus} alt="cplus_logo" />
                                </a>
                                <a href="https://www.java.com/fr/">
                                    <img src={java} alt="java_logo" />
                                </a>
                                <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript">
                                    <img src={js} alt="js_logo" />
                                </a>
                                <a href="https://www.typescriptlang.org">
                                    <img src={ts} alt="ts_logo" />
                                </a>
                                <a href="https://go.dev">
                                    <img src={go} alt="go_logo" />
                                </a>
                                <a href="https://www.php.net">
                                    <img src={php} alt="php_logo" />
                                </a>
                            </div>
                        </div>

                        <div className='sep-tab-hardskills'></div>

                        <div className='tab-line'>
                            <div className='category-box'>
                                <p className='txt-hardsoft'>Frameworks et Bibliothèques</p>
                            </div>
                            <div className='logo-list'>
                                <a href="https://fr.react.dev">
                                    <img src={react} alt="react_logo" />
                                </a>
                                <a href="https://flask.palletsprojects.com/en/3.0.x/">
                                    <img src={flask} alt="flask_logo" />
                                </a>
                                <a href="https://www.djangoproject.com">
                                    <img src={django} alt="django_logo" />
                                </a>
                                <a href="https://dotnet.microsoft.com/fr-fr/download/dotnet">
                                    <img src={net} alt=".net_logo" />
                                </a>
                                <a href="https://avaloniaui.net">
                                    <img src={avalonia} alt="avalonia_logo" />
                                </a>
                                <a href="https://angular.dev">
                                    <img src={angular} alt="angular_logo" />
                                </a>
                                <a href="https://vitejs.dev">
                                    <img src={vite} alt="vita_logo" />
                                </a>
                                <a href="https://symfony.com">
                                    <img src={symfony} alt="symfony_logo" />
                                </a>
                            </div>
                        </div>

                        <div className='sep-tab-hardskills'></div>

                        <div className='tab-line'>
                            <div className='category-box'>
                                <p className='txt-hardsoft'>Bases de Données</p>
                            </div>
                            <div className='logo-list'>
                                <a href="https://sql.sh">
                                    <img src={sql} alt="sql_logo" />
                                </a>
                                <a href="https://www.sqlite.org">
                                    <img src={sqlite} alt="sqlite_logo" />
                                </a>
                                <a href="https://mariadb.org">
                                    <img src={mariadb} alt="mariadb_logo" />
                                </a>
                                <a href="https://www.postgresql.org">
                                    <img src={postgre} alt="postgre_logo" />
                                </a>
                                <a href="https://www.mysql.com/fr/">
                                    <img src={mysql} alt="mysql_logo" />
                                </a>
                            </div>
                        </div>

                        <div className='sep-tab-hardskills'></div>

                        <div className='tab-line'>
                            <div className='category-box'>
                                <p className='txt-hardsoft'>Technologies Front-End</p>
                            </div>
                            <div className='logo-list'>
                                <a href="https://developer.mozilla.org/fr/docs/Web/HTML">
                                    <img src={html} alt="html_logo" />
                                </a>
                                <a href="https://developer.mozilla.org/fr/docs/Web/CSS">
                                    <img src={css} alt="css_logo" />
                                </a>
                                <a href="https://getbootstrap.com">
                                    <img src={boostrap} alt="boostrap_logo" />
                                </a>
                            </div>
                        </div>

                        <div className='sep-tab-hardskills'></div>

                        <div className='tab-line'>
                            <div className='category-box'>
                                <p className='txt-hardsoft'>Outils et Plateformes DevOps</p>
                            </div>
                            <div className='logo-list'>
                                <a href="https://www.docker.com">
                                    <img src={docker} alt="docker_logo" />
                                </a>
                                <a href="https://www.linux.org">
                                    <img src={linux} alt="linux_logo" />
                                </a>
                                <img src={bash} alt="shellUnix_logo" />
                            </div>
                        </div>
                        <div className='sep-tab-hardskills'></div>

                        <div className='tab-line'>
                            <div className='category-box'>
                                <p className='txt-hardsoft'>Outils de Gestion de Version</p>
                            </div>
                            <div className='logo-list'>
                                <a href="https://git-scm.com">
                                    <img src={git} alt="git_logo" />
                                </a>
                                <a href="https://github.com">
                                    <img src={github} alt="github_logo" />
                                </a>
                                <a href="https://about.gitlab.com">
                                    <img src={gitlab} alt="gitlab_logo" />
                                </a>
                            </div>
                        </div>

                        <div className='sep-tab-hardskills'></div>

                        <div className='tab-line'>
                            <div className='category-box'>
                                <p className='txt-hardsoft'>Outils de Conception et Gestion de Projets</p>
                            </div>
                            <div className='logo-list'>
                                <a href="https://www.figma.com/fr-fr/">
                                    <img src={figma} alt="figma_logo" />
                                </a>
                                <a href="https://trello.com">
                                    <img src={trello} alt="trello_logo" />
                                </a>
                                <a href="https://miro.com/fr/">
                                    <img src={miro} alt="miro_logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Hardskills;
