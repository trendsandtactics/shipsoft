import React from 'react';
import { useRouter } from 'next/router';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import Header from '../../layout/headers/header';
import FooterContact from '../../layout/footers/footer-contact';
import FooterThree from '../../layout/footers/footer-3';
import Link from 'next/link';
import { blogs } from '../../data/blog-content';
import { ChevronLeft } from 'lucide-react';

const BlogDetails = () => {
    const router = useRouter();
    const { slug } = router.query;

    const blog = blogs.find(b => b.slug === slug);

    if (!blog) {
        return (
            <Wrapper>
                <Header />
                <div className="container pt-120 pb-120 text-center">
                    <h2>Loading...</h2>
                </div>
                <FooterContact />
                <FooterThree />
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <SEO pageTitle={blog.title} />
            <Header />
            <style jsx global>{`
                .blog-content-body {
                    color: #334155;
                    line-height: 1.8;
                    font-size: 1.125rem;
                }
                .blog-content-body h3 {
                    color: #0f172a;
                    font-weight: 700;
                    margin-top: 2.5rem;
                    margin-bottom: 1.25rem;
                    font-size: 1.75rem;
                }
                .blog-content-body p {
                    margin-bottom: 1.5rem;
                }
                .blog-content-body ul {
                    margin-bottom: 1.5rem;
                    padding-left: 1.5rem;
                }
                .blog-content-body ul li {
                    margin-bottom: 0.5rem;
                    position: relative;
                }
                .blog-content-body ul li::before {
                    content: '•';
                    color: #0d6efd;
                    position: absolute;
                    left: -1rem;
                    font-weight: bold;
                }
                .back-link {
                    display: inline-flex;
                    align-items: center;
                    color: #64748b;
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    margin-bottom: 2rem;
                }
                .back-link:hover {
                    color: #0d6efd;
                }
            `}</style>
            <main>
                <section className="blog-details-hero" style={{ backgroundColor: '#2CADE3', color: 'white', paddingTop: '180px', paddingBottom: '100px', textAlign: 'center' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <h1 className="mb-20" style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.3' }}>{blog.title}</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="blog-details-area pt-100 pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <Link href="/blog" className="back-link">
                                    <ChevronLeft size={20} style={{ marginRight: '8px' }} /> Back to all posts
                                </Link>
                                
                                <div className="blog-content-body">
                                    {blog.content}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <FooterContact />
            <FooterThree />
        </Wrapper>
    );
};

export default BlogDetails;