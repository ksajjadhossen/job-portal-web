import React from "react";
import { motion } from "motion/react";
import image1 from "../../assets/pictures/picture1.jpg.jpg";
import image2 from "../../assets/pictures/picture2.jpg.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse items-center">
        <div className="flex-1 flex justify-center flex-col">
          <motion.img
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={image1}
            className="max-w-sm  shadow-2xl rounded-t-[50px] rounded-r-4xl  border-l-8 border-b-8 border-purple-700 "
          />
          <motion.img
            animate={{ x: [100, 50, 100] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={image2}
            className="max-w-sm  shadow-2xl rounded-t-4xl rounded-r-4xl  border-l-8 border-b-8 border-purple-700 "
          />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            Remote{" "}
            <motion.span
              animate={{
                color: ["#DC0000", "#F25912", "#FFCC00", "#DC0000"],
                transition: { duration: 5, repeat: Infinity },
              }}
            >
              Job
            </motion.span>{" "}
            for you
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
