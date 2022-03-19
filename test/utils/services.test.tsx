import axios from "axios";
import { renderHook } from "@testing-library/react-hooks";
import { getUsers } from "@/services";
import users from "@mocks/users.json";

jest.spyOn(console, "error").mockImplementation(() => {});
jest.mock("axios", () => ({
  ...jest.requireActual("axios"),
  get: jest.fn(),
}));

describe("Testing services", () => {
  test("Get axios, mock users", () => {
    jest
      .spyOn(axios, "get")
      .mockResolvedValueOnce(Promise.resolve({ data: users }));
    expect(users).toHaveLength(2);
  });
  test("Using method hook", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
    const { result } = renderHook(() => getUsers());
    const current = await result.current;
    expect(current).toHaveLength(10);
  });
});
