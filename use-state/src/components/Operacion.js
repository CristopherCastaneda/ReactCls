import React, { useState } from "react";

const CondiMat = (suma) => {
    return `Valor ${suma}`;
};

const Operacion = (props) => {
    const [suma, setSuma] = useState(props.suma)

    const sumar = () => setSuma(suma + 1)

    const restar = () => {
        if (suma > 0)
            setSuma(suma - 1)
    }

    return (
        <div>
            <div>{CondiMat(suma)}</div>
            <button disabled={suma <= 0} onClick={restar}>Restar</button>
            <button onClick={sumar}>Sumar</button>
        </div>
    );
};

export default Operacion;
