import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';
import { SideMenu } from '../ui/SideMenu';

interface Props {
    children?:ReactNode;
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const MainLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    return (
        <>
            <Head>
                <title>{ title }</title>

                <meta name="author" content="Wicho García" />
                <meta name='description' content={ pageDescription } />
                <meta name="keywords" content="guatemala, fotografía, naturaleza, volcanes, montañas, chapin, 502, wicho" />

                <meta property="og:url" content="https://www.wichogarcia.com" />
                <meta property="og:type" content="article" />
                <meta property='og:title' content={ title } />
                <meta property='og:description' content={ pageDescription } />

                {
                    imageFullUrl && (
                        <meta property='og:image' content={ imageFullUrl } />
                    )
                }

            </Head> 

            <nav>
                <Navbar />
            </nav>

            <SideMenu />

            {/* <main style={{
                margin: '80px auto',
                maxWidth: '1140px',
                padding: '0px 20px'
            }}>
                { children }
            </main> */}

            <main>
                { children }
            </main>

            <footer>
                {/* Footer */}
            </footer>

        </>
    )
}
