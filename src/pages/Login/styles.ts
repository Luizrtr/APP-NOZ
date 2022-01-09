import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  overflow-x: clip;
  > div {
    ${tw`md:mt-80 md:ml-44 container mx-auto px-5 mt-64`}
    .header {
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
    .forms {
      ${tw`mb-5`}
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
    .error {
      ${tw`px-4 py-3 rounded `}
      width: 16rem;
      height: 3rem;

      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(2px);

      p {
        ${tw`leading-4 font-medium `}
      }
    }
    .error:before {
      position: absolute;
      border: 10px solid transparent;
      border-right-color: rgba(255, 255, 255, 0.4);
      transform: rotate(90deg);
      backdrop-filter: blur(2px);

      content: '';
      width: 0.5rem;
      height: 1rem;
      left: 25px;
      top: -20px;
    }
  }
`;
