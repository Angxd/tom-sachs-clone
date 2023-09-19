import React from "react";
import { StoreHeader, Notice, Footer } from "../store";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./privacy.css";

const privacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy - Tom Sachs</title>
      </Helmet>
      <StoreHeader />
      <Notice />
      <div className="section-privacy">
        <div className="privacy-page-width">
          <div className="privacy-content">
            <p className="privacy-head">Privacy Policy</p>
          </div>
          <div className="privacy-info">
            <p className="general-info margin-btm">
              We can be reached via e-mail at{" "}
              <a
                href="mailto:store@tomsachs.org"
                className="privacy-links underline"
              >
                store@tomsachs.org
              </a>{" "}
              for general inquiries.
            </p>

            <p className="general-info">
              <p className="general-info">
                <strong>Our store information is:</strong>
              </p>
              <p className="general-info">Tom Sachs Studio, L.L.C.</p>
              <p className="general-info">245 Centre Street</p>
              <p className="general-info margin-btm">New York, NY 10013</p>
            </p>

            <p className="general-info margin-btm">
              Email:{" "}
              <a
                href="mailto:store@tomsachs.org"
                className="privacy-links underline"
              >
                store@tomsachs.org
              </a>
            </p>

            <p className="general-info margin-btm">
              <strong>
                Tom Sachs Studio, L.L.C. does not intend to store or currently
                stores customer’s financial details (credit or debit card
                numbers).
              </strong>
            </p>

            <p className="general-info margin-btm">
              For each visitor to our Web page, our Web server automatically
              recognizes no information regarding the domain or e-mail address.
            </p>

            <p className="general-info margin-btm">
              We collect the e-mail addresses of those who communicate with us
              via e-mail, information volunteered by the consumer, such as
              survey information and/or site registrations, name and address,
              telephone number.
            </p>

            <p className="general-info margin-btm">
              The information we collect is used to notify consumers about
              updates to our Web site, used by us to contact consumers for
              marketing purposes.
            </p>

            <p className="general-info margin-btm">
              With respect to cookies: we use cookies to store visitors
              preferences and record session information such as items that
              consumers add to their shopping cart.
            </p>

            <p className="general-info margin-btm">
              If you do not want to receive e-mail from us in the future, please
              let us know by sending us e-mail at the above address.
            </p>

            <p className="general-info margin-btm">
              If you supply us with your postal address on-line you may receive
              periodic mailings from us with information on new products and
              services or upcoming events. If you do not wish to receive such
              mailings, please let us know by calling us at the number provided
              above.
            </p>

            <p className="general-info margin-btm">
              Please provide us with your exact name and address. We will be
              sure your name is removed from the list we share with other
              organizations
            </p>

            <p className="general-info margin-btm">
              Persons who supply us with their telephone numbers on-line will
              only receive telephone contact from us with information regarding
              orders they have placed on-line.
            </p>

            <p className="general-info margin-btm">
              Please provide us with your name and phone number. We will be sure
              your name is removed from the list we share with other
              organizations
            </p>

            <p className="general-info margin-btm">
              With respect to Ad Servers: We do not partner with or have special
              relationships with any ad server companies.
            </p>

            <p className="general-info margin-btm">
              From time to time, we may use customer information for new,
              unanticipated uses not previously disclosed in our privacy notice.
              If our information practices change at some time in the future we
              will contact you before we use your data for these new purposes to
              notify you of the policy change and to provide you with the
              ability to opt out of these new uses.
            </p>

            <p className="general-info margin-btm">
              Customers may prevent their information from being used for
              purposes other than those for which it was originally collected by
              e-mailing us at the above address.
            </p>

            <p className="general-info margin-btm">
              Upon request we provide site visitors with access to all
              information [including proprietary information] that we maintain
              about them, financial information (e.g., credit card account
              information) that we maintain about them, unique identifier
              information (e.g., customer number or password) that we maintain
              about them, transaction information (e.g., dates on which
              customers made purchases, amounts and types of purchases) that we
              maintain about them, contact information (e.g., name, address,
              phone number) that we maintain about them.
            </p>

            <p className="general-info margin-btm">
              Consumers can access this information by visiting us at{" "}
              <Link to="/store" className="privacy-links underline">
                http://store.tomsachs.org
              </Link>
            </p>

            <p className="general-info margin-btm">
              Upon request we offer visitors the ability to have inaccuracies
              corrected in contact information, financial information, unique
              identifiers.
            </p>

            <p className="general-info margin-btm">
              Consumers can have this information corrected by visiting us at{" "}
              <Link to="/store" className="privacy-links underline">
                http://store.tomsachs.org
              </Link>
            </p>

            <p className="general-info margin-btm">
              With respect to security: When we transfer and receive certain
              types of sensitive information such as financial or health
              information, we redirect visitors to a secure server and will
              notify visitors through a pop-up screen on our site.<br></br>
            </p>

            <p className="general-info margin-btm">Terms and Conditions</p>

            <p className="general-info margin-btm">
              Welcome to the Tom Sachs Studio, L.L.C. website (Site). Please
              review the following basic terms that govern your use of, and
              purchase of, products from our Site. Please note that your use of
              our Site constitutes your agreement to follow and be bound by
              those terms (the "Agreement").
            </p>

            <p className="general-info margin-btm">
              <strong>GENERAL</strong>
              <br></br>We may, from time to time, change the terms that govern
              your use of our Site. Your use of our Site following any such
              change constitutes your agreement to follow and be bound by the
              terms as changed.
              <br></br>
              <br></br>
              We may change, move or delete portions of, or may add to, our Site
              from time to time.
            </p>

            <p className="general-info margin-btm">
              <strong>PRODUCT INFORMATION</strong>
              <br></br>
              Most of the Tom Sachs Studio, L.L.C. products displayed at the
              Site are available in select stores in the United States and
              select foreign markets while supplies last. In some cases,
              merchandise displayed for sale at the Site may not be available in
              stores. The prices displayed at the Site are quoted in U.S.
              Dollars and are valid and effective only in the United States.
            </p>

            <p className="general-info margin-btm">
              <strong>DELIVERY</strong>
              <br></br>
              Purchased items will be shipped within 7 business days of the
              order, although most will be within 3 to 4. Please allow up to 2
              weeks for delivery to arrive. If you still have not received your
              purchase after 3 weeks, please notify{" "}
              <a
                href="mailto:store@tomsachs.org"
                className="privacy-links underline"
              >
                store@tomsachs.org
              </a>
              . We are not responsible for lost or stollen packages. Customers
              are responsible for providing a correct and valid address for
              delivery.
            </p>

            <p className="general-info margin-btm">
              <strong>PRICES, SHIPPING & HANDLING CHARGES</strong>
              <br></br>
              All prices include charges for shipping and handling or taxes, if
              delivered to customers within the United States. For customers
              outside the United States, additional charges may apply. Please
              email{" "}
              <a
                href="mailto:store@tomsachs.org"
                className="privacy-links underline"
              >
                store@tomsachs.org
              </a>{" "}
              if this is the case.
            </p>

            <p className="general-info margin-btm">
              <strong>PRODUCT AVAILABILITY</strong>
              <br></br>
              Although availability may be indicated on the Site, we cannot
              guarantee product availability and products, nonetheless, may not
              be available for immediate delivery. We reserve the right, without
              liability or prior notice, to revise, discontinue, or cease to
              make available any or all products or to cancel any order. If
              there is any revision, discontinuance, or cessation, we may, in
              our discretion, ship products which have substantially similar
              functionality and specifications to the products ordered or cancel
              your order.
            </p>

            <p className="general-info margin-btm">
              <strong>RETURN POLICY</strong>
              <br></br>
              No refunds or cancellations accepted. All sales are final.
              Exchange requests are granted within 30 days from which shipment
              is received for size exchanges or in the case of significantly
              factory defective items. However, we require that customers notify
              Tom Sachs Studio, L.L.C. (
              <a
                href="mailto:store@tomsachs.org"
                className="privacy-links underline"
              >
                store@tomsachs.org
              </a>
              ) of any problems with merchandise within 48 hours of receipt.
              Items must be in their original packaging, in as-new condition
              with both the packing slip and the printed receipts. Exchanges are
              not available for any product after 30 days.
            </p>

            <p className="general-info margin-btm">
              <strong>COLORS</strong>
              <br></br>
              We have made every effort to display as accurately as possible the
              colors of our products that appear at the Site. However, as the
              actual colors you see will depend on your monitor, we cannot
              guarantee that your monitor's display of any color will be
              accurate.
            </p>

            <p className="general-info margin-btm">
              <strong>SITE CONTENTS</strong>
              <br></br>
              Unless otherwise noted, all materials, including images,
              illustrations, designs, icons, photographs, video clips, and
              written and other materials that appear as part of this Site
              (collectively, the "Contents") are copyrights, trademarks, trade
              dress and/or other intellectual properties owned, controlled or
              licensed by Tom Sachs Studio, L.L.C. collectively, and its
              subsidiaries and/or affiliates. The Site as a whole is protected
              by copyright and trade dress, all worldwide rights, titles and
              interests in and to which are owned by Tom Sachs Studio, L.L.C.
            </p>

            <p className="general-info margin-btm">
              The Contents of our Site, and the Site as a whole, are intended
              solely for personal, noncommercial (other than for the purchase of
              merchandise from our site) use by the users of our Site. You may
              download or copy the Contents and other downloadable materials
              displayed on the Site for your personal use only. No right, title
              or interest in any downloaded materials or software is transferred
              to you as a result of any such downloading or copying. You may not
              reproduce (except as noted above), publish, transmit, distribute,
              display, modify, create derivative works from, sell or participate
              in any sale of, or exploit in any way, in whole or in part, any of
              the Contents, the Site, or any related software.
            </p>

            <p className="general-info margin-btm">
              USER COMMENTS, FEEDBACK, POSTCARDS AND OTHER SUBMISSIONS.
            </p>

            <p className="general-info margin-btm">
              All comments, feedback, postcards, suggestions, ideas, and other
              submissions disclosed, submitted or offered to Tom Sachs Studio,
              L.L.C. on or by this Site or otherwise disclosed, submitted or
              offered in connection with your use of this Site (collectively,
              "Comments") shall be and remain Tom Sachs Studio, L.L.C. property.
              Such disclosure, submission or offer of any Comments shall
              constitute an assignment to Tom Sachs Studio, L.L.C. of all
              worldwide rights, titles and interests in all copyrights and other
              intellectual properties in the Comments. Thus, Tom Sachs Studio,
              L.L.C. will own exclusively all such rights, titles and interests
              and shall not be limited in any way in its use, commercial or
              otherwise, of any Comments. Tom Sachs Studio, L.L.C. is and shall
              be under no obligation (1) to maintain any Comments in confidence;
              (2) to pay to user any compensation for any Comments; or (3) to
              respond to any user Comments.
            </p>

            <p className="general-info margin-btm">
              You agree that no Comments submitted by you to the Site will
              violate any right of any third party, including copyright,
              trademark, privacy or other personal or proprietary right(s). You
              further agree that no Comments submitted by you to the Site will
              be or contain libelous or otherwise unlawful, abusive or obscene
              material. You are and shall remain solely responsible for the
              content of any Comments you make.
            </p>

            <p className="general-info margin-btm">
              You agree that Tom Sachs Studio, L.L.C. may use and/or disclose
              information about your demographics and use of the Site in any
              manner that does not reveal your identity. By participating in
              Site sweepstakes, contests, promotions, and/or requesting
              promotional information or product updates, you agree that Tom
              Sachs Studio, L.L.C. may use your information for marketing and
              promotional purposes.
            </p>

            <p className="general-info margin-btm">
              <strong>TOM SACHS STUDIO, L.L.C. COMMUNICATIONS TO YOU</strong>
              <br></br>You agree that Tom Sachs Studio, L.L.C. may send
              electronic mail to you for the purpose of advising you of changes
              or additions to this Site, about any of Tom Sachs Studio, L.L.C.
              products or services, or for such other purpose(s) as Tom Sachs
              Studio, L.L.C. deems appropriate.
            </p>

            <p className="general-info margin-btm">
              <strong>DISCLAIMER</strong>
              <br></br>
              THIS SITE AND ALL CONTENTS OF THE SITE ARE PROVIDED ON AN "AS IS"
              BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
              INCLUDING WITHOUT LIMITATION WARRANTIES OF TITLE OR IMPLIED
              WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
              YOU ACKNOWLEDGE, BY YOUR USE OF THE SITE, THAT YOUR USE OF THE
              SITE IS AT YOUR SOLE RISK, THAT YOU ASSUME FULL RESPONSIBILITY FOR
              ALL COSTS ASSOCIATED WITH ALL NECESSARY SERVICING OR REPAIRS OF
              ANY EQUIPMENT YOU USE IN CONNECTION WITH YOUR USE OF OUR SITE, AND
              THAT TOM SACHS STUDIO, L.L.C. SHALL NOT BE LIABLE FOR ANY DAMAGES
              OF ANY KIND RELATED TO YOUR USE OF THIS SITE.
            </p>

            <p className="general-info margin-btm">
              <strong>INACCURACY DISCLAIMER</strong>
              <br></br>
              From time to time there may be information on tomsachs.org that
              contains typographical errors, inaccuracies, or omissions that may
              relate to product descriptions, pricing, and availability. We
              reserve the right to correct any errors, inaccuracies or omissions
              and to change or update information at any time without prior
              notice (including after you have submitted your order). We
              apologize for any inconvenience this may cause you.
            </p>

            <p className="general-info margin-btm">
              <strong>INDEMNIFICATION</strong>
              <br></br>
              You agree to defend, indemnify and hold Tom Sachs Studio, L.L.C.
              harmless from and against any and all claims, damages, costs and
              expenses, including attorneys' fees, arising from or related to
              your use of the Site.
            </p>
            <p className="general-info margin-btm">
              <strong>MISCELLANEOUS</strong>
              <br></br>
              Unless otherwise specified and except to the extent Tom Sachs
              Studio, L.L.C. products are offered for sale in the United States
              through this Site, this Site and the Contents thereof are
              displayed solely for the purpose of promoting Tom Sachs Studio,
              L.L.C. products and services available in the United States and
              select foreign markets. This Site is controlled and operated by
              Tom Sachs Studio, L.L.C. from its offices in Brooklyn, New York.
              <br></br>
              <br></br>
              This Agreement shall be construed in accordance with the laws of
              the State of California, without regard to any conflict of law
              provisions. Any dispute arising under this Agreement shall be
              resolved exclusively by the state and federal courts of the State
              of New York, Kings County.
            </p>
            <p className="general-info margin-btm">
              <strong>TERMINATION</strong>
              <br></br>
              This Agreement is effective unless and until terminated by either
              you or Tom Sachs Studio, L.L.C. You may terminate this Agreement
              at any time. Tom Sachs Studio, L.L.C. also may terminate this
              Agreement at any time and may do so immediately without notice,
              and accordingly deny you access to the Site, if in Tom Sachs
              Studio, L.L.C. sole discretion you fail to comply with any term or
              provision of this Agreement. Upon any termination of this
              Agreement by either you or Tom Sachs Studio, L.L.C., you must
              promptly destroy all materials downloaded or otherwise obtained
              from this Site, as well as all copies of such materials, whether
              made under the terms of this Agreement or otherwise.
            </p>
          </div>
          <div style={{ marginTop: 80, marginBottom: 100, marginLeft: -110 }}>
            <Link to="/privacy" className="bottom">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default privacyPolicy;
