import * as React from 'react';
import Modal from 'src/Shared/Modal';
import styled from 'src/Theme/styled-components';
import { LOGIN_VIEW } from 'src/Constants';
import LoginForm from './LoginForm';

const ModalBody = styled.div`
  position: relative;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.76);
  line-height: 24px;
`;

interface LoginModalProps {
  onClose(): void;
  view: 'SIGNUP' | 'SIGNIN';
  toggleLoginModal(): void;
}

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.green};
  cursor: pointer;
`;

const LoginModal: React.SFC<LoginModalProps> = ({
  onClose,
  view,
  toggleLoginModal,
}: LoginModalProps): React.ReactElement<LoginModalProps> => {
  const signupCopy: string = `
    Create an account to personalize your homepage, follow your favorite authors and publications, applaud stories you love, and more.
  `;
  const loginCopy: string = `
    Sign in to access your personalized homepage, follow authors and topics you love, and clap for stories that matter to you.
  `;
  const isLogin = view === LOGIN_VIEW.SIGNIN;

  return (
    <Modal onClose={onClose} backgroundColor={isLogin ? '#D7EFEE' : '#E8F3EC'}>
      <ModalBody>
        <h1>{isLogin ? 'Welcome back.' : 'Join Medium.'}</h1>
        <div style={{ fontWeight: 300 }}>
          <p>{isLogin ? loginCopy : signupCopy}</p>
          <LoginForm view={view} />
          <div style={{ fontSize: 14 }}>
            {view === LOGIN_VIEW.SIGNIN ? (
              <p>
                No account?{' '}
                <ToggleButton type="button" onClick={toggleLoginModal}>
                  Create one
                </ToggleButton>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <ToggleButton type="button" onClick={toggleLoginModal}>
                  Sign in
                </ToggleButton>
              </p>
            )}
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default LoginModal;
