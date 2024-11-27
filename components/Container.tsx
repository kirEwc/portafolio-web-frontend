import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="pl-32 pr-32">
      {children}
    </div>
  );
};

export default Container;
