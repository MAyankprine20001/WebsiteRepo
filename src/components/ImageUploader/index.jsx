import { useState } from "react";
import classes from "./ImageUploader.module.scss";
import { IoAddOutline } from "react-icons/io5";
import { RiImageEditLine } from "react-icons/ri";
import { MdOutlineDelete } from "react-icons/md";

const Image = ({src, onDeleteClick}) => {
    return (
        <div className={classes.wrapper_preview}>
            <span className={classes.wrapper_preview_cta}>
                <span className={classes.wrapper_preview_cta_edit}>
                    <RiImageEditLine />
                </span>
                <span className={classes.wrapper_preview_cta_delete} onClick={onDeleteClick}>
                    <MdOutlineDelete />
                </span>
            </span>
            <img src={src} alt="Preview" />
        </div>
    )
}

const ImageUploader = ({ currentImage }) => {
  const [image, setImage] = useState(currentImage);

  const onImageRemove = (e) => {
    setImage(null);
    e.preventDefault();
  }

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div className={classes.wrapper}>
      <label className={classes.wrapper_cover}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image ? <Image src={image} onDeleteClick={onImageRemove} /> : <div className={classes.wrapper_add}><IoAddOutline /></div>}
      </label>
    </div>
  );
}

export default ImageUploader;
