import Image from "next/image";
import AnimatedLink from "../components/AnimatedLink";

export default function About() {
    return (
        <main className="page-wrapper about-page" style={{ backgroundColor: "#F6F6F6" }}>
            {/* ── Hero Section ── */}
            <section className="about-page__hero">
                <div className="about-page__hero-grid">
                    {/* Left content: Large text + Signature */}
                    <div style={{ position: "relative", zIndex: 2 }}>
                        <h1 style={{
                            fontFamily: "var(--font-header)",
                            fontSize: "clamp(48px, 8vw, 90px)",
                            lineHeight: 1,
                            letterSpacing: "-0.04em",
                            textTransform: "uppercase",
                            color: "var(--color-black)",
                            marginBottom: "40px",
                            maxWidth: "800px"
                        }}>
                            NEVERSMALL STUDIO — <br />
                            WHERE IDEAS <br />
                            TRULY SCALE.
                        </h1>

                        {/* Styled "Signature" placeholder */}
                        <div style={{
                            marginTop: "20px",
                        }}>
                            <span style={{
                                fontFamily: "var(--font-subheader)",
                                fontSize: "clamp(24px, 3vw, 42px)",
                                color: "var(--color-black)",
                                opacity: 0.8,
                                display: "block",
                                transform: "rotate(-2deg)",
                                marginLeft: "20px"
                            }}>
                                ~ Neversmall Studio
                            </span>
                        </div>
                    </div>

                    {/* Right content: Portrait Image */}
                    <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", overflow: "hidden" }}>
                        <Image
                            src="/images/about_image.jpg" // Using existing about image as portrait
                            alt="The creative face behind Neversmall Studios"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* ── Info & Testimonial Section ── */}
            <section className="about-page__info">
                <div className="about-page__info-grid">

                    {/* Column 1: Follow Us */}
                    <div className="about-page__follow-us" style={{ display: "flex", flexDirection: "column", gap: "32px", borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: "24px" }}>
                        <h4 style={{ fontFamily: "var(--font-subheader)", fontSize: "24px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                            Follow Us
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                textDecoration: "none",
                                borderBottom: "1px solid rgba(0,0,0,0.05)",
                                paddingBottom: "12px",
                                color: "var(--color-black)",
                                fontFamily: "var(--font-body)",
                                fontSize: "clamp(16px, 1.5vw, 20px)"
                            }}>
                                Instagram
                                <span style={{ fontSize: "16px" }}>↗</span>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                textDecoration: "none",
                                borderBottom: "1px solid rgba(0,0,0,0.05)",
                                paddingBottom: "12px",
                                color: "var(--color-black)",
                                fontFamily: "var(--font-body)",
                                fontSize: "clamp(16px, 1.5vw, 20px)"
                            }}>
                                Youtube
                                <span style={{ fontSize: "16px" }}>↗</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Body Text with Drop Cap */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                        <p style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "clamp(16px, 1.6vw, 20px)",
                            lineHeight: 1.6,
                            color: "var(--color-black)",
                            position: "relative"
                        }}>
                            <span style={{
                                float: "left",
                                fontSize: "clamp(64px, 8vw, 84px)",
                                lineHeight: "0.8",
                                paddingRight: "16px",
                                fontFamily: "var(--font-header)",
                                fontWeight: 700,
                                color: "var(--color-black)"
                            }}>W</span>
                            ith years of experience in the creative industry, our team is driven by a passion for visual excellence and a deep love for storytelling. We believe every project deserves a unique lens. Neversmall Studios was created with a clear purpose: to make every brand journey impactful, seamless, and memorable.
                        </p>

                        <p style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "clamp(16px, 1.6vw, 20px)",
                            lineHeight: 1.6,
                            color: "var(--color-black)",
                            opacity: 0.8
                        }}>
                            We prioritize communication and quality above all else. From the first discovery session to final delivery, your vision is our blueprint. Our creatives aren&apos;t just here to execute tasks; they&apos;re professionals who prioritize your brand&apos;s story and impact on the global stage.
                        </p>
                    </div>

                    {/* Column 3: Testimonial Quote */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px", backgroundColor: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
                        <div style={{ fontSize: "64px", color: "var(--color-blue)", lineHeight: 1, fontFamily: "serif", marginBottom: "-40px" }}>&ldquo;</div>
                        <p style={{
                            fontFamily: "var(--font-header)",
                            fontSize: "24px",
                            fontWeight: 400,
                            lineHeight: 1.3,
                            color: "var(--color-black)"
                        }}>
                            Working with Neversmall was a transformation for our brand. They didn&apos;t just create content; they built an entire aesthetic that reflects exactly who we are.
                        </p>
                        <div style={{ fontSize: "64px", color: "var(--color-blue)", lineHeight: 1, fontFamily: "serif", textAlign: "right", marginTop: "-10px" }}>&rdquo;</div>

                        <div style={{ display: "flex", alignItems: "center", gap: "16px", borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: "24px" }}>
                            <div style={{ position: "relative", width: "48px", height: "48px", borderRadius: "4px", overflow: "hidden" }}>
                                <Image
                                    src="/images/testimonial-top.jpg"
                                    alt="Cynthia Summer"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <h5 style={{ fontFamily: "var(--font-subheader)", fontSize: "14px", fontWeight: 700, textTransform: "uppercase" }}>Testimonial By</h5>
                                <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(13px, 1.2vw, 15px)", color: "rgba(0,0,0,0.5)" }}>Harold Lim</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA section structured to match others */}
            <section className="cta" aria-label="Call to action">
                <h2 className="cta__headline">
                    LET&apos;S SCALE YOUR <br /> BRAND TOGETHER.
                </h2>
                <div className="cta__content">
                    <p className="cta__subhead">Your vision, our support.</p>
                    <AnimatedLink href="/contact" className="cta__button" text="START A PROJECT" />
                </div>
            </section>
        </main>
    );
}
