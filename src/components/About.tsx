"use client";
import React from "react";
import Image from "next/image";
import col_img from "../../public/assets/images/col_img.svg";
import gdsc_img from "../../public/assets/images/gdsc_img.svg";
import { Space_Grotesk } from "next/font/google";
import { Work_Sans } from "next/font/google";

const Space = Space_Grotesk({ weight: "700", subsets: ["latin"] });
const Work = Work_Sans({ weight: "400", subsets: ["latin"] });
const AboutPage: React.FC = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url('/images/bgLayer.png')`,
          backgroundPosition: "right bottom, left top",
          backgroundRepeat: "no-repeat, no-repeat",
          color: "#fff",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        {/* --------------------------------------------------------------------------------------------*/}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "20%",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "large",
          }}
        >
          <div
            className={Space.className}
            style={{
              fontSize: "100px",
              fontWeight: "700",
              lineHeight: "165px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            A
          </div>
          <div
            className={Space.className}
            style={{
              fontSize: "32px",
              fontWeight: "700",
              lineHeight: "30px",
              letterSpacing: "0em",
              textAlign: "left",
              marginTop: "15px",
            }}
          >
            bout the
            <br /> Community
          </div>
        </div>

        {/* --------------------------------------------------------------------------------------------*/}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 50%)",
          }}
        >
          <div
            className={Space.className}
            style={{
              display: "grid",
              gridTemplateRows: "60% 30%",
            }}
          >
            <div
              style={{
                marginLeft: "10%",
                marginRight: "5%",
              }}
            >
              <h3
                style={{
                  fontSize: "1.3em",
                  fontWeight: "700",
                  lineHeight: "31px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                ABOUT
              </h3>
              <h2
                style={{
                  fontSize: "2.5em",
                  fontWeight: "700",
                  lineHeight: "55px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  marginTop: "-5px",
                  ...(typeof window !== "undefined" && window.matchMedia("(max-width: 580px)").matches
                    ? {
                        fontSize: "2em",
                        lineHeight: "35px",
                      }
                    : {}),
                }}
              >
                VIT Chennai
              </h2>
              <p
                className={Work.className}
                style={{
                  fontSize: "1.3em",
                  fontWeight: "400",
                  lineHeight: "25px",
                  letterSpacing: "0em",
                  marginTop: "15px",
                  textAlign: "left",
                  color: "#787878",
                  ...(typeof window !== "undefined" && window.matchMedia("(max-width: 580px)").matches
                    ? {
                        fontSize: "1em",
                        lineHeight: "20px",
                      }
                    : {}),
                }}
              >
                Vellore Institute of Technology, founded in 1984 is one of the leading engineering colleges in India. It
                aims to provide a world-class education that not only polishes technical mastery and analytical skills
                but also imbibes strong ethical values in their students.
              </p>
            </div>
            <div>
              <Image
                alt="gdsc"
                style={{
                  height: "100%",
                }}
                src={gdsc_img}
              />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateRows: "35% 65%",
            }}
          >
            <div>
              <Image
                alt="college"
                style={{
                  height: "100%",
                }}
                src={col_img}
              />
            </div>

            <div
              style={{
                marginLeft: "0%",
                marginRight: "10%",
              }}
            >
              <h3
                style={{
                  fontSize: "1.3em",
                  fontWeight: "700",
                  lineHeight: "31px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                ABOUT
              </h3>
              <h2
                className={Space.className}
                style={{
                  fontSize: "2.5em",
                  fontWeight: "700",
                  lineHeight: "55px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  marginTop: "-5px",
                  ...(typeof window !== "undefined" && window.matchMedia("(max-width: 580px)").matches
                    ? {
                        fontSize: "2em",
                        lineHeight: "35px",
                      }
                    : {}),
                }}
              >
                {" "}
                Google Developer Student Club
              </h2>
              <p
                className={Work.className}
                style={{
                  fontSize: "1.3em",
                  fontWeight: "400",
                  lineHeight: "25px",
                  letterSpacing: "0em",
                  marginTop: "15px",
                  textAlign: "left",
                  color: "#787878",
                  ...(typeof window !== "undefined" && window.matchMedia("(max-width: 580px)").matches
                    ? {
                        fontSize: "1em",
                        lineHeight: "20px",
                      }
                    : {}),
                }}
              >
                GDSC VIT Chennai is a student run community group powered by Google Developers. We are a passionate
                group of budding developers who work together to build solutions for local businesses and communities
                with Google technology and promote healthy developer culture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
