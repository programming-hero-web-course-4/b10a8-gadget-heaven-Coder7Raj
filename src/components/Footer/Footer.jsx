const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="container mx-auto">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-3">Gadget Heaven</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            ratione optio quibusdam laborum earum tempore <br /> culpa et vel,
            deleniti veniam.
          </p>
        </div>
        <div className="divider"></div>
        <div className="footer text-base-content p-6">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
