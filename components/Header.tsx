import { memo } from "react";
import bindClassNames from "classnames/bind";

import styles from "@/styles/header.module.scss";

const cx = bindClassNames.bind(styles);

const Header = memo(() => {
  return (
    <header className={cx("header")}>
      <div>
        <nav>
          <ul>
            <li>
              <a href="#arts">Arts</a>
            </li>
            <li>
              <a href="#roadmap">Roadmap</a>
            </li>
            <li>
              <a href="#teams">Teams</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>
        <div>
          <ul className={cx("icons")}>
            <li>
              <a href="">
                <img src="/assets/svg/medium.svg" alt="Medium Articles" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/assets/svg/discord.svg" alt="Discord" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/assets/svg/opensea.svg" alt="Open Sea" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
});

// Component Name Declaration
Header.displayName = "Header";

export default Header;
