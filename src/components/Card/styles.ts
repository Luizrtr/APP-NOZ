import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`w-80 h-44`}
  background: var(--white);
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;

  .tools {
    ${tw`flex py-5 px-4 gap-4`}
  }
  img {
    ${tw`w-20 h-32`}/* width: 5.063rem;
    height: 7.625rem; */
  }
  .content {
    ${tw`text-sm leading-5 grid gap-y-3`}
    strong {
      color: #333333;
    }
    h3 {
      color: var(--blue);
    }
    div:first-child {
      ${tw``}
    }
    div:last-child {
      ${tw`self-end`}
    }
    p {
      ${tw``}
      color: var(--gray-300);
    }
  }
`;
