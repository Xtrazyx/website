import { FunctionComponent } from "react";
import Image from "next/image";

const Logo: FunctionComponent = () => {
  return (
    <div className="logo">
      <Image src={"/logo_singular.svg"} height={42} width={42} alt={'Singular logo, a circle within a circle'} />
      <span className="title-logo">Singular</span>
      <style jsx>{`
        .logo {
          display: flex;
          align-items: center;
        }

        .title-logo {
          font-weight: 100;
          font-size: 28px;
          margin-left: 12px; 
        }
      `}</style>
    </div>
  );
};

export default Logo;
