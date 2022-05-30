import { createRef, FC } from "react";

interface TooltipProps {
  children: string;
  tooltipText: string;
}

const Tooltip: FC<TooltipProps> = ({ children, tooltipText }) => {
  // const tipRef = createRef()
  // const handleMouseEnter = () => {
  //     tipRef.current.style.opacity = 1;
  //     tipRef.current.style.marginLeft = "20px";
  // }
  // const handleMouseLeave = () => {
  //   tipRef.current.style.opacity = 0;
  //   tipRef.current.style.marginLeft = "10px";
  // };
  return (
    <div className=""></div>
    //   <div
    //     className="relative flex items-center"
    //     onMouseEnter={handleMouseEnter}
    //     onMouseLeave={handleMouseLeave}>
    //     <div
    //       className="absolute flex items-center px-4 py-2 text-white whitespace-no-wrap transition-all duration-150 rounded bg-gradient-to-r from-black to-gray-700"
    //       style={{ left: "100%", opacity: 0 }}
    //       ref={tipRef}>
    //       <div
    //         className="absolute w-3 h-3 bg-black"
    //         style={{ left: "-6px", transform: "rotate(45deg)" }}
    //       />
    //       {tooltipText}
    //     </div>
    //     {children}
    //   </div>
  );
};

export default Tooltip;
