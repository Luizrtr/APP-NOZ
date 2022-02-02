import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  /* color: var(--bg-primary); */
  .header {
    ${tw`flex justify-between my-14 mx-20 items-center`}
    .fistContent {
      ${tw`flex gap-2`}
      img {
        ${tw`self-center`}
        width: 3.938rem;
        height: 1.5rem;
      }
      h2 {
        color: var(--black);
        font-size: 1.75rem;
        line-height: 2.5rem;
      }
    }
    .lastContent {
      ${tw`flex gap-5 items-center `}
      p {
        ${tw`hidden md:flex`}
        color: var(--black);
      }
    }
  }
  .books {
    ${tw`container mx-auto justify-items-center`}
    > div {
      ${tw`grid grid-cols-1 md:grid-cols-4 gap-6 m-auto`}
      width: fit-content;
    }
  }
  .pagination {
    ${tw`flex items-center container`}
  }
`;
