import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`rounded`}
  background: var(--white);
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  width: 20rem;
  height: 12rem;
  .tools {
    ${tw`flex py-5 px-4 gap-4`}
  }
  img {
    ${tw`w-24 h-full`}
  }
  .content {
    ${tw`text-sm leading-5`}
    h3 {
      color: var(--blue);
    }
    div {
      ${tw`pt-10`}
    }
    p {
      ${tw``}
      color: var(--gray-300);
    }
  }
`;
