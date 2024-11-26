import React from 'react';

const AddOrganization = ({ onClose }) => {
  return (
    <div className="w-full max-w-[800px] p-6 mx-auto bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Add New Employee</h2>
      </div>

      {/* Form Section */}
      <form>
        {/* Employee Name */}
        <div className="mb-4">
          <label
            htmlFor="employeeName"
            className="block text-sm font-medium text-gray-700"
          >
            Employee Name
          </label>
          <input
            id="employeeName"
            type="text"
            placeholder="Enter full name"
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Division */}
        <div className="mb-4">
          <label
            htmlFor="division"
            className="block text-sm font-medium text-gray-700"
          >
            Division
          </label>
          <input
            id="division"
            type="text"
            placeholder="Enter division"
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Position */}
        <div className="mb-4">
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-700"
          >
            Position
          </label>
          <input
            id="position"
            type="text"
            placeholder="Enter position"
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrganization;
