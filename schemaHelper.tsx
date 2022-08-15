const simpleList = (name, items) => {
  return {
    type: "string",
    title: name,
    anyOf: items.map((item) => ({ type: "string", enum: [item] })),
  };
};

export { simpleList };