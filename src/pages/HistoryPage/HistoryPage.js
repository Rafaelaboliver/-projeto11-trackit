import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/Navbar/Navbar";
import { HeaderHistory, MainContainer } from "./historypagecss";

export default function HistoryPage() {
    return (
        <MainContainer>
            <Navbar/>

                <HeaderHistory>
                    <h1>Histórico</h1>
                    <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
                </HeaderHistory>
            <Menu/>
        </MainContainer>
    );
}
