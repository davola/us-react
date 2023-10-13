type ServiceWorkItemProps = {
    workTag: string;
}

export function ServiceWorkItem({workTag}: ServiceWorkItemProps) {
    return (
        <a data-controller="Project" href="/project/'.$portfolio->class.'" data-page-title="'.$portfolio->pagetitle.'">
            <article className="project etrotter">
                <h1><span>CUSTOMIZE!!!</span></h1>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h3 className="subtitle">I designed and developed this responsive online store for the Argentine
                            electric bike
                            brand Etrotter.</h3>
                    </div>
                </div>

                <div className="image">
                    <img src="/uploads/project/etrotter.ecommerce.jpg" alt=""/>
                </div>
            </article>
        </a>
    )
}