import React from "react";
import { Square } from "../Square";

export default {
  title: "base-components/Square",
  component: Square,
  parameters: {
    controls: {
      // This line hides specified controls
      exclude: /(^id$|^onClick$)/g,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: "95vh",
          width: "95vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <Square />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        height: "200px",
        width: "200px",
      }}
    >
      <Story />
    </div>
  ),
];

export const AdjustSize = (props) => (
  <div
    style={{
      height: `${props.height}px`,
      width: `${props.width}px`,
    }}
  >
    <Square />
  </div>
);
AdjustSize.argTypes = {
  height: {
    control: { type: "number", min: 50, max: 3000, step: 50 },
    defaultValue: 200,
  },
  width: {
    control: { type: "number", min: 50, max: 4000, step: 50 },
    defaultValue: 200,
  },
  color: { control: false },
};

const Template = (args) => <Square {...args} />;

export const Custom = Template.bind({});
Custom.decorators = [
  (Story) => (
    <div
      style={{
        height: "200px",
        width: "200px",
      }}
    >
      <Story />
    </div>
  ),
];
Custom.argTypes = {
  color: {
    control: { type: "color" },
    defaultValue: "olive",
  },
};
