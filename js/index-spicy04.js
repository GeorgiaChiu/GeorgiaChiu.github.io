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
      href: "/index-spicy02.html",
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
      href: "",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Navigates to" }, "❍ 前往表單")),




    React.createElement("li", { className: "link" },
    React.createElement("a", {
      href: "https://www.instagram.com/one_spicy/",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Navigates to" }, "→Instagram ")))),






    React.createElement("div", { className: "col col-right col-image" },
    React.createElement("img", {
      className: "astro",
      src: "https://i.imgur.com/0pWqp5j.png" }))))));





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

    React.createElement("span", { className: `label--nav-closed${!navOpen ? ' active' : ''}` }, "❍CLICK"),
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
      React.createElement("span", { className: "author" }, "⍌"))),


      React.createElement("img", { className: "some-image", src: "/resourse/group01.jpg" }),
      React.createElement("div", { className: "wrap" },
      React.createElement("div", { className: "text-body text-wrapper" },
      React.createElement("p", null, "【2019 辣妹針織品牌】"),
      React.createElement("p", null, React.createElement("br", null), "從被窩的溫熱中，孵出的辣妹狂想。"),
      React.createElement("p", null, React.createElement("br", null), "『做自己，就是辣。』"),
      React.createElement("p", null, React.createElement("br", null), "辣子秉持著辣妹精神，除了針織比基尼創作上的發展，還想盡盡凝聚辣妹來開發女子話題的想望。"))))));





  }}



ReactDOM.render(React.createElement(App, null), document.getElementById("app"));