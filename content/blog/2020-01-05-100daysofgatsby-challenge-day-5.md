---
title: 100DaysOfGatsby - Challenge - Day 5
date: 2020-01-04T19:40:06.489Z
description: Gatsby - Challenge - Day 5
---

### Progress of Day 5

### Build Header Skeleton

```html
<header className="top-0 z-10 w-full">
  <div className="mx-auto md:max-w-4xl sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
    <div className="flex justify-between items-center px-4 py-3 sm:p-0">
      <h1 className="text-gray-900 text-base text-xl font-extrabold">
        <Link to="/">{siteTitle}</Link>
      </h1>

      <div className="sm:hidden">
        <button
          onClick={this.toggleMenu}
          type="button"
          className="block text-gray-500 hover:text-teal-500 focus:text-teal-500 focus:outline-none"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0  1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414  1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0  0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
```

### Toggle Function within Header for Mobile Devices
