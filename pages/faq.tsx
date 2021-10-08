// Imports
import Link from "next/link"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/FAQ.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

//i18
import { GetStaticProps } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";


// FAQ page
function FAQ(): ReactElement {
    const { t } = useTranslation("common");//i18
    return (
        <Layout>
            <div className={styles.faq}>
                <h2>{t('faq.title')}</h2>

                <div className={styles.faq__item}>
                    <h3>{t('faq.subtitle_1')}</h3>
                    <p>{t('faq.subtitle_1_content_1')}</p>
                    <p>{t('faq.subtitle_1_content_2_1')} <a href={t('faq.subtitle_1_content_2_2_link')} target="_blank">{t('faq.subtitle_1_content_2_2')}</a>{t('faq.subtitle_1_content_2_3')}</p>
                    <p>{t('faq.subtitle_1_content_3')}</p>
                    <p>{t('faq.subtitle_1_content_4')}</p>
                </div>

                <div className={styles.faq__item}>
                    <h3>{t('faq.subtitle_2')}</h3>
                    <p>{t('faq.subtitle_2_content_1')}</p>
                    <p>{t('faq.subtitle_2_content_2')} </p>
                    <p>{t('faq.subtitle_2_content_3')}</p>
                </div>                

                <div className={styles.faq__item}>
                    <h3>{t('faq.subtitle_3')}</h3>
                    <p>{t('faq.subtitle_3_content_1')}</p>
                </div> 

                <div className={styles.faq__item}>
                    <h3>{t('faq.subtitle_4')}</h3>
                    <p>{t('faq.subtitle_4_content_1')}</p>
                    <p>{t('faq.subtitle_4_content_2')}</p>
                </div>

                <div className={styles.faq__item}>
                    <h3>{t('faq.subtitle_5')}</h3>
                    <p>{t('faq.subtitle_5_content_1')}</p>
                </div> 
               
                <div className={styles.faq__item}>
                    <h3>{t('faq.subtitle_6')}</h3>
                    <p>{t('faq.subtitle_6_content_1')}</p>
                </div>

                <div className={styles.faq__item}>
                    <h3>{t('faq.subtitle_7')}</h3>
                    <p>{t('faq.subtitle_7_content_1')}</p>
                    <p>{t('faq.subtitle_7_content_2')}</p>
                    <br/>
                    <br/>
                    <br/>
                </div>
                
                <div className={styles.faq__item}>
                    <p>{t('faq.subtitle_8_content_1')}</p>
                    <p>{t('faq.subtitle_8_content_2')}</p>
                    <p>{t('faq.subtitle_8_content_3')}</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                
            </div>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            // TODO: locale type missmath - locale argument can be undefined || string
            // but serverSide string 타입을 받기원하는데 locale 은 undefined 일수도있기 때문에 타입 에러가 난다
            ...await serverSideTranslations(locale as any, ['common']),
        },
    }
}

export default FAQ;