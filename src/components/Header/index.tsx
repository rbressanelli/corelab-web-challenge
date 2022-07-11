import { Container } from "./styles";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { useVehicle } from "../../Providers/vehicles";

const Header = () => {

    const navigate = useNavigate()
    const { setBrand, setColor, setYear, setMinValue, setMaxValue } = useVehicle()

    const handleClick = () => {
        setBrand(undefined)
        setColor(undefined)
        setYear(undefined)
        setMaxValue(undefined)
        setMinValue(undefined)
        navigate('/')
    }

    return (
        <Container>
            <AiOutlineArrowLeft id='back' onClick={() => handleClick()} />
        </Container>
    )

}

export default Header;
