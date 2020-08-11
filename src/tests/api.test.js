import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { api } from "../api/api";

// test api
it("Api testing", async function () {
  const data = await api.getTicker("USD");

  console.warn(data);

  expect(data).toBeDefined();

  expect(data[0].currency).toEqual("USD");
});
