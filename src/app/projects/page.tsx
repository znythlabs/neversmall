import { PROJECTS } from "../data/projects";
import Image from "next/image";
import AnimatedLink from "../components/AnimatedLink";

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
                    {PROJECTS.map((project, idx) => {
                        // Determine offsets and aspect ratios for a dynamic layout
                        const isEven = idx % 2 === 0;
                        const isLargeOffset = idx % 4 === 1;
                        const isSmallOffset = idx % 4 === 2;

                        let offsetClass = "";
                        if (isLargeOffset) offsetClass = "projects-page__item--offset-large";
                        else if (isSmallOffset) offsetClass = "projects-page__item--offset-small";

                        // Vary aspect ratios
                        const aspectRatios = ["16/9", "4/3", "4/5", "1/1"];
                        const aspectRatio = aspectRatios[idx % aspectRatios.length];

                        return (
                            <div key={project.slug} className={`projects-page__item ${offsetClass}`}>
                                <div className="projects-page__image-wrapper" style={{ aspectRatio }}>
                                    <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} />
                                </div>
                                <div className="projects-page__item-content">
                                    <h3 className="projects-page__item-title">{project.title}</h3>
                                    <p className="projects-page__item-desc">{project.description}</p>
                                    <AnimatedLink href={`/projects/${project.slug}`} text="VIEW PROJECT" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
