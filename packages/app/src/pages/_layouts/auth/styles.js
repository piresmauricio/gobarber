import styled from 'styled-components';
import { darken } from 'polished';

import * as constants from '~/constants';
import { ReactComponent as Logo } from './undraw_login.svg';

export const Wrapper = styled.div`
  height: 100%;
  background: ${constants.ColorPallet[3]};
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Planodefundo = styled(Logo)`
  width: 250px;
  height: 250px;

  display: flex;
  justify-content: right;
  align-items: right;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: ${constants.ColorPallet[2]};
      margin: 0 0 5px;

      &::placeholder {
        color: rgba(${constants.ColorPallet[2]}, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 15px 10px;

      font-size: 12px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: ${constants.ColorPallet[1]};
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;

      &:hover {
        background: ${darken(0.03, constants.ColorPallet[1])};
      }
    }

    a {
      color: ${constants.ColorPallet[2]};
      margin-top: 15px;
      font-size: 14px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  > img {
    max-width: 200px;
  }
`;
