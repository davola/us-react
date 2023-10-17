import {CurrentServiceProps} from "./WebApplication";
import {ServiceRelatedWork} from "./ServiceRelatedWork";
import {ServiceOthers} from "./ServiceOthers";
import parse from "html-react-parser";

export default function ECommerce({currentService}: CurrentServiceProps) {
    return (
        <main className="service">
            <h1>E Commerce</h1>
            <h2>{parse(currentService.desc)}</h2>
        </main>
    )
}