import Hijo from "./Components/Hijo"

const Padre = (props) => {
    const {fruta,setNombre,nombre}=props
    return (
        <div>
            Padre {nombre}
            <Hijo fruta={fruta} setNombre={setNombre} />
        </div>
    )
}

export default Padre