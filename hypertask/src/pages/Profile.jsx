import React, { useState, useEffect } from "react";

const Profile = () => {
  const [profileImage, setProfileImage] = useState("susilo-1.jpeg");
  const [profileName, setProfileName] = useState(""); // Default is empty
  const [email, setEmail] = useState(""); // Default is empty
  const [dob, setDob] = useState(""); // Default will be set to current date
  const [position, setPosition] = useState(""); // Default is empty

  useEffect(() => {
    // Set the default date of birth to the current date
    const currentDate = new Date().toISOString().split("T")[0];
    setDob(currentDate);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(null); // This will clear the image
  };

  const handleSave = () => {
    // For now, we'll just log the data to the console. You can replace this with an API call or other logic.
    const profileData = {
      profileImage,
      profileName,
      email,
      dob,
      position,
    };
    console.log("Profile saved:", profileData);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-50">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90">
        {/* Profile Title */}
        <h2 className="text-3xl font-semibold text-center text-[#0b1220] mb-8">Profile</h2>

        {/* Profile Image Section */}
        <div className="flex justify-center mb-4">
          <img
            src={profileImage || "default-profile-image.jpg"}
            alt="Profile"
            className="w-[120px] h-[120px] rounded-full object-cover border-4 border-gray-200"
          />
        </div>

        {/* Change and Delete Buttons */}
        <div className="flex justify-between mb-6">
          <button
            className="bg-[#00f5d0] text-[#3b3b3b] py-2 px-4 rounded-md"
            onClick={() => document.getElementById("imageInput").click()}
          >
            Change picture
          </button>
          <input
            type="file"
            id="imageInput"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button
            className="bg-[#cd0000] text-white py-2 px-4 rounded-md"
            onClick={handleDeleteImage}
          >
            Delete picture
          </button>
        </div>

        {/* Profile Form Sections */}
        <div className="mb-4">
          <label className="block text-gray-600 text-lg mb-2">Profile Name</label>
          <input
            type="text"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 rounded-md"
            placeholder="Enter your profile name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-lg mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-lg mb-2">Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-lg mb-2">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 rounded-md"
            placeholder="Enter your position"
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSave}
            className="bg-[#00f5d0] text-[#3b3b3b] py-2 px-6 rounded-md mt-4"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
