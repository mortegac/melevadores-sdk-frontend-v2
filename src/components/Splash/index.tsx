import React from "react";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { Logo_animate } from "./Logo_animate";

const Splash: React.FC = () => {
  return (
    <div className="bg-primary w-full h-screen flex flex-col justify-center items-center gap-6">
      {/* <Logo_animate /> */}
      <LoadingIcon icon="three-dots" color="#ffffff" className="w-12 h-12" />
      <p className="text-sm text-white/50">versión: {__APP_VERSION__}</p>
    </div>
  );
};

export default Splash;
