import { api } from "../SubmitUrl";
import axios from "axios";
//Intensity
export const TransferImg = async (images) => {
  //서버에 이미지를 전달하는 함수
  const formData = new FormData();
  formData.append("image", images);
  formData.append("idx", 1);
  return axios
    .post("http://54.180.159.100:5100/colorization", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
//[res.data.origin_url, res.data.url]
