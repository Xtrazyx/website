import Head from 'next/head';
import { FunctionComponent } from 'react';
import Fill from './fill';
import Logo from './logo';

export type Props = {
    menu: JSX.Element;
    content: JSX.Element;
    bottom?: JSX.Element;
    footer: JSX.Element;
    title: string;
};

const Layout: FunctionComponent<Props> = (props) => {
    const { menu, content, footer, bottom, title } = props;

    return (
        <main className="main">
            <Head>
                <title>{title}</title>
            </Head>

            <div className={'top'}>
                <header className="header">
                    <Logo />
                </header>

                <div className="content">
                    <section className="section">{content}</section>
                    <menu className="menu">{menu}</menu>
                </div>
            </div>

            <Fill />

            <section className="bottom-section">
                {bottom}
                <footer className="footer">{footer}</footer>
            </section>
        </main>
    );
};

export default Layout;
