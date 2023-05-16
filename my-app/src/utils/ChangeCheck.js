const ImgExtension = ["png", "jpeg", "jpg"];
const reader = new FileReader();
const CheckingImage = (files) => {
  //파일 확장자 확인하기위한 함수
  const { type } = files;
  const slash = type.indexOf("/");
  const extension = type.slice(slash + 1, type.length);
  return ImgExtension.includes(extension.toLowerCase()); //소문자 대문자 구별없이 하는걸로!
};

export const ChangeCheck = (files, setImgUrl, getImageUrl) => {
  if (!CheckingImage(files)) {
    window.alert("이미지 형식이 맞지 않습니다!");
    return false;
  }
  reader.readAsDataURL(files);
  reader.onload = (r) => {
    console.log(r.target.result);
    getImageUrl(r.target.result);
  };
  const url = URL.createObjectURL(files);
  setImgUrl(url);
  //let last = url?.substring(url?.lastIndexOf("/") + 1, url?.length);
  //getImageUrl(() => last);
  return true;
};