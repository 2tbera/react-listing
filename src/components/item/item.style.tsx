import styled from "styled-components";

export const ItemStyle = styled.div<{background?: string}>`
  background: ${(props) => props?.background || ''};
`;

export const ItemImg = styled.img<{width?: string; height?: string}>`
  width: ${(props) => props?.width || ''};
  height: ${(props) => props?.height || ''};
`;
