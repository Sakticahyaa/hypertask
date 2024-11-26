import React, { useState } from 'react';
import AddOrganization from '../components/AddOrganization'; // Path ke komponen AddOrganization

const Organization = () => {
  const [showAddOrganization, setShowAddOrganization] = useState(false);

  const handleAddClick = () => {
    setShowAddOrganization(true);
  };

  const handleCloseAddOrganization = () => {
    setShowAddOrganization(false);
  };

  return (
    <div className="transform scale-[0.7] origin-top-left w-screen h-screen">
      <div className="w-[1591px] h-[357px] relative">
        <div className="w-[1503px] h-[69px] absolute left-[-1px] top-[-1px] rounded-[15px] bg-[#3b3b3b]" />
        <div className="w-[1591px] h-[935px] relative">
          <div className="w-[1591px] h-[935px] absolute left-[-0.5px] top-[77.5px] rounded-[5px] bg-white" />
          <p className="absolute left-[26px] top-[139px] text-[22px] font-semibold text-[#0b1220]">
            John Doe
          </p>
          <p className="absolute left-[26px] top-[89px] text-[22px] font-semibold text-[#0b1220]">
            Andrew Suryono
          </p>
          <div className="w-[257px] h-[27px]">
            <p className="absolute left-[442px] top-[89px] text-[22px] font-semibold text-[#0b1220]">
              Senior Business Analyst
            </p>
          </div>
        </div>
        <div className="w-[313px] h-[27px]">
          <p className="absolute left-[442px] top-[134px] text-[22px] font-semibold text-[#0b1220]">
            Junior Full Stack Programmer
          </p>
        </div>
        <p className="absolute left-[840px] top-[89px] text-[22px] font-semibold text-[#0b1220]">
          2 Projects
        </p>
        <p className="absolute left-[840px] top-[139px] text-[22px] font-semibold text-[#0b1220]">
          1 Project
        </p>
        <p className="absolute left-[1185px] top-[89px] text-[22px] font-semibold text-[#0b1220]">
          15 Projects
        </p>
        <p className="absolute left-[26px] top-[17px] text-[28px] font-semibold text-[#00f5d0]">
          Name
        </p>
        <p className="absolute left-[1185px] top-5 text-[28px] font-semibold text-[#00f5d0]">
          Project Completed
        </p>
        <p className="w-[250px] absolute left-[840px] top-5 text-[28px] font-semibold text-[#00f5d0]">
          Ongoing Project
        </p>
        <p className="w-[250px] absolute left-[442px] top-5 text-[28px] font-semibold text-[#00f5d0]">
          Position
        </p>
        <svg
          width={1593}
          height={2}
          viewBox="0 0 1593 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[-1.5px] top-[174.5px]"
          preserveAspectRatio="none"
        >
          <path
            d="M1 1.00012L1592 0.999983"
            stroke="#F4F4F4"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
        <svg
          width={1593}
          height={2}
          viewBox="0 0 1593 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[-1.5px] top-[125.5px]"
          preserveAspectRatio="none"
        >
          <path
            d="M1 1.00012L1592 0.999983"
            stroke="#F4F4F4"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
        {/* Tombol Add */}
        <div
          onClick={handleAddClick}
          className="absolute top-2 right-4 w-[50px] h-[50px] bg-[#3B3B3B] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#505050]"
          title="Add"
        >
          <span className="text-[24px] font-bold text-[#00f5d0]">+</span>
        </div>
      </div>

      {/* Modal AddOrganization */}
      {showAddOrganization && (
        <div 
          className="fixed inset-0 flex justify-center items-center z-50" // Background hitam dengan opacity
        >
          {/* Kontainer Modal */}
          <div 
            className="relative bg-white rounded-lg shadow-lg p-6"
            style={{
              width: '800px',  // Ukuran lebar modal
              maxWidth: '90%', // Pastikan modal tidak terlalu lebar
              height: 'auto',  // Tinggi menyesuaikan konten
              maxHeight: '90vh', // Maksimum tinggi
              overflowY: 'auto', // Tambahkan scroll jika konten terlalu banyak
              border: '3px solid #007bff', // Border tebal dengan warna biru
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Menambah efek bayangan lebih tegas
            }}
          >
            <button
              onClick={handleCloseAddOrganization}
              className="absolute top-2 right-2 text-[20px] font-bold text-[#FF0000]"
            >
              ×
            </button>
            <AddOrganization />
          </div>
        </div>
      )}
    </div>
  );
};

export default Organization;
