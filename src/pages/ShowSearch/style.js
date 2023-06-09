import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
    grid-area: content;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: grid;
    place-content: center;

    margin-top: 100px;
`;