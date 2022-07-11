import { Container } from "./styles";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    return (
        <Container>
            <AiOutlineArrowLeft id='back' onClick={() => navigate('/')} />
        </Container>
    )

}

export default Header;
