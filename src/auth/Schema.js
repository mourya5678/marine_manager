import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter a valid email address")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email address"
        ),
    password: Yup.string()
        .required("Please enter your password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        )
});

export const signUpSchema = Yup.object().shape({
    first_name: Yup.string().required("Please enter a first name"),
    last_name: Yup.string().required("Please enter a last name"),
    company_name: Yup.string().required("Please enter your company name"),
    email: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter a valid email")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email"
        ),
    phone_no: Yup.string()
        .matches(/^[0-9]+$/, "Mobile number must be number")
        .min(10, "Mobile number cannot be less then 10 digits").max(10, "Mobile number can not be more then 10 digits")
        .required("Please enter your mobile number"),
    password: Yup.string()
        .required("Please enter your password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        ),
    confirm_password: Yup.string()
        .required("Please enter confirm password")
        .oneOf([Yup.ref("password"), null], "Your password must match"),
    ct_checkbox_cbx: Yup.boolean()
        .oneOf([true], 'Checkbox must be checked')
});

export const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter a valid email address")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email address"
        )
});

export const UpdateUserSchema = Yup.object().shape({
    full_name: Yup.string().matches(/^[a-zA-Z]+(?:\s+[a-zA-Z]+)+$/, 'Please enter your full name (first and last name).')
        .required("Please enter a full name"),
    username: Yup.string().required("Please enter a user name")
});

export const ChangePasswordSchema = Yup.object().shape({
    currentPassword: Yup.string()
        .required("Please enter your password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        ),
    newPassword: Yup.string()
        .required("Please enter your password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        ),
    confirmPassword: Yup.string()
        .required("Please enter confirm password")
        .oneOf([Yup.ref("newPassword"), null], "Your password must match"),
});

export const AddStaffSchema = Yup.object().shape({
    name: Yup.string().required("Please enter name"),
    role: Yup.string().required("Please select job role"),
    email: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter a valid email")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email"
        ),
    phone_no: Yup.string()
        .matches(/^[0-9]+$/, "Contact number must be number")
        .min(10, "Contact number cannot be less then 10 digits").max(10, "Contact number can not be more then 10 digits")
        .required("Please enter your contact number"),
    password: Yup.string()
        .required("Please enter your password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        ),
    home_address: Yup.string().required("Please enter home address"),
});

export const UpdateStaffSchema = Yup.object().shape({
    full_name: Yup.string().required("Please enter name"),
    role: Yup.string().required("Please select job role"),
    email: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter a valid email")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email"
        ),
    phone_no: Yup.string()
        .matches(/^[0-9]+$/, "Contact number must be number")
        .min(10, "Contact number cannot be less then 10 digits").max(10, "Contact number can not be more then 10 digits")
        .required("Please enter your contact number"),
    password: Yup.string()
        .required("Please enter your password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        ),
    home_address: Yup.string().required("Please enter home address"),
    status: Yup.string().required("Please add status"),
});

export const AddSupplierSchema = Yup.object().shape({
    company_name: Yup.string().required("Please enter company name"),
    company_description: Yup.string().required("Please enter company description"),
    email: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter a valid email")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email"
        ),
    city: Yup.string().required("Please enter city"),
    phone_no: Yup.string()
        .matches(/^[0-9]+$/, "Contact number must be number")
        .min(10, "Contact number cannot be less then 10 digits").max(10, "Contact number can not be more then 10 digits")
        .required("Please enter contact number")
});

export const AddBoatSchema = Yup.object().shape({
    name: Yup.string().required("Please enter boat name"),
    owners_name: Yup.string().required("Please enter owners name"),
    rego: Yup.string().required("Please enter rego"),
    vin: Yup.string()
        .length(17, 'VIN must be exactly 17 characters long')
        .matches(/^[A-HJ-NPR-Z0-9]{17}$/, 'Invalid VIN format') // Excludes I, O, and Q
        .required('VIN is required'),
    make: Yup.string().required("Please enter make"),
    model: Yup.string().required("Please enter model"),
    engine_no: Yup.string().required("Please enter engine number"),
    engine_make: Yup.string().required("Please enter engine make"),
    engine_model: Yup.string().required("Please enter engine model"),
    email: Yup.string()
        .email("Please enter valid email address")
        .required("Please enter valid email address")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter valid email address"
        ),
    phone_no: Yup.string()
        .matches(/^[0-9]+$/, "Mobile number must be number")
        .min(10, "Mobile number cannot be less then 10 digits").max(10, "Mobile number can not be more then 10 digits")
        .required("Please enter your mobile number"),
    length: Yup.number()
        .required("Please enter length")
        .positive("Length must be greater than 0")
        .typeError("Length must be number"),
    book_from: Yup.date()
        .required("Please select booking date")
        .typeError("Please select valid date"),
    book_to: Yup.date()
        .required("Please select booking end date")
        .min(Yup.ref('book_from'), "End date cannot be the same or before the from date")
        .typeError("Please select valid date"),
    app_date: Yup.date()
        .required("Please select app date")
        .typeError("Please select valid date"),
    docking_date: Yup.date()
        .required("Please select docking date")
        .typeError("Please select valid date"),
});

export const AddDockSchema = Yup.object().shape({
    name: Yup.string().required("Please enter name"),
    role: Yup.string().required("Please select job role"),
    email: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter a valid email")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email"
        ),
    phone_no: Yup.string()
        .matches(/^[0-9]+$/, "Contact number must be number")
        .min(10, "Contact number cannot be less then 10 digits").max(10, "Contact number can not be more then 10 digits")
        .required("Please enter your contact number"),
    password: Yup.string()
        .required("Please enter your password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        ),
    home_address: Yup.string().required("Please enter home address"),
});