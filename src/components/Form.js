import React, { useEffect, useRef } from "react";
import styled from "styled-components";


const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Form = ({ onEdit }) => {
  const ref = useRef();

  return (
    <FormContainer>
      <InputArea>
        <Label>Nome Livro</Label>
        <Input name="nome_livro" />
      </InputArea>
      <InputArea>
        <Label>Editora</Label>
        <Input name="editora"/>
      </InputArea>
      <InputArea>
        <Label>Ano Publicacao</Label>
        <Input name="ano_publicacao" type="date"/>
      </InputArea>
      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
}

export default Form