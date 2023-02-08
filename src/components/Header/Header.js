import { useState } from "react";
import style from "./Header.module.css";
import { BsCameraVideoFill, BsFillCameraVideoOffFill } from "react-icons/bs";
import Webcam from "react-webcam";
import Draggable from "react-draggable";

const Header = () => {
  const [camera, setCamera] = useState(false);
  return (
    <>
      <header className={style.header}>
        <button onClick={() => setCamera(!camera)} className={style.btn}>
          {camera ? (
            <BsCameraVideoFill fill="#fff" size={23} />
          ) : (
            <BsFillCameraVideoOffFill fill="#fff" size={23} />
          )}
        </button>
      </header>
      {camera ? (
        <Draggable>
          <Webcam
            audio={false}
            width={300}
            header={300}
            videoConstraints={{
              width: 300,
              height: 300,
              facingMode: "user",
            }}
            className={style.camera}
          />
        </Draggable>
      ) : null}
    </>
  );
};

export default Header;
