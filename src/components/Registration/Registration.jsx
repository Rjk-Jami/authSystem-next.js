import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const RegSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
const Registration = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: RegSchema,
    onSubmit: async (values) => {
      console.log(values);
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
            type={"password"} // Toggle between password and text
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
            className=" mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none  disabled:opacity-50"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
