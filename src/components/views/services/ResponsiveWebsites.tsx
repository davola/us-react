import {CurrentServiceProps} from "./WebApplication";
import parse from "html-react-parser";

export default function ResponsiveWebsites({currentService}: CurrentServiceProps) {
    return (
        <main className="service">
            <h1>Responsive Websites</h1>
            <h2>{parse(currentService.desc)}</h2>
        </main>
    )
}