import styled from "@emotion/styled";
import { FaGithub } from "react-icons/fa"

export const Container = styled.div`
  max-width: 400px;
  margin: 1rem auto;
`;

export const Form = styled.form`
  max-width: 250px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const Name = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 1rem;
`;

export const NoUsers = styled.div`
  color: black;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`

export const Github = styled(FaGithub)`
  font-size: 120px;
`

export const Message = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
`

export const NameContainer = styled.div`
  display: flex; 
  gap: 5px;
  align-items: center;
  font-size: 23px;
  cursor: pointer;
`