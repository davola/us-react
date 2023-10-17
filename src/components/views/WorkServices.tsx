import {DataServices} from "../../data/DataServices";
import {WorkProp} from "./Work";

export function WorkServices({workSubView}: WorkProp) {
    const workServices = DataServices.map((service) => {
        const ref = '/work/' + service.subView;
        const active = '';
        return (
            <li key={service.subView}>
                <a href={ref} className={active} onClick={workServiceClick} data-service="featured">{service.subView}</a>
            </li>
        );
    })
    return (
        <ul className="services">
            {workServices}
        </ul>
    );
}

function workServiceClick() {
    alert('Clicked!')
}

