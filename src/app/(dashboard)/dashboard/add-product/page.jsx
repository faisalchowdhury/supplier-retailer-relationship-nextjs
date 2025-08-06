"use client";

import { Button } from "@/components/ui/button";
import { handleCloudinary } from "@/lib/handleCloudinary";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { data: session, status } = useSession();
  const [selectedImage, setSelectedImage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    let imageLink = "";
    if (selectedImage) {
      imageLink = await handleCloudinary(selectedImage);
      data.image_url = imageLink;
    }
    console.log(data);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        setSelectedImage(null);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block mb-1 font-medium">Product Name</label>
            <input
              type="text"
              placeholder="Write product name"
              {...register("product_name", { required: true })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.product_name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Category</label>
            <input
              type="text"
              placeholder="Product category"
              {...register("product_category", { required: true })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.category && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Price ($)</label>
            <input
              type="number"
              placeholder="Price in BDT"
              {...register("price", { required: true, min: 0 })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.price && (
              <span className="text-red-500">Valid price required</span>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Quantity</label>
            <input
              type="number"
              placeholder="Stock quantity"
              {...register("stock_quantity", { required: true, min: 1 })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.quantity && (
              <span className="text-red-500">Valid quantity required</span>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your email"
              {...register("email", { required: true })}
              className="w-full border px-3 py-2 rounded"
              defaultValue={session?.user?.email}
              readOnly
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="Your phone number"
              {...register("phone", { required: true })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.phone && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Company Name</label>
            <input
              type="text"
              placeholder="e.g. Apple Inc."
              {...register("company", { required: true })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.company && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Availability</label>
            <select
              {...register("availability", { required: true })}
              className="w-full border px-3 py-2 rounded">
              <option value="">Select status</option>
              <option value="in_stock">In Stock</option>
              <option value="out_of_stock">Out of Stock</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Product Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setSelectedImage(e.target.files[0])}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
        </div>

        {/* Description in full width */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            placeholder="Enter product details, specifications, etc."
            className="w-full border px-3 py-2 rounded"
            rows={4}></textarea>
          {errors.description && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <Button type="submit" variant={"accent"} className="w-full">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
