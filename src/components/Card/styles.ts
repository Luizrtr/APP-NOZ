import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`md:w-80 md:h-44 w-[288px] h-[160px]`}
  background: var(--white);
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;

  .tools {
    ${tw`flex md:py-4 md:px-3 py-5 px-4 gap-4`}
  }
  img {
    ${tw`w-24 h-36`}/* width: 5.063rem;
    height: 7.625rem; */
  }
  .content {
    ${tw`text-sm leading-5 grid gap-y-3`}
    text-align: initial;
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
