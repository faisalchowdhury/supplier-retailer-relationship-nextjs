// Handle upload to cloudinary

export const handleCloudinary = async (imageFile) => {
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", "unsigned_preset");

  const imageInfo = await fetch(
    `https://api.cloudinary.com/v1_1/dtvrjavzf/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const res = await imageInfo.json();
  return res.secure_url;
};
