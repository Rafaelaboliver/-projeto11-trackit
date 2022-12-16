import { Header } from "./navbarcss";
import { UserInfoContext } from '../../contexts/UserInfoContext';
import { useContext } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    const { image } = useContext(UserInfoContext);
    return (
        <Header>

            <p>TrackIt</p>

            <img src={image} alt='user image' />
        </Header>
    );
}
