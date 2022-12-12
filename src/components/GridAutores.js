import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1000px;
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
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

const GridAutores = () => {
  const [posts, setAutores] = useState([]);
  const getAutores = async () => {
    try {
      const response = await axios.get("http://localhost:3030/api/autor");
      const autores = response.data;
      setAutores(autores.sort((a, b) => (a.id_livro > b.id_livro ? 1 : -1)));
    } catch (error) {
      console.log("Servidor não está disponível");
    }
  };

  useEffect(() => {
    getAutores();
  }, []);

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Autor</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {posts.map((item, i) => (
          <Tr key={i}>
            <Td width="%">{item.id_autor}</Td>
            <Td width="%">{item.nome_autor}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default GridAutores;
