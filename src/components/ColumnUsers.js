import { useNavigate } from "react-router-dom";
import Imagenes from "../Images/Imagenes";

export default function ColumnUsers(){

    const Nombre = "Nombre Admin HERE";

    const navigate = useNavigate();

    const handleClick = ( ) =>{
        navigate("/");
    }
    const HorayFecha = new Date();

    return(
        <div>
            <div className='logo_user'>   <img src={Imagenes.ImgUser } alt="Logo de Palmeras del llano"  />  </div>                
            <div> {Nombre} </div>
            <div>Cargo: Administrador</div>
            <div>----------------</div>
            <button>INICIO</button> <br/>
            <button>REGISTROS</button> <br/>
            <button>USUARIOS</button> <br/>
            <button onClick={handleClick}   >SALIR</button> <br/>
            <div> HorayFecha </div>

        </div>  
    );






}