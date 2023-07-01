"use client";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";
import React, { FC, useEffect, useState } from "react";

type ModalProviderProps = {
  //   products: ProductWithPrice[];
};

const ModalProvider: FC<ModalProviderProps> = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div>
      <AuthModal />
      <UploadModal/>
    </div>
  );
};

export default ModalProvider;
