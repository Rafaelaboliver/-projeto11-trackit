import { Link } from "react-router-dom";
import { MenuContainer } from "./menucss";
import ProgressBar from "./ProgressBar";

export default function Menu() {
    return (
        <MenuContainer>
            <Link to='/habitos'>
                <button>Hábitos</button>
            </Link>

            <Link to='/hoje'>
                <ProgressBar />
            </Link>

            <Link to='/historico'>
                <button>Histórico</button>
            </Link>
        </MenuContainer>
    );
}