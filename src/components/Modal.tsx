import React, { Component, ReactNode } from 'react';

type ModalProps = {
  children?: ReactNode;
  show: boolean;
  onClose: () => void;
};

class Modal extends Component<ModalProps> {
  closeModal = () => {
    this.props.onClose();
  };

  preventClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal" data-testid="test-modal" onClick={this.closeModal}>
        <div className="modal-container" onClick={this.preventClose}>
          {this.props.children && this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
