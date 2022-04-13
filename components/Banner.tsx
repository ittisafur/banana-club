import { memo } from "react";
import bindClassNames from "classnames/bind";

import styles from "@/styles/banner.module.scss";

const cx = bindClassNames.bind(styles);

const Banner = memo(() => {
  return (
    <div className={cx("banner")}>
      <h1>Banana Club Boys</h1>
      <button>Coming Soon</button>
    </div>
  );
});

Banner.displayName = "Banner";

export default Banner;
