import React from "react";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { Logo_animate } from "./Logo_animate";

const Splash: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-6 bg-primary">
      <Logo_animate />
      <LoadingIcon icon="three-dots" color="#ffffff" className="w-12 h-12" />
    </div>
  );
};

export default Splash;
