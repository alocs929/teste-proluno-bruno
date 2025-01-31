import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<ButtonProps> = ({ children, icon: Icon, ...res }) => (
  <Container type="button" {...res}>
    {Icon && <Icon />}
    {children}
  </Container>
);

export default Button;
