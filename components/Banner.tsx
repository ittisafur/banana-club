import { memo } from "react";
import bindClassNames from "classnames/bind";

import styles from "@/styles/banner.module.scss";
import { motion, useMotionValue } from "framer-motion";

const cx = bindClassNames.bind(styles);

const Banner = memo(() => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cx("banner")}
    >
      <motion.h1
        animate={{
          scale: [1, 1.5, 1],
          rotate: 20,
          opacity: 0.5,
        }}
        transition={{
          yoyo: Infinity,
          duration: 1,
          ease: "easeInOut",
        }}
      >Banana Boys Club</motion.h1>
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
      >
        Coming Soon
      </motion.button>
    </motion.div>
  );
});

// Component Name Declaration
Banner.displayName = "Banner";

export default Banner;
