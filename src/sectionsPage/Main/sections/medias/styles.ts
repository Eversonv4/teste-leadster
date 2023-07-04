import styled from "styled-components";

export const MediaContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border_light};
  & select {
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
    border: 1px solid #dfdfdf;
    border-radius: 2px;
    margin-right: 2rem;
    padding: 1rem;
    padding-right: 2rem;
  }
`;
