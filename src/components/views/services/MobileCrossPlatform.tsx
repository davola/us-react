import {CurrentServiceProps} from "./WebApplication";
import parse from "html-react-parser";

export default function MobileCrossPlatform({currentService}: CurrentServiceProps) {
    return (
        <main className="service">
            <h1>Mobile Cross Platform</h1>
            <h2>{parse(currentService.desc)}</h2>
        </main>
    )
}