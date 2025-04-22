export function FontExample() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="space-y-4">
        <h1 className="title-large">Merriweather Heading (Large)</h1>
        <h2 className="title-medium">Merriweather Heading (Medium)</h2>
        <h3 className="title-small">Merriweather Heading (Small)</h3>
      </div>

      <div className="space-y-4">
        <p className="body-large">
          This is Inter body text in large size. It uses the regular (400) weight as specified.
        </p>
        <p className="body-medium">This is Inter body text in medium size. The default weight is 400 for body text.</p>
        <p className="body-small">
          This is Inter body text in small size. Perfect for captions and secondary information.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-4">
          <button className="btn-primary button-text px-6 py-3 rounded-md">Primary Button</button>
          <button className="btn-outline button-text px-6 py-3 rounded-md">Secondary Button</button>
        </div>

        <nav className="flex gap-6">
          <a href="#" className="nav-text">
            Home
          </a>
          <a href="#" className="nav-text">
            Services
          </a>
          <a href="#" className="nav-text">
            About
          </a>
          <a href="#" className="nav-text">
            Contact
          </a>
        </nav>
      </div>
    </div>
  )
}
