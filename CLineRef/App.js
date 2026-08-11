import './App.css';
import {
  Bell,
  User,
  Leaf,
  Flame,
  Droplets,
  Beef,
  Wheat,
  Fish,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

function App() {
  const navItems = ['Home', 'Dashboard', 'Meal tracker', 'BMI', 'About Us'];

  const chartData = [
    { day: 'Sun', value: 1.9 },
    { day: 'Mon', value: 2.0 },
    { day: 'Tue', value: 1.6 },
    { day: 'Wed', value: 2.5 },
    { day: 'Thu', value: 2.1 },
    { day: 'Fri', value: 2.0 },
    { day: 'Sat', value: 2.1 },
  ];

  // Streak calendar: 7 columns x 5 rows
  // 'filled' = blue, 'pale' = pale blue, 'empty' = white (random)
  const streakStates = ['filled', 'pale', 'empty'];
  const streakDays = Array.from({ length: 35 }, () =>
    streakStates[Math.floor(Math.random() * streakStates.length)]
  );



  const nutrientCards = [
    {
      title: 'Protein',
      bg: '#F6F7DE',
      amount: '60 /105g',
      percent: '22%',
      remaining: 'Remaining 45g',
      ringPercent: 65,
      ringColor: '#2855D8',
      icon: <Beef size={24} />,
    },
    {
      title: 'Carbs',
      bg: '#F8F1D9',
      amount: '120 /260g',
      percent: '20%',
      remaining: 'Remaining 140g',
      ringPercent: 44,
      ringColor: '#06b6d4',
      icon: <Wheat size={24} />,
    },
    {
      title: 'Fats',
      bg: '#FAF2E6',
      amount: '35 /70g',
      percent: '32%',
      remaining: 'Remaining 35g',
      ringPercent: 50,
      ringColor: '#8E5CE6',
      icon: <Fish size={24} />,
    },
  ];

  const quickLinks = ['Home', 'Dashboard', 'Meal tracker', 'About us'];
  const supportLinks = ['Help Centre', 'Contact us', 'FAQ'];


  const socialIcons = [
    { icon: <Facebook size={18} />, label: 'Facebook' },
    { icon: <Instagram size={18} />, label: 'Instagram' },
    { icon: <Twitter size={18} />, label: 'Twitter' },
    { icon: <Youtube size={18} />, label: 'YouTube' },
  ];

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <nav className="nav">

            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`nav-item ${item === 'Dashboard' ? 'active' : ''}`}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="header-right">
            <button className="icon-btn" aria-label="Notifications">
              <Bell size={20} />
            </button>
            <button className="icon-btn" aria-label="User">
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className="container">
        {/* Dashboard Title */}
        <h1 className="dashboard-title">Nutrition Insight</h1>

        {/* Top Section */}
        <section className="top-section">
          {/* Left: Calories Breakdown Card */}
          <div className="calories-card card">
            <div className="calories-top">
              <div className="calories-heading">
                <span className="calories-icon">
                  <Flame size={24} />
                </span>
                <h2>Calories Breakdown</h2>
              </div>
              <div className="calories-consumed">
                <span className="small-label">Consumed</span>
                <div className="consumed-row">
                  <span className="large-value">1350 kcal</span>
                  <span className="badge">82%</span>
                </div>
                <span className="trend">↑ 15% Than yesterday</span>
              </div>
            </div>

            <div className="calories-body">
              <div className="progress-section">
                <div className="progress-item">
                  <div className="progress-row">
                    <span className="progress-label">Remaining</span>
                    <span className="progress-value">800kcal (18%)</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '18%' }}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-row">
                    <span className="progress-label">Carbs</span>
                    <span className="progress-value">240kcal / 60g</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-row">
                    <span className="progress-label">Protein</span>
                    <span className="progress-value">480kcal / 120g</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-row">
                    <span className="progress-label">Fat</span>
                    <span className="progress-value">315kcal / 35g</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>

              <div className="target-section">
                <span className="small-label">Target</span>
                <span className="target-value">2150Kcal</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="sidebar">
            {/* Hydration Card */}
            <div className="hydration-card">
              <div className="hydration-top">
                <div className="hydration-text">
                  <h2 className="hydration-heading">
                    <Droplets size={16} /> Hydrate
                  </h2>
                  <span className="hydration-value">1315 ml</span>
                  <span className="hydration-label">of 1550 ml</span>
                </div>
            <img
              src="/images/glass.png"
              alt="Glass of water"
              className="water-glass-img"
            />

              </div>
              <div className="hydration-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>

            {/* Streak Card */}
            <div className="streak-card">
              <div className="streak-header">
                <h2>February 2026</h2>
                <div className="streak-controls">
                  <span className="control">◉</span>
                  <span className="control">◎</span>
                </div>
              </div>
              <div className="streak-count">21 days Streaks!</div>
              <div className="streak-calendar">
                {streakDays.map((state, i) => (
                  <span
                    key={i}
                    className={`streak-dot ${state}`}
                  ></span>
                ))}
              </div>

            </div>
          </aside>
        </section>

        {/* Middle Section: Nutrient Cards */}
        <section className="middle-section">
          {nutrientCards.map((card) => (
            <div
              key={card.title}
              className="nutrient-card"
              style={{ backgroundColor: card.bg }}
            >
              <div className="nutrient-top">
                <span className="nutrient-icon">{card.icon}</span>
                <span className="nutrient-title">{card.title}</span>
                <span className="nutrient-percent">{card.percent}</span>
              </div>
              <div className="nutrient-body">
                <div className="nutrient-amount">{card.amount}</div>
                <div className="nutrient-ring-wrap">
                  <div
                    className="nutrient-ring"
                    style={{
                      background: `conic-gradient(${card.ringColor} ${card.ringPercent}%, #e5e7eb ${card.ringPercent}%)`,
                    }}
                  >
                    <div className="nutrient-ring-inner">
                      <span className="nutrient-ring-value">{card.ringPercent}%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nutrient-remaining">{card.remaining}</div>
            </div>
          ))}
        </section>

        {/* Bottom Section */}
        <section className="bottom-section">
          {/* Left: Nutrition Chart Card */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-title">
                <span className="chart-icon">
                  <Leaf size={20} />
                </span>
                <h2>Nutrients Gained</h2>
              </div>
              <div className="toggle-pills">
                <button className="pill active">Weekly</button>
                <button className="pill">Monthly</button>
              </div>
            </div>

            <div className="chart-metrics">
              <div className="metric">
                <span className="metric-label">Total Calories</span>
                <span className="metric-value">3.045 kcal</span>
              </div>
              <div className="metric">
                <span className="metric-label">Daily Avg</span>
                <span className="metric-value">1.750 kcal</span>
              </div>
            </div>

            <div className="chart-container">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#5F6368', fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#5F6368', fontSize: 12 }}
                  />
                  <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} />
                  <Bar
                    dataKey="value"
                    radius={[8, 8, 0, 0]}
                    fill="#7dd3fc"
                    barSize={32}
                    shape={(props) => {
                      const { x, y, width, height, index } = props;
                      const isWed = chartData[index]?.day === 'Wed';
                      return (
                        <rect
                          x={x}
                          y={y}
                          width={width}
                          height={height}
                          rx={8}
                          fill={isWed ? '#2855D8' : '#7dd3fc'}
                        />
                      );
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right: Food Image */}
          <div className="food-card">
            <img src="/images/food.webp" alt="Breakfast" className="food-image" />
          </div>

        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-col">
              <img src="/images/logo2.png" alt="LifeWell" className="footer-logo-img" />

              <div className="social-section">

                <span className="social-label">Follow us</span>
                <div className="social-icons">
                  {socialIcons.map((s) => (
                    <a key={s.label} href="#" className="social-icon" aria-label={s.label}>
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>



            <div className="footer-col">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-heading">Support</h3>
              <ul className="footer-links">
                {supportLinks.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-heading">Contact us</h3>

              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email address here"
                />
                <button type="submit" className="newsletter-btn">
                  SEND
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
