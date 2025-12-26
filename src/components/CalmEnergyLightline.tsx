import { FC } from "react";

interface CalmEnergyLightlineProps {
  className?: string;
}

const CalmEnergyLightline: FC<CalmEnergyLightlineProps> = ({ className = "" }) => {
  return (
    <div className={`w-full my-24 flex justify-center ${className}`}>
      <div
        className="
          h-[1px] w-full max-w-5xl 
          bg-gradient-to-r 
          from-transparent 
          via-[#E5C58B]/35 
          to-transparent
          relative
        "
      >
        {/* sanfte Lichtaura */}
        <div
          className="
            absolute left-1/2 -translate-x-1/2 top-1/2 
            w-[50%] h-[14px] 
            bg-gradient-to-r 
            from-[#E5C58B]/7 via-[#1AC7A4]/10 to-[#E5C58B]/7 
            blur-[14px]
            -translate-y-1/2
            pointer-events-none
          "
        />
      </div>
    </div>
  );
};

export default CalmEnergyLightline;
