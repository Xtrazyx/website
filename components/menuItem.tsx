import { FunctionComponent } from "react";

export type MenuItemProps = {
  id: string;
  label: JSX.Element;
  color?: "white" | "yellow" | "blue" | "turquoise" | "orange" | "green";
  url?: string;
  className?: string;
  active?: string;
};

const MenuItem: FunctionComponent<MenuItemProps> = (props) => {
  const { label, color = "white", url, active, id } = props;

  return (
    <div className={`${active === id ? 'active' : 'item'} line-color`}>
      <button className={`${active === id && 'button-active'} button`} onClick={() => console.log("toto")}>
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
          font-size: 32px;
          cursor: pointer;
          color: var(--font-${color});
        }

        .item {
          margin: 24px 0;
          width: 238px;
          font-size: 24px;
          color: var(--font-white);
          transition-duration: 0.4s;
        }

        .item:hover {
          width: 284px;
          font-size: 32px;
          cursor: pointer;
          color: var(--font-${color});
        }

        .active {
          width: 284px;
          pointer-events: none;
        }

        .button-active {
          font-size: 32px;
          color: var(--font-${color});
        }
      `}</style>
    </div>
  );
};

export default MenuItem;
