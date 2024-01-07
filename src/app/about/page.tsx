import React from "react";
import Image from "next/image";
import col_img from "@/app/asset/col_img.svg";
import gdsc_img from "@/app/asset/gdsc_img.svg";
import styles from "@/app/about/about.module.css";

const AboutPage: React.FC = () => {
    return (
        <>
            <section id="aboutpage" className={styles.section}>
                <div className={styles.pagetitle}>
                    <div className={styles.A}>A</div><div className={styles.bout}>bout the<br /> Community</div>
                </div>

                <div className={styles.pageWrapper}>

                    <div className={styles.about_vitc}>
                        <h3>ABOUT</h3>
                        <h2>VIT Chennai</h2>
                        <p>Vellore Institute of Technology, founded in 1984 is one of the leading engineering colleges in India. It aims to provide a world-class education that not only polishes technical mastery and analytical skills but also imbibes strong ethical values in their students.</p>
                    </div>
                    <div className={styles.image}>
                        <Image alt="college" className={styles.image1} src={col_img} />
                    </div >
                    <div className={styles.image}>
                        <Image alt="gdsc" className={styles.image2} src={gdsc_img} />
                    </div >

                    <div className={styles.about_gdsc}>
                        <h3>ABOUT</h3>
                        <h2> Google Developer Student Club</h2>
                        <p>GDSC VIT Chennai is a student run community group powered by Google Developers. We are a passionate group of budding developers who work together to build solutions for local businesses and communities with Google technology and promote healthy developer culture.</p>
                    </div >
                </div>
            </section>
        </>
    );
};

export default AboutPage;
