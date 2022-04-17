import React, {Component} from "react";
import Imagenes from "../Images/Imagenes";
import '../Styles/Login.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AdminPage from '../components/Admin';

export default class Login extends Component{

render(){
    return(
        <BrowserRouter>
        <div className="contenedor">
            <div className="Linea" ></div>
            <h1 className="textInicio" >INCIO DE SESION</h1>
            <div className="Linea Linea--Abajo" ></div>
            <div className="campoUser">
                <div className='Icon_user'>   <img src={Imagenes.IconUser } alt="Icono de usuario"  />  </div>
                <input className=" Campotext" ></input>           
                </div>
            <br/>
            <div className="campoUser campoUser--config">
            <div className='Icon_user'>   <img src={Imagenes.IconClave } alt="Icono de clave"  />  </div>
                <input  type={"password"} className=" Campotext" ></input>
                </div>
            <br/>

            <button className="button" >INGRESAR</button>
            <br/>
            <a href="#">¿Olvido su contraseña?</a>
            <Link to='../components/Admin.js' className="button"  >Ingresar</Link>
        </div>

        <Routes>
            <Route path='../components/Admin.js' element={<AdminPage/>}        />

        </Routes>


        </BrowserRouter>
        )
    }
}








