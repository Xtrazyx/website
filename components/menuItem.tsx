import { FunctionComponent } from "react";

export type MenuItemProps = {
  label: JSX.Element;
  color?: "white" | "yellow" | "blue" | "turquoise" | "orange" | "green";
  url?: string;
};

const MenuItem: FunctionComponent<MenuItemProps> = (props) => {
  const { label, color = "white", url } = props;

  return (
    <div className="item line-color">
      <button className="button" onClick={() => console.log("toto")}>
        {label}
      </button>

      <style jsx>{`
        .line-color {
          border-bottom: 4px solid var(--font-${color});
        }

        .button {
          width: 100%;
          background-color: transparent;
          border: none;
          font-family: Quicksand;
          font-weight: 300;
          text-align: left;
          font-size: 24px;
          color: var(--font-white);
          transition-duration: 0.4s;
        }

        .button:hover {
          cursor: pointer;
          color: var(--font-${color});
          font-size: 32px;
        }

        .item {
          margin: 12px 0;
          width: 238px;
          font-size: 24px;
          color: var(--font-white);
          transition-duration: 0.4s;
        }

        .item:hover {
          width: 284px;
          font-size: 32px;
          color: var(--font-${color});
        }
      `}</style>
    </div>
  );
};

export default MenuItem;
