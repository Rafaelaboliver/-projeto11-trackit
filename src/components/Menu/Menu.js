import { Link } from "react-router-dom";
import { MenuContainer } from "./menucss";
import ProgressBar from "./ProgressBar";

export default function Menu() {
    return (
        <MenuContainer data-tes='menu'>
            <Link to='/habitos' data-tes='habit-link'>
                <button>Hábitos</button>
            </Link>

            <Link to='/hoje' data-tes='today-link'>
                <ProgressBar />
            </Link>

            <Link to='/historico' data-tes='history-link'>
                <button>Histórico</button>
            </Link>
        </MenuContainer>
    );
}