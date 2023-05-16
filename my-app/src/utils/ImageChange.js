import { TransferImg } from "./TransferImg";
import { GetImgUrlToFile } from "./GetImgUrlToFile";
import { wrapPromise } from "./WrapPromise";
import { fetchUrl } from "./SubmitUrl";
//http://172.16.97.206:5111 로컬 ai서버용 ip
//http://54.180.159.100:5100 test서버용 ip
export const BaseUrl = "http://54.180.159.100:5100";

const ImageChange = () => {
  const url = fetchUrl();
  const userPromise = GetImgUrlToFile(url).then((res) =>
    TransferImg(res).then((new_url) => new_url)
  );
  return {
    image: wrapPromise(userPromise),
  };
};

export default ImageChange;
//GetImgUrlToFile(new_url).then((file) => file);
