import React from "react";
import { ColorsTable } from "../ColorsTable";

const basicDecoratorStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "white",
};

export default {
  title: "components/ColorsTable",
  component: ColorsTable,
  decorators: [
    (Story) => (
      <div
        style={{
          ...basicDecoratorStyle,
          width: "95vw",
          height: "95vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <ColorsTable {...args} />;

export const Default = () => <ColorsTable />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        ...basicDecoratorStyle,
        width: "50%",
        height: "40%",
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
        height: `${props.height}px`,
        width: `${props.width}px`,
      }}
    >
      <ColorsTable />
    </div>
  );
};
AdjustSize.argTypes = {
  height: {
    control: { type: "number", min: 50, max: 3000, step: 50 },
    defaultValue: 500,
  },
  width: {
    control: { type: "number", min: 50, max: 4000, step: 50 },
    defaultValue: 500,
  },
  backgroundColor: { control: false },
  rows: { control: false },
  columns: { control: false },
  allowRepeatedColors: { control: false },
  tableColorList: { control: false },
};

export const Custom = Template.bind({});
Custom.argTypes = {
  backgroundColor: { control: { type: "color" } },
  columns: {
    control: { type: "number", min: 1, max: 50, step: 1 },
    defaultValue: 5,
  },
  rows: {
    control: { type: "number", min: 1, max: 50, step: 1 },
    defaultValue: 4,
  },

  allowRepeatedColors: { control: { type: "boolean" } },
  tableColorList: { control: false },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        ...basicDecoratorStyle,
        width: "850px",
        height: "350px",
      }}
    >
      <Story />
    </div>
  ),
];
