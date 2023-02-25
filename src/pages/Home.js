import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import rpgBack from "../assets/backrpg.jpg"

export default function HomePage(){
  const [op, setOp] = useState(0)
  const [op2, setOp2] = useState(0)
  const navigate = useNavigate()

  useEffect(()=>{
    setTimeout(() => {setOp(0.7)}, 1200);
    setTimeout(() => {setOp2(1)}, 2300);
  },[])

  return (
    <HomeStyle opacity={{op, op2}}>
      <div className="alert">
        <h1>Bem vindo!</h1>
        <span/>
        <button onClick={()=>navigate("/login")}>Entrar</button>
        <button onClick={()=>navigate("/register")}>Registrar</button>
      </div>        
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
  background-image: url(${rpgBack});
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .alert{
    opacity: ${props => props.opacity.op};
    width: 33%;
    height: 50%;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in-out;
    
    h1{
      transition: all 1s ease-in-out;
      margin-bottom: 28px;
    }

    button{
      opacity:  ${props => (props.opacity.op2)};;
      margin-block: 4px;
      padding: 6px;
      width: 40%;
      transition: all 0.8s ease-in-out;
      font-size: 18px;
      border: 0;
      cursor: pointer;
    }
      
  }
`