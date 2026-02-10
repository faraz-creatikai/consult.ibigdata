'use client';
import React from 'react';
import PopupMenu from './PopupMenu';
// import { customerGetDataInterface } from '@/store/customer.interface';
import { IoMdClose } from 'react-icons/io';
import Button from '@mui/material/Button';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { exportToExcel } from '@/app/utils/exportToExcel';

export interface customerGetDataInterface {
  _id: string;
  Campaign: string;
  Type: string;
  SubType: string;
  Name: string;
  Description?:string;
  ReferenceId?:string;
  Email: string;
  ContactNumber: string;
  CustomerType: string;
  CustomerSubType: string;
  CustomerName: string;
  Reason: string;
  

}

interface TableDialogProps {
    title?: string;
    subTitle?: string;
    onClose?: () => void;
    data: customerGetDataInterface[] | null;
    totalData?: number;
    isOpen?: boolean; // optional prop to control visibility
}


const InvalidimportData = ({
    isOpen,
    title = '',
    subTitle = 'Contact No',
    data,
    totalData,
    onClose,
}: TableDialogProps) => {
    if (!isOpen || !data) return null;
    console.log("data is here", data);
    const customerTableLoader = false;

    const headers = Object.keys(data[0] || {}) as (keyof customerGetDataInterface)[];
    return (
        <PopupMenu onClose={onClose} isOpen={isOpen}>
            <div className="flex flex-col relative border border-gray-300/30 w-screen overflow-hidden  h-full    bg-white text-[var(--color-secondary-darker)]  shadow-lg p-5  gap-8">
                <div className=' flex justify-between items-center'>
                    <div className=''>
                        <h1 className="text-2xl p-2 font-semibold text-[var(--color-secondary-darker)] tracking-wide">
                            {title} {
                                <span className="text-[var(--color-primary)] font-light  text-xl"> {subTitle}</span>
                            }
                        </h1>
                        <p className='  p-2 text-sm text-gray-500'>{data.length} customers found with Contact No : <span className=' text-[var(--color-primary)]'>{data[0]?.ContactNumber}</span></p>
                    </div>

                    <button className=" -translate-y-4 cursor-pointer text-3xl transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white rounded-md p-3" onClick={onClose}><IoMdClose /></button>
                </div>
                <div className=" max-h-[calc(100vh-150px)]  overflow-scroll custom-scrollbar pr-1">
                <table className="min-w-max border-collapse">
  <thead className="sticky top-0 bg-gray-100 z-10 ">
    <tr>
      <th className="border px-3 py-2 text-left">S.No</th>
      {headers.map((key) => (
          <th key={key} className="border px-3 py-2 text-left capitalize">
            {key.replace(/([A-Z])/g, " $1")}
          </th>
        ))}
     
    </tr>
  </thead>

  <tbody>
     {data.map((row, rowIndex) => (
        <tr key={row._id || rowIndex}>
          <td className="border px-3 py-2">{rowIndex + 1}</td>

          {headers.map((key) => (
            <td
              key={key}
              className={`border px-3 py-2 ${
                !row[key] ? "text-red-600" : ""
              }`}
            >
              {row[key] ?? "_"}
            </td>
          ))}
        </tr>
      ))}
  </tbody>
</table>

                </div>
         <div className="flex justify-end mr-10 mt-4">
  <button
    onClick={() => {exportToExcel(data, "invalid-customers");
      onClose?.();
    }}
    className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-md hover:opacity-90 transition"
  >
    Export to Excel
  </button>
</div>
            </div>
   

        </PopupMenu>
    );
};

export default InvalidimportData;
