import { createContext } from "react";

const imageContext = createContext({
  image: null,
  setImage: () => {},
});

export default imageContext;
