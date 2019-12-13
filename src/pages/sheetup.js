import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const SheetUpPage = () => (
  <Layout>
    <SEO title="SheetUp" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
      <h1>ShootUp - MeetShoot - MeatChute - SheetUp</h1>
      <h2>December the 14th, 2019 - from 10am-3pm</h2>
        <p><a href="https://www.lonestargunrange.com/lone-star-gun-range-austin-tx.php">Lone Star Gun Range</a> includes directions on their <a href="https://www.lonestargunrange.com/contact-lone-star-gun-range-austin-tx.php"> contact page</a>.</p>
        <p>Also, a copy of those directions and a map from the NSA are available at the <a href="#maps">bottom of this page.</a></p>
      <h3>Details for the upcoming official NAlocal512 <a href='https://noagendameetups.com/event/no-agenda-central-texas-meet-shoot/'>SheetUp</a> at the <a href="https://www.lonestargunrange.com/lone-star-gun-range-austin-tx.php">Lone Star Gun Range</a>.</h3>
      <p>
        <ol>All attendees must attend the short safety course at the range before going onto the range.</ol>
        <ol>Read their <a href='https://www.lonestargunrange.com/lone-star-gun-range-faqs.php'>FAQ here</a>.</ol>
        <ol>Be respectful of others ammo, either bring your own, or buy ammo there at the range (ammo bought at the range is more expensive).</ol>
        <ol>Only attendees wearing a NAlocal512 badge are allowed to shoot guns that producers are sharing.</ol>
        <ol>Guns should be left at the station and should only be moved by gun owners themselves.</ol>
        <ol>If you are concerned about serial numbers on guns being captured by the ubiquitous cameras then you should cover them with tape.</ol>
        <ol>Similarly, if you are concerned about your face being captured by the ubiquitous cameras you should wear a Guy Fawkes mask (or a bandana which may be available upon request), though it should be noted that holding a firearm while wearing a mask can give people the wrong impression.</ol>
        <ol>John C. Dvorak reports that wearing Juggalo makeup works to fool the facial recognition algos. YMMV ICP FTW. Note: Wearing Juggalo makeup while holding a firearm has similar issues as well.</ol>
        <ol>Also, feel free to grab an Adam or JCD's head on a stick and block your face before photos are taken (this has the added bonus of adding JCD and Adam to all photos, bonus points for standing next to Adam or JCD in a shot).</ol>
      </p>
    <h2>Known ammo types that will fit the guns that will be there</h2>
      <p>
        <table style={{ maxWidth: `100%` }}>
          <tr>
            <th>size in mm</th>
            <th>common name</th>
          </tr>
          <tr>
            <th>5.7x15.6mmR</th>
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
            <th>7.62x33mm</th>
            <th>.30 carbine</th>
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
            <th>9x17mm</th>
            <th>.380 ACP, .380 Auto, 9mm Browning, 9mm Corto, 9mm Kurz, 9mm Short</th>
          </tr>
          <tr>
            <th>9x19mm</th>
            <th>9mm Parabellum or 9mm Luger</th>
          </tr>
          <tr>
            <th>9x26.5mmR</th>
            <th>.38 special</th>
          </tr>
          <tr>
            <th>9x33mmR</th>
            <th>.357 S&W Magnum</th>
          </tr>
          <tr>
            <th>10x25mm</th>
            <th>10mm Auto</th>
          </tr>
          <tr>
            <th>10.9x33mmR</th>
            <th>.44 Remington Magnum</th>
          </tr>
          <tr>
            <th>11.43x21mm</th>
            <th>.45 ACP (Automatic Colt Pistol)</th>
          </tr>
          <tr>
            <th>18.52x69.85mm</th>
            <th>12 gauge 2.75" shotgun</th>
          </tr>
        </table>
      </p>
    <p>*mmR the (R) indicates rimfire round.</p>
    <p><a name="maps">NSA maps</a></p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.518330629315!2d-97.64443596741299!3d29.943220034689855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644a82f553c687d%3A0x16bf0b76b7e387a0!2s3795%20Dry%20Creek%20Rd%2C%20Lockhart%2C%20TX%2078644!5e1!3m2!1sen!2sus!4v1576204316476!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>
    <p>
      DIRECTIONS:
    </p>
    <p>
      Proceed West from Austin Bergstrom International Airport on HWY 71 for approximately 2.5 miles to the HWY 183 South Interchange. Take HWY 183 South about 18 miles to FM 1185 (Lytton Springs exit). Turn left at the EXXON Tiger Tote. Go 2 miles to CR 183/Old Lytton Springs Road and make a hard right. Take an immediate left on CR 182/Dry Creek Road and go 1 mile. Look for our sign on the right of 3795 Dry Creek Road.
    </p>
    <p>
      TX Tag users...Take 130 South to the 2001/ FM 1185 exit (Lytton Springs exit). Turn left at the EXXON Tiger Tote. Go 2 miles to CR 183/Old Lytton Springs Road and make a hard right. Take your immediate left on CR 182/Dry Creek Road and go 1 mile. Look for the sign on the right of 3795 Dry Creek Road.
    </p>
  </Layout>
)

export default SheetUpPage
