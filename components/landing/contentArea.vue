<template>
  <div id="root">
    <div class="AppRoot">
      <div class="Home">
        <section class="Section-1" style="background-image:url('/landing/Banner-Main-Backgroud.png')">
          <img class="Hero-1" src="/landing/Banner-Main-Right.png" alt="TalkEarn Platform">
          <div class="Section-1-main">
            <div class="Heading has-text is-white is-heading is-large">
              An Ecosystem for Crypto Investors. Built on Blockchain.
            </div>
            <div class="Paragraph-1 has-text is-white is-paragraph-main">
            A first  decentralized platform, connecting crypto-traders
            and investors in one ecosystem built on Talk2Earn technology.
            </div>
            <form-area :title="'Join Us'"></form-area>
            <div class="Sidenote">*Get whitelisted to use the platform on launch day.</div>
          </div>
        </section>
        <section class="Section-2" id="join" style="background-image:url('/landing/Banner_TalkEarn_background_Desktop.png')">
          <div class="Hero-2">
            <img alt="laptop hero" src="/landing/Banner_TalkEarn_laptopImage_Desktop&Mobile.png">
          </div>
          <div class="Section-2-main">
            <div class="Heading has-text is-white is-heading is-large">
              Join Talk2Earn Ecosystem
            </div>
            <div class="Paragraph-2 has-text is-paragraph-main is-white">
              TalkEarn is a state-of-the-art decentralized ecosystem utilizing sophisticated Talk2Earn and webRTC technologies to
              connect crypto traders and investors, allowing them to earn money for their knowledge and experience.
              The core features powered by the platform are Pay-per-minute functionality and Click & Talk Usability,
              both facilitated by a friendly Defi Farmer's market - a place to interact with the whole crypto community from one location.
              It sounds complicated but TalkEarn Simplifies monetization of knowledge and experience in the Crypto Industry.
              <br><br>
              Our whitepaper is now released, take a look!
            </div>
            <a rel="noopener noreferrer" target="_blank" class="Button Button--white  button"
               href="https://docs.talkearn.app">
              <div class="Button-caption">Read Documentation</div>
            </a>
          </div>
        </section>
        <section class="Section-3">
          <div class="Breaker"></div>
          <div class="Hero-3">
            <img alt="checkmark" src="/landing/whitelist-section-checkmark.svg">
          </div>
          <div class="Section-3-main has-text is-centered">
            <div class="Heading-3 has-text is-white is-heading is-large">Get Whitelisted</div>
            <div class="Paragraph-3 has-text is-paragraph-large is-white">
              We’re working around the clock to get ready for our TalkEarn platform launch in the next few months. Be
              one of the first to access the TalkEarn platform and get exclusive access to our Community Release.
            </div>
            <form-area :title="'Join The Whitelist'"></form-area>
          </div>
        </section>
        <section class="Section-11" id="team">
          <div class="Header Heading has-text is-grey is-centered is-heading is-large">
            Our Team
          </div>
          <div class="Section-11-main is-centered">
            <experts></experts>
          </div>
        </section>
        <section class="Section-4" id="ecosystem">
          <div class="Section-4-main">
            <div class="Heading has-text is-white is-heading is-large">The TalkEarn Ecosystem</div>
            <div class="Section-4-1 has-text is-centered">
              <div class="Hero-4">
                <img alt="traders hero" src="/landing/Ecosystem-section-1st-icon.svg">
              </div>
              <div class="Subheading-4 has-text is-white">Professional Traders</div>
              <div class="Paragraph-4 has-text is-paragraph-main is-white">
                Core users, who are well-versed in Crypto, and are willing to earn money for their knowledge and experience.
                The more knowledge and experience they have, the stronger their community standing becomes, and their visibility
                and influence over the community, as they earn more TET tokens, using Pay-per-minute functionality.
              </div>
            </div>
            <div class="Section-4-2 has-text is-centered">
              <div class="Hero-4">
                <v-icon aria-hidden="false">
                  mdi-progress-question
                </v-icon>
              </div>
              <div class="Subheading-4 has-text is-white">Crypto Beginners</div>
              <div class="Paragraph-4 has-text is-paragraph-main is-white">
                Crypto beginners are users who are looking for opportunities to invest and professional guidance and consultancy services.
                They get full access to professional information about Crypto in one place, to the list of professional traders and investors,
                TALK2EARN technology, and WebRTC features, allowing them to benefit from real-time Pay-per-minute functionality.
              </div>
            </div>
            <div class="Section-4-3 has-text is-centered">
              <div class="Hero-4">
                <img alt="communities hero" src="/landing/Ecosystem-section-3rd-icon.svg">
              </div>
              <div class="Subheading-4 has-text is-white">Partners & Community</div>
              <div class="Paragraph-4 has-text is-paragraph-main is-white">
                Soon after the TalkEarn Platform goes live, we’ll expose it to our Platform's Partners (i.e., Exchanges, Launchpads, Projects, etc.),
                eager to grab the attention of our impressive community by launching promotions (visible banners on homepage,
                inside the users’ dashboard, articles, etc.). Additionally, our Community Users can earn community merit and tokens,
                the benefit of airdrops, giveaways, and a Yearly lottery.
              </div>
            </div>
          </div>
        </section>
        <section class="Section-6" id="tokens">
          <div class="Heading has-text is-white is-heading is-large">Meet The Tokens</div>
          <div class="Section-6-hero has-text is-paragraph-main is-white">
            <div class="image" style="background-image:url('/landing/Banner_MeetTaken_squareImage_Desktop.png')" v-if="!$mobileDetect.mobile()"></div>
            <div class="image" style="background-image:url('/landing/Banner_MeetTaken_squareImage_Mobile.png')" v-if="$mobileDetect.mobile()"></div>

          </div>
          <div class="Section-6-main">
            <div class="Section-6-tabs has-text is-paragraph-main is-white">
              <div class="Tabs">
                <div class="Tabs-content">
                  <v-tabs
                      v-model="tab"
                      background-color="transparent"
                      centered
                      dark
                      icons-and-text
                  >
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab href="#tab-1">Token Model</v-tab>
                    <v-tab href="#tab-2">Token Utility</v-tab>
                  </v-tabs>
                  <v-tabs-items v-model="tab">
                    <v-tab-item :value="'tab-' + 1">
                      <v-card flat>
                        <v-card-text>
                          <b>$TET token</b>: a token used for payment of services. The token can be earned as a reward for platform usage
                          (cashback from acquired pricing plans, time spent in calls, etc.) that can also be staked to accelerate earnings.
                          <br/>
                          <b>TALKEARN PLATFORM</b>: an ecosystem for Crypto Investors and Personal Dashboard
                          <br/>
                          <b>TalkEarn Platform Vault</b>: software wallet that allows users to store their rewards (TET tokens),
                          stake them for additional TET token earnings, and use them for payment of services.
                          TET tokens generated through the TalkEarn platform are held in each user's TalkEarn Platform Vault,
                          which also supports seamless payments to various Platform services.
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item :value="'tab-' + 2">
                      <v-card flat>
                        <v-card-text>
                          <b>The TET token</b> is used as a reward for platform users, as well as payment
                          for various services within the TalkEarn Platform ecosystem.
                          <br/>
                          <b>Stake $TET</b>. Community members holding $TET tokens will have access to stake $TET tokens,
                          to get rewarded (APY 5 -15% depending on liquidity pool). Additionally, users who stake
                          a certain amount of $TET tokens for a certain period will participate in the Yearly lottery.
                          <br/>
                          <b>Community rewards</b>. Community members holding $TET tokens will be eligible to take part in different contests
                          such as whitelisting and will have a priority for
                          capped events and giveaways from TALKEARN PLATFORM and its partners.
                          This includes certain rewards (gifts, airdrops, prizes, etc.) and many other things.
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </div>
              </div>
