import { FunctionComponent } from "react";
import Image from "next/image";

const Logo: FunctionComponent = () => {
  return (
    <div className="logo">
      <Image src={"/logo_singular.svg"} height={42} width={42} alt={'Singular logo, a circle within a circle'} />
      <span className="title-logo">Singular</span>
    </div>
  );
};

export default Logo;
