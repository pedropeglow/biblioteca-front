import React from "react";
import styled from "styled-components";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import "../styles/style.css";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ livros, setLivros, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id_livro) => {
    await axios
      .delete("http://localhost:3030/api/livro/" + id_livro)
      .then(({ data }) => {
        const newArray = livros.filter((livro) => livro.id_livro !== id_livro);

        setLivros(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome Livro</Th>
          <Th>Editora</Th>
          <Th>Ano Publicação</Th>
          <Th>Id do Autor</Th>
        </Tr>
      </Thead>
      <Tbody>
        {livros.map((livro, i) => (
          <Tr key={i}>
            <Td width="30%">{livro.nome_livro}</Td>
            <Td width="20%">{livro.editora}</Td>
            <Td width="30%" onlyWeb>
              {livro.ano_publicacao}
            </Td>
            <Td width="20%" onlyWeb>
              {livro.id_autor}
            </Td>
            <Td alignCenter width="5%">
              <FaEdit className="botaoEdit" onClick={() => handleEdit(livro)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash
                className="botaoTrash"
                onClick={() => handleDelete(livro.id_livro)}
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
