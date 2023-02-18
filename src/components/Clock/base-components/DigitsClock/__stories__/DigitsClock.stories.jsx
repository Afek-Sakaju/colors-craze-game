import React from "react";
import { DigitsClock } from "../DigitsClock";

export default {
  title: "base-components/DigitsClock",
  component: DigitsClock,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "borderBox",
          height: "95vh",
          width: "95vw",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <DigitsClock />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "borderBox",
        height: "15%",
        width: "40%",
        border: "1px solid black",
      }}
    >
      <Story />
    </div>
  ),
];

export const AdjustSize = (props) => {
  return (
    <div
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
        border: "1px dashed blue",
      }}
    >
      <DigitsClock />
    </div>
  );
};
AdjustSize.argTypes = {
  width: { control: { type: "number", min: 100, max: 4000, step: 50 } },
  height: { control: { type: "number", min: 100, max: 3000, step: 50 } },
  time: { control: false },
};
AdjustSize.args = {
  width: 200,
  height: 100,
};

const Template = (args) => <DigitsClock {...args} />;

export const Custom = Template.bind({});
Custom.args = {
  time: "99:99:99",
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "borderBox",
        height: "20%",
        width: "50%",
        border: "1px solid black",
      }}
    >
      <Story />
    </div>
  ),
];
