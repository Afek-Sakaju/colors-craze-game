import React from "react";
import { DayText } from "../DayText";
import { daysArray } from "../../../utils";

const dayTextBasicStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "3px red solid",
};

export default {
  title: "base-components/DayText",
  component: DayText,
  decorators: [
    (Story) => (
      <div
        style={{
          ...dayTextBasicStyle,
          width: "95vw",
          height: "95vh",
          border: "unset",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <DayText />;

export const AdjustableSize = (props) => {
  return (
    <div
      style={{
        ...dayTextBasicStyle,
        width: `${props.width}px`,
        height: `${props.height}px`,
      }}
    >
      <DayText label={"Thursday"} />
    </div>
  );
};
AdjustableSize.argTypes = {
  width: {
    control: { type: "number", min: 50, max: 3000, step: 50 },
    defaultValue: 500,
  },
  height: {
    control: { type: "number", min: 50, max: 3000, step: 50 },
    defaultValue: 300,
  },
};

const Template = (args) => <DayText {...args} />;

export const SelectDay = Template.bind({});
SelectDay.argTypes = {
  label: { control: "inline-radio", options: daysArray },
  currentDay: { control: "inline-radio", options: daysArray },
};

export const Custom = Template.bind({});
Custom.args = {
  label: "custom",
  currentDay: "choose-day",
};
