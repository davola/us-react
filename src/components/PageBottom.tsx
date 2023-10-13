import React from "react";
import {Menu} from "./Menu";

type PageBottomProps = {
    view: string;
}

type TextsType = {
    h3: string;
    h1: string;
    url: string;
}

function getFooterText(view: string): TextsType {
    let texts: TextsType = {
        h3: 'Want to give me a try? Wait no more and...',
        h1: 'Get a Quote',
        url: '/get-a-quote',
    }
    if (['home', 'why-hire-us', 'why-hire-freelance-development'].includes(view)) {
        texts = {
            h3: 'Take a look at some examples of...',
            h1: 'My Work',
            url: '/work',
        }
    }
    return texts;
}

export function PageBottom({view}: PageBottomProps) {
    const texts = getFooterText(view);
    return (
        <footer>
            <h1>{view}</h1>
            <header>
                <h3>{texts.h3}</h3>
                <h1 className="very-big"><a href={texts.url}>{texts.h1}</a></h1>
            </header>
            <div className="line">
                <div className="bg-blue"></div>
                <div className="bg-green"></div>
                <div className="bg-lime"></div>
            </div>
            <nav>
                <div className="container">
                    <Menu view={view} />
                </div>
            </nav>
        </footer>
    )
}