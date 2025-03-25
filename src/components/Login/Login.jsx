"use client";
import { loginUser } from "@/app/action/auth";
import { useFormik } from "formik";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  rememberMe: Yup.boolean(),
});
const Login = () => {
  // State for password visibility toggle
  const [showPassword, setShowPassword] = useState(true);
  const router = useRouter();

  // Record the time when the component mounts (page view time starts)
  const pageViewStartTime = new Date();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        console.log(values, "loginUser");

       // const result = await loginUser(values);
       // console.log(result, "loginPage result");
      } catch (error) {}
    },
  });
  const { values, touched, errors, handleChange, handleSubmit, isSubmitting } =
    formik;

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="">
          <label className="block text-sm font-semibold mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email}
            className={`w-full px-3 py-2  text-sm font-thin border rounded-md ${
              errors.email && touched.email
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md`}
            aria-describedby={errors.email ? "email-error" : ""}
          />
          {errors.email && touched.email ? (
            <p id="email-error" className="text-red-500 text-xs mt-1">
              {errors.email}
            </p>
          ) : (
            <p className="text-xs text-gray-400">&nbsp;</p>
          )}
        </div>

        {/* Password Field */}
        <div className=" relative">
          <label className="block text-sm font-semibold mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            id="password"
            name="password"
            type={showPassword ? "password" : "text"} // Toggle between password and text
            onChange={handleChange}
            value={values.password}
            className={`rounded-md w-full px-3 py-2 text-sm font-thin border ${
              errors.password && touched.password
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md`}
            aria-describedby={
              errors.password && touched.password ? "password-error" : ""
            }
          />
          {/* Show/Hide Password Button */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-2  items-center justify-center "
            aria-label={showPassword ? "Show password" : "Hide password"}
          >
            {showPassword ? (
              <Eye className="mt-[1.5rem] h-5 w-5 text-gray-400" />
            ) : (
              <EyeOff className="mt-[1.5rem] h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
        {errors.password && touched.password ? (
          <p id="email-error" className="text-red-500 text-xs mt-1">
            {errors.password}
          </p>
        ) : (
          <p className="text-xs text-gray-400">&nbsp;</p>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none  disabled:opacity-50"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </div>
        <div className=" flex justify-between mt-4">
          {/* remember me */}
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              onChange={handleChange}
              checked={values.rememberMe}
              className=" h-4 w-4 "
            />
            <span className="ml-2 text-sm font-thin  ">Remember me</span>
          </label>
          {/* lost section */}
          <div className="">
            <Link
              className="text-sm font-thin text-blue-600 hover:text-blue-500"
              href={"/forget-password"}
            >
              Lost your password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
