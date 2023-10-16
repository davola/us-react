import {DataServices, DataServiceType} from "../../dara/DataServices";
import parse from 'html-react-parser';
import React from "react";

export function ServiceItems() {
    const items = DataServices.map(serviceItem =>
        <ServiceItem item={serviceItem}/>
    )

    return (
        <div className="row">
            {items}
        </div>
    )
}

export function ServiceItem({item}: { item: DataServiceType }) {
    return (
        <div className="col-md-6">
            <a className="btn-cuad" href={item.link}>
                <img src={item.image} alt={item.title}/>
                <h2>{parse(item.title)}</h2>
                <h3>{parse(item.desc)}</h3>
                <div className="btn wire">Learn more</div>
            </a>
        </div>
    )
}

export default function Services() {
    return (
        <main className="services">
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <h1 className="big">I do <span className="text-red">develop software</span> for the internet
                            </h1>
                            <h3>
                                <span className="star red"></span>I provide a vast array of <strong>freelance software
                                development</strong> services
                                with frameworks such as
                                <a href="http://symfony.com" target="_blank"><strong className="green">Symfony</strong></a>,
                                <a href="http://angular.io" target="_blank"><strong
                                    className="red">AngularJS</strong></a>,
                                <a href="http://phonegap.com" target="_blank"><strong className="blue">Phonegap</strong></a> or
                                <a href="http://magento.com" target="_blank"><strong className="orange">Magento</strong></a>.
                            </h3>
                        </div>
                    </div>
                </div>
            </header>

            <section className="software">
                <div className="container">
                    <h1>Freelance software development</h1>
                    <br/>
                    <ServiceItems/>
                </div>
            </section>
        </main>
    )
}