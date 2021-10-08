// Imports
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import styles from "@styles/pages/Home.module.scss"; // Styles
import { ReactSVG } from 'react-svg';
import { useRouter } from 'next/router'


// Types
import type { ReactElement , FC} from "react";


//i18
import { GetStaticProps  } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";


//img
import Image from 'next/image';
import imgA from '../public/bb.png';
import img_progress from '../public/program_img.png'

function Home(): ReactElement {
    const { t } = useTranslation("common");
    // Quicklinks to render
    const quicklinks: Record<string, string>[] = [
        { name: "OpenSea", url: "https://opensea.io/collection/play-squid-game" },
        {
            name: "Twitter",
            url: "https://twitter.com/lootproject",
        },
        {
            name: "Contract",
            url: "https://etherscan.io/address/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7",
        },
    ];

    /**
     * Selects 3 random bags from defaultBags
     * @returns {Record<string, string>[]} randomized bags
     */
    const getRandomThreeBags = () => {
        const shuffled = defaultBags.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    };

    const router = useRouter()
    

    return (
        <Layout>
            <div>

                <div className={styles.home__cta}>
                    {/* CTA title */}
                    <div>
                    <h1 >{t('home.title')}</h1>                    
                        <Image src={imgA} alt="Picture of the author" />
                    </div>

                    <ul>
                        {quicklinks.map(({ name, url }, i) => {
                            return (
                                <li key={i}>
                                    {url.startsWith("/") ? (
                                        // If link to local page use Link
                                        <Link href={url}>
                                            <a>{name}</a>
                                        </Link>
                                    ) : (
                                        // Else, redirect in new tab
                                        <a href={url} target="_blank" rel="noopener noreferrer">
                                            {name}
                                        </a>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    {/* CTA Description */}
                    <p className={styles.home__p} >{t('home.description_1')}</p>
                    <p className={styles.home__p2}>{t('home.description_2')}</p>
                    <p className={styles.home__p}>{t('home.description_3')}</p>
                    <p className={styles.home__p2}>{t('home.description_4_1')}<a href={t('home.description_4_2_link')} target="_blank">{t('home.description_4_2')}</a>{t('home.description_4_3')}</p>
                </div>

                {/* Rendering sample loot bags */}
                <div className={styles.home__feature}>
                    <span>Latest Minted Card</span>
                    <div>
                        <ReactSVG
                            afterInjection={(error, svg) => {
                                if (error) {
                                    console.error(error)
                                    return
                                }
                                console.log(svg)
                            }}
                            beforeInjection={(svg) => {
                                svg.classList.add('svg-class-name')
                                svg.setAttribute('style', 'width: 200px; height: 200px;')
                            }}
                            // className={styles.home__svg}
                            evalScripts="always"
                            fallback={() => <span>Error!</span>}
                            loading={() => <span>Loading</span>}
                            onClick={() => {
                                console.log('wrapper onClick')
                            }}
                            renumerateIRIElements={false}
                            src="tribal-star-shaped-vector-art.svg"
                            useRequestCache={true}
                            wrapper="span"
                        />

                        <ReactSVG
                            afterInjection={(error, svg) => {
                                if (error) {
                                    console.error(error)
                                    return
                                }
                                console.log(svg)
                            }}
                            beforeInjection={(svg) => {
                                svg.classList.add('svg-class-name')
                                svg.setAttribute('style', 'width: 200px; height: 200px;')
                            }}
                            // className={styles.home__svg}
                            evalScripts="always"
                            fallback={() => <span>Error!</span>}
                            loading={() => <div style= {{width: "200px", height: "200px"}}></div>}
                            onClick={() => {
                                console.log('wrapper onClick')
                            }}
                            renumerateIRIElements={false}
                            src="q1.svg"
                            useRequestCache={true}
                            wrapper="span"
                        />

                        <ReactSVG
                            afterInjection={(error, svg) => {
                                if (error) {
                                    console.error(error)
                                    return
                                }
                                console.log(svg)
                            }}
                            beforeInjection={(svg) => {
                                svg.classList.add('svg-class-name')
                                svg.setAttribute('style', 'width: 200px; height: 200px;')
                            }}
                            // className={styles.home__svg}
                            evalScripts="always"
                            fallback={() => <span>Error!</span>}
                            loading={() => <span>Loading</span>}
                            onClick={() => {
                                console.log('wrapper onClick')
                            }}
                            renumerateIRIElements={false}
                            src="q2.svg"
                            useRequestCache={true}
                            wrapper="span"
                        />

                    </div>
                    {/*{getRandomThreeBags().map(({ id, attributes }, i) => (
            // For each loot bag, render item and link to OpenSea
            <a
              href={`https://opensea.io/assets/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className={styles.home__bag}
            >
              <div className={styles.home__bag_attributes}>
                <span>#{id}</span>
                <ul>
                  {attributes.map((attribute, i) => (
                    <li key={i}>
                      <span>{attribute}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))} */}

                    <div className={styles['home__feature-links']}>
                        <Link href="/more">
                            <a>more</a>
                        </Link>
                    </div>
                </div>

            </div>

            {/* { } */}
            <div className={styles.home__subtitle_1}>
                <h2>{t('home.subtitle_1')}</h2>
                <div>
                    <p>{t('home.subtitle_1_content_1')}</p>
                    <p>{t('home.subtitle_1_content_2')}</p>
                    <p>{t('home.subtitle_1_content_3')}</p>
                    <p>{t('home.subtitle_1_content_4')}</p>
                </div>

            </div>

            <div className={styles.home__subtitle_2}>
                <h2>{t('home.subtitle_2')}</h2>
                <div>
                    <Image src={img_progress} alt="Picture of the author" />
                </div>

            </div>

            <div className={styles.home__subtitle_3}>
                <h2>{t('home.subtitle_3')}</h2>
                <div>
                    <p>{t('home.subtitle_3_content_1_1')}<a href ={t('home.subtitle_3_content_1_2_link')}  target="_blank">{t('home.subtitle_3_content_1_2')}</a>{t('home.subtitle_3_content_1_3')}</p>
                    <p>{t('home.subtitle_3_content_2')}</p>
                    <p>{t('home.subtitle_3_content_3')}</p>
                    <p>{t('home.subtitle_3_content_4')}</p>
                </div>

            </div>

            <div className={styles.home__subtitle_4}>
                <h2>{t('home.subtitle_4')}</h2>
                <div>
                    <p className={styles.home__subtitle_4_p}>{t('home.subtitle_4_content_1')}</p>
                    <p className={styles.home__subtitle_4_p}>{t('home.subtitle_4_content_2')}</p>
                    <p className={styles.home__subtitle_4_p}>{t('home.subtitle_4_content_3')}</p>
                    <p className={styles.home__subtitle_4_p}>{t('home.subtitle_4_content_4')}</p>
                    <p className={styles.home__subtitle_4_p2}>{t('home.subtitle_4_content_5')}</p>
                </div>
            </div>

            <div className={styles.home__subtitle_5}>
                <div>
                    <p>{t('home.subtitle_5_content_1')}</p>
                    <p>{t('home.subtitle_5_content_2')}</p>
                    <p>{t('home.subtitle_5_content_3')}</p>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </Layout>


    );//return end
}

interface Props{
    
}
export const getStaticProps : GetStaticProps = async ({ locale }) => {
    return{
    props: {
        // TODO: locale type missmath - locale argument can be undefined || string
        // but serverSide string 타입을 받기원하는데 locale 은 undefined 일수도있기 때문에 타입 에러가 난다
        ...await serverSideTranslations(locale as any, ['common']),
    },
}}
// import React, { FC } from "react";

// interface Props {
//     // any props that come into the component
// }

// const Button1: FC<Props> = ({ children, ...props }) => (
//     <Button {...props}>{children}</Button>
// );
export default Home