import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StyledModal } from '../componentStyles/Modal.styled';

type Props = {
    children: JSX.Element | JSX.Element[] | React.ReactNode;

    setShowModal: (showModal: boolean) => void;
    domNode?: HTMLElement | Element | DocumentFragment | null;
};

const Modal = ({ children, setShowModal, domNode = document.body }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    const checkOutsideClick = (event: MouseEvent) => {
        if (ref.current === event.target) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', checkOutsideClick);

        return () => {
            document.removeEventListener('click', checkOutsideClick);
        };
    }, []);

    return createPortal(
        <StyledModal>
            <div className="overlay" ref={ref}>
                <div className="modal">{children}</div>
            </div>
        </StyledModal>,
        domNode ? domNode : document.body
    );
};

export default Modal;
