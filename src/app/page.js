"use client";

import Books from '../components/Books'; // Import Books component
import Videos from '../components/Videos'; // Import Videos component

export default function Page() {
  return (
    <div>
      <h1>Learning Resources</h1>

      {/* Add Books and Videos sections */}
      <section>
        <h2>Healthcare Books</h2>
        <Books category="Healthcare" />

        <h2>Healthcare Videos</h2>
        <Videos category="Healthcare" />

        <h2>SmartDevices Books</h2>
        <Books category="SmartDevices" />

        <h2>SmartDevices Videos</h2>
        <Videos category="SmartDevices" />
      </section>
    </div>
  );
}
