const programs = [
  {
    title: 'STEM Explorers Lab',
    description:
      'Guided experiments, robotics builds, and creative coding that turn curiosity into future-ready skills.',
    schedule: 'Weekdays · 4:00–6:30 PM',
    focus: 'Grades 5–8',
  },
  {
    title: 'Creative Arts Collective',
    description:
      'Studios for visual arts, media, music, and theatre with resident artists mentoring small group ensembles.',
    schedule: 'Tuesdays & Thursdays · 6:45–8:30 PM',
    focus: 'Grades 3–12',
  },
  {
    title: 'Wellness & Athletics',
    description:
      'Evening athletics, dance, and mindfulness sessions that build strength, balance, and social-emotional health.',
    schedule: 'Mondays & Wednesdays · 7:00–9:00 PM',
    focus: 'Grades 6–12',
  },
  {
    title: 'Leaders After Dark',
    description:
      'Teen leadership labs, civic innovation challenges, and mentorship nights with community partners.',
    schedule: 'Fridays · 6:30–9:30 PM',
    focus: 'Grades 9–12',
  },
];

const stats = [
  { label: 'students served nightly', value: '320+' },
  { label: 'partner schools & centers', value: '18' },
  { label: 'volunteer mentors', value: '140+' },
  { label: 'years in the community', value: '12' },
];

