"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import SrLottie from "@/assets/lottie/sr.json";
import Lottie from "react-lottie";
import { handleCloudinary } from "@/lib/handleCloudinary";
const SrRegister = () => {
  const [selectedFile, setSelectedFile] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // image upload

  const imageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const onSubmit = async (data) => {
    try {
      const image_url = await handleCloudinary(selectedFile);
      // console.log(data);
      data.image_url = image_url;

      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      // console.log(res);
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to register");
      // console.log(result);
      toast.success("Registration successful!");
      reset();
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <section className="py-10">
      <div className="grid md:grid-cols-2">
        <div className="flex items-center justify-center">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: SrLottie,
            }}
            height={300}
            width={300}
          />
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" bg-white p-6 rounded-2xl shadow-md space-y-5 border border-primary">
            <h2 className="text-2xl font-medium text-center text-primary my-5">
              Register as a Sales Representative
            </h2>

            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block   mb-1">Full Name</label>
                <input
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  className="w-full border rounded-md p-2"
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="flex-1">
                <label className="block   mb-1">Email</label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full border rounded-md p-2"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block   mb-1">Profile Picture</label>
                <input
                  type="file"
                  {...register("image_url", {
                    required: "Image field is required",
                  })}
                  onChange={imageUpload}
                  className="w-full border rounded-md p-2"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    {errors.image_url.message}
                  </p>
                )}
              </div>

              <div className="flex-1">
                <label className="block   mb-1">Phone Number</label>
                <input
                  type="text"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  className="w-full border rounded-md p-2"
                  placeholder="+8801XXXXXXX"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block   mb-1">Company Name</label>
                <input
                  {...register("companyName", {
                    required: "Company name is required",
                  })}
                  className="w-full border rounded-md p-2"
                  placeholder="ABC Distributors"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              <div className="flex-1">
                <label className="block   mb-1">Area Coverage</label>
                <input
                  {...register("area", {
                    required: "Area coverage is required",
                  })}
                  className="w-full border rounded-md p-2"
                  placeholder="Dhaka, Chittagong"
                />
                {errors.area && (
                  <p className="text-red-500 text-sm">{errors.area.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block   mb-1">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: 6,
                })}
                className="w-full border rounded-md p-2"
                placeholder="********"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md   hover:bg-blue-800 transition"
              disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SrRegister;
