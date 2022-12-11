import React from "react";
import styled from "styled-components";
import axios from "axios"
import { FaTrash, FaEdit } from "react-icons/fa"

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

const Grid = ({livros}) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome Livro</Th>
          <Th>Editora</Th>
          <Th>Ano Publicação</Th>
        </Tr>
      </Thead>
      <Tbody>
      {livros.map((livro, i) => (
          <Tr key={i}>
            <Td width="30%">{livro.nome_livro}</Td>
            <Td width="30%">{livro.editora}</Td>
            <Td width="20%" onlyWeb>
              {livro.ano_publicacao}
            </Td>
            <Td alignCenter width="5%">
              <FaEdit />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );

}

export default Grid;