// @ts-ignore  
import img from '../../styles/assets/bg_stripes.svg';
import { Container } from './style'
export function Header(){

    return(
       <Container>
            <img src={img} alt="Background Stripes"/>
       </Container>

    );
}