'use client'

import React, { FC } from "react";
import { LuLayers } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";

type LibraryProps = {
};

const Library: FC<LibraryProps> = () => {
  const uploadModal = useUploadModal()
  const authModal = useAuthModal()
  const { user } = useUser()
    const onClick = () => {
      if(!user) {
        return authModal.onOpen()
      }
      return uploadModal.onOpen()
    }
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <LuLayers className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick} 
          size={20} 
          className="
            text-neutral-400 
            cursor-pointer 
            hover:text-white 
            transition
          "
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        list song 
      </div>
    </div>
  );
};

export default Library;
