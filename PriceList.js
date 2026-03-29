import React, { Component } from "react";

class PriceList extends Component {
  state = {
    products: [
      { id: 101, name: "2.75 Kuruvi Sparkler", category: "sparkler", price: 8 },
      { id: 102, name: "3.5 Laxmi Sparkler", category: "sparkler", price: 12 },
      { id: 103, name: "Jumbo Sparkler", category: "sparkler", price: 16 },

      { id: 104, name: "Sky Rocket", category: "rockets", price: 45 },
      { id: 105, name: "Power Rocket", category: "rockets", price: 60 },

      { id: 106, name: "Single Sound Small", category: "singlesound", price: 45 },
      { id: 107, name: "Single Sound Big", category: "singlesound", price: 60 },

      { id: 108, name: "Atom Bomb Small", category: "atombombs", price: 55 },
      { id: 109, name: "Atom Bomb Big", category: "atombombs", price: 75 },

      { id: 110, name: "Ground Chakkar Deluxe", category: "groundchakkars", price: 36 },
      { id: 111, name: "Ground Chakkar Special", category: "groundchakkars", price: 45 },

      { id: 112, name: "7 Shot Sky Shots", category: "skyshots", price: 180 },
      { id: 113, name: "12 Shot Sky Shots", category: "skyshots", price: 270 }
    ],
    filter: "all",
    sort: "default",
    search: ""
  };

  /* ================= CART QTY ================= */
  getQty = (id) => {
    const item = this.props.cart?.find(i => i.id === id);
    return item ? item.qty : 0;
  };

  /* ================= FILTER / SEARCH / SORT ================= */
  filteredProducts = () => {
    let list = [...this.state.products];

    if (this.state.filter !== "all") {
      list = list.filter(p => p.category === this.state.filter);
    }

    if (this.state.search) {
      list = list.filter(p =>
        p.name.toLowerCase().includes(this.state.search.toLowerCase())
      );
    }

    if (this.state.sort === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    }
    if (this.state.sort === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  };

  /* ================= GROUP BY CATEGORY ================= */
  groupByCategory = (items) =>
    items.reduce((acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
    }, {});

  render() {
    const categories = [
      "all",
      ...new Set(this.state.products.map(p => p.category))
    ];

    const items = this.filteredProducts();
    const grouped = this.groupByCategory(items);

    return (
      <div className="pricelist-container">
        <h1>🔥 Price List</h1>
        <p className="subtitle">Wholesale fireworks prices</p>

        {/* CONTROLS */}
        <div className="controls">
          <input
            type="text"
            placeholder="Search products..."
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
          />

          <select
            value={this.state.filter}
            onChange={e => this.setState({ filter: e.target.value })}
          >
            {categories.map(c => (
              <option key={c} value={c}>
                {c.toUpperCase()}
              </option>
            ))}
          </select>

          <select
            value={this.state.sort}
            onChange={e => this.setState({ sort: e.target.value })}
          >
            <option value="default">Sort By</option>
            <option value="price-asc">Low → High</option>
            <option value="price-desc">High → Low</option>
          </select>

          <a href="/fwc.pricelist.pdf" download className="download-btn">
            📄 Download Price List
          </a>
        </div>

        {/* TABLE VIEW */}
        <table className="price-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Cart</th>
            </tr>
          </thead>
          <tbody>
            {items.map(p => {
              const qty = this.getQty(p.id);
              return (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>₹{p.price}</td>
                  <td>
                    {qty === 0 ? (
                      <button onClick={() => this.props.addToCart(p)}>+ Add</button>
                    ) : (
                      <div className="qty-box">
                        <button onClick={() => this.props.removeFromCart(p.id)}>−</button>
                        <span>{qty}</span>
                        <button onClick={() => this.props.addToCart(p)}>+</button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* CARD VIEW */}
        {Object.keys(grouped).map(category => (
          <div key={category} style={{ marginTop: 50 }}>
            <h2>{category.toUpperCase()}</h2>

            <div className="price-card-grid">
              {grouped[category].map(p => {
                const qty = this.getQty(p.id);
                return (
                  <div className="price-card" key={p.id}>
                    <span className="card-discount">80% OFF</span>
                    

                    {/* ✅ IMAGE FIXED HERE */}
                    <img
                      src={`/images/${category}.png`}
                      alt={p.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/Screenshot 2025-12-30 at 7.31.31 PM.png";
                      }}
                      className="product-img"
                    />

                    <h4>{p.name}</h4>
                    <p className="price">₹{p.price} / pkt</p>

                    {qty === 0 ? (
                      <button onClick={() => this.props.addToCart(p)}>+</button>
                    ) : (
                      <div className="qty-control">
                        <button onClick={() => this.props.removeFromCart(p.id)}>−</button>
                        <span>{qty}</span>
                        <button onClick={() => this.props.addToCart(p)}>+</button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PriceList;   