import React from "react";

import { reader } from "@/utils/reader";

const NewTest = async () => {
  const post = await reader.collections.portfolios.all();

  console.log(post);

  return <div>NewTest</div>;
};

export default NewTest;
