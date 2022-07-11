import { ReactNode } from 'react';
import Cadastros from '../Cadastros'
import { Container } from './styles';
import Header from '../Header'
import CardsDashboard from '../CardsDashboard';
interface DashboardProps {

}

function Dashboard() {
  return (
    
        <Container>
          <Header/>
          <Cadastros/>
          <CardsDashboard/>

        </Container>
    

  );
};

export default Dashboard;
