import * as Yup from "yup";

export const validationSchemaAddUser = Yup.object({
    firstName: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    phone: Yup.number().required("Phone Number is required"),
});