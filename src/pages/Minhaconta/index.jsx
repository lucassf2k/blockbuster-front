import "./style.css"
import {SideBar} from "../../components/SideBar"
import {api} from "../../services/api"
import { useContext, useState } from "react"
import {Context} from "../../Context/AuthContext"
import {Wrapper} from "../../components/Wrapper"

export function Minhaconta (){

    const {handleLogout} = useContext(Context);    
    
    async function apagarUsuario(){
        const email = localStorage.getItem("@BLOCKBUSTER:email")        
        await api.delete(`user/${email}`);    
        handleLogout();
    }

    return(
        <Wrapper>

            <SideBar />

             <div className="container">

            <h2>Minha conta</h2>

            <h3>Nome</h3>
            <p>Fulano de Tal da Silva</p>

            <h3>E-mail</h3>
            <p>fulano@gmail.com</p>

            <div className="form">

                <form method="" action="">                    
                    <button className="btn excluir" type="button" onClick={apagarUsuario}>Excluir conta</button>
                </form>

            </div>
             </div>    

        </Wrapper>
    )
}