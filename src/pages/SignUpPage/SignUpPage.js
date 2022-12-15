import logo from '../../assets/logo.png';
import { SignUpContainer, DataContainer, TextContainer } from './signuppagecss'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUpPage() {
    const [email, setEmail] = ('');
    const [password, setPassword] = ('');
    const [name, setName] = ('');
    const [image, setImage] = ('');
    const navigate = useNavigate();

    function createAccount(e) {
        e.preventDefault();
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const body = {email: email, name: name, image: image, password: password};
        
        
        const promise = axios.post(URL, body);
        promise.then((res) => {
            alert('Cadastro realizado com sucesso!')
            navigate ('/')
        });
        promise.catch((err) => console.log(err.response.data));

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

                    <input
                        id='name'
                        type='text'
                        value={name}
                        placeholder='nome'
                        onChange={e => setName(e.target.value)}
                        required
                    />

                    <input
                        id='image'
                        type='text'
                        value={image}
                        placeholder='senha'
                        onChange={e => setImage(e.target.value)}
                        required
                    />

                    <button type='submit' >Cadastrar</button>
                </form>

                <TextContainer>
                    <Link to='/'>
                        <h3>Já tem uma conta? Faça login!</h3>
                    </Link>
                </TextContainer>
            </DataContainer>

        </SignUpContainer >
    );
}
