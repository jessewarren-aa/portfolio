import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-8">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      { /* <Card.Cta>{cta}</Card.Cta> */ }
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Jesse Warren</title>
        <meta
          name="description"
          content="I've talked in front of people."
        />
      </Head>
      <SimpleLayout
        title="I've talked in front of people."
      >
        <div className="space-y-20">
          { /*
            <SpeakingSection title="Educational">
              <Appearance
                href="#"
                title="Using design as a competitive advantage"
                description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
                event="Encoding Design, July 2022"
                cta="Listen to podcast"
              />
            </SpeakingSection>
          */ }
          <SpeakingSection title="Guest Lectures">
            <Appearance
              href="#"
              title="Interfacing with third-party APIs & creating social influence"
              description='Introduced automated bad-actors on highly trafficked social platforms to create social proof "spheres" meant to hijack, manipulate, and influence discourse for political or personal gain.'
              event="Cabrillo College - Ethical Hacking CIS 76, 2017"
              cta="Watch video"
            />
            <Appearance
              href="#"
              title="Implementing low-level network interfaces & malicious bot-nets"
              description="Introduced single-file and remotely-patchable back door exploits installed via phishing meant to unlock bad-actor access to secured individual and corporate file systems."
              event="Cabrillo College - Ethical Hacking CIS 76, 2016"
              cta="Watch video"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
