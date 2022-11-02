import React from "react";

export default function Navigation(props) {
  const { menu, path } = props;
  return (
    <nav className="flex justify-between mt-8 mb-16">
      <a href="./" className="text-gray">
        Learning, growing & building in public
      </a>
      <menu className="flex gap-6">
        {menu.map((item, index) => {
          return (
            <>
              <li key={item.name} className="">
                <a
                  href={`./${item.url}`}
                  className={
                    "flex gap-2 items-center " +
                    (path === `/${item.url}` || `/${item.name}` === "Home"
                      ? "text-white"
                      : "text-gray")
                  }
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={item.icon}
                      fill={
                        path === `/${item.url}` || `/${item.name}` === "Home"
                          ? "white"
                          : "#868686"
                      }
                    />
                  </svg>
                  {item.name}
                </a>
              </li>
              {/* If this isn't the last item in the menu array, add a em dash divider */}
              {index !== menu.length - 1 && (
                <p className="text-gray font-bold">—</p>
              )}
            </>
          );
        })}
      </menu>
    </nav>
  );
}
