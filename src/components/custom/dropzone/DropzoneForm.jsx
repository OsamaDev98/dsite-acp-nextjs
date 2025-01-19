"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import SubmitButton from "../buttons/SubmitButton";

const schema = z.object({
  files: z.array(z.instanceof(File)),
});

const DropzoneForm = ({ sectionName }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: { files: [] },
    resolver: zodResolver(schema),
  });

  // When click submit
  const onDrop = (acceptedFiles) => {
    const existingFiles = getValues("files");
    const updatedFiles = [...existingFiles, ...acceptedFiles];
    setUploadedFiles(updatedFiles);
    setValue("files", updatedFiles, { shouldValidate: true });
    toast.success("Item has been added successfully!");
  };
  // When click remove icon
  const handleRemoveImage = (e, index) => {
    e.stopPropagation();
    setUploadedFiles((prevItems) => prevItems.filter((_, i) => i !== index));
    toast.success("Item has been deleted successfully!");
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  function onSubmit(data) {
    try {
      console.log(data);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="col-span-3">
      <Controller
        name="files"
        control={control}
        render={({ field, fieldState }) => (
          <div className="card-style mt-0 rounded-tr-lg">
            <div className="w-full col-span-3">
              <div
                {...getRootProps()}
                className=" border-2 border-dashed border-mainColor-300 rounded-lg p-4 min-h-40 items-center justify-center bg-slate-100 w-full cursor-pointer flex flex-wrap dark:bg-mainDark-900"
              >
                <input {...getInputProps()} />
                {uploadedFiles?.length > 0 || (
                  <p className="text-3xl text-center font-bold text-[#4579e5]">
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
                            onClick={(e) => handleRemoveImage(e, index)}
                          />
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      />
      <div className="flex items-center justify-end my-8">
        <SubmitButton title="Update" />
      </div>
    </form>
  );
};
export default DropzoneForm;
