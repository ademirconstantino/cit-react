import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { useLang } from "./LangContext";
import JsonReader from "./JSonReader";
import { findPost, formatPostDate } from "./blogPosts";

import "../public/css/menu.css";
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";
import "../public/css/blog.css";

function BlogPost() {
    const { langSelected } = useLang();
    const t = (key: string) => JsonReader(langSelected, "blog." + key);
    const post = findPost(useParams().slug);

    if (!post) return <Navigate to="/blog" replace />;

    const variants = {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
    };

    return (
        <motion.section className="blog-page" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.6 }}>
            <div className="container blog-body">
                <article className="blog-post" lang="pt-BR">
                    <Link to="/blog" className="blog-back">
                        <span aria-hidden="true">←</span> {t("back")}
                    </Link>

                    <h1 className="blog-post-title">{post.title}</h1>
                    <p className="blog-meta">
                        Ademir Constantino · {formatPostDate(post.date, langSelected)} · {post.readingMinutes} {t("reading_time")}
                    </p>
                    <ul className="blog-tags">
                        {post.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    {t("lang_note") && <p className="blog-note">{t("lang_note")}</p>}

                    <div className="blog-content">{post.body}</div>
                </article>
            </div>
        </motion.section>
    );
}

export default BlogPost;
