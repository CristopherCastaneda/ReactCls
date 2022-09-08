import Padre from "./Padre"
const Abuelo = (props) =>{
      const {fruta,setNombre,Nombre} =props;

    const miObjeto={
        prop1: 1,
        prop2: true,
        prop3: "tres",

    }
    const {prop3}= miObjeto;

    return (
        <div>Padre
            <Padre fruta={fruta} setNombre={Nombre} Nombre={Nombre}  />
        </div>
    )
}

export default Abuelo