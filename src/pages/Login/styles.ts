import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  > div {
    ${tw`md:mt-80 md:ml-44`}
    > div {
      ${tw`flex flex-row mb-14 gap-2`}
      img {
        ${tw`self-center`}
        width: 3.938rem;
        height: 1.5rem;
      }
      h2 {
        font-size: 1.75rem;
        line-height: 2.5rem;
      }
    }
    > div {
      form {
        ${tw`flex flex-col gap-y-4`}
        div {
          ${tw`relative`}
        }
        input:focus + label,
        input:active + label {
          font-size: 0.75rem;
          transition: all 0.2s ease-out;
          top: -0.1rem;
          color: #667eea;
        }
        input {
          ${tw`appearance-none rounded px-3 py-3 pt-5 pb-2`}
          width: 23rem;
          height: 3.75rem;
          background: rgba(0, 0, 0, 0.32);
          backdrop-filter: blur(2px);
        }
        label {
          ${tw`text-xs leading-4 absolute mb-0 -mt-2 pt-3 pl-3`}
          opacity: 0.5;
          transition: all 0.2s ease-out;
          top: 0.4rem;
          left: 0;
        }
        button {
          ${tw`leading-5 font-medium absolute mr-3`}
          color: var(--pink);
          top: 0.8rem;
          right: 0;
          background: var(--white);
          width: 5.313rem;
          height: 2.25rem;
          border-radius: 2.75rem;
        }
      }
    }
  }
`;
