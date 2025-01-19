"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

const DropzoneImages = ({ sectionName, form, name }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // When click submit
  const onDrop = (acceptedFiles) => {
    const existingFiles = form.getValues(name);
    const updatedFiles = [...existingFiles, ...acceptedFiles];
    setUploadedFiles(updatedFiles);
    form.setValue(name, updatedFiles);
    toast.success("Item has been added successfully!");
  };
  // When click remove icon
  const handleRemoveImage = (e, file) => {
    e.stopPropagation();
    const filterFiles = uploadedFiles.filter((filter) => filter !== file);
    setUploadedFiles(filterFiles);
    form.setValue(name, filterFiles);
    toast.success("Item has been deleted successfully!");
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="w-full">
      <div className="w-full col-span-3">
        <div
          {...getRootProps()}
          className=" border-2 border-dashed border-mainColor-300 rounded-lg p-4 min-h-40 items-center justify-center bg-slate-100 w-full cursor-pointer flex flex-wrap dark:bg-mainDark-900"
        >
          <input {...getInputProps()} name={name} />
          {uploadedFiles?.length > 0 || (
            <p className="text-2xl text-center font-bold text-[#4579e5]">
              Drop files or click here to upload
            </p>
          )}
          {uploadedFiles?.length > 0 &&
            uploadedFiles?.map((file, index) => {
              return (
                <div key={index} className="multi-images relative p-2">
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={`${sectionName}-${index}`}
                    width={100}
                    height={100}
                    layout="responsive"
                    className="border rounded-lg object-cover"
                  />
                  {sectionName == "products" && (
                    <X
                      className="text-red-600 bg-white rounded-full absolute top-4 right-4 z-10 cursor-pointer"
                      onClick={(e) => handleRemoveImage(e, file)}
                    />
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default DropzoneImages;
