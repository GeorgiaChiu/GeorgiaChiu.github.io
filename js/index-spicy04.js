function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const ESC_KEY_CODE = 'Escape';

const NavigationMenu = props => {
  const {
    navOpen,
    navIsAnimating,
    closeNav } =
  props;
  const keyPressHandler = ({ key }) => {
    if (key === ESC_KEY_CODE && navOpen) {
      closeNav();
    }
  };
  React.useEffect(() => {
    window.addEventListener('keydown', keyPressHandler);
    return () => {
      window.removeEventListener('keydown', keyPressHandler);
    };
  }, [navOpen]);
  const classes = `${navOpen ? ' active' : ''}${navIsAnimating ? ' is-animating' : ''}`;
  return (
    React.createElement("div", { className: `navigation-menu${classes}` },
    React.createElement("div", { className: "wrap" },
    React.createElement("div", { className: "cols" },
    React.createElement("div", { className: "col col-left col-links" },
    React.createElement("ul", { className: "links" },
    React.createElement("li", { className: "link" },
    React.createElement("a", {
      href: "/index-spicy05.html",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Navigates to" }, "❍ 看辣子")),




    React.createElement("li", { className: "link" },
    React.createElement("a", {
      href: "/index-spicy03.html",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Navigates to" }, "❍ 如何辣")),




    React.createElement("li", { className: "link" },
    React.createElement("a", {
      href: "index-spicy07.html",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Navigates to" }, "❍ 前往訂購")),




    React.createElement("li", { className: "link" },
    React.createElement("a", {
      href: "https://www.instagram.com/one_spicy/",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Navigates to" }, "→Instagram ")))),






    React.createElement("div", { className: "col col-right col-image" },
    React.createElement("img", {
      className: "astro",
      src: "resourse/logo-spicy(W).png" }))))));





};

const Header = props => {
  const {
    navOpen,
    navIsAnimating,
    toggleNavHandler } =
  props;
  return (
    React.createElement("header", {
      className: "header" },

    React.createElement("div", { className: "wrap" },
    React.createElement("button", {
      className: `nav-button${navIsAnimating ? ' is-animating' : ''}`,
      type: "button",
      "aria-label": "Toggle Navigation",
      onClick: event => toggleNavHandler(event) },

    React.createElement("span", { className: `label--nav-closed${!navOpen ? ' active' : ''}` }, "❍ CLICK ME"),
    React.createElement("span", { className: `label--nav-open${navOpen ? ' active' : ''}` }, "close")))));




};

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      navOpen: false,
      navIsAnimating: false });_defineProperty(this, "toggleNav",


    event => {
      event.preventDefault();
      const { navOpen } = this.state;
      if (event) event.preventDefault();
      this.setState({
        navIsAnimating: true });

      if (navOpen) document.body.classList.remove('nav-open');
      if (!navOpen) document.body.classList.add('nav-open');
      setTimeout(() => {
        this.setState({
          navIsAnimating: false,
          navOpen: !navOpen });

      }, 500);
    });_defineProperty(this, "openNav",

    event => {
      if (event) event.preventDefault();
      document.body.classList.add('nav-open');
      this.setState({
        navOpen: true });

    });_defineProperty(this, "closeNav",

    () => {
      document.body.classList.remove('nav-open');
      this.setState({
        navOpen: false });

    });}

  render() {
    const {
      navOpen,
      navIsAnimating } =
    this.state;
    return (
      React.createElement("div", { className: "layout" },
      React.createElement(Header, {
        navOpen: navOpen,
        toggleNavHandler: event => this.toggleNav(event),
        navIsAnimating: navIsAnimating }),

      React.createElement(NavigationMenu, {
        navOpen: navOpen,
        navIsAnimating: navIsAnimating,
        closeNav: event => this.closeNav(event),
        toggleNavHandler: event => this.toggleNav(event) }),

      React.createElement("main", { className: "page" },
      React.createElement("div", { className: "wrap" },
      React.createElement("div", { className: "title-section text-wrapper" },
      React.createElement("h1", null, "Ready to get Spicy?"),
      React.createElement("span", { className: "author" }, "⍌")))))); // 3個括弧 ))),
      // 3個括弧


      // React.createElement("img", { className: "some-image", src: "/resourse/logo-spicy(B).png" }),
      // React.createElement("img", { className: "some-image", src: "/resourse/logo-spicy(B).png" }),
      // React.createElement("div", { className: "wrap" },
      // React.createElement("div", { className: "text-body text-wrapper" },
      // React.createElement("p", null, "【字義解釋】"),
      // React.createElement("p", null, React.createElement("br", null), "❶ 像姜、蒜等的剌激性味道：～椒（一年生草木植物，果實有毛筆尖形、燈籠形等，青色，成熟後變成紅色。可食，亦可入藥。亦稱“辣子”）。"),
      // React.createElement("p", null, React.createElement("br", null), "❷ 刺激眼睛，卻還是想看 "),
      // React.createElement("p", null, React.createElement("br", null), "❸ 做自己的有趣生物"),
      // React.createElement("p", null, React.createElement("br", null), "【字義來源】"),
      // React.createElement("p", null, React.createElement("br", null), "2019年初，辣妹的織品手作品牌，不只刺激眼睛，更是激勵生物想耍辣的天然本性。"),
      // React.createElement("p", null, React.createElement("br", null), "與古代可以入藥的辣子相比，此代的辣子較難入喉，宜穿戴，服貼你敏感又值得呵護的肌膚。辣子堅持『手作』與『客製』的精神，以時間與巧思熬出每個獨一無二，專屬於辣妹個性的辣子。"),
      // React.createElement("p", null, React.createElement("br", null), "希望每個人，都能在這不美麗的世界，活出最美的樣子。"))))));
    }}



ReactDOM.render(React.createElement(App, null), document.getElementById("app"));