const highlights = [
  {
    title: 'Evening Launchpads',
    description:
      'Each Neilich site opens by 3:30 PM with homework studios, nutritious dinners, and restorative hangout spaces before specialty programming begins.',
  },
  {
    title: 'Signature Night Cycles',
    description:
      'Our night programs rotate every six weeks, helping young people sample new passions while still building mastery with their peers.',
  },
  {
    title: 'Families as Co-Creators',
    description:
      'Monthly showcases, listening circles, and multilingual updates make sure every family voice guides our offerings.',
  },
];

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '40px 24px 120px',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-240px -420px auto',
          background: 'radial-gradient(circle, rgba(98,120,255,0.18) 0%, rgba(98,120,255,0) 60%)',
          width: 800,
          height: 800,
          zIndex: -1,
        }}
      />
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ fontSize: 14, letterSpacing: 6, textTransform: 'uppercase', color: '#5c6bc6', fontWeight: 600 }}>
            Neilich
          </span>
          <strong style={{ fontSize: 24 }}>Evenings filled with belonging.</strong>
        </div>
        <nav style={{ display: 'flex', gap: 20, fontSize: 15, color: '#3a4766' }}>
          <a href="#programs" style={{ textDecoration: 'none', fontWeight: 600 }}>
            Programs
          </a>
          <a href="#approach" style={{ textDecoration: 'none', fontWeight: 600 }}>
            Our Approach
          </a>
          <a href="#impact" style={{ textDecoration: 'none', fontWeight: 600 }}>
            Impact
          </a>
          <a href="#contact" style={{ textDecoration: 'none', fontWeight: 600 }}>
            Connect
          </a>
        </nav>
      </header>

      <section
        style={{
          marginTop: 64,
          borderRadius: 36,
          padding: '72px 64px',
          display: 'grid',
          gap: 32,
          background: 'linear-gradient(130deg, #1f3af7 0%, #6f4dff 50%, #a66df8 100%)',
          color: '#fff',
          boxShadow: '0 40px 120px rgba(31, 58, 247, 0.22)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 620 }}>
          <span style={{ fontSize: 14, letterSpacing: 6, textTransform: 'uppercase', opacity: 0.7 }}>After-hours made brilliant</span>
          <h1 style={{ margin: 0, fontSize: 54, lineHeight: 1.05 }}>
            Purposeful nights that keep kids inspired, connected, and safe.
          </h1>
          <p style={{ margin: 0, fontSize: 20, lineHeight: 1.7, color: 'rgba(255,255,255,0.86)' }}>
            Neilich transforms the hours after school—and well into the evening—into structured, high-energy programs that pair
            mentorship with creativity, wellness, and leadership building.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          <a
            href="#tour"
            style={{
              backgroundColor: '#fff',
              color: '#1f3af7',
              padding: '16px 32px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: 700,
              boxShadow: '0 22px 48px rgba(15, 23, 66, 0.25)',
            }}
          >
            Book a site tour
          </a>
          <a
            href="#contact"
            style={{
              padding: '16px 32px',
              borderRadius: 999,
              border: '2px solid rgba(255,255,255,0.65)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 700,
            }}
          >
            Volunteer with us
          </a>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 16,
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                backgroundColor: 'rgba(12, 22, 72, 0.45)',
                borderRadius: 24,
                padding: '20px 24px',
                display: 'grid',
                gap: 4,
              }}
            >
              <strong style={{ fontSize: 30 }}>{stat.value}</strong>
              <span style={{ fontSize: 14, letterSpacing: 1.2, textTransform: 'uppercase', opacity: 0.7 }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="approach" style={{ marginTop: 120 }}>
        <div style={{ display: 'grid', gap: 14, maxWidth: 760 }}>
          <span style={{ fontSize: 14, letterSpacing: 4, textTransform: 'uppercase', color: '#5966b6', fontWeight: 600 }}>
            Our promise to families
          </span>
          <h2 style={{ margin: 0, fontSize: 36 }}>A nightly rhythm designed for safety, joy, and lasting growth.</h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: '#49577a' }}>
            Neilich sites run from the end of the school day through 10 PM, offering structured transitions from academic support
            into creative studios, athletics, and leadership circles. Families are greeted with clear communication and students
            are surrounded by trusted adults every step of the evening.
          </p>
        </div>
        <div
          style={{
            marginTop: 40,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
          }}
        >
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 24,
                padding: '28px 26px',
                display: 'grid',
                gap: 12,
                boxShadow: '0 26px 80px rgba(20, 36, 74, 0.08)',
              }}
            >
              <h3 style={{ margin: 0, fontSize: 20 }}>{highlight.title}</h3>
              <p style={{ margin: 0, color: '#516086', lineHeight: 1.6 }}>{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="programs" style={{ marginTop: 120 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 18 }}>
          <div style={{ display: 'grid', gap: 8 }}>
            <span style={{ fontSize: 14, letterSpacing: 4, textTransform: 'uppercase', color: '#5966b6', fontWeight: 600 }}>
              Signature programs
            </span>
            <h2 style={{ margin: 0, fontSize: 36 }}>Designed for the hours when potential often goes untapped.</h2>
          </div>
          <a
            href="#contact"
            style={{
              textDecoration: 'none',
              fontWeight: 700,
              color: '#1f3af7',
              border: '1px solid rgba(31,58,247,0.2)',
              padding: '14px 22px',
              borderRadius: 999,
              backgroundColor: '#fff',
              boxShadow: '0 18px 44px rgba(17, 30, 80, 0.12)',
            }}
          >
            Download program overview
          </a>
        </div>
        <div
          style={{
            marginTop: 48,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 28,
          }}
        >
          {programs.map((program) => (
            <article
              key={program.title}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 28,
                padding: '32px 30px',
                display: 'grid',
                gap: 14,
                border: '1px solid rgba(106,118,200,0.18)',
                boxShadow: '0 30px 90px rgba(24, 35, 80, 0.08)',
              }}
            >
              <h3 style={{ margin: 0, fontSize: 24, color: '#24315b' }}>{program.title}</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: '#4d5a7a' }}>{program.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, fontSize: 14, fontWeight: 600, color: '#1f3af7' }}>
                <span>{program.schedule}</span>
                <span style={{ color: '#5b6ad0' }}>• {program.focus}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="impact" style={{ marginTop: 120 }}>
        <div
          style={{
            backgroundColor: '#10172b',
            color: '#fff',
            borderRadius: 36,
            padding: '56px 48px',
            display: 'grid',
            gap: 28,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '-120px auto auto -160px',
              width: 420,
              height: 420,
              background: 'radial-gradient(circle, rgba(111,133,255,0.35) 0%, rgba(111,133,255,0) 70%)',
            }}
          />
          <div style={{ position: 'relative', display: 'grid', gap: 12, maxWidth: 720 }}>
            <span style={{ fontSize: 14, letterSpacing: 4, textTransform: 'uppercase', opacity: 0.7 }}>
              Stories from our nights
            </span>
            <h2 style={{ margin: 0, fontSize: 34 }}>“Neilich has become the heartbeat of our evenings.”</h2>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.8, color: 'rgba(255,255,255,0.75)' }}>
              “My daughter heads straight to Neilich after school and doesn’t want to leave when the evening wraps. She is
              practicing viola, building robots, and laughing with friends in a space where mentors truly know her. We see her
              confidence soaring every single week.”
            </p>
            <span style={{ fontWeight: 700, color: '#7f96ff' }}>— Daniella R., parent partner</span>
          </div>
        </div>
      </section>

      <section id="tour" style={{ marginTop: 120 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 28,
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 32,
            padding: '40px 38px',
            boxShadow: '0 36px 110px rgba(23, 38, 78, 0.08)',
          }}
        >
          <div style={{ display: 'grid', gap: 14 }}>
            <span style={{ fontSize: 14, letterSpacing: 4, textTransform: 'uppercase', color: '#5966b6', fontWeight: 600 }}>
              Site snapshots
            </span>
            <h2 style={{ margin: 0, fontSize: 32 }}>Experience a Neilich evening in person.</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: '#4d5a7a' }}>
              Tour our flagship Brooklyn campus or request a pop-up at your school. Walk through the learning studios, meet
              mentors, and see how our nightly rituals keep students thriving.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gap: 12,
              borderRadius: 24,
              padding: '24px 28px',
              background:
                'linear-gradient(130deg, rgba(31,58,247,0.08) 0%, rgba(106,118,200,0.18) 50%, rgba(31,58,247,0.08) 100%)',
              border: '1px solid rgba(99,118,241,0.24)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, color: '#40507b' }}>
              <span>Campus open house</span>
              <strong>1st Wednesdays</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, color: '#40507b' }}>
              <span>Family welcome circle</span>
              <strong>4:30 PM</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, color: '#40507b' }}>
              <span>Student showcases</span>
              <strong>Every 6 weeks</strong>
            </div>
            <a
              href="mailto:hello@neilich.org"
              style={{
                marginTop: 10,
                backgroundColor: '#1f3af7',
                color: '#fff',
                textAlign: 'center',
                padding: '14px 20px',
                borderRadius: 999,
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              RSVP today
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          marginTop: 120,
          backgroundColor: '#f0f3ff',
          borderRadius: 36,
          padding: '52px 48px',
          display: 'grid',
          gap: 24,
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'grid', gap: 10 }}>
            <span style={{ fontSize: 14, letterSpacing: 4, textTransform: 'uppercase', color: '#5966b6', fontWeight: 600 }}>
              Stay connected
            </span>
            <h2 style={{ margin: 0, fontSize: 32 }}>Let’s dream up what your community’s evenings can be.</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: '#4d5a7a' }}>
              Partner with Neilich to launch a site, sponsor a program cycle, or volunteer. We respond within two business days.
            </p>
          </div>
          <a
            href="tel:+12125551234"
            style={{
              textDecoration: 'none',
              backgroundColor: '#1f3af7',
              color: '#fff',
              padding: '16px 28px',
              borderRadius: 999,
              fontWeight: 700,
              boxShadow: '0 22px 48px rgba(31, 58, 247, 0.16)',
            }}
          >
            Call (212) 555-1234
          </a>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 18,
            fontSize: 15,
            color: '#425070',
          }}
        >
          <div style={{ display: 'grid', gap: 8 }}>
            <strong>Contact</strong>
            <a href="mailto:hello@neilich.org" style={{ textDecoration: 'none', color: '#1f3af7', fontWeight: 600 }}>
              hello@neilich.org
            </a>
            <span>Media: press@neilich.org</span>
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            <strong>Visit</strong>
            <span>145 Evening Way, Suite 300</span>
            <span>Brooklyn, NY 11211</span>
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            <strong>Connect</strong>
            <a href="https://instagram.com" style={{ textDecoration: 'none', color: '#1f3af7' }}>
              Instagram
            </a>
            <a href="https://linkedin.com" style={{ textDecoration: 'none', color: '#1f3af7' }}>
              LinkedIn
            </a>
            <a href="https://facebook.com" style={{ textDecoration: 'none', color: '#1f3af7' }}>
              Facebook
            </a>
          </div>
        </div>
      </section>

      <footer style={{ marginTop: 80, textAlign: 'center', fontSize: 13, color: '#6c7898' }}>
        © {new Date().getFullYear()} Neilich. Crafted with care for brighter nights.
      </footer>
    </main>
  );
}
