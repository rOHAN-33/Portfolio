import React, { useState, useEffect } from 'react';

const TechSkillsGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const skills = [
    { id: 'jsx', name: 'JSX', icon: '⚛️', description: 'React syntax extension for JavaScript', className: 'jsx' },
    { id: 'nextjs', name: 'Next.js', icon: '▲', description: 'Full-stack React framework', className: 'nextjs' },
    { id: 'tailwind', name: 'Tailwind', icon: '🎨', description: 'Utility CSS', className: 'tailwind' },
    { id: 'typescript', name: 'TypeScript', icon: '📘', description: 'Typed JS', className: 'typescript' },
    { id: 'express', name: 'Express.js', icon: '🚀', description: 'Fast web framework for Node.js', className: 'express' },
    { id: 'javascript', name: 'JavaScript', icon: '🟨', description: 'The core language powering modern web development', className: 'javascript' },
    { id: 'nodejs', name: 'Node.js', icon: '🟢', description: 'Runtime env', className: 'nodejs' },
    { id: 'mongodb', name: 'MongoDB', icon: '🍃', description: 'NoSQL DB', className: 'mongodb' },
    { id: 'git', name: 'Git & GitHub', icon: '🔧', description: 'Version control & collaboration', className: 'git' }
  ];

  const decorativeCards = [
    { id: 'dec1', name: 'Always Learning', icon: '✨', className: 'decorative' },
    { id: 'dec2', name: 'Building Amazing Things', icon: '🚀', description: 'Passionate about creating innovative web solutions', className: 'decorative' },
    { id: 'dec3', name: 'Innovation', icon: '💡', className: 'decorative' }
  ];

  const handleCardClick = (event, cardId) => {
    const card = event.currentTarget;
    
    // Create particle explosion effect
    for (let i = 0; i < 6; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const angle = (i / 6) * Math.PI * 2;
      const distance = 100;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      particle.style.cssText = `
        position: absolute;
        width: 6px;
        height: 6px;
        background: linear-gradient(45deg, #00f5ff, #ff00f5);
        border-radius: 50%;
        pointer-events: none;
        left: 50%;
        top: 50%;
        z-index: 1000;
        transform: translate(-50%, -50%);
      `;
      
      card.appendChild(particle);
      
      particle.animate([
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
        { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`, opacity: 0 }
      ], {
        duration: 800,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }).onfinish = () => particle.remove();
    }
    
    // Card pulse effect
    card.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(0.95)' },
      { transform: 'scale(1)' }
    ], {
      duration: 300,
      easing: 'ease-out'
    });
  };

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="skills-container">
      <style jsx>{`
        .skills-container {
          max-width: 1200px;
          width: 100%;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .skills-header h2 {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(45deg, #00f5ff, #ff00f5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
        }

        .skills-header p {
          color: #8892b0;
          font-size: 1.1rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: repeat(4, 120px);
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }

        .skill-card:hover::before {
          left: 100%;
        }

        .skill-card:hover {
          transform: translateY(-8px) scale(1.02);
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          z-index: 10;
        }

        /* JavaScript - Center large card */
        .skill-card.javascript {
          grid-column: 3 / 5;
          grid-row: 2 / 4;
          background: linear-gradient(135deg, #f7df1e, #ffeb3b);
          border: 2px solid #f7df1e;
          padding: 30px;
        }

        .skill-card.javascript:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 30px 60px rgba(247, 223, 30, 0.3);
        }

        .skill-card.javascript .skill-name {
          color: #000;
          font-size: 24px;
          font-weight: 700;
        }

        .skill-card.javascript .skill-description {
          color: #333;
          font-size: 14px;
        }

        .skill-card.javascript .skill-icon {
          width: 100px;
          height: 100px;
          font-size: 80px;
        }

        /* JSX - Tall card */
        .skill-card.jsx {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
          background: linear-gradient(135deg, rgba(97, 218, 251, 0.1), rgba(97, 218, 251, 0.05));
          border-color: rgba(97, 218, 251, 0.3);
        }

        /* Next.js - Wide card */
        .skill-card.nextjs {
          grid-column: 2 / 4;
          grid-row: 1 / 2;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border-color: rgba(255, 255, 255, 0.3);
          flex-direction: row;
          justify-content: space-around;
        }

        .skill-card.nextjs .skill-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Tailwind - Small square */
        .skill-card.tailwind {
          grid-column: 4 / 5;
          grid-row: 1 / 2;
          background: linear-gradient(135deg, rgba(56, 178, 172, 0.1), rgba(56, 178, 172, 0.05));
          border-color: rgba(56, 178, 172, 0.3);
        }

        /* TypeScript - Small square */
        .skill-card.typescript {
          grid-column: 5 / 6;
          grid-row: 1 / 2;
          background: linear-gradient(135deg, rgba(49, 120, 198, 0.1), rgba(49, 120, 198, 0.05));
          border-color: rgba(49, 120, 198, 0.3);
        }

        /* Express - Tall card */
        .skill-card.express {
          grid-column: 6 / 7;
          grid-row: 1 / 3;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border-color: rgba(255, 255, 255, 0.3);
        }

        /* Node.js - Small square */
        .skill-card.nodejs {
          grid-column: 1 / 2;
          grid-row: 3 / 4;
          background: linear-gradient(135deg, rgba(104, 160, 99, 0.1), rgba(104, 160, 99, 0.05));
          border-color: rgba(104, 160, 99, 0.3);
        }

        /* MongoDB - Small square */
        .skill-card.mongodb {
          grid-column: 2 / 3;
          grid-row: 3 / 4;
          background: linear-gradient(135deg, rgba(71, 162, 72, 0.1), rgba(71, 162, 72, 0.05));
          border-color: rgba(71, 162, 72, 0.3);
        }

        /* Git & GitHub - Wide card */
        .skill-card.git {
          grid-column: 5 / 7;
          grid-row: 3 / 4;
          background: linear-gradient(135deg, rgba(240, 80, 51, 0.1), rgba(240, 80, 51, 0.05));
          border-color: rgba(240, 80, 51, 0.3);
          flex-direction: row;
          justify-content: space-around;
        }

        .skill-card.git .skill-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Bottom row decorative cards */
        .skill-card.decorative {
          grid-row: 4 / 5;
          background: linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(138, 43, 226, 0.05));
          border-color: rgba(138, 43, 226, 0.3);
          opacity: 0.7;
          animation: float 6s ease-in-out infinite;
        }

        .skill-card.decorative:nth-child(10) {
          grid-column: 2 / 3;
        }

        .skill-card.decorative:nth-child(11) {
          grid-column: 3 / 5;
        }

        .skill-card.decorative:nth-child(12) {
          grid-column: 5 / 6;
        }

        .skill-icon {
          width: 50px;
          height: 50px;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          transition: transform 0.3s ease;
        }

        .skill-card:hover .skill-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .skill-name {
          font-size: 14px;
          font-weight: 600;
          color: #ccd6f6;
          margin-bottom: 4px;
          text-align: center;
        }

        .skill-description {
          font-size: 11px;
          color: #8892b0;
          opacity: 0.8;
          text-align: center;
          line-height: 1.3;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(6, 100px);
            gap: 15px;
          }

          .skill-card.javascript {
            grid-column: 2 / 4;
            grid-row: 2 / 4;
          }

          .skill-card.jsx {
            grid-column: 1 / 2;
            grid-row: 1 / 3;
          }

          .skill-card.nextjs {
            grid-column: 2 / 4;
            grid-row: 1 / 2;
          }

          .skill-card.tailwind {
            grid-column: 1 / 2;
            grid-row: 3 / 4;
          }

          .skill-card.typescript {
            grid-column: 1 / 2;
            grid-row: 4 / 5;
          }

          .skill-card.express {
            grid-column: 2 / 3;
            grid-row: 4 / 6;
          }

          .skill-card.nodejs {
            grid-column: 3 / 4;
            grid-row: 4 / 5;
          }

          .skill-card.mongodb {
            grid-column: 3 / 4;
            grid-row: 5 / 6;
          }

          .skill-card.git {
            grid-column: 1 / 3;
            grid-row: 5 / 6;
          }

          .skill-card.decorative {
            display: none;
          }

          .skills-header h2 {
            font-size: 2rem;
          }

          .skill-icon {
            width: 35px;
            height: 35px;
            font-size: 28px;
          }
        }
      `}</style>

      <div className="skills-header">
        <h2>Tech Skills</h2>
        <p>Technologies I work with to build amazing experiences</p>
      </div>
      
      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`skill-card ${skill.className}`}
            onMouseEnter={() => handleMouseEnter(skill.id)}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => handleCardClick(e, skill.id)}
          >
            {skill.className === 'nextjs' || skill.className === 'git' ? (
              <div className="skill-content">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-description">{skill.description}</div>
              </div>
            ) : (
              <>
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-description">{skill.description}</div>
              </>
            )}
          </div>
        ))}
        
        {decorativeCards.map((card, index) => (
          <div
            key={card.id}
            className={`skill-card ${card.className}`}
            style={{ animationDelay: `${index * 0.5}s` }}
            onMouseEnter={() => handleMouseEnter(card.id)}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => handleCardClick(e, card.id)}
          >
            <div className="skill-icon">{card.icon}</div>
            <div className="skill-name">{card.name}</div>
            {card.description && <div className="skill-description">{card.description}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSkillsGrid;