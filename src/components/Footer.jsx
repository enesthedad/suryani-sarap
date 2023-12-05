const Footer = () => {
  const date = new Date();
  console.log();
  return (
    <footer>
      <p>
        Copyright © {date.getFullYear()} <a href='#'>midyatsarapevi.com</a> Tum
        haklari saklidir.
      </p>
    </footer>
  );
};

export default Footer;
