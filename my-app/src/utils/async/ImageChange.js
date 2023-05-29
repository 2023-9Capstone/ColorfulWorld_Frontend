import { TransferImg } from "./TransferImg";
import { wrapPromise } from "./WrapPromise";
import { GetImgUrlToFile } from "./GetImgUrlToFile";
import { BaseUrl } from "../SubmitUrl";

const ImageChange = (image) => {
  const userPromise = TransferImg(image).then((new_url) =>
    GetImgUrlToFile(BaseUrl + new_url.url).then((file) => file)
  );
  return {
    image: wrapPromise(userPromise),
  };
};

export default ImageChange;
//GetImgUrlToFile(new_url).then((file) => file);
