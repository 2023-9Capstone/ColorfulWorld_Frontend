export const GetImgUrlToFile = async (url) => {
  //이미지를 파일로 바꾸는 함수
  const res = await fetch(url);
  const data = await res.blob();
  const fileName = url.split("/").pop();
  const fileExt = url.split(".").pop();
  const metaData = { type: `image/${fileExt}` };
  return new File([data], fileName, metaData);
};
