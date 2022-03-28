import { FunctionComponent } from "react";
import Fill from './fill';
import Logo from "./logo";

export type Props = {
  menu: JSX.Element;
  content: JSX.Element;
  bottom?: JSX.Element;
  footer: JSX.Element;
}

const Layout: FunctionComponent<Props> = (props) => {
  const { menu, content, footer, bottom } = props;

  return (
    <main className="main">
      <header className="header"><Logo/></header>
      <div className="content">
        <section className="section">
          {content}
        </section>
        <menu className="menu">{menu}</menu>
      </div>
      <Fill/>
      {bottom && <section className="bottom-section">{bottom}</section>}
      <footer className="footer">{footer}</footer>
    </main>
  );
};

export default Layout;
