import React, { useState } from "react"
import { Wallet, Mail, LogIn, Lock, Eye, EyeOff } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { FaGoogle } from "react-icons/fa"
import { ConnectWallet } from "@thirdweb-dev/react"
import { assets} from '../assets/assets'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);

    // Redirect to the /player page after form submission
    navigate("/player");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Auth Form */}
      <div className="w-1/2 p-8 flex flex-col justify-center bg-white">
        <div className="max-w-md w-full mx-auto space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              {isLogin ? "Welcome back" : "Create an account"}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium text-orange-600 hover:text-orange-500"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              {!isLogin && (
                <div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
              )}
            </div>

            {isLogin && (
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="text-sm font-medium text-orange-600 hover:text-orange-500"
                >
                  Forgot your password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLogin ? "Sign in" : "Create Account"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="w-full border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">Or</span>
            <div className="w-full border-t border-gray-300"></div>
          </div>

          {/* Connect Wallet and Continue with Google */}
          <div className="flex flex-col space-y-4 w-full">
          <ConnectWallet
         className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-orange-500 rounded-lg hover:bg-orange-500 hover:text-black transition-colors duration-200"
         >
         <Wallet className="h-5 w-5" />
         <span>Connect Wallet</span>
         </ConnectWallet>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-orange-500 rounded-lg hover:bg-orange-500 hover:text-black transition-colors duration-200"
            >
              <FaGoogle className="h-5 w-5" />
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-3/4 p-8 flex justify-center items-center bg-white">
        <img
          src={assets.nft_icon}
          alt="Login Image"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Login
