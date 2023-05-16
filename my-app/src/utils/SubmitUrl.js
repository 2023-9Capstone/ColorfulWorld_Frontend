const imageUrl = () => window.location.href;
export const fetchUrl = () =>
  "blob:" +
  window.location.origin +
  imageUrl().substring(imageUrl().lastIndexOf("/"), imageUrl().length);
