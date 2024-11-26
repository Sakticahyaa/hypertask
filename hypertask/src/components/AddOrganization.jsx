import React, { useState } from 'react';

const AddOrganization = ({ onClose }) => {
  const [employeeName, setEmployeeName] = useState('');
  const [division, setDivision] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!employeeName || !division || !position) {
      alert('Please fill out all fields');
      return;
    }

    const data = { employeeName, division, position };

    try {
      const response = await fetch('/api/organization', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Employee added successfully');
        onClose(); // Close modal after successful submission
      } else {
        alert('Failed to add employee');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the employee');
    }
  };

  return (
    <div className="w-full max-w-[800px] p-6 mx-auto bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Add New Employee</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="employeeName" className="block text-sm font-medium text-gray-700">
            Employee Name
          </label>
          <input
            id="employeeName"
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            placeholder="Enter full name"
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="division" className="block text-sm font-medium text-gray-700">
            Division
          </label>
          <input
            id="division"
            type="text"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            placeholder="Enter division"
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="position" className="block text-sm font-medium text-gray-700">
            Position
          </label>
          <input
            id="position"
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Enter position"
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="mr-2 px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrganization;
