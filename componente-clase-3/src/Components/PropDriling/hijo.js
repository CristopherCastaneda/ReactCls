
const Hijo = ({fruta,setNombre}) => {

    return (
        <div>
            <span>Hijo recibe:{fruta}</span>
            <button onClick={()=>{setNombre('Ferdi')}}>Cambiar nombre</button>
        </div>
    )
}

export default Hijo