import React, { Component } from "react";

class SafetyTips extends Component {
  state = {
    tips: [
      { id: 1, title: "Read all instructions", desc: "Always follow manufacturer instructions before igniting." },
      { id: 2, title: "Keep distance", desc: "Spectators should remain at a safe distance." },
      { id: 3, title: "Water nearby", desc: "Keep a bucket of water or hose nearby." },
      { id: 4, title: "No alcohol", desc: "Do not handle fireworks while under influence." }
    ]
  };

  render() {
    return (
      <div className="safetytips-container">
        <header className="safetytips-header">
          <h1>Fireworks Safety Tips</h1>
        </header>

        <p>
          Safety is our top priority. These guidelines help reduce risk.
        </p>

        {this.state.tips.map(t => (
          <div key={t.id} className="card">
            <h4>{t.title}</h4>
            <p>{t.desc}</p>
          </div>
        ))}

        {/* FREE PDF DOWNLOAD */}
        <div style={{ marginTop: 16 }}>
          <a
            className="button"
            href="/FWC_Pricelist_2025.pdf"
            download
          >
            Download FREE Safety PDF
          </a>
        </div>
      </div>
    );
  }
}

export default SafetyTips;