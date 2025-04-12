import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = ["Home", "Services", "About", "Contact"];

  const handleLogout = () => {
    // localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-4 flex justify-between items-center z-60">
        <h1 className="text-xl font-bold text-indigo-600">Mokhhhh</h1>

        <div className="hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-black hover:text-primary transition"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="hidden md:flex gap-6 absolute right-0 -translate-x-1/2">
          <a
            onClick={handleLogout}
            className="text-red-700 hover:text-red-700 text-lg opacity-30 hover:opacity-100 transition cursor-pointer"
          >
            Logout
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden btn btn-primary "
          onClick={() => setOpen(true)}
        >
          <Bars3Icon className="w-5 h-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg flex flex-col justify-between"
            >
              <div className="flex-1 flex flex-col justify-center items-start gap-6 px-6">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-base-content text-lg hover:text-primary transition"
                  >
                    {link}
                  </a>
                ))}
                <a
                  onClick={handleLogout}
                  className="text-red-700 hover:text-red-700 text-lg opacity-30 hover:opacity-100 transition cursor-pointer"
                >
                  Logout
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
