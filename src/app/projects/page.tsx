import Image from "next/image";
import Link from "next/link";
import AnimatedLink from "../components/AnimatedLink";

const ALL_PROJECTS = [
    {
        title: "Veiled Motion",
        description: "A study in ethereal movement — where form meets emotion in soft, dreamlike light.",
        category: "Visual Arts",
        image: "/images/project-1.png",
        slug: "veiled-motion"
    },
    {
        title: "Endless Path",
        description: "An exploration of solitude and journey, winding through the stillness of nature.",
        category: "Landscape",
        image: "/images/project-2.png",
        slug: "endless-path"
    },
    {
        title: "Celestial Drift",
        description: "A vision of the unknown — light, gravity, and silence colliding beyond the stars.",
        category: "Fine Art",
        image: "/images/project-3.png",
        slug: "celestial-drift"
    },
    {
        title: "Shadow Gaze",
        description: "An intimate portrait that blurs the line between mystery and clarity.",
        category: "Portraiture",
        image: "/images/project-4.png",
        slug: "shadow-gaze"
    },
];

export default function Projects() {
    return (
        <main className="page-wrapper projects-page">
            {/* Header Section */}
            <section className="projects-page__header">
                <div className="projects-page__header-grid">
                    <div>
                        <h1 className="projects-page__title">
                            SELECTED<br />WORKS
                        </h1>
                    </div>

                    <div className="projects-page__header-desc-col">
                        <p className="projects-page__desc">
                            A selection of campaigns, content, and creative work produced for brands across video, photography, and digital marketing.
                        </p>
                    </div>

                    <div className="projects-page__header-cta">
                        <AnimatedLink href="/contact" className="cta__button" text="START A PROJECT" />
                    </div>
                </div>
            </section>

            {/* Projects Grid Section */}
            <section className="projects-page__grid-section">
                <div className="projects-page__grid">
                    {/* Item 1: Veiled Motion (Top Aligned) */}
                    <div className="projects-page__item">
                        <div className="projects-page__image-wrapper">
                            <Image src={ALL_PROJECTS[0].image} alt={ALL_PROJECTS[0].title} fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="projects-page__item-content">
                            <h3 className="projects-page__item-title">{ALL_PROJECTS[0].title}</h3>
                            <p className="projects-page__item-desc">{ALL_PROJECTS[0].description}</p>
                            <AnimatedLink href={`/projects/${ALL_PROJECTS[0].slug}`} text="VIEW PROJECT" />
                        </div>
                    </div>

                    {/* Item 2: Endless Path (Large Offset) */}
                    <div className="projects-page__item projects-page__item--offset-large">
                        <div className="projects-page__image-wrapper" style={{ aspectRatio: "4/3" }}>
                            <Image src={ALL_PROJECTS[1].image} alt={ALL_PROJECTS[1].title} fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="projects-page__item-content">
                            <h3 className="projects-page__item-title">{ALL_PROJECTS[1].title}</h3>
                            <p className="projects-page__item-desc">{ALL_PROJECTS[1].description}</p>
                            <AnimatedLink href={`/projects/${ALL_PROJECTS[1].slug}`} text="VIEW PROJECT" />
                        </div>
                    </div>

                    {/* Item 3: Celestial Drift (Small Offset) */}
                    <div className="projects-page__item projects-page__item--offset-small">
                        <div className="projects-page__image-wrapper" style={{ aspectRatio: "4/5" }}>
                            <Image src={ALL_PROJECTS[2].image} alt={ALL_PROJECTS[2].title} fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="projects-page__item-content">
                            <h3 className="projects-page__item-title">{ALL_PROJECTS[2].title}</h3>
                            <p className="projects-page__item-desc">{ALL_PROJECTS[2].description}</p>
                            <AnimatedLink href={`/projects/${ALL_PROJECTS[2].slug}`} text="VIEW PROJECT" />
                        </div>
                    </div>

                    {/* Item 4: Shadow Gaze (Top Aligned) */}
                    <div className="projects-page__item">
                        <div className="projects-page__image-wrapper" style={{ aspectRatio: "1/1" }}>
                            <Image src={ALL_PROJECTS[3].image} alt={ALL_PROJECTS[3].title} fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="projects-page__item-content">
                            <h3 className="projects-page__item-title">{ALL_PROJECTS[3].title}</h3>
                            <p className="projects-page__item-desc">{ALL_PROJECTS[3].description}</p>
                            <AnimatedLink href={`/projects/${ALL_PROJECTS[3].slug}`} text="VIEW PROJECT" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
