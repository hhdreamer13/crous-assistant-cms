import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        duration: 0.5,
        repeatType: "reverse",
      },
      y: {
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut",
        repeatType: "reverse",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut",
        repeatType: "reverse",
      },
    },
  },
};

const Loader = () => {
  return (
    <div className="min-h-screen pt-60">
      <div className="flex h-full items-center justify-center">
        <motion.div
          className="mx-auto h-4 w-4 rounded-full bg-white"
          variants={loaderVariants}
          animate="animationTwo"
        ></motion.div>
      </div>
    </div>
  );
};

export default Loader;
