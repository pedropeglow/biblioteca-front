import React, { useState, useEffect } from "react";
import API from "../services/Api";
import MeuCard from "./MeuCard";

function ListaLivros() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    API.get("/livro")
      .then((response) => setLivros(response.data))
      .catch((err) => console.log(err));
  }, []);

  return livros.map((livro) => (
    <MeuCard key={livro.idLivro} titulo={livro.nome_livro}>
      <h4>Editora: {livro.editora}</h4>
    </MeuCard>
  ));
}

export default ListaLivros;
