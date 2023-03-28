import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  place-content: center;

  > main {
    min-width: 550px;
    grid-area: content;
    padding: 64px 0;

    > h1 {
      color: ${({ theme }) => theme.COLORS.ORANGE};
      font-family: 'Roboto Slab', serif;
    }

    > p {
      margin-bottom: 20px;
      font-family: 'Roboto Slab', serif;
    }

    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.ORANGE};
      text-transform: uppercase;
      font-size: 10px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 15px;
`;
