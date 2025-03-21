import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter email")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email"
        ),
    password: Yup.string()
        .required("Please enter password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        )
});

export const signUpSchema = Yup.object().shape({
    first_name: Yup.string().trim().required("Please enter a first name"),
    last_name: Yup.string().trim().required("Please enter a last name"),
    company_name: Yup.string().trim().required("Please enter     company name"),
    email: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter email")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email"
        ),
    phone_no: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must be number")
        // .min(10, "Mobile number cannot be less then 10 digits").max(10, "Mobile number can not be more then 10 digits")
        .required("Please enter phone number"),
    password: Yup.string()
        .required("Please enter password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        ),
    confirm_password: Yup.string()
        .required("Please enter confirm password")
        .oneOf([Yup.ref("password"), null], "password must match"),
    ct_checkbox_cbx: Yup.boolean()
        .oneOf([true], 'Checkbox must be checked')
});

export const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter email")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email"
        )
});

export const UpdateUserSchema = Yup.object().shape({
    full_name: Yup.string().trim().matches(/^[a-zA-Z]+(?:\s+[a-zA-Z]+)+$/, 'Please enter full name (first and last name).')
        .required("Please enter a full name"),
    username: Yup.string().trim().required("Please enter a user name")
});

export const ChangePasswordSchema = Yup.object().shape({
    currentPassword: Yup.string()
        .required("Please enter password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        ),
    newPassword: Yup.string()
        .required("Please enter password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        ),
    confirmPassword: Yup.string()
        .required("Please enter confirm password")
        .oneOf([Yup.ref("newPassword"), null], "password must match"),
});

export const AddStaffSchema = Yup.object().shape({
    name: Yup.string().trim().required("Please enter name"),
    role: Yup.string().trim().required("Please select job role"),
    email: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter a valid email")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email"
        ),
    phone_no: Yup.string()
        .matches(/^[0-9]+$/, "Contact number must be number")
        // .min(10, "Contact number cannot be less then 10 digits").max(10, "Contact number can not be more then 10 digits")
        .required("Please enter contact number"),
    password: Yup.string()
        .required("Please enter password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        ),
    home_address: Yup.string().trim().required("Please enter home address"),
});

export const UpdateStaffSchema = Yup.object().shape({
    full_name: Yup.string().trim().required("Please enter name"),
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
        // .min(10, "Contact number cannot be less then 10 digits").max(10, "Contact number can not be more then 10 digits")
        .required("Please enter contact number"),
    password: Yup.string()
        .required("Please enter password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        ),
    home_address: Yup.string().trim().required("Please enter home address"),
    status: Yup.string().required("Please add status"),
});

export const AddSupplierSchema = Yup.object().shape({
    name: Yup.string().trim().required("Please enter supplier name"),
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter email address")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email address"
        ),
    // company_name: Yup.string().trim().required("Please enter company name"),
    // company_description: Yup.string().trim().required("Please enter company description"),
    // city: Yup.string().trim().required("Please enter city"),
    // phone_no: Yup.string()
    //     .matches(/^[0-9]+$/, "Contact number must be number")
    //     // .min(10, "Contact number cannot be less then 10 digits").max(10, "Contact number can not be more then 10 digits")
    //     .required("Please enter contact number")
});

export const AddBoatSchema = Yup.object().shape({
    name: Yup.string().trim().required("Please enter boat name"),
    owners_name: Yup.string().trim().required("Please enter owner's name"),
    boat_type: Yup.string().trim().required("Please select boat type"),
    rego: Yup.string().trim().required("Please enter rego"),
    vin: Yup.string().trim()
        // .length(17, 'VIN must be exactly 17 characters long')
        // .matches(/^[A-HJ-NPR-Z0-9]$/, 'Invalid VIN format') // Excludes I, O, and Q
        .required('Please enter HIN'),
    make: Yup.string().trim().required("Please enter make"),
    model: Yup.string().trim().required("Please enter model"),
    engine_no: Yup.number()
        .required("Please enter number of engine")
        .positive("Engine length must be greater than 0")
        .typeError("Engine length must be engine number"),
    engine_make: Yup.string().trim().required("Please enter engine make"),
    engine_model: Yup.string().trim().
        // required("Please enter engine model")
        optional()
    ,
    email: Yup.string()
        .email("Please enter valid email")
        .required("Please enter valid email")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter valid email"
        ),
    phone_no: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must be number")
        // .min(10, "Mobile number cannot be less then 10 digits").max(10, "Mobile number can not be more then 10 digits")
        .required("Please enter phone number"),
    length: Yup.number()
        .required("Please enter boat length")
        .positive("Boat length must be greater than 0")
        .typeError("Boat length must be number"),
    book_from: Yup.date()
        .typeError("Please select valid date")
        .optional(),
    book_to: Yup.date()
        .min(Yup.ref('book_from'), "End date must be the same as or later than the book from date.")
        .typeError("Please select valid date")
        .optional(),
    app_date: Yup.date()
        // .required("Please select app date")
        .typeError("Please select valid date").optional(),
    docking_date: Yup.date()
        // .required("Please select docking date")
        .typeError("Please select valid date")
        .optional(),
});

export const AddDockSchema = Yup.object().shape({
    name: Yup.string().trim().required("Please enter dock name"),
    email: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter email")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email"
        ),
    phone_no: Yup.string()
        .matches(/^[0-9]+$/, "Contact number must be number")
        // .min(10, "Contact number cannot be less then 10 digits").max(10, "Contact number can not be more then 10 digits")
        .required("Please enter contact number"),
    // book_from: Yup.date()
    //     .required("Please select booking date")
    //     .typeError("Please select valid date"),
    // book_to: Yup.date()
    //     .required("Please select booking end date")
    //     .min(Yup.ref('book_from'), "End date must be the same as or later than the book from date.")
    //     .typeError("Please select valid date"),
    address: Yup.string().trim().required("Please enter storage address"),
    booking_cost: Yup.string()
        .matches(
            /^(?!0\.00$)(?!0$)\d+(\.\d{1,6})?$/,
            "Booking Cost must be greater than 0"
        )
        .test(
            "is-valid-number",
            "Please enter a valid number",
            value => !isNaN(parseFloat(value))
        )
        .required("Please enter booking cost")
        .min(1, "Booking Cost must be greater than 0"),
    booking_cost_per_day: Yup.string()
        .required("Please enter cost per day")
        .matches(
            /^(?!0\.00$)(?!0$)\d+(\.\d{1,6})?$/,
            "Cost must be greater than 0"
        )
        .test(
            "is-valid-number",
            "Please enter a valid number",
            value => !isNaN(parseFloat(value))
        )
        .min(1, "Cost must be greater than 0"),
});

