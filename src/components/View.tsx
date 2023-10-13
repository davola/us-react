type ViewProps = {
    view: string;
}

export default function View({view}: ViewProps) {
    return (
        <div>
            <h2>Current VIEW is</h2>
            <h1>{view}</h1>
        </div>
    );
}