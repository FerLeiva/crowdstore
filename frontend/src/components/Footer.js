import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt="JavaScript"
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          />
        </div>
        <div className="card-name">
          <img
            alt="React"
            src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
          />
        </div>
        <div className="card-name">
          <img
            alt="Express"
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="PostgreSQL"
            src="https://www.postgresql.org/media/img/about/press/elephant.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="Sequelize"
            src="https://sequelize.org/img/logo.svg"
          />
        </div>
        <div className="card-name">
          <img
            alt="Node.js"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