export const UpdateSupplierSchema = Yup.object().shape({
    company_name: Yup.string().trim().required("Please enter company name"),
    company_description: Yup.string().trim().required("Please enter company description"),
    city: Yup.string().trim().required("Please enter city"),
    phone_no: Yup.string()
        .matches(/^[0-9]+$/, "Contact number must be number")
        // .min(10, "Contact number cannot be less then 10 digits").max(10, "Contact number can not be more then 10 digits")
        .required("Please enter contact number")
});

export const AddLeadSchema = Yup.object().shape({
    client_name: Yup.string().trim().required("Please enter client name"),
    client_contact_number: Yup.string()
        .matches(/^[0-9]+$/, "Contact number must be number")
        // .min(10, "Contact number cannot be less then 10 digits").max(10, "Contact number can not be more then 10 digits")
        .required("Please enter contact number")
});

export const CreateTaskSchema = Yup.object().shape({
    description: Yup.string().trim().required("Please enter maintenance item description"),
    time_alloted: Yup.string().trim()
        .min(1, "Time allocated must be at least 1 digit long")
        .max(5, "Time allocated must be at most 5 digit long")
        .required("Please enter time allocated").test('not-zero', 'Time allocated cannot be zero', value => value !== '0'),
    quoted_value: Yup.string().trim()
        .min(1, "Quoted value must be at least 1 digits long")
        .max(5, "Quoted value must be at most 5 digits long").required("Please enter quoted value").test('not-zero', 'Quoted value cannot be zero', value => value !== '0'),
    boatId: Yup.string().trim().required("Please select boat registration"),
    assignStaffId: Yup.string().trim().required("Please select staff member"),
    supplierId: Yup.string().trim().required("Please select technician / staff"),
    date_scheduled_from: Yup.date()
        .required("Please select scheduled from")
        .typeError("Please select valid date"),
    date_scheduled_to: Yup.date()
        .required("Please select scheduled to")
        .min(Yup.ref('date_scheduled_from'), "End date must be the same as or later than the scheduled from date.")
        .typeError("Please select valid date"),
    completed_at: Yup.date()
        .min(Yup.ref('date_scheduled_from'), "Completed At must be the same as or later than the scheduled from date.")
        .max(Yup.ref('date_scheduled_to'), "Completed At must be the same as or before than the scheduled to date.")
        .typeError("Please select valid date"),
});

export const AssignBoatSchema = Yup.object().shape({
    boatId: Yup.string().required("Please select boat")
});