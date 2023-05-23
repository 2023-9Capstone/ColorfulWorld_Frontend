import { api } from "../SubmitUrl";
//Intensity
export const TransferImg = async (images) => {
  //서버에 이미지를 전달하는 함수
  const formData = new FormData();
  formData.append("image", images);
  formData.append("idx", 1);
  return api
    .post("/colorization", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data.url)
    .catch((err) => console.log(err));
};
