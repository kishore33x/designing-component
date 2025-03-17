import React from 'react';

const Usercard = () => {
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 (123) 456-7890";
  const address = "123 Main Street, Cityville, Country";
  const profilePic = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

  return (
    <div className="bg-white p-2 rounded-lg shadow-md w-36">
      <img
        src={profilePic}
        alt="Profile"
        className="w-10 h-10 rounded-full mx-auto"
      />
      <h2 className="text-black text-xs font-semibold mt-2">{name}</h2>
      <p className="text-gray-600 text-[8px]">{email}</p>
      <p className="text-gray-600 text-[8px]">{phone}</p>
      <p className="text-gray-600 text-[8px]">{address}</p>
    </div>
  );
};

export default Usercard;
