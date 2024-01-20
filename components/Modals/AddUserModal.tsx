import ModalCustom from "./GeneralModal";
import { AddUserModalProps } from "@/lib/types";
import AddUserForm from "../Users/AddUserForm";
const AddUserModal = (props: AddUserModalProps) => {
    const { state, changeopenState } = props;
    return (
        <ModalCustom
            open={state ? true : false}
            closable={true}
            onCancel={() => changeopenState(false)}
            footer={null}
            className="max-w-[392px]"
            width='90%'
        >
            <AddUserForm changeopenState={changeopenState} state={state} />
        </ModalCustom>
    )
}

export default AddUserModal