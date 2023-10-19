import TomateAlgo from "./projects/TomateAlgo";
import Spark from "./projects/Spark";
import AsbBank from "./projects/AsbBank";
import CFFC from "./projects/CFFC";
import DonMario from "./projects/DonMario";
import Etrotter from "./projects/Etrotter";
import Farmacity from "./projects/Farmacity";
import Intergroup from "./projects/Intergroup";
import Puntovino from "./projects/Puntovino";
import Silverstripe from "./projects/Silverstripe";
import Solarcity from "./projects/Solarcity";
import TheJournal from "./projects/TheJournal";
import Tracy from "./projects/Tracy";
import Wordpress from "./projects/Wordpress";

type ProjectTypeProp = {
    subView: string;
}

const projectComponents: {} = {
    'asb-bank': AsbBank,
    cffc: CFFC,
    'don-mario': DonMario,
    etrotter: Etrotter,
    farmacity: Farmacity,
    intergroup: Intergroup,
    puntovino: Puntovino,
    silverstripe: Silverstripe,
    'solarcity': Solarcity,
    spark: Spark,
    'the-journal': TheJournal,
    'tomate-algo': TomateAlgo,
    tracy: Tracy,
    wordpress: Wordpress,
}

export function Project({subView}: ProjectTypeProp) {
    const ProjectComponent = Reflect.get(projectComponents, subView);
    console.log(subView);
    return <ProjectComponent/>;
}