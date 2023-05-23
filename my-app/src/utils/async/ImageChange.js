import { TransferImg } from "./TransferImg";
import { GetImgUrlToFile } from "./GetImgUrlToFile";
import { wrapPromise } from "./WrapPromise";
import { fetchUrl } from "../SubmitUrl";

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
