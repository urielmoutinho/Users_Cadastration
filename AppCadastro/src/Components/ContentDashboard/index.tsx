import { ReactNode } from 'react';

import { Container } from './styles';

interface ContentDashboardProps {
  children: ReactNode;
}

function ContentDashboard({ children }: ContentDashboardProps) {
  return (
    <Container>
      <h1>ContentDashboard</h1>
      {children}
    </Container>
  );
};

export default ContentDashboard;
