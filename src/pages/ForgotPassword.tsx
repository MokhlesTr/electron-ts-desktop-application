import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function ForgotPassword() {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log("Forgot password request:", data);
    navigate("/otp-verification");
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
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 btn btn-primay btn-sm flex items-center gap-2"
        >
          <ArrowLeftIcon className="w-5 h-5 " />
          <span className="hidden sm:inline text-gray-500">Back</span>
        </button>
        <h2 className="text-2xl font-bold text-center text-primary">
          Forgot Password
        </h2>

        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field, fieldState }) => (
            <div>
              <input
                {...field}
                type="email"
                placeholder="Enter your email"
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

        <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="btn btn-primary w-full"
        >
          Send Reset Code
        </button>
      </form>
    </motion.div>
  );
}
