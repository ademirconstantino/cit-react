import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "./LangContext";
import JsonReader from "./JSonReader";
import { POSTS, formatPostDate } from "./blogPosts";

import "../public/css/menu.css";
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";
import "../public/css/blog.css";

function Blog() {
    const { langSelected } = useLang();
    const t = (key: string) => JsonReader(langSelected, "blog." + key);

    const variants = {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
    };

    return (
        <motion.section className="blog-page" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.6 }}>
            <div className="container blog-body">
                <h2 className="title-divider">
                    <span>{t("title")}</span>
                    <small>{t("subtitle")}</small>
                </h2>

                <div className="blog-list">
                    {POSTS.map((post) => (
                        <article className="blog-card" key={post.slug}>
                            <p className="blog-meta">
                                {formatPostDate(post.date, langSelected)} · {post.readingMinutes} {t("reading_time")}
                            </p>
                            <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
                            <p>{post.summary}</p>
                            <ul className="blog-tags">
                                {post.tags.map((tag) => <li key={tag}>{tag}</li>)}
                            </ul>
                            <Link to={`/blog/${post.slug}`} className="home-hero-link">
                                <span className="home-hero-arrow" aria-hidden="true">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                                {t("read_more")}
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default Blog;
