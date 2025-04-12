import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function OtpVerification() {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log("OTP Submitted:", data);
  };

  return (
    <motion.div
      className="relative flex justify-center items-center min-h-screen bg-base-200 w-screen px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Go Back Arrow Button */}

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
          Verify OTP
        </h2>

        <Controller
          name="otp"
          control={control}
          rules={{ required: "OTP code is required" }}
          render={({ field, fieldState }) => (
            <div>
              <input
                {...field}
                type="text"
                placeholder="Enter the code"
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
          Verify
        </button>
      </form>
    </motion.div>
  );
}
