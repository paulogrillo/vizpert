// @ts-ignore  
import bgstripes from '../../styles/assets/bg_stripes.svg';
// @ts-ignore  
import logo from '../../styles/assets/logo.svg';
import { Container } from './style'
export function Header(){

    return(
       <Container>
           <div className='back-logo'>
               <img  className='logo' src={logo} alt="logo"/>
            </div>
           
            <img className='bgstripes' src={bgstripes} alt="Background Stripes"/>
       </Container>

    );
}