import axios from "axios";
import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled,  { createGlobalStyle } from "styled-components";
import { apiURL, AuthContext } from "./components/generics";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";

function App() {
  const [user, setUser] = useContext(AuthContext)

  useEffect(()=>{
    console.log(window.location.href)
    const URL = apiURL+"renew"
    setInterval(() => {
      if(user){
        const config = {headers: { "Authorization": "Bearer "+user.token }}
        const promise = axios.post(URL, {}, config)
        promise.catch((a)=>{
          const msg = a.response.data;
          alert(msg)})
          
        promise.then(()=>{
          console.log("renovado")})
      }
  }, 20000);
  }, [])

  return (
    <>
      <GlobalStyle />  
      <AppStyle>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
          </Routes>
        </BrowserRouter>
      </AppStyle>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Quicksand';
}
`

const AppStyle = styled.div`
  height: 100vh;
  width: 100vw;
`