<!--              <div class="">-->
<!--                <form-area :title="'Join Us Now'"></form-area>-->
<!--              </div>-->
            </div>
          </div>
        </section>
        <section class="Section-7">
          <div class="Section-7-main">
            <div class="Section-7-hero">
              <div class="image" style="background-image:url('/landing/Banner_Monetization_section.png')" v-if="!$mobileDetect.mobile()"></div>
              <div class="image" style="background-image:url('/landing/Banner_Monetization_section_mobile.png')" v-if="$mobileDetect.mobile()"></div>
            </div>
            <div class="Heading has-text is-white is-heading is-large">TalkEarn Platform Monetisation System</div>
            <div class="Paragraph has-text is-white is-paragraph-main">
              We’re building the DAO of the future through collective intelligence, collective exchange of knowledge and experience,
              and meritocratic-based ecosystems that reward users based on the benefit they bring the community.
            </div>
            <div class="Section-7-accordion">
              <div class="Accordion">
                <v-expansion-panels multiple>
                  <v-expansion-panel>
                    <v-expansion-panel-header>Pay-per-minute functionality</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      So many smart people spend hours each day crawling through treasure troves of information, on Telegram,
                      private WhatsApp and Discord groups, subreddits, newsletters, YouTube, and more, sourcing knowledge, tips, and trading insights.
                      What if there was a way to harness all this information and pay for it just as much as the number of minutes used to get
                      from professional traders and investors? Now there is.
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>Pricing Plans</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      Every professional trader/investor will define his pricing policy
                      (price-per-minute/ message, minutes/ messages amount free-of-charge for new coming clients).
                      Additionally, there will be available pricing plans for the call initiators, to allow them to save their money.
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>Boosted articles and Ads</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      Professional traders/investors will have the opportunity to boost their articles and profiles, to get higher visibility on the Platform.
                      Partners(i.e. Exchanges, Launchpads, Projects, and others) will have the opportunity to launch promotions and display Ads on the Platform,
                      to grab the attention of our impressive community
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </div>
            <form-area :title="'Learn More'"></form-area>
          </div>
        </section>
        <section class="Section-8" id="about">
          <div class="Section-8-hero">
            <div class="image" style="background-image:url('/landing/Banner_ShareKnowledge_section.png')" v-if="!$mobileDetect.mobile()"></div>
            <div class="image" style="background-image:url('/landing/Banner_ShareKnowledge_section_mobile.png')" v-if="$mobileDetect.mobile()"></div>
          </div>
          <div class="Section-8-main">
            <div class="Heading has-text is-white is-heading is-large" >Share Your Knowledge</div>
            <div class="Section-8-tabs has-text is-paragraph-main is-white">
              Less barriers to share Your Knowledge and Experience. Create Your own page on Our Platform and start
              earning by consulting young investors and traders. Get paid instantly!
            </div>
          </div>
        </section>
        <section class="Section-9">
          <div class="Breaker"></div>
          <div class="Heading has-text is-white is-heading is-large">Get in Touch</div>
          <div class="Section-9-main">
            <div class="Section-9-text has-text is-paragraph-main is-white">
              Have questions? Need help using our Platform? Need a mentor to show You the way in Crypto? We’d love to
              talk and get you involved in what we’re building. Get in touch and help us revolutionize Crypto.
            </div>
            <div class="Section-9-icons">
              <a class="Pollen-twitter" target="_blank" href="https://twitter.com/TalkEarn">
                <img src="/landing/twitter-icon-white-transparent-24.svg" width="40px" alt="follow us on twitter">
              </a>
              <a class="Pollen-telegram" target="_blank" href="https://t.me/talkearn_official">
                <img src="/landing/telegram-icon-white-transparent.svg" width="40px" alt="join us on telegram">
              </a>
              <a class="Pollen-discord medium-icon" target="_blank" href="https://talkearn.medium.com/" style="width: 52px;">
                <img src="/landing/Medium-Logo.svg" alt="medium" style="height: 27px;">
              </a>
            </div>
          </div>
        </section>
        <section class="Section-10">
          <div class="Section-10-main">
            <div class="Heading Heading--mobile has-text is-white is-heading is-medium">
              Never miss an update about TalkEarn Platform!
            </div>
            <div class="Heading Heading--desktop has-text is-white is-heading is-medium">
              Never miss an update about TalkEarn Platform!
            </div>
            <div class="Section-10-newsletter">
              <div class="mc__form">
                <v-form
                    v-if="!success"
                    ref="form"
                    lazy-validation
                >
                  <v-text-field
                      v-model="form.email"
                      :rules="emailRules"
                      required
                  ></v-text-field>
                  <v-icon aria-hidden="false" @click="submit()">
                    mdi-send
                  </v-icon>
                </v-form>
                <p v-else>Success!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>

import headerArea from '~/components/landing/headerArea'
import footerArea from '~/components/landing/footerArea'
import experts from '~/components/landing/expertsWidget'
import formArea from '~/components/landing/form'
import userApi from "~/api/userApi";
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {headerArea, footerArea, experts, formArea},
  data() {
    return {
      tab: false,
      success: false,
      form: {
        valid: false,
        email: 'Your email',
        name: '',
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  computed: mapGetters({
    user: 'chat/getUser',
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.form.guestId = this.user._id
        userApi.bookUser(this.form, async response => {
          this.success = true
        })
      }
    },
  }
}
</script>
