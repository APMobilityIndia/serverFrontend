import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
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
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoMdLock } from "react-icons/io";
import { login } from "../redux/authApi"; // Adjust path based on your folder structure

export default function Login() {
  const { token } = useSelector((state: any) => state.auth);
  console.log("token", token);
  const navigate = useNavigate();

  // Redirect after successful login
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: any) => state.auth);

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must contain only digits"),
    plain_password: Yup.string().required("Password is required"),
    rememberPassword: Yup.boolean(),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      phone: "",
      plain_password: "",
      rememberPassword: true,
    },
    validationSchema,
    onSubmit: async (values) => {
      // Extract only the required fields for API submission
      const data = {
        phone: values.phone,
        plain_password: values.plain_password,
      };

      // Store remember password preference if needed
      if (values.rememberPassword) {
        localStorage.setItem("rememberedPhone", values.phone);
      } else {
        localStorage.removeItem("rememberedPhone");
      }

      // Dispatch the login action with data
      const loginRes = await dispatch(login(data));
      console.log("loginRes", loginRes);
    },
  });

  return (
    <div
      className="min-h-screen text-white flex flex-col w-full max-w-md mx-auto"
      style={{ backgroundColor: "#1A0B2E" }}
    >
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
          <h1 className="!text-lg font-bold mb-1">Login</h1>
          <p className="text-sm text-gray-300 mb-6">
            Please log in with your phone. If you forget your password, please
            contact customer service
          </p>
        </div>

        {/* Phone login section */}
        <div className="w-full mb-2 flex items-center justify-center mt-4">
          <FaMobileAlt size={25} color="#2dd4bf" />
        </div>

        <div className="text-center text-teal-400 font-medium mb-2">
          Phone Number
        </div>
        <div className="border-b border-teal-400 mb-6 w-full"></div>

        {/* Display error message from redux state if any */}
        {error && (
          <div className="bg-white-600 bg-opacity-20 border border-red-500 text-red-500 p-3 rounded-lg mb-4 text-sm">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Form fields */}
        <form onSubmit={formik.handleSubmit} className="space-y-4 w-full">
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
            <div className="font-medium">Password</div>
          </div>
          <div className="relative mb-4 w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="plain_password"
              placeholder="Enter password"
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

          {/* Remember password */}
          <div className="flex items-center mb-8">
            <div
              onClick={() =>
                formik.setFieldValue(
                  "rememberPassword",
                  !formik.values.rememberPassword
                )
              }
              className="w-6 h-6 rounded-full text-teal-400 cursor-pointer"
            >
              {formik.values.rememberPassword ? (
                <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                  <FiCheck size={16} className="text-blue-950" />
                </div>
              ) : (
                <div className="w-6 h-6 border border-teal-400 rounded-full"></div>
              )}
            </div>
            <span className="ml-2 text-sm">Remember password</span>
          </div>

          {/* Login button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-b from-teal-400 to-teal-700 text-blue-950 font-bold py-3 rounded-full mb-6 text-center cursor-pointer disabled:opacity-70"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>

          {/* Register link */}
          <div className="text-center w-full">
            <div
              onClick={() => navigate("/register")}
              className="text-white border border-teal-400 rounded-full w-full py-3 cursor-pointer hover:bg-teal-800 hover:bg-opacity-10 transition"
            >
              <span className="text-teal-400 font-medium">Register</span>
            </div>
          </div>

          {/* Forgot Password & Customer Service */}
          <div className="flex justify-around mt-4">
            <div className="flex flex-col items-center">
              <IoMdLock size={40} color="#2dd4bf" />
              <div className="mt-1 text-sm text-center">Forgot password</div>
            </div>
            <div className="flex flex-col items-center">
              <RiCustomerServiceFill size={40} color="#2dd4bf" />
              <div className="mt-1 text-sm text-center">Customer Service</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
