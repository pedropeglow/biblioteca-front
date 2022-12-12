import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Grid from "./components/Grid";
import GridAutores from "./components/GridAutores";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [livros, setLivros] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getLivros = async () => {
    try {
      const res = await axios.get("http://localhost:3030/api/livro");
      setLivros(res.data.sort((a, b) => (a.livro > b.livro ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getLivros();
  }, [setLivros]);

  return (
    <>
      <Container>
        <Title>Livros</Title>
        <Form
          onEdit={onEdit}
          setLivros={setLivros}
          setOnEdit={setOnEdit}
          getLivros={getLivros}
        />
        <Grid livros={livros} setLivros={setLivros} setOnEdit={setOnEdit} />
        <Title>Autores</Title>
        <GridAutores />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
