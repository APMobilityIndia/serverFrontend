import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import {
  FiChevronDown,
  FiEye,
  FiEyeOff,
  FiArrowLeft,
  FiChevronLeft,
  FiCheck,
} from "react-icons/fi"; // Feather icons
import { FaMobileAlt } from "react-icons/fa";
import { FcInvite } from "react-icons/fc";
import { FaIdCardClip } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { register } from "../redux/authApi";
import { useDispatch } from "react-redux";

export default function RegistrationForm() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    name_user: Yup.string().required("Name is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must contain only digits"),
    plain_password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("plain_password"), null], "Passwords must match"),
    inviteCode: Yup.string(),
    agreed: Yup.boolean()
      .required("You must accept the Privacy Agreement")
      .oneOf([true], "You must accept the Privacy Agreement"),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      name_user: "",
      phone: "",
      plain_password: "",
      confirmPassword: "",
      inviteCode: "",
      agreed: true,
    },
    validationSchema,
    onSubmit: async (values) => {
      // Extract only the required fields for API submission
      const data = {
        phone: values.phone,
        plain_password: values.plain_password,
        name_user: values.name_user,
      };

      // Dispatch the register action with data
      console.log("Form submitted with data:", data);
      // Uncomment this when integrating with Redux
      const res = await dispatch(register(data));
      console.log("res", res);
    },
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col w-full max-w-md mx-auto">
      {/* Header */}
      <div
        style={{ backgroundColor: "#040b24" }}
        className="bg-blue-950 p-4 flex items-center w-full"
      >
        <div className="flex-1 text-center">
          <div className="font-bold text-3xl italic inline">MBS.</div>
          <div className="font-bold text-lg italic inline">Game</div>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full overflow-hidden mr-1">
            <img
              src="/assets/usa_flag.png"
              alt="US Flag"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm">EN</span>
        </div>
      </div>

      {/* Main content */}
      <div
        style={{ backgroundColor: "#040b24" }}
        className="flex-1 px-6 pt-6 pb-8 flex flex-col bg-blue-950 w-full"
      >
        <div
          style={{ backgroundColor: "#1c274f" }}
          className="w-full px-6 py-4"
        >
          <h1 className="!text-lg font-bold mb-1">Register</h1>
          <p className="text-sm text-gray-300 mb-6">
            Please register by phone number or email
          </p>
        </div>

        {/* Phone registration section */}
        <div className="w-full mb-2 flex items-center justify-center mt-4">
          <FaMobileAlt size={25} color="#2dd4bf" />
        </div>

        <div className="text-center text-teal-400 font-medium mb-2">
          Register your phone
        </div>
        <div className="border-b border-teal-400 mb-6 w-full"></div>

        {/* Form fields */}
        <form onSubmit={formik.handleSubmit} className="space-y-4 w-full">
          {/* name input */}
          <div className="flex items-center mb-1">
            <div className="text-teal-400 mr-3">
              <MdDriveFileRenameOutline size={25} color="#2dd4bf" />
            </div>
            <div className="font-medium">Name</div>
          </div>
          <div className="flex flex-col mb-4 w-full">
            <input
              type="text"
              name="name_user"
              placeholder="Please enter your name"
              className="bg-blue-900 rounded-lg px-4 py-3 flex-1 outline-none text-gray-300 w-100"
              value={formik.values.name_user}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name_user && formik.errors.name_user ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.name_user}
              </div>
            ) : null}
          </div>

          {/* Phone input */}
          <div className="flex items-center mb-1">
            <div className="text-teal-400 mr-3">
              <FaMobileAlt size={25} color="#2dd4bf" />
            </div>
            <div className="font-medium">Phone number</div>
          </div>
          <div className="flex flex-col mb-4 w-full">
            <div className="flex w-full">
              <div className="bg-blue-900 rounded-l-lg px-4 py-3 flex items-center border-r border-blue-800">
                <span>+91</span>
                <FiChevronDown size={16} className="ml-2" />
              </div>
              <input
                type="text"
                name="phone"
                placeholder="Please enter the phone number"
                className="bg-blue-900 rounded-r-lg px-4 py-3 flex-1 outline-none text-gray-300 w-full"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.phone}
              </div>
            ) : null}
          </div>

          {/* Password input */}
          <div className="flex items-center mb-1">
            <div className="text-teal-400 mr-3">
              <IoMdLock size={25} color="#2dd4bf" />
            </div>
            <div className="font-medium">Set password</div>
          </div>
          <div className="relative mb-4 w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="plain_password"
              placeholder="Set password"
              className="bg-blue-900 rounded-lg px-4 py-3 w-full outline-none text-gray-300"
              value={formik.values.plain_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </div>
            {formik.touched.plain_password && formik.errors.plain_password ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.plain_password}
              </div>
            ) : null}
          </div>

          {/* Confirm Password input */}
          <div className="flex items-center mb-1">
            <div className="text-teal-400 mr-3">
              <IoMdLock size={25} color="#2dd4bf" />
            </div>
            <div className="font-medium">Confirm password</div>
          </div>
          <div className="relative mb-4 w-full">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password"
              className="bg-blue-900 rounded-lg px-4 py-3 w-full outline-none text-gray-300"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <FiEyeOff size={20} />
              ) : (
                <FiEye size={20} />
              )}
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>

          {/* Invite code */}
          <div className="flex items-center mb-1">
            <div className="text-teal-400 mr-3">
              <FaIdCardClip size={25} color="#2dd4bf" />
            </div>
            <div className="font-medium">Invite code</div>
          </div>
          <div className="mb-6 w-full">
            <input
              type="text"
              name="inviteCode"
              placeholder="Please enter the invitation code"
              className="bg-blue-900 rounded-lg px-4 py-3 w-full outline-none text-gray-300"
              value={formik.values.inviteCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Agreement */}
          <div className="flex items-center mb-8">
            <div
              onClick={() =>
                formik.setFieldValue("agreed", !formik.values.agreed)
              }
              className="w-6 h-6 rounded-full text-teal-400 cursor-pointer"
            >
              {formik.values.agreed ? (
                <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                  <FiCheck size={16} className="text-blue-950" />
                </div>
              ) : (
                <div className="w-6 h-6 border border-teal-400 rounded-full"></div>
              )}
            </div>
            <span className="ml-2 text-sm">I have read and agree</span>
            <span className="ml-1 text-sm text-red-500">
              [Privacy Agreement]
            </span>
          </div>
          {formik.touched.agreed && formik.errors.agreed ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.agreed}
            </div>
          ) : null}

          {/* Register button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-b from-teal-400 to-teal-700 text-blue-950 font-bold py-3 rounded-full mb-6 text-center cursor-pointer"
          >
            Register
          </button>

          {/* Login link */}
          <div className="text-center w-full">
            <div
              onClick={() => navigate("/login")}
              className="text-white border border-teal-400 rounded-full w-full py-3 cursor-pointer hover:bg-teal-800 hover:bg-opacity-10 transition"
            >
              I have an account{" "}
              <span className="text-teal-400 font-medium">Login</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
