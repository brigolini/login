import React, {useState} from 'react';
import './App.css';
import {Button, TextField} from "@material-ui/core";


function App() {
	const [usuario, setUsuario] = useState("");
	const [senha, setSenha] = useState("");
	const [mensagem, setMensagem] = useState("");

	const handleLogin = () => {
		fetch("http://localhost:3000/login")
			.then(response=>{
				response.json()
					.then((data)=>{
						if ((data[0].usuario === usuario) && (data[0].senha === senha)){
							setMensagem("Usuario e senha corretos");
						} else {
							console.info(data)
							console.info(data.usuario);
							console.info(data.senha);
						}

					});
			})
	}
  return (
		<div className="app--div--principal">
			<div className="app--div-card--login">
				<TextField
					value={usuario}
					onChange={(input)=>{setUsuario(input.target.value)}} />
				<TextField
					value={senha}
					onChange={(input)=>{setSenha(input.target.value)}} />
				<Button onClick={handleLogin}>Entrar</Button>
				<div>{mensagem}</div>
			</div>
		</div>
  );
}

export default App;
