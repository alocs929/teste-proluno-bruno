import React, { useCallback, useState } from 'react';
import { FiPlus, FiSearch, FiList, FiEdit } from 'react-icons/fi';
import Dialog from 'rc-dialog';
import 'rc-dialog/assets/index.css';
import Button from '../../components/Button';
import Course from '../../components/Course';
import SideNavigation from '../../components/SideNavigation';
import {
  Container,
  Content,
  Header,
  ListCourses,
  NoCourses,
  DialogBox,
} from './styles';

interface Course {
  title: string;
}
const Dashboard: React.FC = () => {
  const [inputChange, setInputChange] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [isRedeSelected, setIsRedeSelected] = useState(true);
  const handleAlterRedeSelect = useCallback(() => {
    setIsRedeSelected(!isRedeSelected);
  }, [isRedeSelected]);

  const handleAlterDialogVisible = useCallback(() => {
    setDialogVisible(!dialogVisible);
  }, [dialogVisible]);

  const handleCloseDialog = useCallback(() => {
    handleAlterDialogVisible();
    setInputChange('');
  }, [handleAlterDialogVisible]);

  const handleAddCourse = useCallback(() => {
    if (inputChange !== '') {
      setCourses([...courses, { title: inputChange }]);
      handleAlterDialogVisible();
      setInputChange('');
    }
  }, [courses, handleAlterDialogVisible, inputChange]);

  return (
    <Container>
      <SideNavigation />
      <Content>
        <Header isRedeSelected={isRedeSelected}>
          <h1>Cursos</h1>
          <div className="title">
            <h3>Cursos</h3>
            <Button onClick={handleAlterDialogVisible} icon={FiPlus}>
              <h4>NOVO CURSO</h4>
            </Button>
          </div>
          <div className="search">
            <div className="input">
              <FiSearch />
              <input
                type="text"
                placeholder="Pesquisar curso por nome ou instituto"
              />
            </div>

            <div className="selectSearch">
              <button
                onClick={handleAlterRedeSelect}
                className="buttonFrist"
                type="button"
              >
                <FiList />
                <h5>REDE</h5>
              </button>
              <button
                onClick={handleAlterRedeSelect}
                className="buttonSecond"
                type="button"
              >
                <FiList />
                <h5>LISTA</h5>
              </button>
            </div>
          </div>
        </Header>

        <ListCourses>
          {courses.length !== 0 ? (
            courses.map((item: Course, index: number) => {
              const n = index;
              return <Course key={`${item.title}${n}`} title={item.title} />;
            })
          ) : (
            <NoCourses>
              <FiEdit />
              <h2>Fico feliz em ter você a bordo!</h2>

              <p>
                Vamos fazer mágia e criar seu primeiro curso. Se deseja um guia
                durante o processo, clique neste&nbsp;
                <a href="https://google.com.br">
                  artigo em nossa base de conhecimento.
                </a>
              </p>
              <Button onClick={handleAlterDialogVisible} icon={FiPlus}>
                <h4>NOVO CURSO</h4>
              </Button>
            </NoCourses>
          )}
        </ListCourses>
        <Dialog
          title="Nome do seu novo curso"
          visible={dialogVisible}
          animation="zoom"
          maskAnimation="fade"
          onClose={handleCloseDialog}
          forceRender
        >
          <DialogBox>
            <input
              type="text"
              value={inputChange}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputChange(e.target.value);
              }}
            />
            <p>Não se preocupe, você poderá alterar o nome depois.</p>

            <footer>
              <Button onClick={handleAlterDialogVisible} className="buttonback">
                BACK
              </Button>
              <Button onClick={handleAddCourse}>CRIAR CURSO</Button>
            </footer>
          </DialogBox>
        </Dialog>
      </Content>
    </Container>
  );
};

export default Dashboard;
