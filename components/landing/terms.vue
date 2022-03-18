<template>

  <v-dialog
      v-model="dialog"
      max-width="800"
  >
    <template v-slot:activator="{ on, attrs }">
      <a rel="noopener noreferrer"
         v-bind="attrs"
         v-on="on">
        <div class="Button-caption">Terms of Services</div>
      </a>
    </template>

    <v-card class="form-modal">
      <v-card-title class="text-h5">
        <span class="close-dialog" @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </span>
        <p>Terms of Services</p>
      </v-card-title>

      <v-card-text class="text-dark">
        <div>
          <div><h4><strong>Terms &amp; Conditions of</strong></h4><h4><strong>www.terradigital.ro</strong></h4><h4>
            <strong>(hereinafter referred to as” WEB PORTAL”)</strong></h4>
            <p>For best use of the WEB PORTAL, please read the terms and conditions carefully. Using (visiting or
              purchasing products and services) of this WEB PORTAL implies the acceptance of this Privacy Policy.
              Accessing the WEB PORTAL and using its applications implies the explicit or implicit acceptance of all
              published provisions from Terns and Conditions by the users (hereinafter referred to as” USERS”,
              “VISITORS”, “You”), with full contractual value.</p><h4><strong>TERMS AND CONDITIONS ACCEPTANCE</strong>
            </h4>
            <ul>
              <li>I have read the information provided in the presentation section of the portal, so that I am clear
                about the conditions I must meet in order to obtain a service of WEB PORTAL.
              </li>
              <li>I got acquainted with the prices of the WEB PORTAL displayed on it</li>
              <li>All data I provide is correct and complete. I understand that the provision of false or incomplete
                data will result in the impossibility of using the services of the WEB PORTAL.
              </li>
              <li>Any unclear information can be clarified with the support of USER SUPPORT SERVICE. The data of this
                service are displayed on the CONTACTS page of the WEB PORTAL
              </li>
              <li>I agree that the WEB PORTAL can:</li>
              <li>send me informational messages to the email address used for / when creating the account / filling in
                the profile data
              </li>
              <li>contact me via messages in the WEB PORTAL CHAT</li>
              <li>contact me via the ZoomChat OF THE WEB PORTAL, as long as I am online, which means that the WEB PORTAL
                is open in the browser of my device from which I accessed the WEB PORTAL
              </li>
              <li>penalize me by limiting the working options on the WEB PORTAL (blocking access to personal account and
                scheduling system, as well as to the discussion with WEB PORTAL operators, deleting applications for
                which the user did not appear at the WEB PORTAL office at the schedulled date, etc. .) or complete
                cessation of access to the web portal (blocking by IP address) in case of abusive behavior
              </li>
            </ul>
            <p>Abusive behavior means:</p>
            <ul>
              <li>Submission of an unjustifiably large number of scheduling requests for discussion with WEB PORTAL
                operators
              </li>
              <li>Initiating an unjustifiably large number of calls through the WEB PORTAL ZoomChat or writing an
                unjustifiably large number of messages through the WEB PORTAL CHAT or writing messages that have nothing
                to do with the WEB PORTAL services
              </li>
              <li>Fictitious scheduling (from the same account and / or IP Address) of users, without their presentation
                at the online discussion / WEB PORTAL office on the scheduled date and time;
              </li>
              <li>Trying to obtain appointments using a path other than the one indicated on the site;</li>
              <li>Attempting to run executable programs or applications that may generate automatic multiple programming
                or hinder the operation of the site or exploit security breaches or that extract / delete / modify /
                block data from the site in any form or in any way restrict the operation of the site of;
              </li>
              <li>Using offensive / trivial / insulting / degrading language on the site;</li>
              <li>Providing personal data or forged documents in order to mislead employees of the Web Portal</li>
            </ul>
            <p>Any unclear information can be clarified with the support of the staff of the Contact and Support Center
              of the WEB PORTAL</p><h4><strong>WHO IS THE OWNER OF THE DATA TREATMENT?</strong></h4><h4><strong>Details
              of the WEB PORTAL OWNER:</strong></h4>
            <p>Terra Digital SRL</p>
            <p>Bucharest, Sectorul 2, str. Intrarea Vladimir Streinu 12, et. 1, ap. 2, 021416</p>
            <p>Registration ID: J40/15853/2020</p>
            <p>Email: office@TerraDigital.ro</p>
            <p>Phone: +40746 150 515</p><h4><strong>BRAND: Terra Digital</strong></h4>
            <p>Hereinafter, WEB PORTAL OWNER/ BRAND is referred to “We”, “Us”, Our”.</p><h4><strong>PRODUCTS AND
              SERVICES</strong></h4>
            <p>PORTAL WEB offers IT services, software development, digital marketing, design, consulting and business
              digitization, as well as other services in the field of IT, Marketing and Consulting</p><h4><strong>INTELLECTUAL
              AND INDUSTRIAL PROPERTY</strong></h4>
            <p>All intellectual and industrial property rights over visual elements displayed on the WEB PORTAL,
              including, by way of example, the images, sound, audio, video, designs, texts, graphics, logos, icons,
              color combinations, structure, buttons, in addition to the software, commercial names, trademarks, works,
              illustrations, photographs and industrial drawings and any other symbols for industrial and commercial use
              are OUR property.</p>
            <p>The reproduction, distribution and public communication, including making part or all of the content of
              the WEB PORTAL available for commercial purposes, in any medium and by any technical means, is strictly
              prohibited without the OUR authorization.</p>
            <p>Users agree to respect the OUR intellectual and industrial property rights. Users may use the WEB PORTAL
              and its content to view, select and acquire the products and services displayed on the WEB PORTAL. Any
              other use is prohibited and shall require the user to obtain the OUR prior, express and written consent.
              Users shall refrain from deleting, altering, eluding or tampering with any protective device or security
              system installed on the WEB PORTAL.</p><h4><strong>TAXES</strong></h4>
            <p>All displayed prices as well as transport costs / taxes are calculated with the VAT included.</p><h4>
              <strong>YOUR REGISTRATION OBLIGATIONS / OPTIONS</strong></h4>
            <p>To be able to make purchases from our WEB PORTAL, you should have an active account on our WEB PORTAL. In
              your use of the Service, you agree to provide true, accurate, current and complete information about you
              as specified in the User Registration section and you agree to provide this information correctly and
              completely. By registering as a member, you will be asked to choose your username and password. You are
              responsible for keeping your passphrase secure as a member of this WEB PORTAL, any activity under your
              username being entirely within your responsibility. You must immediately notify us of any loss of password
              or unauthorized activity sign under your username. If we believe that these obligations are not being
              respected by you, we reserve the right to block your access, for a fixed or indefinite period, to the use
              of the service without prior notice and you will not be entitled to any damages.</p>
            <p>Another way to make purchases from our WEB PORTAL is by option “Guest User”. All the requirements
              mentioned above remain in force for this option, as well, except for the responsibility of keeping
              password. Users, using this option, will have no access to the Client Area, including the option of
              filling the Return forms, part of Client Area. The only available way to place a return or any other
              dispute is by contacting Us by contacts, displayed in this document or on the WEB PORTAL or by other
              electronic means that will be available on the WEB PORTAL at that moment. For more information, please
              read the Return Policy and other documents displayed on the WEB PORTAL.</p><h4><strong>PERSONAL DATA
              SECURITY</strong></h4>
            <p>Your personal data will only be used for the stated purpose of this WEB PORTAL. The information in the
              order, contact or other forms on the WEB PORTAL will be used to send you confirmation of orders,
              promotions, periodical newsletters, etc. We may collect the following personal information from You:
              personal data, payment and shipping details and other information, information you submit online
              (including interactions with Us on Social Networks), demographic information and information about product
              preferences (including gender, age, etc.), information about your device and location (including type of
              device, browser, site You came from to our WEB PORTAL or destination You go from our WEB PORTAL), Your
              contact information, etc. The purposes for which we collect Your personal data refer to:</p>
            <ul>
              <li>Create, edit and manage users accounts on our WEB PORTAL</li>
              <li>Provide Users with products and services</li>
              <li>Improve the user experience on our WEB PORTAL</li>
              <li>Process online orders and order returns, including sending email/ messages about shipping</li>
              <li>Contact users and respond to their requests, to communicate with them</li>
              <li>Send to Users of the WEB PORTAL information about news, promotions, promocodes, new product and
                collection, WEB PORTAL updates, etc.
              </li>
              <li>Use information for security purposes, to provide protection to Our companies and customers</li>
              <li>Use information as otherwise permitted by law or based on Your acceptance by notification</li>
              <li>solving your requests, questions or complaints.</li>
            </ul>
            <ul>
              <li>conducting market and product studies and product marketing, supplier and supplier services, partners
                and distributors
              </li>
              <ul>
                <li>other activities undertaken by the Provider and permits, which are not subject to approval by the
                  addressee. The provider will keep the confidentiality of this information
                </li>
              </ul>
              <p>We may collect information directly provided by You or by third party (tracking tools, cookies, various
                apps, social media platforms, analytics and tracking systems and other sources). We may use our own
                software or third-party electronic means to send the information to users, including those that allow to
                personalize communications in digital media</p>
              <p>We may share the information with third parties for marketing purposes or those who perform services
                with us or otherwise destinations permitted by law. We may interact with third-party applications that
                we do not control.</p>
              <p>We may use Your Personal Information to contact YOU via the CHAT or / and ZoomChat of the WEB PORTAL,
                as long as I am online, which means that the WEB PORTAL is open in the browser of my device from which I
                accessed the WEB PORTAL</p>
              <p>PORTAL WEB, as a personal data controller, is constantly concerned with ensuring a high level of
                protection for individuals with regard to the processing of personal data carried out in accordance with
                the provisions of Parliament's Regulation (EU) 2016/679 European Parliament and of the Council of 27
                April 2016 on the protection of individuals with regard to the processing of personal data and on the
                free movement of such data and repealing Directive 95/46 / EC (General Data Protection
                Regulation-RGPD).</p>
              <p>PORTAL WEB processes the data provided by users in good faith, for legitimate purposes (consulting on
                IT services, Digital Marketing, Design, Digitization of Business Processes), in compliance with legal
                requirements and under conditions that ensure their technical security</p>
              <p>Any information provided by you is processed, as appropriate, by automatic and / or manual means and
                represents your express and unequivocal consent that the personal data concerning you be used by the
                users of the operator, in accordance with the legal attributions. In this sense, PORTAL WEB ensures the
                technical and organizational conditions necessary to ensure their security.</p>
              <p>PORTAL WEB processes personal data and has the obligation to manage in safe conditions, and only for
                the specified purposes, the personal data that you provide us about you, a member of your family, or
                another person.</p>
              <p>The purpose of collecting personal data is to process and resolve requests for consulting services on
                IT services, Digital Marketing, Design, Digitization of Business Processes.</p>
              <p>The refusal to provide the operator with the necessary personal data makes it impossible to provide the
                requested consulting services.</p>
              <p>The registered information is intended for use, as an operator, by PORTAL WEB, and in the procedures
                for processing and resolving the submitted applications are communicated, as appropriate, to the
                following recipients: digital marketing software solutions, used for Digital Marketing purposes,
                solutions IT, such as information collection software Cookies, Messengers, Chats, etc.</p>
              <p>WEB PORTAL processes the following categories of personal data: alphanumeric data about the applicant
                (eg name and surname; date and place of birth; personal numerical code; type, series and number of the
                travel document, the authority that issued it, the date of issue and expiration date, domicile, etc.),
                in order to conclude the consultancy contract</p>
              <p>PORTAL WEB does not process personal data related to racial or ethnic origin, political, religious,
                philosophical or similar beliefs, trade union membership, as well as personal data on the health status
                of the data subject, except in situations that the processing of the sensitive data category is
                necessary to obtain the requested consular service, being provided exclusively with the express consent
                of the data subject (or of the family / legal representative when the person is physically or legally
                incapacitated). In such situations, sensitive data are processed only in well-defined cases and are
                accessible only to authorized personnel, being kept safe.</p>
              <p>Personal data are:</p>
              <ul>
                <li>processed lawfully, fairly and transparently to the data subject ("legality, fairness and
                  transparency");
                </li>
                <li>collected for specified, explicit and legitimate purposes and not further processed in a manner
                  incompatible with those purposes;
                </li>
                <li>appropriate, relevant and limited to what is necessary in relation to the purposes for which they
                  are processed ("minimization of data");
                </li>
                <li>accurate and, if necessary, be updated; all necessary measures must be taken to ensure that personal
                  data which are inaccurate, having regard to the purposes for which they are processed, are deleted or
                  rectified without delay ("accuracy");
                </li>
                <li>kept in a form which permits identification of data subjects for a period not exceeding the period
                  necessary to fulfill the purposes for which the data are processed;
                </li>
                <li>processed in a way that ensures adequate security of personal data, including protection against
                  unauthorized or illegal processing and against accidental loss, destruction or damage, by taking
                  appropriate technical or organizational measures ("integrity and confidentiality").
                </li>
              </ul>
              <h4><strong>The rights of data subjects in the context of personal data processing</strong></h4>
              <p>In accordance with the provisions of art. 13-22 of the RGPD, PORTAL WEB ensures the observance of the
                following rights of the data subjects:</p>
              <p>Art. 13: Information to be provided if personal data are collected from the data subject</p>
              <p>1. Where personal data concerning a data subject are collected from that data subject, the controller
                shall, when obtaining such personal data, provide the data subject with all of the following
                information:</p>
              <ul>
                <li>a. the identity and contact details of the operator and, as the case may be, of his
                  representative;
                </li>
                <ul>
                  <li>b. the contact details of the data protection officer, as the case may be;</li>
                  <ul>
                    <li>c. the purposes for which the personal data are processed, as well as the legal basis of the
                      processing;
                    </li>
                    <ul>
                      <li>d. where the processing is carried out pursuant to Article 6 (1) (f), the legitimate interests
                        pursued by the controller or a third party;
                      </li>
                      <ul>
                        <li>e. recipients or categories of recipients of personal data;</li>
                        <ul>
                          <li>f. where applicable, the intention of the controller to transfer personal data to a third
                            country or international organization and the existence or absence of a Commission decision
                            on the appropriateness or, in the case of transfers referred to in Article 46 or 47 or
                            Article 49 (1) (1) second subparagraph, a reference to the appropriate or appropriate
                            guarantees and to the means of obtaining a copy thereof, if they have been made available.
                          </li>
                        </ul>
                        <p>2. In addition to the information referred to in paragraph 1, when the personal data are
                          obtained, the controller shall provide the data subject with the following additional
                          information necessary to ensure fair and transparent processing:</p>
                        <ul>
                          <li>a. the period for which the personal data will be stored or, if this is not possible, the
                            criteria used to establish this period;
                          </li>
                          <ul>
                            <li>b. the existence of the right to request from the controller, as regards personal data
                              concerning the data subject, access to them, rectification or deletion thereof or
                              restriction of processing or the right to oppose the processing, as well as the right to
                              data portability;
                            </li>
                            <ul>
                              <li>c. where the processing is based on Article 6 (1) (a) or Article 9 (2) (a), the
                                existence of the right to withdraw consent at any time, without prejudice to the
                                lawfulness of the processing carried out on the basis of the consent before its
                                withdrawal;
                              </li>
                              <ul>
                                <li>d. the right to lodge a complaint with a supervisory authority;</li>
                                <ul>
                                  <li>e. whether the provision of personal data is a legal or contractual obligation or
                                    an obligation necessary for the conclusion of a contract, as well as whether the
                                    data subject is obliged to provide such personal data and what are the possible
                                    consequences of non-compliance with this obligation;
                                  </li>
                                  <ul>
                                    <li>f. the existence of an automated decision-making process including the creation
                                      of profiles, referred to in Article 22 (1) and (4), as well as, at least in those
                                      cases, relevant information on the logic used and on the importance and expected
                                      consequences of such processing for the data subject.
                                    </li>
                                  </ul>
                                  <p>3. If the controller intends to further process personal data for a purpose other
                                    than that for which they were collected, the controller shall provide the data
                                    subject, before such further processing, with information on that secondary purpose
                                    and any additional information. relevant in accordance with paragraph 2.</p>
                                  <p>4. Paragraphs 1, 2 and 3 shall not apply if and to the extent that the data subject
                                    already holds that information.</p>
                                  <p>Art. 14: Information to be provided if personal data have not been obtained from
                                    the data subject</p>
                                  <p>1. If personal data have not been obtained from the data subject, the controller
                                    shall provide the data subject with the following information:</p>
                                  <ul>
                                    <li>a. the identity and contact details of the operator and, as the case may be, of
                                      his representative;
                                    </li>
                                    <ul>
                                      <li>b. the contact details of the data protection officer, as the case may be;
                                      </li>
                                      <ul>
                                        <li>c. the purposes for which the personal data are processed, as well as the
                                          legal basis of the processing;
                                        </li>
                                        <ul>
                                          <li>d. the categories of personal data concerned;</li>
                                          <ul>
                                            <li>e. recipients or categories of recipients of personal data, as
                                              appropriate;
                                            </li>
                                            <ul>
                                              <li>f. where applicable, the intention of the controller to transfer
                                                personal data to a recipient in a third country or an international
                                                organization and the existence or absence of a Commission decision on
                                                the appropriateness or, in the case of transfers referred to in Article
                                                46 or 47, or in the second subparagraph of Article 49 (1), a reference
                                                to the appropriate or appropriate guarantees and to the means of
                                                obtaining a copy thereof, if they have been made available.
                                              </li>
                                            </ul>
                                            <p>2. In addition to the information referred to in paragraph 1, the
                                              controller shall provide the data subject with the following information
                                              necessary to ensure fair and transparent processing in respect of the data
                                              subject:</p>
                                            <ul>
                                              <li>a. the period for which the personal data will be stored or, if this
                                                is not possible, the criteria used to establish this period;
                                              </li>
                                              <li>b. where the processing is carried out pursuant to Article 6 (1) (f),
                                                the legitimate interests pursued by the controller or a third party;
                                              </li>
                                              <li>c. the existence of the right to request from the controller,
                                                regarding personal data concerning the data subject, access to them,
                                                their rectification or deletion or restriction of processing and the
                                                right to oppose the processing, as well as the right to data
                                                portability;
                                              </li>
                                              <li>d. where the processing is based on Article 6 (1) (a) or Article 9 (2)
                                                (a), the existence of the right to withdraw consent at any time, without
                                                prejudice to the lawfulness of the processing carried out on the basis
                                                of the consent before its withdrawal;
                                              </li>
                                              <li>e. the right to lodge a complaint with a supervisory authority;</li>
                                              <li>f. the source from which the personal data come and, if applicable,
                                                whether they come from publicly available sources;
                                              </li>
                                              <li>g. the existence of an automated decision-making process including
                                                profiling, referred to in Article 22 (1) and (4), as well as, at least
                                                in those cases, relevant information on the logic used and on the
                                                importance and expected consequences of such processing for the data
                                                subject.
                                              </li>
                                            </ul>
                                            <p>3. The operator shall provide the information referred to in paragraphs 1
                                              and 2:</p>
                                            <ul>
                                              <li>a. within a reasonable time after obtaining personal data, but not
                                                more than one month, taking into account the specific circumstances in
                                                which personal data are processed;
                                              </li>
                                              <li>b. if the personal data are to be used for communication with the data
                                                subject, at the latest at the time of the first communication to that
                                                data subject; or
                                              </li>
                                              <li>c. if it is intended to disclose personal data to another recipient,
                                                at the latest on the date on which they are first disclosed.
                                              </li>
                                            </ul>
                                            <p>4. If the controller intends to further process personal data for a
                                              purpose other than that for which they were obtained, the controller shall
                                              provide the data subject, before such further processing, with information
                                              on that secondary purpose and any additional information. relevant in
                                              accordance with paragraph 2.</p>
                                            <p>5. Paragraphs 1 to 4 shall not apply if and to the extent that:</p>
                                            <ul>
                                              <li>a. the data subject already has the information;</li>
                                              <ul>
                                                <li>b. the provision of such information proves impossible or would
                                                  involve disproportionate efforts, in particular in the case of
                                                  processing for archiving purposes in the public interest, for
                                                  scientific or historical research or for statistical purposes, subject
                                                  to the conditions and guarantees provided for in Article 89 (1), or to
                                                  the extent that the obligation referred to in paragraph 1 of this
                                                  Article is likely to make it impossible or seriously impair the
                                                  achievement of the objectives of such processing. In such cases, the
                                                  controller shall take appropriate measures to protect the rights, the
                                                  freedoms and legitimate interests of the data subject, including
                                                  making the information available to the public;
                                                </li>
                                                <ul>
                                                  <li>c. the obtaining or disclosure of data is expressly provided for
                                                    by Union or national law covered by the controller and which
                                                    provides for appropriate measures to protect the legitimate
                                                    interests of the data subject; or
                                                  </li>
                                                  <ul>
                                                    <li>d. where personal data must remain confidential pursuant to a
                                                      statutory obligation of professional secrecy governed by Union or
                                                      national law, including a legal obligation to maintain secrecy.
                                                    </li>
                                                  </ul>
                                                  <h4><strong>Art. 15: The right of access of the data subject</strong>
                                                  </h4>
                                                  <p>1. The data subject shall have the right to obtain confirmation
                                                    from the controller that personal data concerning him or her are
                                                    being processed or not and, if so, access to that data and to the
                                                    following information:</p>
                                                  <ul>
                                                    <li>a. processing purposes;</li>
                                                    <li>b. the categories of personal data concerned;</li>
                                                    <li>c. recipients or categories of recipients to whom personal data
                                                      have been or are to be disclosed, in particular recipients from
                                                      third countries or international organizations;
                                                    </li>
                                                    <li>d. where possible, the period for which personal data are
                                                      expected to be stored or, if this is not possible, the criteria
                                                      used to establish this period;
                                                    </li>
                                                    <li>e. the existence of the right to request the operator to rectify
                                                      or delete personal data or to restrict the processing of personal
                                                      data concerning the data subject or the right to oppose the
                                                      processing;
                                                    </li>
                                                    <li>f. the right to lodge a complaint with a supervisory
                                                      authority;
                                                    </li>
                                                    <li>g. if personal data are not collected from the data subject, any
                                                      available information on their source;
                                                    </li>
                                                    <li>h. the existence of an automated decision-making process
                                                      including the creation of profiles, referred to in Article 22 (1)
                                                      and (4), as well as, at least in those cases, relevant information
                                                      on the logic used and on the importance and expected consequences
                                                      of such processing for the data subject.
                                                    </li>
                                                  </ul>
                                                  <p>2. Where personal data are transferred to a third country or an
                                                    international organization, the data subject shall have the right to
                                                    be informed of the appropriate safeguards pursuant to Article 46
                                                    concerning the transfer.</p>
                                                  <p>3. The controller shall provide a copy of the personal data subject
                                                    to processing. For any other copies requested by the data subject,
                                                    the operator may charge a reasonable fee, based on administrative
                                                    costs. Where the data subject submits the application in electronic
                                                    format and unless the data subject requests another format, the
                                                    information shall be provided in a commonly used electronic
                                                    format.</p>
                                                  <p>4. The right to obtain a copy referred to in paragraph 3 shall be
                                                    without prejudice to the rights and freedoms of others.</p><h4>
                                                  <strong>Rectification and deletion</strong></h4><h4><strong>Art. 16:
                                                  The right to rectification</strong></h4>
                                                  <p>The data subject has the right to obtain from the controller,
                                                    without undue delay, the rectification of inaccurate personal data
                                                    concerning him. Taking into account the purposes for which the data
                                                    were processed, the data subject has the right to obtain the
                                                    completion of personal data that are incomplete, including by
                                                    providing an additional statement.</p><h4><strong>Art. 17: The right
                                                  to erasure of data ("the right to be forgotten")</strong></h4>
                                                  <p>(1) The data subject has the right to obtain from the controller
                                                    the deletion of personal data concerning him, without undue delay,
                                                    and the controller has the obligation to delete personal data
                                                    without undue delay if one of the following reasons applies :</p>
                                                  <ul>
                                                    <li>a. personal data are no longer necessary for the purposes for
                                                      which they were collected or processed;
                                                    </li>
                                                    <li>b. the data subject withdraws the consent on the basis of which
                                                      the processing takes place in accordance with Article 6 (1) (a) or
                                                      Article 9 (2) (a), and there is no other legal basis for the
                                                      processing;
                                                    </li>
                                                    <li>c. the data subject opposes the processing pursuant to Article
                                                      21 (1) and there are no legitimate reasons prevailing in respect
                                                      of the processing or the data subject opposes the processing
                                                      pursuant to Article 21 (2);
                                                    </li>
                                                    <li>d. personal data have been processed illegally;</li>
                                                    <li>e. personal data must be deleted in order to comply with a legal
                                                      obligation incumbent on the controller under Union or national law
                                                      to which the controller is subject;
                                                    </li>
                                                    <li>f. personal data have been collected in connection with the
                                                      provision of information society services referred to in Article 8
                                                      (1).
                                                    </li>
                                                  </ul>
                                                  <p>2. If the controller has made his personal data public and is
                                                    obliged to delete them pursuant to paragraph 1, the controller
                                                    shall, taking into account the available technology and the cost of
                                                    implementation, take reasonable measures, including technical
                                                    measures, to inform operators who process personal data that the
                                                    data subject has requested the deletion by these operators of any
                                                    links to those data or of any copies or reproductions of such
                                                    personal data.</p>
                                                  <p>3. Paragraphs 1 and 2a shall not apply in so far as processing is
                                                    required:</p>
                                                  <ul>
                                                    <li>a. for the exercise of the right to free expression and
                                                      information;
                                                    </li>
                                                    <li>b. for compliance with a legal obligation to process under Union
                                                      or national law applicable to the controller or for the
                                                      performance of a task performed in the public interest or in the
                                                      exercise of official authority with which the controller is
                                                      vested;
                                                    </li>
                                                    <li>c. for reasons of public interest in the field of public health,
                                                      in accordance with Article 9 (2) (h) and (i) and Article 9 (3);
                                                    </li>
                                                    <li>d. for archiving purposes in the public interest, for scientific
                                                      or historical research or for statistical purposes, in accordance
                                                      with Article 89 (1), in so far as the right referred to in
                                                      paragraph 1 is likely to make it impossible or seriously affect
                                                      the achievement of the objectives of that processing; or
                                                    </li>
                                                    <li>e. for the establishment, exercise or defense of a right in
                                                      court.
                                                    </li>
                                                  </ul>
                                                  <h4><strong>Art. 18: The right to restrict the processing</strong>
                                                  </h4>
                                                  <p>1. The data subject shall have the right to obtain from the
                                                    controller a restriction on processing where one of the following
                                                    cases applies:</p>
                                                  <ul>
                                                    <li>a. the data subject disputes the accuracy of the data, for a
                                                      period which allows the controller to verify the accuracy of the
                                                      data;
                                                    </li>
                                                    <li>b. the processing is illegal, and the data subject opposes the
                                                      deletion of personal data, requesting in return the restriction of
                                                      their use;
                                                    </li>
                                                    <li>c. the controller no longer needs the personal data for the
                                                      purpose of processing, but the data subject requests them for the
                                                      establishment, exercise or defense of a right in court; or
                                                    </li>
                                                    <li>d. the data subject has objected to the processing in accordance
                                                      with Article 21 (1), for the period during which it is verified
                                                      whether the legitimate rights of the controller prevail over those
                                                      of the data subject.
                                                    </li>
                                                  </ul>
                                                  <p>2. Where processing has been restricted pursuant to paragraph 1,
                                                    such personal data may, except in the case of storage, be processed
                                                    only with the consent of the data subject or for the purpose of
                                                    establishing, exercising or defending a right in court; or for the
                                                    protection of the rights of another natural or legal person or for
                                                    reasons of overriding public interest in the Union or in a Member
                                                    State.</p>
                                                  <p>3. A data subject who has obtained a processing restriction
                                                    pursuant to paragraph 1 shall be informed by the controller before
                                                    the processing restriction is lifted.</p>
                                                  <p>Art. 19: Obligation to notify regarding the rectification or
                                                    deletion of personal data or restriction of processing</p>
                                                  <p>The controller shall communicate to each consignee to whom the
                                                    personal data have been disclosed any rectification or deletion of
                                                    personal data or restriction of processing carried out in accordance
                                                    with Article 16, Article 17 (1) and Article 18, unless this this
                                                    proves impossible or involves disproportionate effort.</p>
                                                  <p>The operator shall inform the data subject of those recipients if
                                                    the data subject so requests.</p>
                                                  <p>Art. 20: The right to data portability</p>
                                                  <p>(1) The data subject has the right to receive personal data
                                                    concerning him / her which he / she has provided to the operator in
                                                    a structured, commonly used and automatically readable format and
                                                    has the right to transmit this data to another operator, without
                                                    obstacles on the part of the operator to whom the personal data were
                                                    provided, if:</p>
                                                  <ul>
                                                    <li>processing is based on consent pursuant to Article 6 (1) (a) or
                                                      Article 9 (2) (a) or a contract pursuant to Article 6 (1) (b); and
                                                    </li>
                                                    <li>b. the processing is performed by automatic means.</li>
                                                  </ul>
                                                  <p>2. In exercising his right to data portability pursuant to
                                                    paragraph 1, the data subject shall have the right to have personal
                                                    data transmitted directly from one controller to another where this
                                                    is technically feasible.</p>
                                                  <p>3. The exercise of the right referred to in paragraph 1 of this
                                                    Article shall be without prejudice to Article 17. That right shall
                                                    not apply to the processing necessary for the performance of a task
                                                    performed in the public interest or in the exercise of official
                                                    authority with which the operator is vested.</p>
                                                  <p>4. The right referred to in paragraph 1 shall be without prejudice
                                                    to the rights and freedoms of others.</p>
                                                  <p>Section 4: Right to Opposition and Automated Individual
                                                    Decision-Making</p><h4><strong>Art. 21: The right to
                                                  opposition</strong></h4>
                                                  <p>1. The data subject shall at any time have the right to oppose, on
                                                    grounds relating to his particular situation, processing pursuant to
                                                    Article 6 (1) (e) or (f) or Article 6 (1). 1) personal data
                                                    concerning her, including the creation of profiles based on those
                                                    provisions. The controller no longer processes personal data, unless
                                                    the controller demonstrates that he has legitimate and compelling
                                                    reasons justifying the processing and prevailing over the interests,
                                                    rights and freedoms of the data subject or that the purpose is to
                                                    establish, exercise or defend a right in court.</p>
                                                  <p>2. Where the processing of personal data is for the purpose of
                                                    direct marketing, the data subject shall have the right to object at
                                                    any time to the processing of personal data concerning him or her,
                                                    including the creation of profiles, in so far as related to that
                                                    direct marketing.</p>
                                                  <p>(3) If the data subject opposes the processing for the purpose of
                                                    direct marketing, the personal data shall no longer be processed for
                                                    this purpose.</p>
                                                  <p>4. At the latest at the time of the first communication with the
                                                    data subject, the right referred to in paragraphs 1 and 2 shall be
                                                    explicitly brought to the attention of the data subject and shall be
                                                    presented clearly and separately from any other information.</p>
                                                  <p>5. In the context of the use of information society services and
                                                    notwithstanding Directive 2002/58 / EC, the data subject may
                                                    exercise his right to oppose by automatic means using technical
                                                    specifications.</p>
                                                  <p>6. Where personal data are processed for the purpose of scientific
                                                    or historical research or for statistical purposes in accordance
                                                    with Article 89 (1), the data subject shall, for reasons related to
                                                    his or her particular situation, have the right to opposes the
                                                    processing of personal data concerning her, unless the processing is
                                                    necessary for the performance of a task for reasons of public
                                                    interest.</p>
                                                  <p>Art. 22: The automated individual decision-making process,
                                                    including the creation of profiles</p>
                                                  <p>1. The data subject shall have the right not to be subject to a
                                                    decision based solely on automatic processing, including profiling,
                                                    which shall produce legal effects concerning the data subject or
                                                    similarly affect him or her to a significant extent.</p>
                                                  <p>2. Paragraph 1 shall not apply if the decision:</p>
                                                  <ul>
                                                    <li>a. is necessary for the conclusion or performance of a contract
                                                      between the data subject and a data controller;
                                                    </li>
                                                    <li>b. is authorized by Union or national law applicable to the
                                                      controller and also provides for appropriate measures to protect
                                                      the rights, freedoms and legitimate interests of the data subject;
                                                      or
                                                    </li>
                                                    <li>c. is based on the explicit consent of the data subject.</li>
                                                  </ul>
                                                  <p>3. In the cases referred to in points (a) and (c) of paragraph 2,
                                                    the data controller shall implement appropriate measures to protect
                                                    the rights, freedoms and legitimate interests of the data subject,
                                                    at least his right to obtain human intervention from the operator,
                                                    to express his point of view and to challenge the decision.</p>
                                                  <p>4. The decisions referred to in paragraph 2 shall not be based on
                                                    the special categories of personal data referred to in Article 9
                                                    (1), unless Article 9 (2) (a) or (g) apply. ) and in which
                                                    appropriate measures have been put in place to protect the rights,
                                                    freedoms and legitimate interests of the data subject.</p>
                                                  <p>The exercise of these rights can be done through a written request,
                                                    dated and signed, addressed to the WEB PORTAL. Application forms are
                                                    in free form.</p><h4><strong>PAYMENT METHODS</strong></h4>
                                                  <p>You may choose convenient for You Payment method while placing the
                                                    order. To view the payment methods details (available for payment
                                                    methods) please access the Page “Information”, located in footer
                                                    section of the WEB PORTAL. This page is also accessible on each
                                                    product page (above Add to Cart button) and on Checkout pages.</p>
                                                  <h4><strong>SHIPPING</strong></h4>
                                                  <p>The web portal provides solutions and services for which physical
                                                    delivery is not provided</p><h4><strong>RETURN AND REFUND
                                                  PROCEDURE</strong></h4>
                                                  <p>The return procedure for products and services is subject to the
                                                    legislation in force. If for any reason, you are not satisfied with
                                                    your online purchase, you may ask for refund of payed services
                                                    within 14 days of receipt, by sending an email to our Customer Care
                                                    Service (the email address is displayed on this page and on the
                                                    Contacts Page of Our WEB PORTAL</p>
                                                  <p>In order to return the money for an ordered service, it is
                                                    necessary to respect the condition that the performance of this
                                                    service did not produce any cost borne by the Provider (Web Portal).
                                                    If the Provider has incurred any costs, the Beneficiary will be
                                                    refunded the money paid less the costs incurred by the Provider.</p>
                                                  <p>Any return request received will be reviewed and resolved in
                                                    accordance with applicable legal requirements, depending on the
                                                    typology of the services subject to it.</p>
                                                  <p>If the return request is confirmed by us, we will refund the amount
                                                    of the services that are the subject of the return request we
                                                    received from you, except financial costs (charges that were applied
                                                    by our Gateway Services Provider) no later than 14 calendar days
                                                    from the date we confâirmed the return request from You. We will
                                                    perform this refund using the same payment method, used by You to
                                                    pay for the order, in case this payment method is available to us
                                                    and accepted by our Gateway Services Provider.</p>
                                                  <p>The costs of returning the services covered by the return request
                                                    will be entirely borne by you, except the cases when it will be
                                                    proven by You that the services ordered on the WEB PORTAL could not
                                                    be offerred because of WEB PORTAL.</p><h4><strong>ORDER CANCELATION
                                                  PROCEDURE</strong></h4>
                                                  <p>Once placed, the order cannot be changed. However, You have the
                                                    right to cancel it. Remember, that in any minute after the order was
                                                    placed, it might be already in process of preparation. Reason why,
                                                    if You decided to cancel it, please contact our Support service by
                                                    contacts displayed on our Contacts page or within this policy, as
                                                    soon as possible.</p><h4><strong>DISPUTES AND MAJOR FORCE AND
                                                  LITIGATION</strong></h4>
                                                  <p>Neither Contracting Party shall be liable for non-performance of
                                                    its contractual obligations if such non-execution is due to a force
                                                    majeure event. Force majeure is the unpredictable event beyond the
                                                    control of the parties and cannot be avoided.</p>
                                                  <p>In order to investigate a possible dispute, You are asked to send
                                                    an email to the contacts displayed in this document which contains
                                                    the information regarding dispute.</p>
                                                  <p>All disputes, arising between USERS and WEB PORTAL, will be settled
                                                    amicably.</p>
                                                  <p>If the Parties have not found a solution, the disputes shall be
                                                    examined in accordance with the legislation in force in România.</p>
                                                  <h4><strong>cookies POLICY</strong></h4>
                                                  <p>By using the WEB PORTAL, you agree to the use of cookies.</p>
                                                  <p>Our cookies policy explains how cookies are used, how we use
                                                    cookies, how third parties we can work with can use cookies in the
                                                    WEB PORTAL, cookies choices, and more cookies information.</p><h4>
                                                  <strong>What are cookies?</strong></h4>
                                                  <p>cookies are small pieces of text sent by the web browser by a site
                                                    you visit. A cookies is stored in your web browser and allows the
                                                    WEB PORTAL or a third party to recognize and facilitate your next
                                                    visit and the WEB PORTAL to be more useful to you.</p>
                                                  <p>cookies can be "persistent" or "session" cookies. Persistent
                                                    cookies remain on your personal computer or mobile device when you
                                                    disconnect, while session cookies are deleted as soon as you close
                                                    your web browser.</p>
                                                  <p>These files make it possible to recognize the user's terminal and
                                                    present the content in a relevant way, adapted to the user's
                                                    preferences. They are used to prepare aggregated anonymous
                                                    statistics that help us understand how a user benefits from our web
                                                    pages, allowing us to improve their structure and content, excluding
                                                    the user's personal identification.</p>
                                                  <p>How WEB PORTAL uses cookies</p>
                                                  <p>When you use and access the WEB PORTAL, we may place a number of
                                                    cookies in your web browser.</p>
                                                  <p>What cookies Do We Use?</p>
                                                  <p>We use two types of cookies: per session and fixed. The latter are
                                                    temporary files that remain in the user's terminal until the end of
                                                    the session or closing the application (the web browser). Fixed
                                                    files remain on the user's terminal for a while in the cookies's
                                                    parameters or until they are deleted manually by the user.</p>
                                                  <p>We use session and persistent cookies within the WEB PORTAL and use
                                                    different types of cookies to run the WEB PORTAL:</p>
                                                  <p>Essential cookies. We may use essential cookies to authenticate
                                                    users and prevent fraudulent use of user accounts.</p>
                                                  <p>How are cookies used by this site?</p>
                                                  <p>A visit to this site may place cookies for purposes of:</p>
                                                  <ul>
                                                    <li>Site performance cookies</li>
                                                    <li>Visitor analysis cookies</li>
                                                    <li>cookies for geotargetting</li>
                                                    <li>Recording cookies</li>
                                                    <li>cookies for advertising</li>
                                                    <li>Advertiser cookies</li>
                                                  </ul>
                                                  <h4><strong>Does Personal Data cookies Work?</strong></h4>
                                                  <p>cookies themselves do not require personal information to be used
                                                    and, in most cases, do not personally identify internet users.
                                                    Personal data collected through the use of cookies can be collected
                                                    only to facilitate certain user functions. Such data is encrypted in
                                                    a way that makes unauthorized people access to them</p><h4><strong>What
                                                  are your cookies options?</strong></h4>
                                                  <p>If you want to delete cookies or instruct your web browser to
                                                    delete or deny cookies, visit your web browser's help pages. As a
                                                    European citizen, you have certain individual rights within GDPR.
                                                    You can learn more about these rights in the GDPR Guide.</p><h4>
                                                  <strong>Delete cookies</strong></h4>
                                                  <p>Generally, an application used to access web pages allows you to
                                                    save cookies to the terminal by default. These settings can be
                                                    changed so that automatic cookies administration is blocked by the
                                                    web browser or the user is notified whenever cookies are sent to his
                                                    or her terminal. Detailed information about the possibilities and
                                                    ways of managing cookies can be found in the application settings
                                                    area (web browser). Restricting the use of cookies may affect
                                                    certain features of the web page.</p>
                                                  <p>Keep in mind, however, if you delete cookies or refuse to accept
                                                    them, you may not be able to use all of the features we offer, you
                                                    may not be able to store your preferences, and some of our pages may
                                                    not be displayed correctly.</p>
                                                  <p>For the Chrome web browser, visit this page from Google:
                                                    //support.google.com/accounts/answer/32050</p>
                                                  <p>For the Internet Explorer Web browser, visit this page from
                                                    Microsoft: //support.microsoft.com/kb/278835</p>
                                                  <p>vars.Policies.policycookies21</p>
                                                  <p>vars.Policies.policycookies22</p>
                                                  <p>cookies themselves do not require personal information to be used
                                                    and, in most cases, do not personally identify internet users.
                                                    Personal data collected through the use of cookies can be collected
                                                    only to facilitate certain user functions. Such data is encrypted in
                                                    a way that makes unauthorized people access to them</p>
                                                  <p>vars.Policies.policycookies24</p>
                                                  <p>If you want to delete cookies or instruct your web browser to
                                                    delete or deny cookies, visit your web browser's help pages. As a
                                                    European citizen, you have certain individual rights within GDPR.
                                                    You can learn more about these rights in the GDPR Guide.</p>
                                                  <p>vars.Policies.policycookies26</p>
                                                  <p>Generally, an application used to access web pages allows you to
                                                    save cookies to the terminal by default. These settings can be
                                                    changed so that automatic cookies administration is blocked by the
                                                    web browser or the user is notified whenever cookies are sent to his
                                                    or her terminal. Detailed information about the possibilities and
                                                    ways of managing cookies can be found in the application settings
                                                    area (web browser). Restricting the use of cookies may affect
                                                    certain features of the web page.</p>
                                                  <p>Keep in mind, however, if you delete cookies or refuse to accept
                                                    them, you may not be able to use all of the features we offer, you
                                                    may not be able to store your preferences, and some of our pages may
                                                    not be displayed correctly.</p><h4><strong>NOTIFICATION ABOUT
                                                  CHANGES OF THIS REGULATION</strong></h4>
                                                  <p>We reserve the right not to inform users about changes to this
                                                    regulation. Users can visit the WEB PORTAL at any time and read the
                                                    up-to-date version of this regulation.</p>
                                                  <p>This website uses cookies in order to be able to contact you
                                                    through the CHAT and ZoomChat developed as a web application by us
                                                    (Terra Digital).
                                                    This web application (CHAT AND ZoomChat) works as long as you are
                                                    active on our site: the site is opened in an active tab in the
                                                    browser on your device, which is connected to the internet and
                                                    works.</p>
                                                  <p>If you do not want to communicate with our Customer Service
                                                    representatives, simply disconnect the CHAT and / or ZoomChat
                                                    through the "END" button (or designed as a red rounded image with
                                                    icon phone inside it) or leave our site by closing it in the browser
                                                    or expressly inform us through any contact displayed on the page
                                                    Contacts about your reluctance to be contacted by our Customer
                                                    Service representatives or to disable this option below.</p></ul>
                                              </ul>
                                            </ul>
                                          </ul>
                                        </ul>
                                      </ul>
                                    </ul>
                                  </ul>
                                </ul>
                              </ul>
                            </ul>
                          </ul>
                        </ul>
                      </ul>
                    </ul>
                  </ul>
                </ul>
              </ul>
            </ul>
          </div>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style>
.text-dark {
  color: #504f4f !important;
}
</style>