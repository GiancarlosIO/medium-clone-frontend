import * as React from 'react';
import styled from 'styled-components';

import { LOGIN_VIEW } from 'src/Constants';
import LoginModal from './LoginModal';
import Logo from './Logo';

const Button = styled('a')<{ withBorder?: boolean }>`
  display: inline-block;
  vertical-align: middle;
  padding: 0 16px;
  line-height: 37px;
  color: #03a87c;
  ${props => props.withBorder && 'border: 1px solid #03a87c;'}
  text-decoration: none;
  font-family: Poppins;
  font-size: 14px;
  border-radius: 5px;
  &:hover {
    color: #029e74;
    ${props =>
      props.withBorder &&
      `
      border-color: #029e74;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.07);
    `}
  }
`;

const HeaderElement = styled.header`
  height: 65px;
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-column-gap: 16px;
  align-items: center;
`;

const Header: React.SFC<{}> = (): React.ReactElement<{}> => {
  const [modal, setModal] = React.useState<{
    open: boolean;
    view: LOGIN_VIEW;
  }>({
    open: true,
    view: LOGIN_VIEW.SIGNUP,
  });
  const openModal = (view: LOGIN_VIEW): any => (e: Event): void => {
    e.preventDefault();
    setModal({ open: true, view });
  };
  const closeModal = (): void =>
    setModal({ open: false, view: LOGIN_VIEW.SIGNUP });
  const toggleLoginModal = (): any =>
    setModal({
      open: true,
      view:
        modal.view === LOGIN_VIEW.SIGNUP ? LOGIN_VIEW.LOGIN : LOGIN_VIEW.SIGNUP,
    });

  return (
    <div>
      <HeaderElement>
        <a href="/" title="Medium logo">
          <span dangerouslySetInnerHTML={{ __html: Logo }} />
        </a>

        <Button href="/login" onClick={openModal(LOGIN_VIEW.LOGIN)}>
          Login
        </Button>

        <Button
          withBorder
          href="/signup"
          onClick={openModal(LOGIN_VIEW.SIGNUP)}
        >
          Get Started
        </Button>
        {/* Login/Signup Modals */}
        {modal.open && (
          <LoginModal
            toggleLoginModal={toggleLoginModal}
            view={modal.view}
            onClose={closeModal}
          />
        )}
      </HeaderElement>
    </div>
  );
};

export default Header;
