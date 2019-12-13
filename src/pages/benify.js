import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BenifyPage = () => (
  <Layout>
    <SEO title="Benify Yourself!" />
    <h1>Benify Yourself!</h1>
    <p>Here we'd like to include some useful resources for anyone who would like to become a dude named ben.</p>
    <p>Or just anyone who would like to sharpen some of the necessary skills to contribute to this website.</p>
    <p><h2>Git</h2></p>
    <p>First complete my crash course <a href="https://www.katacoda.com/thoth/scenarios/introtogit">Intro-to-Git</a>.</p>
    <p>Then you should become a <a href="https://github.com/GitCertifiedCollaborator/PullRequestCertification">Git Certified Collaborator</a>.</p>
    <p>Those on this <a href="https://github.com/GitCertifiedCollaborator/PullRequestCertification/blob/master/certified.md">list</a> are certified to not be nincompoops... Or at least have the bare minimum set of skills necessary to collaborate with other human beings via git.</p>
    <p>There is also our <a href="https://nalocal512.gitlab.io/">gitlab portal</a>. Where you can find all of our repos.</p>
    <p><h2>Gatsby</h2></p>
    <p>Gatsby has their own set of excellent <a href="https://www.gatsbyjs.org/tutorial/">tutorials</a>.</p>
    <p></p>
  </Layout>
)

export default BenifyPage
