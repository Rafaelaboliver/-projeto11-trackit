import { LoginContainer, DataContainer, TextContainer } from './loginpagecss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
    const [email, setEmail] = ('');
    const [password, setPassword] = ('');

    function handleLogin(e) {
        e.preventDefault();
        const body = { email: email, password: password };
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';

        const promise = axios.post(URL, body);
        promise.then((res) => console.log(res.data));
        promise.catch((err) => console.log(err.responde.data));
    }

    return (
        <LoginContainer>
            <img src={logo} alt='logo' />


            <DataContainer>
                <form onSubmit={handleLogin}>
                    <input
                        id='email'
                        type='email'
                        value={email}
                        placeholder='email'
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <input
                        id='password'
                        type='password'
                        value={password}
                        placeholder='senha'
                        onChange={e => setPassword(e.target.value)}
                        required
                    />

                    <button type='submit' >Entrar</button>
                </form>
            </DataContainer>


            <TextContainer>
                <Link to='/cadastro'>
                    <h3>Não tem conta? Cadastre-se!</h3>
                </Link>
            </TextContainer>

        </LoginContainer>
    );
}
