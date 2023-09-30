import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Auth from "@/app/pages/auth/page";
import { describe, it } from "node:test";

describe("Auth page", () => {
  it("should render properly", () => {
    const { container } = render(<Auth />);
    expect(container).toMatchSnapshot();
  });
});