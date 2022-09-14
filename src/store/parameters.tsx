import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type Colors = {
  shadow: string;
  defaultButton: string;
  extendButton: string;
  operationButton: string;
  equalButton: string;
  display: string;
};

export const colors: Colors = {
  shadow: "#404040",
  defaultButton: "darkgrey",
  extendButton: "red",
  operationButton: "#333",
  equalButton: "orangered",
  display: "lightgreen",
};

// const signs = useSelector((state: RootState) => state.signs);

export const buttons = [
  {
    text: "AC",
    position: [0.95, -0.15, -0.715],
    color: colors.extendButton,
  },
  {
    text: "^_^",
    position: [0.95, -0.15, -1.43],
    color: colors.extendButton,
  },
  {
    text: "%",
    position: [0.98, -0.75, -1.43],
    color: colors.operationButton,
  },
  {
    text: "/",
    position: [0.98, -0.75, -0.715],
    color: colors.operationButton,
  },
  {
    text: "*",
    position: [1.01, -1.35, -0.715],
    color: colors.operationButton,
  },
  {
    text: "MRC",
    position: [1.01, -1.35, -1.43],
    color: colors.operationButton,
  },
  {
    text: "-",
    position: [1.043, -1.95, -0.715],
    color: colors.operationButton,
  },
  {
    text: "M+",
    position: [1.043, -1.95, -1.43],
    color: colors.operationButton,
  },
  {
    text: "+",
    position: [1.07, -2.55, -0.715],
    color: colors.operationButton,
  },
  {
    text: "0",
    position: [1.07, -2.55, 1.43],
  },
  {
    text: "1",
    position: [1.043, -1.95, 1.43],
  },
  {
    text: "2",
    position: [1.043, -1.95, 0.715],
  },
  {
    text: "3",
    position: [1.043, -1.95, 0],
  },
  {
    text: "4",
    position: [1.01, -1.35, 1.43],
  },
  {
    text: "5",
    position: [1.01, -1.35, 0.715],
  },
  {
    text: "6",
    position: [1.01, -1.35, 0],
  },
  {
    text: "7",
    position: [0.98, -0.75, 1.43],
  },
  {
    text: "8",
    position: [0.98, -0.75, 0.715],
  },
  {
    text: "9",
    position: [0.98, -0.75, -0],
  },
  {
    text: ".",
    position: [1.07, -2.55, 0.715],
  },
  {
    text: "+/-",
    position: [1.07, -2.55, 0],
  },
];
