import React from "react";
import { DaysGroup } from "../DaysGroup";
import { daysArray } from "../../../utils";

const basicStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
};

export default {
  title: "components/DaysGroup",
  component: DaysGroup,
  decorators: [
    (Story) => (
      <div
        style={{
          ...basicStyle,
          flexWrap: "unset",
          height: "95vh",
          width: "95vw",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <DaysGroup {...args} />;

export const Default = () => <DaysGroup />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        ...basicStyle,
        height: "15%",
        width: "50%",
        gap: "5%",
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
        ...basicStyle,
        height: `${props.height}px`,
        width: `${props.width}px`,
        border: "red solid 3px",
        gap: "5%",
      }}
    >
      <DaysGroup currentDay={"mon"} />
    </div>
  );
};
AdjustSize.argTypes = {
  width: {
    control: { type: "number", min: 50, max: 4000, step: 50 },
    defaultValue: 300,
  },
  height: {
    control: { type: "number", min: 50, max: 3000, step: 50 },
    defaultValue: 100,
  },
  currentDay: { control: false },
};

export const Custom = Template.bind({});
Custom.argTypes = {
  currentDay: { control: "inline-radio", options: daysArray },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        ...basicStyle,
        height: "15%",
        width: "50%",
        gap: "5%",
      }}
    >
      <Story />
    </div>
  ),
];
