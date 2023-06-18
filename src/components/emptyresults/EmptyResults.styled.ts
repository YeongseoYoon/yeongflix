import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  padding: 30px;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
`;

export const EmptyIcon = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
`;

export const EmptyMessage = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const EmptyMessageContent = styled.p`
  font-size: 24px;
`;

export const Keyword = styled.span`
  font-weight: bold;
`;
