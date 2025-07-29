"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";

const SrRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to register");

      toast.success("Registration successful!");
      reset();
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md space-y-5">
      <h2 className="text-2xl font-bold text-center text-primary">
        Sales Representative Registration
      </h2>

      <div>
        <label className="block font-semibold mb-1">Full Name</label>
        <input
          {...register("fullName", { required: "Full name is required" })}
          className="w-full border rounded-md p-2"
          placeholder="John Doe"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label className="block font-semibold mb-1">Email</label>
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

      <div>
        <label className="block font-semibold mb-1">Phone Number</label>
        <input
          type="text"
          {...register("phone", { required: "Phone number is required" })}
          className="w-full border rounded-md p-2"
          placeholder="+8801XXXXXXX"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block font-semibold mb-1">Company Name</label>
        <input
          {...register("companyName", { required: "Company name is required" })}
          className="w-full border rounded-md p-2"
          placeholder="ABC Distributors"
        />
        {errors.companyName && (
          <p className="text-red-500 text-sm">{errors.companyName.message}</p>
        )}
      </div>

      <div>
        <label className="block font-semibold mb-1">Area Coverage</label>
        <input
          {...register("area", { required: "Area coverage is required" })}
          className="w-full border rounded-md p-2"
          placeholder="Dhaka, Chittagong"
        />
        {errors.area && (
          <p className="text-red-500 text-sm">{errors.area.message}</p>
        )}
      </div>

      <div>
        <label className="block font-semibold mb-1">Password</label>
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
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:bg-blue-800 transition"
        disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Register"}
      </button>
    </form>
  );
};

export default SrRegisterForm;
