import React from "react";

const Footer = () => {
  const redesSociais = [
    { label: "Github", link: "https://github.com/dev-help-oficial" },
    { label: "Discord", link: "https://discord.gg/SgmT64twhZ" },
  ];

  const outrosLinks = [{ label: "Blog", link: "/blog" }];

  return (
    <footer className="bg-gray-700 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2 text-center">
              Redes Sociais
            </h2>
            <ul className="list-none text-center">
              {redesSociais.map((redeSocial, index) => (
                <li key={index}>
                  <a href={redeSocial.link} className="hover:underline">
                    {redeSocial.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2 text-center">Outros</h2>
            <ul className="list-none text-center">
              {outrosLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
