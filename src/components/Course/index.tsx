import React from 'react';
import { FiBook } from 'react-icons/fi';
import { Container } from './styles';

interface ICourseProps {
  title: string;
}

const Course: React.FC<ICourseProps> = ({ title }: ICourseProps) => (
  <Container>
    <div>
      <FiBook />
      <h1>{title}</h1>
    </div>
    {/* {children} */}
  </Container>
);

export default Course;
