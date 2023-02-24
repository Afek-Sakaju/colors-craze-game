import React from "react";
import { Clock } from "../Clock";

export default {
  title: "components/Clock",
  component: Clock,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "97vh",
          width: "97vw",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <Clock />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        width: "800px",
      }}
    >
      <Story />
    </div>
  ),
];

const Template = (args) => <Clock {...args} />;

export const Custom = Template.bind({});
Custom.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        width: "600px",
      }}
    >
      <Story />
    </div>
  ),
];
Custom.argTypes = {
  size: { control: "inline-radio", options: ["normal", "small"] },
  timestamp: { control: false },
};
