import { memo } from "react";
import bindClassNames from "classnames/bind";

import styles from "@/styles/header.module.scss";
import Link from "next/link";

const cx = bindClassNames.bind(styles);

const Header = memo(() => {
  return (
    <header className={cx("wrapper", "header")}>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="#arts">Arts</Link>
            </li>
            <li>
              <Link href="#roadmap">Roadmap</Link>
            </li>
            <li>
              <Link href="#teams">Teams</Link>
            </li>
            <li>
              <Link href="#faq">FAQ</Link>
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
