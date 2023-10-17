import TomateAlgo from "./views/projects/TomateAlgo";
import Spark from "./views/projects/Spark";
import AsbBank from "./views/projects/AsbBank";
import CFFC from "./views/projects/CFFC";
import DonMario from "./views/projects/DonMario";
import Etrotter from "./views/projects/Etrotter";
import Farmacity from "./views/projects/Farmacity";
import Intergroup from "./views/projects/Intergroup";
import Puntovino from "./views/projects/Puntovino";
import Silverstripe from "./views/projects/Silverstripe";
import Solarcity from "./views/projects/Solarcity";
import TheJournal from "./views/projects/TheJournal";
import Tracy from "./views/projects/Tracy";
import Wordpress from "./views/projects/Wordpress";

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
    solarcity: Solarcity,
    spark: Spark,
    'the-journal': TheJournal,
    'tomate-algo': TomateAlgo,
    tracy: Tracy,
    wordpress: Wordpress,
}

export function Project({subView}: ProjectTypeProp) {
    const ProjectComponent = Reflect.get(projectComponents, subView);
    return <ProjectComponent/>;
}