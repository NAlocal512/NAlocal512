import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const SheetUpPage = () => (
  <Layout>
    <SEO title="SheetUp" />
      <h3>Some details for the upcoming <a href='https://noagendameetups.com/event/no-agenda-central-texas-meet-shoot/'>SheetUp</a> at the <a href="https://www.lonestargunrange.com/lone-star-gun-range-austin-tx.php">Lone Star Gun Range</a></h3>
      <p>
        <ol>All attendees must attend the short safety course at the range before going onto the range.</ol>
        <ol>Read their <a href='https://www.lonestargunrange.com/lone-star-gun-range-faqs.php'>FAQ here</a>.</ol>
        <ol>Be respectful of others ammo, either bring your own, or buy ammo there at the range (ammo bought at the range is more expensive).</ol>
        <ol>Only attendees wearing a NAlocal512 badge are allowed to shoot guns that producers are sharing</ol>
        <ol>Guns should be left at the station and should only be moved by gun owners themselves.</ol>
        <ol>If you are concerned about serial numbers on guns being captured by the ubiquitous cameras then you should cover them with tape.</ol>
        <ol>Similarly, if you are concerned about your face being captured by the ubiquitous cameras you should wear a Guy Fawkes mask (or a bandana which may be available upon request), though it should be noted that holding a firearm while wearing a mask can give people the wrong impression.</ol>
        <ol>John C. Dvorak reports that wearing Juggalo makeup works to fool the facial recognition algos. YMMV ICP FTW. Note: Wearing Juggalo makeup while holding a firearm has similar issues as well.</ol>
        <ol>Also, feel free to grab an Adam or JCD's head on a stick and block your face before photos are taken (this has the added bonus of adding JCD and Adam to all photos, bonus points for standing next to Adam or JCD in a shot).</ol>
      </p>
    <h3>Known ammo types that will fit the guns that will be there</h3>
      <p>
        <table style={{ maxWidth: `100%` }}>
          <tr>
            <th>mm</th>
            <th>common name</th>
          </tr>
          <tr>
            <th>5.7x15.6mm</th>
            <th>.22 LR</th>
          </tr>
          <tr>
            <th>5.56x45mm</th>
            <th>556 NATO</th>
          </tr>
          <tr>
            <th>7x64.5mm</th>
            <th>.270 Winchester</th>
          </tr>
          <tr>
            <th>7.62x39mm</th>
            <th>7.62 Soviet</th>
          </tr>
          <tr>
            <th>7.62x51mm</th>
            <th>.308 or 7.62 NATO</th>
          </tr>
          <tr>
            <th>7.62x63mm</th>
            <th>.30-06 or ".30 Gov't '06" by Winchester</th>
          </tr>
          <tr>
            <th>9x19mm</th>
            <th>9mm Parabellum</th>
          </tr>
          <tr>
            <th>9x33mmR</th>
            <th>.357 S&W Magnum</th>
          </tr>
          <tr>
            <th>10.9x33mmR</th>
            <th>.44 Remington Magnum</th>
          </tr>
          <tr>
            <th>11.43x21mm</th>
            <th>.45 ACP (Automatic Colt Pistol)</th>
          </tr>
        </table>
      </p>
    <p>Go back to our front <Link to="/">page</Link>.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default SheetUpPage
