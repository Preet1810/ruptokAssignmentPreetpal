import Modal from "antd/es/modal/Modal";
import { ModalProps } from "antd";
export default function ModalCustom(props: ModalProps) {
    const { width = '80%', open, closable, onCancel, className, children, footer = null } = props
    return (
        <Modal open={open}
            footer={footer}
            centered
            width={width}
            className={className}
            closable={closable}
            onCancel={onCancel}
            maskClosable={false}
        >
            {children}
        </Modal>
    );
}