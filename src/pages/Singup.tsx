import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const { control, handleSubmit, watch } = useForm();
  const password = watch("password");
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log("Signup Data:", data);
    navigate("/home");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-center min-h-screen bg-base-200 px-4 w-screen"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-full max-w-lg bg-base-100 shadow-xl p-8 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-primary">
          Create Account
        </h2>

        {/* Text Inputs */}
        {[
          { name: "firstname", label: "First Name" },
          { name: "lastname", label: "Last Name" },
          { name: "phone", label: "Phone" },
          { name: "email", label: "Email", type: "email" },
        ].map(({ name, label, type = "text" }) => (
          <Controller
            key={name}
            name={name}
            control={control}
            rules={{ required: `${label} is required` }}
            render={({ field, fieldState }) => (
              <div>
                <input
                  {...field}
                  type={type}
                  placeholder={label}
                  className="input input-bordered w-full placeholder:text-gray-500 text-black"
                />
                {fieldState.error && (
                  <p className="text-error text-sm pt-2">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />
        ))}

        {/* Gender Select */}
        <Controller
          name="sexe"
          control={control}
          rules={{ required: "Gender is required" }}
          render={({ field, fieldState }) => {
            const isPlaceholder = field.value === "";
            return (
              <div>
                <select
                  {...field}
                  className={`select select-bordered w-full ${
                    isPlaceholder ? "text-gray-500" : "text-black"
                  }`}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {fieldState.error && (
                  <p className="text-error text-sm pt-2">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            );
          }}
        />

        {/* Passwords */}
        {[
          { name: "password", label: "Password", type: "password" },
          {
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
          },
        ].map(({ name, label, type }) => (
          <Controller
            key={name}
            name={name}
            control={control}
            rules={{
              required: `${label} is required`,
              ...(name === "confirmPassword" && {
                validate: (value) =>
                  value === password || "Passwords do not match",
              }),
            }}
            render={({ field, fieldState }) => (
              <div>
                <input
                  {...field}
                  type={type}
                  placeholder={label}
                  className="input input-bordered w-full placeholder:text-gray-500 text-black"
                />
                {fieldState.error && (
                  <p className="text-error text-sm pt-2">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />
        ))}

        <button className="btn btn-primary w-full mt-4" type="submit">
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-500">
          I already have an account{" "}
          <Link to="/" className="text-primary font-medium hover:underline">
            Login
          </Link>
        </p>
      </form>
    </motion.div>
  );
}

export default Signup;
