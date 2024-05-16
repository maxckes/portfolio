import React, { useRef } from "react";
import {
  MotionValue,
  motion,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
interface Icon {
  name: string;
  src: string;
}

interface AppIconProps {
  mouseX: MotionValue;
  icon: Icon;
}
var currentTab = "";
console.log(currentTab);
function Dock({ setCurrentTab }) {
  let mouseX = useMotionValue(Infinity);

  return (
    <div className=" absolute bottom-1 w-full  ">
      <div className="flex justify-center p-2">
        <motion.div
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="mx-auto flex w-fit   h-16 items-end gap-4 rounded-2xl bg-gray-500 bg-opacity-50 px-4 pb-3"
        >
          {icons.map((icon, index) => (
            <button
              onClick={() => {
                setCurrentTab(icon.name);
              }}
              className="bg-gray-200 rounded-full"
            >
              <AppIcon key={index} mouseX={mouseX} icon={icon} />
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function AppIcon({ mouseX, icon }: { mouseX: MotionValue }) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10"
      title={icon.name}
    >
      <img
        src={icon.src}
        alt={icon.name}
        className="w-full h-full rounded-full"
      />
    </motion.div>
  );
}

const icons: Icon[] = [
  {
    name: "Home",
    src: "https://cdn.icon-icons.com/icons2/2248/PNG/512/home_circle_icon_137496.png",
  },
  {
    name: "About me",
    src: "https://icons.veryicon.com/png/o/miscellaneous/zr_icon/education-experience.png",
  },
  {
    name: "Skills",
    src: "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/professional-skills-icon.svg",
  },
  {
    name: "Projects",
    src: "https://icons.veryicon.com/png/o/business/scientific-research-project-icon-library/project-closing-management.png",
  },
  //{
  //  name: "Resume",
  //  src: "https://icons.veryicon.com/png/o/miscellaneous/general-icon-library/resume-7.png",
  //},
];

export default Dock;
