import React from "react";
import BackButton from "../components/atoms/BackButton";
import Container from "../components/molecules/Container";

export default function StackLayout({ children }) {
  return (
    <div>
      <BackButton />
      <Container>{children}</Container>
    </div>
  );
}
