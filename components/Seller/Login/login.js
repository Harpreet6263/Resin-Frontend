"use client";
import React, { useState } from 'react';
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserCircleIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { signIn } from '@/store/action/seller/auth';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const data = {
        email,
        password,
      }
    let result = await dispatch(signIn(data));
      console.log(result);
      if (result?.payload?.success) {
        toast.success("Login successful!");
        router.push('/seller/dashboard');
      }
      
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }


  };

  const handleForgotPassword = () => {
    alert('Password reset link would be sent to your email.');
  };


  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-indigo-50 flex flex-col lg:flex-row">
      {/* Hero Section - Left Side */}
      <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-between relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {/* Resin-like bubbles */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-linear-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 -right-20 w-80 h-80 bg-linear-to-r from-cyan-300 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-40 w-80 h-80 bg-linear-to-r from-indigo-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

          {/* Resin art decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-linear-to-r from-amber-400 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-linear-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-2/3 right-1/3 w-10 h-10 bg-linear-to-r from-violet-400 to-purple-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="relative">
              <div className="w-12 h-12 bg-linear-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-linear-to-r from-amber-400 to-orange-400 rounded-full border-2 border-white"></div>
            </div>
            <h1 className="text-3xl font-bold bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              ResinCraft Pro
            </h1>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome Back, <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600">Seller</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            Access your exclusive seller dashboard to manage your resin art business, track sales, and connect with customers worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-linear-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <CurrencyDollarIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">Sales Dashboard</h3>
              </div>
              <p className="text-gray-600">Track revenue, orders, and customer trends in real-time.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-linear-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <ChartBarIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">Inventory Management</h3>
              </div>
              <p className="text-gray-600">Manage your resin product listings and stock levels effortlessly.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
              <span>Secure & encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
              <span>24/7 seller support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
              <span>No hidden fees</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-8">
          <div className="flex items-center gap-4 text-gray-600">
            <ShieldCheckIcon className="h-5 w-5 text-indigo-500" />
            <p className="text-sm">Your data is protected with enterprise-grade security</p>
          </div>
        </div>
      </div>

      {/* Login Form Section - Right Side */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-purple-100 to-indigo-100 rounded-2xl mb-6">
                <UserCircleIcon className="h-10 w-10 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Seller Login</h2>
              <p className="text-gray-500">Enter your credentials to access your dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`block w-full pl-10 pr-4 py-3.5 border ${errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500'} rounded-xl bg-gray-50/50 focus:bg-white transition duration-200`}
                    placeholder="seller@example.com"
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-sm font-medium text-purple-600 hover:text-purple-500 transition-colors"
                    disabled={isLoading}
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`block w-full pl-10 pr-4 py-3.5 border ${errors.password ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500'} rounded-xl bg-gray-50/50 focus:bg-white transition duration-200`}
                    placeholder="••••••••"
                    disabled={isLoading}
                  />
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              {/* Remember Me & Submit */}


              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center py-4 px-6 border border-transparent rounded-xl text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 font-medium shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in to Dashboard
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>


            </form>


            {/* Support Link */}
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500">
                Need help? <a href="mailto:harpreetkang778@gmail.com" className="font-medium text-purple-600 hover:text-purple-500">Contact seller support</a>
              </p>
            </div>
          </div>

          {/* Features List - Mobile/Tablet */}
          <div className="mt-8 lg:hidden">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Seller Dashboard Features</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-linear-to-r from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center">
                    <CurrencyDollarIcon className="h-4 w-4 text-cyan-600" />
                  </div>
                  <span className="text-sm font-medium">Sales Tracking</span>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-linear-to-r from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center">
                    <ChartBarIcon className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-sm font-medium">Inventory</span>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-linear-to-r from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="text-sm font-medium">Customer Chat</span>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-linear-to-r from-violet-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <SparklesIcon className="h-4 w-4 text-violet-600" />
                  </div>
                  <span className="text-sm font-medium">Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Login;