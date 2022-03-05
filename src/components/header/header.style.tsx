import styled from "styled-components";

export const Logo = styled.img<{width?: string, height?: string}>`
  width: ${( props: any) => props?.width || '50px'};
  height: ${(props: any) => props?.height || '50px'};
  overflow: hidden;
`;
