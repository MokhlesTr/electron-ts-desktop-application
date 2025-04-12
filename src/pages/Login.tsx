import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log("Login Data:", data);
    navigate("/home");
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-base-200 w-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-full max-w-md bg-base-100 shadow-xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-primary">Login</h2>

        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field, fieldState }) => (
            <div>
              <input
                {...field}
                type="email"
                placeholder="Email"
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

        <Controller
          name="password"
          control={control}
          rules={{ required: "Password is required" }}
          render={({ field, fieldState }) => (
            <div>
              <input
                {...field}
                type="password"
                placeholder="Password"
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

        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>

        <div className="text-sm text-center">
          <Link
            to="/forgot-password"
            className="text-gray-500 hover:underline hover:text-yellow-700"
          >
            Forgot password?
          </Link>
        </div>

        <p className="text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-primary font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </motion.div>
  );
}
