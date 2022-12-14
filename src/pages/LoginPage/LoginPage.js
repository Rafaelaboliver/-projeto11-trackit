import { LoginContainer, DataContainer, TextContainer } from './loginpagecss';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useContext } from 'react';
import { UserInfoContext } from '../../contexts/UserInfoContext';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setToken } = useContext(UserInfoContext);
    const {setImage} = useContext(UserInfoContext)

    function handleLogin(e) {
        e.preventDefault();
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const body = { email: email, password: password };

        const promise = axios.post(URL, body);
        promise.then((res) => {
            setToken(res.data.token)
            setImage(res.data.image)
            console.log(res.data)
            navigate('/habitos')
        });
        promise.catch((err) => alert(err.response.data));
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
                        data-tes='email-input'
                        required
                    />

                    <input
                        id='password'
                        type='password'
                        value={password}
                        placeholder='senha'
                        onChange={e => setPassword(e.target.value)}
                        data-tes='password-input'
                        required
                    />

                    <button type='submit' data-tes='login-btn'>Entrar</button>
                </form>
            </DataContainer>


            <TextContainer>
                <Link to='/cadastro' data-tes='signup-link'>
                    <h3>N??o tem conta? Cadastre-se!</h3>
                </Link>
            </TextContainer>

        </LoginContainer>
    );
}
