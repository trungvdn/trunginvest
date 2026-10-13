import "./page.css";

export const metadata = {
  title: "Trung Invest · Vietnam Market Intelligence",
  description:
    "Trung Invest helps research Vietnam markets through explainable Wyckoff analysis and macroeconomic context.",
};

export default function Home() {
  return (
    <main className="landing-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Trung Invest home">
          <span className="brand-mark">T</span>
          <span>
            Trung <span className="brand-light">Invest</span>
          </span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#capabilities">Capabilities</a>
          <a href="#workflow">How it works</a>
          <a href="https://github.com/trungvdn/investment-ai" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </nav>

        <a className="header-cta" href="#capabilities">
          Explore the project <span>→</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot"></span> Market intelligence · Vietnam focus
          </p>
          <h1>
            Understand the market.
            <br />
            <span>Invest with a clearer thesis.</span>
          </h1>
          <p className="hero-description">
            Trung Invest brings price-and-volume structure and macroeconomic context into one
            research workspace—starting with explainable Wyckoff phase analysis and a Vietnam
            macro dashboard.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#capabilities">
              Explore capabilities <span>→</span>
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/trungvdn/investment-ai"
              target="_blank"
              rel="noreferrer"
            >
              View project on GitHub ↗
            </a>
          </div>
          <p className="hero-note">Evidence-led research. Transparent assumptions. No promises of market returns.</p>
        </div>

        <div className="preview-window" aria-label="Illustrative Trung Invest product preview">
          <div className="window-bar">
            <div className="window-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <span>INVESTMENT AI / RESEARCH WORKSPACE</span>
            <span className="preview-label">CONCEPT PREVIEW</span>
          </div>

          <div className="preview-heading">
            <div>
              <p className="eyebrow">Market overview</p>
              <h2>Vietnam market intelligence</h2>
            </div>
            <span className="date-pill">Research view</span>
          </div>

          <div className="preview-metrics">
            <article className="metric-card">
              <span>01 / Market structure</span>
              <strong>Wyckoff</strong>
              <p>Phase hypotheses from price and volume behavior.</p>
              <div className="mini-bars">
                <i style={{ height: "35%" }}></i>
                <i style={{ height: "48%" }}></i>
                <i style={{ height: "43%" }}></i>
                <i style={{ height: "65%" }}></i>
                <i style={{ height: "59%" }}></i>
                <i style={{ height: "81%" }}></i>
                <i style={{ height: "73%" }}></i>
                <i style={{ height: "92%" }}></i>
                <i style={{ height: "76%" }}></i>
                <i style={{ height: "100%" }}></i>
                <i style={{ height: "86%" }}></i>
                <i style={{ height: "94%" }}></i>
              </div>
            </article>

            <article className="metric-card">
              <span>02 / Macro context</span>
              <strong>Key indicators</strong>
              <p>Monitor the variables shaping market conditions.</p>
              <div className="indicator-list">
                <div>
                  <span>Interest rates</span>
                  <b>Track</b>
                </div>
                <div>
                  <span>Credit growth</span>
                  <b>Track</b>
                </div>
                <div>
                  <span>CPI · PMI · M2</span>
                  <b>Track</b>
                </div>
              </div>
            </article>
          </div>

          <div className="preview-bottom">
            <div>
              <span className="preview-icon">↗</span>
              <div>
                <strong>Evidence before conclusions</strong>
                <p>Connect observations, assumptions, and data quality.</p>
              </div>
            </div>
            <span className="preview-status">Illustrative UI · not live data</span>
          </div>
        </div>

        <div className="hero-orb orb-one"></div>
        <div className="hero-orb orb-two"></div>
      </section>

      <section className="trust-strip" aria-label="Product principles">
        <p>Designed around</p>
        <span>Explainable analysis</span>
        <i></i>
        <span>Vietnam macro context</span>
        <i></i>
        <span>Visible uncertainty</span>
        <i></i>
        <span>Modular capabilities</span>
      </section>

      <section className="section capabilities" id="capabilities">
        <div className="section-intro">
          <p className="eyebrow">The research toolkit</p>
          <h2>From market signals to a structured point of view.</h2>
          <p>
            Start with a focused workflow. Expand into a broader investment research system as
            data coverage and validation mature.
          </p>
        </div>

        <div className="capability-grid">
          <article className="capability-card capability-featured">
            <div className="card-icon blue-icon">⌁</div>
            <p className="card-kicker">01 / Technical structure</p>
            <h3>Wyckoff phase analysis</h3>
            <p>
              Organize price and volume behavior into a phase hypothesis—Accumulation, Markup,
              Distribution, or Markdown—with the events and observations that support the
              interpretation.
            </p>
            <div className="chip-row">
              <span>Price &amp; volume</span>
              <span>Events</span>
              <span>Evidence</span>
            </div>
            <div className="phase-track">
              <div>
                <span>A</span>
                <b>Stopping</b>
              </div>
              <div>
                <span>B</span>
                <b>Building cause</b>
              </div>
              <div>
                <span>C</span>
                <b>Test</b>
              </div>
              <div>
                <span>D</span>
                <b>Trend evidence</b>
              </div>
              <div>
                <span>E</span>
                <b>Emergence</b>
              </div>
            </div>
          </article>

          <article className="capability-card">
            <div className="card-icon violet-icon">◷</div>
            <p className="card-kicker">02 / Macro dashboard</p>
            <h3>Read the economic backdrop</h3>
            <p>
              Track the macro variables most relevant to Vietnam equities, including interest
              rates, credit growth, money supply, CPI, and PMI.
            </p>
            <ul className="feature-list">
              <li>
                <span>↗</span> Indicator trends and latest readings
              </li>
              <li>
                <span>↗</span> Grouped macro context
              </li>
              <li>
                <span>↗</span> Alerts for indicators needing attention
              </li>
            </ul>
          </article>

          <article className="capability-card">
            <div className="card-icon amber-icon">◎</div>
            <p className="card-kicker">03 / Research discipline</p>
            <h3>Make reasoning inspectable</h3>
            <p>
              Separate sourced observations from interpretations. Keep missing data, assumptions,
              and confidence visible instead of hiding uncertainty behind a single score.
            </p>
            <ul className="feature-list">
              <li>
                <span>↗</span> Data validation and provenance
              </li>
              <li>
                <span>↗</span> Explainable conclusions
              </li>
              <li>
                <span>↗</span> Replaceable data providers
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="workflow-copy">
          <p className="eyebrow">A disciplined workflow</p>
          <h2>Build the thesis from evidence—not noise.</h2>
          <p>
            Trung Invest is designed to make each stage of the analysis explicit, so results can
            be reviewed, tested, and improved over time.
          </p>
          <a
            className="text-link"
            href="https://github.com/trungvdn/investment-ai"
            target="_blank"
            rel="noreferrer"
          >
            Explore the architecture <span>→</span>
          </a>
        </div>

        <div className="workflow-steps">
          <article>
            <span>01</span>
            <div>
              <h3>Collect</h3>
              <p>Load market and macro data through defined provider boundaries.</p>
            </div>
            <b>→</b>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Validate</h3>
              <p>Check coverage, timestamps, consistency, and data limitations.</p>
            </div>
            <b>→</b>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Analyze</h3>
              <p>Apply focused domain rules to market structure and economic context.</p>
            </div>
            <b>→</b>
          </article>
          <article>
            <span>04</span>
            <div>
              <h3>Explain</h3>
              <p>Present conclusions alongside the evidence and uncertainty behind them.</p>
            </div>
            <b>✓</b>
          </article>
        </div>
      </section>

      <section className="section principles">
        <div className="section-intro">
          <p className="eyebrow">Product principles</p>
          <h2>Built to be useful, testable, and honest.</h2>
        </div>

        <div className="principle-grid">
          <article>
            <span>01</span>
            <h3>Evidence over certainty</h3>
            <p>
              Analysis is a hypothesis supported by data, not a promise about what the market
              will do.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Small core, clear boundaries</h3>
            <p>
              Capabilities stay modular so the project can grow without prematurely adding
              complexity.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Quality before expansion</h3>
            <p>
              Test deterministic rules and evaluate historical behavior before broadening the
              system.
            </p>
          </article>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow">Explore Trung Invest</p>
          <h2>A clearer framework for your next research question.</h2>
          <p>
            Follow the project, review its architecture, and help shape a transparent investment
            research toolkit.
          </p>
        </div>
        <a
          className="button button-light"
          href="https://github.com/trungvdn/investment-ai"
          target="_blank"
          rel="noreferrer"
        >
          Open GitHub repository <span>↗</span>
        </a>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#top">
          <span className="brand-mark">T</span>
          <span>
            Trung <span className="brand-light">Invest</span>
          </span>
        </a>
        <p>Research support for thoughtful, evidence-led decisions.</p>
      </footer>
    </main>
  );
}
