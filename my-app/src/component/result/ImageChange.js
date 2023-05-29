import axios from "axios";
//http://172.16.97.206:5100
const BaseUrl = "http://54.180.159.100:5100";
const TransferImg = async (images) => {
  //서버에 이미지를 전달하는 함수
  const formData = new FormData();
  formData.append("image", images);
  formData.append("idx", 1);
  return axios
    .post(BaseUrl + "/colorization", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data.url)
    .catch((err) => console.log(err));
};

const getFileFomrUrlImage = async (url) => {
  //이미지를 파일로 바꾸는 함수
  const res = await fetch(url);
  const data = await res.blob();
  const fileName = url.split("/").pop();
  const fileExt = url.split(".").pop();
  const metaData = { type: `image/${fileExt}` };
  return TransferImg(new File([data], fileName, metaData));
};
//Idensity
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspend = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspend;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

const ImageChange = () => {
  const imageUrl = window.location.href;
  const fetchUrl =
    "blob:" +
    window.location.origin +
    imageUrl.substring(imageUrl.lastIndexOf("/"), imageUrl.length);
  const userPromise = getFileFomrUrlImage(fetchUrl);
  return {
    image: wrapPromise(userPromise),
  };
};

export default ImageChange;