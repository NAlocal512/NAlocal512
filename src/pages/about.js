import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <p>This site was built by local No Agenda fans from the NAlocal512 meetup group.</p>
    <p>Our websites are built in <a href="https://gatsbyjs.org/">Gatsby</a> a web framework built to make blazing fast static websites from a template framework that allows you to use react components.</p>
    <p>The fantastic CI/CD available here at <a href="https://gitlab.com/">Gitlab</a> reads the <code>.gitlab-ci.yml</code> performs a build and test of our site.  </p>
    <p>And then publishes the rendered static site to the CDN, which is proxied by <a href="https://cloudflare.com/">Cloudflare</a>, to give front-end sites that are wicked fast.</p>
    <p>Then any dynamic pieces that require a database backend or other server side processing, like the shop,  mailing list and domain management are conducted by the <a href="https://webhosting.coop/">Webhosting.coop</a>.</p>
    <p>If you would like to learn to become a dude named ben who helps with our web sites try starting on this <Link to="/benify/">page</Link> to find a listing of the top resources we think might help you get started.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default AboutPage
