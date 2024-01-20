import { useFormik } from "formik"
import { AddUserModalProps } from "@/lib/types";
import { Input, InputNumber } from 'antd';
import { createUser } from "@/lib/userApis";
import { validationSchemaAddUser } from "@/lib/formValidations";
import { message, Button } from "antd"
import { useState } from "react";
const AddUserForm = (props: AddUserModalProps) => {
    const { state, changeopenState } = props;
    const [isLoading, setLoading] = useState<boolean>(false)
    const initialValues = {
        firstName: "",
        email: "",
        phone: "",
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchemaAddUser,
        onSubmit: async (values, { resetForm }) => {
            try {
                setLoading(true)
                console.log("values: ", values);
                const data = await createUser(values)
                console.log("data recieved: ", data);
                data.status === 200 ? message.success("User Created Successfully") : message.error("User Not Created")
                setLoading(false)
                resetForm()
                changeopenState(false);
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
    })

    return (
        <form
            className="flex flex-col gap-y-6  py-7"
            onSubmit={formik.handleSubmit}
        >
            <div className="flex gap-x-6 items-center">
                <label htmlFor="firstName" className="w-14">Name</label>
                <Input
                    id="firstName"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    status={formik.errors.firstName && formik.touched.firstName ? "error" : ""}
                />
            </div>
            <div className="flex gap-x-6 items-center">
                <label htmlFor="email" className="w-14">Email</label>
                <Input
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    status={formik.errors.email && formik.touched.email ? "error" : ""}
                />
            </div>
            <div className="flex gap-x-6 items-center">
                <label htmlFor="phone" className="w-14">Phone</label>
                <Input
                    id="phone"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    status={formik.errors.phone && formik.touched.phone ? "error" : ""}
                />
            </div>

            <div className="flex items-center justify-evenly">
                <Button
                    onClick={() => {
                        formik.resetForm();
                        changeopenState(false)
                    }}
                    className="w-[88px] h-[32px] rounded-md bg-[#EBE8EF] text-[#333333] hover:!text-black hover:!border-transparent">Cancel</Button>
                <Button
                    onClick={() => formik.handleSubmit()}
                    disabled={(Object.keys(formik.errors).length !== 0)}
                    loading={isLoading}
                    className="w-[88px] h-[32px] rounded-md bg-[#397848] text-white hover:!text-white hover:!border-transparent">Create</Button>
            </div>
        </form>
    )
}

export default AddUserForm