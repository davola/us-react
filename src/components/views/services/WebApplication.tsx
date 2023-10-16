import {DataServices, DataServiceType} from "../../../dara/DataServices";
import {ServiceRelatedWork} from "./ServiceRelatedWork";
import {ServiceOthers} from "./ServiceOthers";

export type CurrentServiceProps = {
    currentService: DataServiceType;
}

export default function WebApplication({currentService}: CurrentServiceProps) {
    return (
        <main className="service">
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <h1 className="big"><span
                                className="mini left">I design and develop <strong>PHP</strong> and <strong>JavaScript</strong> </span>Web
                                Applications <span
                                    className="mini right">with <strong>Symfony</strong> and <strong>AngularJS</strong></span>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            <section className="overview">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <h1 className="outer-star"><span className="star orange"></span> I develop fast, secure, and
                                scalable web applications to suit your needs.</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-md-push-1">
                            <h3 className="text-left">Our solutions are based on leading frameworks like Symfony and
                                AngularJS.</h3>
                            <p>&nbsp;</p>
                            <p>As full-stack developers, we have the ability to develop both the frontend and the
                                backend of the web
                                application.</p>
                            <p>I can take charge of the whole development process, or work remotely as part of a larger
                                team.</p>
                            <p>I develop our backend software with PHP using the open-source framework <a
                                href="http://symfony.com/" target="_blank" rel="noreferrer">Symfony</a>.</p>
                            <p>When it comes to the frontend development we prefer Google's <a
                                href="https://angular.io/" target="_blank" rel="noreferrer">AngularJS</a> framework, but
                                we also
                                have experience working with others such as <a href="http://backbonejs.org/"
                                                                               target="_blank" rel="noreferrer"
                                >BackeboneJS</a>, and <a
                                    href="http://facebook.github.io/react/" target="_blank" rel="noreferrer">ReactJS</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tech">
                <div className="container">
                    <h1>Web application development frameworks</h1>
                    <div className="row">
                        <div className="col-md-5">
                            <img src="/uploads/logos/400x200/symfony-gray.png" alt="Symfony"/>
                        </div>
                        <div className="col-md-7">
                            <h4>Symfony</h4>
                            <p>I specialize in PHP software development with <a href="http://symfony.com/"
                                                                                target="_blank" rel="noreferrer"
                            >Symfony</a>, the leading
                                PHP framework for building web applications. </p>
                            <p>It promotes best practices and standardization and provides a vast array of reusable
                                components.</p>
                            <p>As a very well-documented tool with a large community of developers around the globe,
                                Symfony is the smartest choice for your web app.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 col-md-push-7">
                            <img src="/uploads/logos/400x200/angular-gray.png"
                                 alt="Angular JS"/>
                        </div>
                        <div className="col-md-7 col-md-pull-5">
                            <h4>AngularJS</h4>
                            <p><a href="https://angularjs.org/" target="_blank" rel="noreferrer">AngularJS</a> and <a
                                href="https://angular.io/" target="_blank" rel="noreferrer">AngularJS 2.0</a> help us work
                                better
                                with the dynamic HTML views of a web application.</p>
                            <p>They allow us to build more reliable apps and with more readable code faster.</p>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <img src="/uploads/logos/400x200/bootstrap-gray.png"
                                 alt="Wordpress"/>
                        </div>
                        <div className="col-md-7">
                            <h4>Twitter Bootstrap</h4>
                            <p>I deliver working prototypes faster with the <a href="http://getbootstrap.com/"
                                                                               target="_blank" rel="noreferrer">Twitter
                                Bootstrap framework</a>.</p>
                            <p>It helps us build mobile-first projects that are fully compatible with a large set of
                                devices thanks to its rock-solid responsive grid system.</p>
                            <p>I use to code using CSS preprocessors like Less or Sass before deploying our precompiled
                                and minified production ready CSS to the project.</p>
                        </div>
                    </div>
                </div>
            </section>
            <ServiceRelatedWork currentService={currentService}/>
            <ServiceOthers currentService={currentService}/>
        </main>
    )
}