import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import rpgBack from "../assets/backrpg.jpg"
import { apiURL, Loading } from "../components/generics"

export default function RegisterPage(){
  const navigate = useNavigate()
  const [code, setCode] = useState("")
  const [username, setUsename] = useState("")
  const [pass, setPass] = useState("")
  const [pass2, setPass2] = useState("")
  const [load, setLoad] = useState(false)

  function submit(e){
    e.preventDefault()
    setLoad(true)
    const URL = apiURL+"signup"
    const body = {
        code,
        username,
        password: pass
    }
    const promise = axios.post(URL, body)
    
    promise.then((a)=>{
        navigate("/login")
        setLoad(false)
    })
    promise.catch((a)=>{
        const msg = a.response.data.message
        alert(msg)
        setLoad(false)
    })
}

  return (
    <RegisterStyle>
      <div className="alert">
        <h1>Registro</h1>
        <FormStyle onSubmit={submit}>
            <input
                type="text"
                placeholder="Codigo"
                value={code}
                onChange={e=> setCode(e.target.value)}
                required
                disabled={load === true ? "disabled" : ""}
            />
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e=> setUsename(e.target.value)}
                required
                disabled={load === true ? "disabled" : ""}
            />
            <input
                type="password"
                placeholder="Senha"
                value={pass}
                onChange={e=> setPass(e.target.value)}
                required
                disabled={load === true ? "disabled" : ""}
            />
            <input
                type="password"
                placeholder="Confirmar senha"
                value={pass2}
                onChange={e=> setPass2(e.target.value)}
                required
                disabled={load === true ? "disabled" : ""}
            />
            <button 
                type="submit"
                disabled={pass !== pass2 ? "disabled" : "" || load === true ? "disabled" : ""}
            >{load === false ? "Cadastrar" : <Loading/>}</button>
            
            <button
                className="register"
                disabled={load === true ? "disabled" : ""}
                onClick={()=> navigate("/login")}
            >Já tem uma conta? Entre agora!
            </button>
        </FormStyle>
      </div>        
    </RegisterStyle>
  )
}

const RegisterStyle = styled.div`
  background-image: url(${rpgBack});
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .alert{
    width: 40%;
    height: 80%;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in-out;
  }
  h1{
    margin-bottom: 42px;
    color: #424242;
  }
`
const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
   
    input{
        border-radius: 8px;
        padding: 16px;
        border: none;
        margin-bottom: 7px;
        font-weight: 700;
        }
        
        div{
            display: flex;
            gap: 7px;
            input{
                width: 100%;
            }
        }
        button{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            padding: 14px;
            border: none;
            margin-top: 14px;
            color: #424242;
            background-color: #75ffff;
            font-weight: 700;
            font-size: 18px;
        }
        .register{
            background-color: transparent;
            font-size: 16px;
            font-weight: 700;
        }
`