import {useState} from "react";
import {useAppSelector} from "../../../redux/hooks";
import {useNavigate} from "react-router-dom";

const initialFormValues = {
    email: "",
    password: "",
    formSubmitted: false,
    typePassword: "password",
    success: false
}

export const useFormControls = () => {
    const usersList = useAppSelector((state) => state.user.userList);
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({} as any);
    const navigate = useNavigate();

    const validate: any = (fieldValues = values) => {
        let temp: any = {...errors}

        if ("email" in fieldValues) {
            temp.email = fieldValues.email ? "" : "This field is required."
            if (fieldValues.email)
                temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
                    ? ""
                    : "Email is not valid."
        }

        if ("password" in fieldValues)
            temp.password =
                fieldValues.password ? "" : "This field is required."

        setErrors({
            ...temp
        });
    }

    const handleInputValue: any = (e: any) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
        validate({[name]: value});
    }

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        if (formIsValid() &&
            usersList.some(el => el.email === values.email &&
                usersList.some(el => el.password === values.password))) {
            const userObject = usersList.filter(el => el.email === values.email)[0];
            localStorage.setItem("user", JSON.stringify(userObject));
            localStorage.setItem("email", values.email)
            navigate('/whoiswatching')
        } else {
            console.log("ERRROR DE LOGIN")
            setErrors("Login & password error")
        }
    }

    const formIsValid: any = (fieldValues = values) => {
        const isValid =
            fieldValues.email &&
            fieldValues.password &&
            Object.values(errors).every((x) => x === "");

        return isValid;
    }
    return {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    };
}