import { ReactNode } from 'react';
import { Container,Button } from './styles';
import vivologo from './../../Assets/logo vivo.png'

interface HeaderProps {

}

function Header() {
  return (
    <Container>
      <button className='cadastros'>Cadastro de usuários</button>
      <button className='cadastros'>Cadastro de linhas</button>
      <Button>VIVO</Button>

    </Container>
  );
};

export default Header;
