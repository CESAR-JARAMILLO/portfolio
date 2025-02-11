"use client";

import { useState } from "react";
import { Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";

const links = [
  { link: "#home", label: "Home" },
  { link: "#skills", label: "Skills" },
  { link: "#about", label: "About" },
  { link: "#portfolio", label: "Portfolio" },
  { link: "#contact", label: "Contact" },
];

const Header = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const handleClick = (link: string) => {
    setActive(link);
    close(); // Close mobile menu
    document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
  };

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        handleClick(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <span className={classes.logo}>My Logo</span>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};

export default Header;
