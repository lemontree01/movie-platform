import React from "react";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (Story) => <BrowserRouter><Story/></BrowserRouter>