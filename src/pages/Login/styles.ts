import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  > div {
    ${tw`md:mt-80 md:ml-44`}
    > div {
      ${tw`flex flex-row mb-14 gap-2`}
      img {
        ${tw`self-center
        `}
        width: 3.938rem;
        height: 1.5rem;
      }
      h2 {
        ${tw``}
        font-size: 1.75rem;
        line-height: 2.5rem;
      }
    }
  }
`;
