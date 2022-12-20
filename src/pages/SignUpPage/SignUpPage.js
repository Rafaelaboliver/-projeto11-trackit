import logo from '../../assets/logo.png';
import { SignUpContainer, DataContainer, TextContainer } from './signuppagecss'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    function createAccount(e) {
        e.preventDefault();
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const body = { email: email, name: name, image: image, password: password };


        const promise = axios.post(URL, body);
        promise.then((res) => {
            alert('Cadastro realizado com sucesso!')
            navigate('/')
        });
        promise.catch((err) => alert(err.response.data.message));

        setEmail('');
        setPassword('');
        setName('');
        setImage('');

    }

    return (
        <SignUpContainer>
            <img src={logo} alt='logo' />


            <DataContainer>
                <form onSubmit={createAccount}>
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

                    <input
                        id='name'
                        type='text'
                        value={name}
                        placeholder='nome'
                        onChange={e => setName(e.target.value)}
                        data-tes='name-input'
                        required
                    />

                    <input
                        id='image'
                        type='text'
                        value={image}
                        placeholder='imagem'
                        onChange={e => setImage(e.target.value)}
                        data-tes='user-image-input'
                        required
                    />

                    <button type='submit' data-tes='signup-btn'>Cadastrar</button>
                </form>

                <TextContainer>
                    <Link to='/' data-tes='login-link'>
                        <h3>Já tem uma conta? Faça login!</h3>
                    </Link>
                </TextContainer>
            </DataContainer>

        </SignUpContainer >
    );
}
