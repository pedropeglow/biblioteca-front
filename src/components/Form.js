import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  flex-wrap: wrap;
  background-color: #3B70A2;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #fff
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: ##70C2E8;
  color: black;
  height: 42px;
  &:hover {
    background-color: lightblue;
  }
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Form = ({ getLivros, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const livro = ref.current;

      livro.nome_livro.value = onEdit.nome_livro;
      livro.editora.value = onEdit.editora;
      livro.ano_publicacao.value = onEdit.ano_publicacao;
      livro.id_autor.value = onEdit.id_autor;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const livro = ref.current;

    if (
      !livro.nome_livro.value ||
      !livro.editora.value ||
      !livro.ano_publicacao.value ||
      !livro.id_autor.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:3030/api/livro/" + onEdit.id_livro, {
          nome_livro: livro.nome_livro.value,
          editora: livro.editora.value,
          ano_publicacao: livro.ano_publicacao.value,
          id_autor: livro.id_autor.value,
        })
        .then(({ data }) => toast.success(data))
        .then(({ data }) => console.log(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:3030/api/livro", {
          nome_livro: livro.nome_livro.value,
          editora: livro.editora.value,
          ano_publicacao: livro.ano_publicacao.value,
          id_autor: livro.id_autor.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    livro.nome_livro.value = "";
    livro.editora.value = "";
    livro.ano_publicacao.value = "";
    livro.id_autor.value = "";

    setOnEdit(null);
    getLivros();
    onsubmit = this.props.getLivros();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome Livro</Label>
        <Input name="nome_livro" />
      </InputArea>
      <InputArea>
        <Label>Editora</Label>
        <Input name="editora" />
      </InputArea>
      <InputArea>
        <Label>Ano Publicação</Label>
        <Input name="ano_publicacao" type="date" />
      </InputArea>
      <InputArea>
        <Label>ID Autor</Label>
        <Input name="id_autor" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
