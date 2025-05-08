import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PostList from "../src/components/PostList";
import React from "react";

describe("PostList", () => {
  it("should render loading initially", () => {
    render(
      <MemoryRouter>
        <PostList />
      </MemoryRouter>
    );
    expect(screen.getByText("Cargando...")).toBeDefined();
  });
});