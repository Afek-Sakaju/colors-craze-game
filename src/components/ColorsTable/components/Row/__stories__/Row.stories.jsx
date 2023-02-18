import React, { useState } from "react";
import { Row } from "../Row";
import { generateRandomColor } from "../../../utils";

const basicStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "5%",
};

const tempColors = [
  ["blue", "red", "green"],
  ["grey", "cyan", "lime"],
  ['olive','pink','gold']
];

export default {
  title: "components/Row",
  component: Row,
  decorators: [
    (Story) => (
      <div
        style={{
          ...basicStyle,
          width: "95vw",
          height: "95vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <Row colors={tempColors} i={0} />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        ...basicStyle,
        width: "45%",
        height: "30%",
      }}
    >
      <Story />
    </div>
  ),
];

Default.argTypes = {
  colors: { control: false },
  i: { control: false },
};

export const AdjustSize = (props) => {
  return (
    <div
      style={{
        ...basicStyle,
        height: `${props.height}px`,
        width: `${props.width}px`,
      }}
    >
      <Row colors={tempColors} i={0} />
    </div>
  );
};
AdjustSize.argTypes = {
  height: {
    control: { type: "number", min: 50, max: 3000, step: 50 },
    defaultValue: 200,
  },
  width: {
    control: { type: "number", min: 50, max: 4000, step: 50 },
    defaultValue: 600,
  },
  colors: { control: false },
  i: { control: false },
};

export const OnClickChangeColor = () => {
  const [colors, onColorChange] = useState(tempColors);

  return (
    <div
      style={{
        ...basicStyle,
        width: "45%",
        height: "30%",
      }}
    >
      <Row
        colors={colors}
        onClick={({ i, j }) => {
          onColorChange((colors) => {
            colors[i][j] = generateRandomColor();
            return [...colors];
          });
        }}
        i={0}
      />
    </div>
  );
};

const Template = (args) => <Row {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  i: {
    control: { type: "number", min: 0, max: tempColors.length - 1, step: 1 },
    defaultValue: 0,
  },
  colors: { control: false, defaultValue: tempColors },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        ...basicStyle,
        width: "850px",
        height: "350px",
      }}
    >
      <Story />
    </div>
  ),
];
