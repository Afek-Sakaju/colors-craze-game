import React from "react";
import { Digit } from "../Digit";

export default {
  title: "base-components/Digit",
  component: Digit,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "96vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <Digit />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
        height: "200px",
      }}
    >
      <Story />
    </div>
  ),
];

const Template = (args) => <Digit {...args} />;

export const AdjustableSize = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px red solid",
        width: `${props.width}px` ?? "50px",
        height: `${props.height}px` ?? "50px",
      }}
    >
      <Digit value={6} />
    </div>
  );
};
AdjustableSize.argTypes = {
  width: { control: { type: "number", min: 20, max: 3000, step: 30 } },
  height: { control: { type: "number", min: 30, max: 3000, step: 30 } },
  value: { control: false },
};
AdjustableSize.args = {
  width: 100,
  height: 100,
};

export const Custom = Template.bind({});
Custom.argTypes = {
  value: {
    control: "inline-radio",
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
        height: "200px",
      }}
    >
      <Story />
    </div>
  ),
];
