import React, { useState, useEffect } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [isToolbarExpanded, setToolbarExpanded] = useState(true);
  const [showReadyAnimation, setShowReadyAnimation] = useState(false);

  function handleAddItem(e) {
    e.preventDefault();
    if (!description.trim()) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    setItems((prevItems) => [...prevItems, newItem]);
    setDescription("");
    setQuantity(1);
  }

  function handleToggleItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleClearList() {
    if (window.confirm("Are you sure you want to clear the list?")) {
      setItems([]);
    }
  }

  function handleSort(option) {
    setSortOption(option);
    let sortedItems = [...items];
    if (option === "packed") {
      sortedItems.sort((a, b) => a.packed - b.packed);
    } else if (option === "alphabetical") {
      sortedItems.sort((a, b) => a.description.localeCompare(b.description));
    } else if (option === "quantity") {
      sortedItems.sort((a, b) => b.quantity - a.quantity);
    }
    setItems(sortedItems);
  }

  const packedCount = items.filter((item) => item.packed).length;
  const totalCount = items.length;
  const percentagePacked =
    totalCount === 0 ? 0 : Math.round((packedCount / totalCount) * 100);

  useEffect(() => {
    if (percentagePacked === 100 && totalCount > 0) {
      setShowReadyAnimation(true);
      setTimeout(() => setShowReadyAnimation(false), 3000);
    }
  }, [percentagePacked, totalCount]);

  return (
    <div className="app">
      <header>
        <h1>PackWise 🧳✨</h1>
        <p>
          Ready for your next adventure? Let’s get you packed and ready! ✈️🎒
        </p>
      </header>

      <main>
        <form className="add-form" onSubmit={handleAddItem}>
          <h2>Add Your Essentials 📝🎯</h2>
          <div className="form-controls">
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {Array.from({ length: 20 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="e.g., Toothbrush, Clothes"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add ➕</button>
          </div>
        </form>

        <div
          className={`toolbar ${isToolbarExpanded ? "expanded" : "collapsed"}`}
        >
          <div
            className="toolbar-header"
            onClick={() => setToolbarExpanded(!isToolbarExpanded)}
          >
            <span>Filters & Sorting</span>
            <button
              className={`toolbar-toggle-btn ${
                isToolbarExpanded ? "expanded" : "collapsed"
              }`}
            >
              ⬇
            </button>
          </div>
          <div className="toolbar-content">
            <input
              type="text"
              className="search-bar"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="packed">Packed Status</option>
              <option value="alphabetical">Alphabetical</option>
              <option value="quantity">Quantity</option>
            </select>
          </div>
        </div>

        <ul className="items-list">
          {items
            .filter((item) =>
              item.description.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((item) => (
              <li
                key={item.id}
                className={`item ${item.packed ? "packed" : ""}`}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={item.packed}
                    onChange={() => handleToggleItem(item.id)}
                  />
                  {item.quantity} × {item.description}
                </label>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  🗑️
                </button>
              </li>
            ))}
        </ul>

        {items.length > 0 && (
          <div className="footer">
            <p>
              🎉 {packedCount}/{totalCount} items packed ({percentagePacked}%)
            </p>
            <button onClick={handleClearList} className="clear-btn">
              Clear List 🗑️
            </button>
          </div>
        )}
      </main>

      {showReadyAnimation && (
        <div className="ready-animation">
          <h1>You Are Ready to Go! 🎉</h1>
        </div>
      )}
    </div>
  );
}
