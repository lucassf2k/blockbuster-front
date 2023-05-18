import "./style.css"
import {SideBar} from "../../components/SideBar"
import {api} from "../../services/api"
import { useContext, useEffect, useState } from "react"
import {Context} from "../../Context/AuthContext"
import {Wrapper} from "../../components/Wrapper"

export function Minhaconta (){
    const [user, setUser] = useState({});
    const {handleLogout} = useContext(Context);

    async function loadUser() {
      const email = localStorage.getItem("@BLOCKBUSTER:email")
      try {
        const {data} = await api.get(`user/email/${email}`);
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    }

    async function apagarUsuario(){
        const email = localStorage.getItem("@BLOCKBUSTER:email")
        try {
          await api.delete(`user/${email}`);
          handleLogout();
        } catch (err) {
          console.log(err);
        }
    }

   useEffect(() => {
    loadUser();
   }, [])

    return(
        <Wrapper>

            <SideBar />

             <div className="container">

            <h2>Minha conta</h2>


            <h3>E-mail</h3>
            <p>{user.email}</p>
            <h3>Nascimento</h3>
            <p>{user.nascimento}</p>

            <div className="form">

                <form method="" action="">
                    <button className="btn excluir" type="button" onClick={apagarUsuario}>Excluir conta</button>
                </form>

            </div>
             </div>

        </Wrapper>
    )
}
