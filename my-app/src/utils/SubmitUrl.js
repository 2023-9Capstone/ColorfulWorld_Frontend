import axios from "axios";

//http://172.16.97.206:5111 로컬 ai서버용 ip
//http://54.180.159.100:5100 test서버용 ip
export const BaseUrl = "http://54.180.159.100:5100";
const imageUrl = () => window.location.href;
export const fetchUrl = () =>
  "blob:" +
  window.location.origin +
  imageUrl().substring(imageUrl().lastIndexOf("/"), imageUrl().length);

export const api = axios.create({
  baseURL: BaseUrl,
});
