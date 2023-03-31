import "./index.css"


export function Cards({ info, children }) {
    const { type, description, value } = info;
    return (

        <li>
            <div className="box1">
                <h2>{description}</h2>
                <span>{type}</span>
            </div>
            
            <div className="box2">
                <span>R$ {value}</span>
                {children}

            </div>


        </li>

    )
}