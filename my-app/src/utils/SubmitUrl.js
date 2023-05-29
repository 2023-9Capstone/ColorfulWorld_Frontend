import axios from "axios";

//http://172.16.97.206:5200 로컬 ai서버용 ip
//http://54.180.159.100:5100 test서버용 ip
export const BaseUrl = "http://54.180.159.100:5100";
export const api = axios.create({
  baseURL: BaseUrl,
});
