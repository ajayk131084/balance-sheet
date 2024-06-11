import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { data } from "./mockData";

describe("App", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  test("renders balance sheet", async () => {
    // Provide the data object to be returned
    jest.spyOn(global, "fetch").mockImplementationOnce(
      jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(data),
        })
      ) as jest.Mock
    );

    const { findByText } = render(<App />);
    const element = await findByText(/Balance Sheet/i);
    expect(element).toBeInTheDocument();
  });

  test("renders error page", async () => {
    // Provide the data object to be returned
    jest
      .spyOn(global, "fetch")
      .mockImplementationOnce(
        jest.fn(() => Promise.reject("TypeError: Failed to fetch")) as jest.Mock
      );

    const { findByText } = render(<App />);
    const element = await findByText(/TypeError: Failed to fetch/i);
    expect(element).toBeInTheDocument();
  });
});
