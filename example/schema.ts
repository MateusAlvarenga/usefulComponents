import { simpleList } from "../../components/hooks/schemaHelper";

const schema = (props) => {
  return {
    type: "object",
    required: ["name", "color", "year"],
    properties: {
      name: {
        type: "string",
        title: "Name: ",
        default: props.name || "",
        maxLength: 40,
      },
      color: simpleList("Color", ["red", "blue", "green"]),
      year: {
        type: "number",
        title: "Year: ",
      },
    },
  };
};

export { schema };
