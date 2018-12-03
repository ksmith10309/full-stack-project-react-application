import React from "react";

import styles from "../styles/header.module.scss";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <span>{this.props.title}</span>
        <nav>{this.props.children}</nav>
      </header>
    );
  }
}

export default Header;
