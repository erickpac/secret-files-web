/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import { useFetchFiles } from "../hooks/useFetchFiles";
import App from "../App";

vi.mock("../hooks/useFetchFiles");

describe("App Component", () => {
  beforeEach(() => {
    useFetchFiles.mockReturnValue({
      files: [],
      loading: false,
      error: null,
    });
  });

  test("renders the App component", () => {
    render(<App />);
    expect(screen.getByText("Secret Files")).toBeInTheDocument();
  });

  test("displays loading message when loading", () => {
    useFetchFiles.mockReturnValue({
      files: [],
      loading: true,
      error: null,
    });

    render(<App />);
    expect(screen.getByText("Loading files...")).toBeInTheDocument();
  });

  test("displays error message when there is an error", () => {
    useFetchFiles.mockReturnValue({
      files: [],
      loading: false,
      error: { message: "Error fetching files" },
    });

    render(<App />);
    expect(screen.getByText("Error fetching files")).toBeInTheDocument();
  });

  test("displays files table when files are fetched", () => {
    useFetchFiles.mockReturnValue({
      files: [{ file: "file1.txt", text: "", number: 0, hex: "" }],
      loading: false,
      error: null,
    });

    render(<App />);
    expect(screen.getByText("file1.txt")).toBeInTheDocument();
  });

  test("submits the form and updates fileName state", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Search by file name");
    const button = screen.getByText("Search");

    fireEvent.change(input, { target: { value: "test-file" } });
    fireEvent.click(button);

    expect(useFetchFiles).toHaveBeenCalledWith("test-file");
  });
});
