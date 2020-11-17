import React from 'react';
import { FiFileText, FiCoffee, FiInstagram, FiPhone } from 'react-icons/fi';
import { Container, Title, Topico, SubTopico } from './styles';

const SiteNavigation: React.FC = () => {
  return (
    <Container>
      <Title>PROLUNO</Title>
      <Topico>
        <div>
          <FiFileText />
          <h2>Gerenciamento de Produtos</h2>
        </div>
        <ul>
          <SubTopico isSelect>Cursos</SubTopico>
          <SubTopico>Categorias</SubTopico>
          <SubTopico>Instrutores</SubTopico>
          <SubTopico>Videoteca</SubTopico>
          <SubTopico>Divida e receita</SubTopico>
        </ul>
      </Topico>

      <Topico>
        <div>
          <FiCoffee />
          <h2>Livros</h2>
        </div>
        <SubTopico>Harry Potter</SubTopico>
        <SubTopico>Programação 1</SubTopico>
        <SubTopico>ReactJS</SubTopico>
      </Topico>

      <Topico>
        <div>
          <FiInstagram />
          <h2>Redes</h2>
        </div>
        <SubTopico>Facebook</SubTopico>
        <SubTopico>Intagram</SubTopico>
        <SubTopico>Linkedin</SubTopico>
      </Topico>
      <Topico>
        <div>
          <FiPhone />
          <h2>Gerenciamento de Chamadas</h2>
        </div>
        <SubTopico>(85) 9 1234-1234</SubTopico>
        <SubTopico>(85) 9 1234-1234</SubTopico>
        <SubTopico>(85) 9 1234-1234</SubTopico>
      </Topico>
    </Container>
  );
};

export default SiteNavigation;
