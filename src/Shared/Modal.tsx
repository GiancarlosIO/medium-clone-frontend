import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

const AppModalNode = document.querySelector('#app-modals') as HTMLCanvasElement;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ZoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
const Container = styled.div`
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.65);
  animation: ${FadeIn} 0.2s ease-in-out forwards;
`;

const ModalInner = styled('div')<{ backgroundColor?: string }>`
  width: 800px;
  padding: 50px;
  background-color: ${props => props.backgroundColor || '#e8f3ec'};
  border-radius: 4px;
  animation: ${ZoomIn} 0.2s ease-in-out forwards;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

interface ModalProps {
  children: React.ReactChild;
  backgroundColor?: string;
  onClose(): void;
}

class Modal extends React.Component<ModalProps> {
  private el: HTMLElement;

  private constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  public componentDidMount() {
    AppModalNode.appendChild(this.el);
  }
  public componentWillUnmount() {
    AppModalNode.removeChild(this.el);
  }

  public render() {
    const { children, backgroundColor, onClose } = this.props;

    return ReactDOM.createPortal(
      <Container>
        <ModalInner backgroundColor={backgroundColor}>
          {children}
          <CloseButton onClick={onClose}>
            <svg className="svgIcon-use" width="29" height="29">
              <path
                d="M20.13 8.11l-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61"
                fillRule="evenodd"
              />
            </svg>
          </CloseButton>
        </ModalInner>
      </Container>,
      this.el,
    );
  }
}

export default Modal;
