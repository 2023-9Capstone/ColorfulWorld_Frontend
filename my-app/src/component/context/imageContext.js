import { createContext } from "react";

const imageContext = createContext({
  images: null,
  setImages: () => {},
});

export default imageContext;
