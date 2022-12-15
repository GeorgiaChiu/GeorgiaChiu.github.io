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
  return /*#__PURE__*/(
    React.createElement("div", { className: `navigation-menu${classes}` }, /*#__PURE__*/
    React.createElement("div", { className: "wrap" }, /*#__PURE__*/
    React.createElement("div", { className: "cols" }, /*#__PURE__*/
    React.createElement("div", { className: "col col-left col-links" }, /*#__PURE__*/
    React.createElement("ul", { className: "links" }, /*#__PURE__*/
    React.createElement("li", { className: "link" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://georgias.me/lazi.html",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Navigates to" }, "Website")), /*#__PURE__*/


    React.createElement("li", { className: "link" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://www.instagram.com/lazi_crochet/",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Navigates to" }, "Instagram")), /*#__PURE__*/
  

    React.createElement("li", { className: "link" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://www.pinkoi.com/store/lazi",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Navigates to" }, "Pinkoi")), /*#__PURE__*/


    React.createElement("li", { className: "link" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://myship.7-11.com.tw/general/detail/GM2211101546646",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Navigates to" }, "My yarns shop")))), /*#__PURE__*/






    React.createElement("div", { className: "col col-right col-image" }, /*#__PURE__*/
    React.createElement("img", {
      className: "astro",
      src: "resourse/lazi-event/round-02.png" }))))));





};

const Header = props => {
  const {
    navOpen,
    navIsAnimating,
    toggleNavHandler } =
  props;
  return /*#__PURE__*/(
    React.createElement("header", {
      className: "header" }, /*#__PURE__*/

    React.createElement("div", { className: "wrap" }, /*#__PURE__*/
    React.createElement("button", {
      className: `nav-button${navIsAnimating ? ' is-animating' : ''}`,
      type: "button",
      "aria-label": "Toggle Navigation",
      onClick: event => toggleNavHandler(event) }, /*#__PURE__*/

    React.createElement("span", { className: `label--nav-closed${!navOpen ? ' active' : ''}` }, "menu"), /*#__PURE__*/
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
    return /*#__PURE__*/(
      React.createElement("div", { className: "layout" }, /*#__PURE__*/
      React.createElement(Header, {
        navOpen: navOpen,
        toggleNavHandler: event => this.toggleNav(event),
        navIsAnimating: navIsAnimating }), /*#__PURE__*/

      React.createElement(NavigationMenu, {
        navOpen: navOpen,
        navIsAnimating: navIsAnimating,
        closeNav: event => this.closeNav(event),
        toggleNavHandler: event => this.toggleNav(event) }), /*#__PURE__*/

      React.createElement("main", { className: "page" }, /*#__PURE__*/
      React.createElement("div", { className: "wrap" }, /*#__PURE__*/
      React.createElement("div", { className: "title-section text-wrapper" }, /*#__PURE__*/
      React.createElement("h1", null, "Opening Party & 2022 1st crocehtWalk"), /*#__PURE__*/
      React.createElement("span", { className: "author" }, "Lazi"))), /*#__PURE__*/


      React.createElement("img", { className: "some-image", src: "resourse/lazi-event/002.png" }), /*#__PURE__*/
      React.createElement("div", { className: "wrap" }, /*#__PURE__*/
      React.createElement("div", { className: "text-body text-wrapper" }, /*#__PURE__*/
      React.createElement("p", null, "Time: 12/30 21:00-23:00"), /*#__PURE__*/
      React.createElement("p", null, "Entry Fee: NT 50/ 100 (one drink included)"), /*#__PURE__*/
      React.createElement("p", null, "Place: lazi crochet studio"), /*#__PURE__*/
      React.createElement("li", { className: "link" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://goo.gl/maps/4auJSPZRP4Bi97MR8",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Navigates to" }, "See on googleMap")), /*#__PURE__*/
      React.createElement("li", { className: "link" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://fb.me/e/3P5LpgQ40",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Navigates to" }, "Event Page")), /*#__PURE__*/


      
      React.createElement("p", null, "."), /*#__PURE__*/
      React.createElement("p", null, /*#__PURE__*/React.createElement("br", null), "“辣子工作室正式開幕”"),
      React.createElement("p", null, "8個鉤針創作者的參與，我們不比辣，我們比誰笑的最開心。"), /*#__PURE__*/
      React.createElement("p", null, /*#__PURE__*/React.createElement("br", null), "."),
      React.createElement("p", null, "辣子是一個2018冬日，以鉤針比基尼起家的鉤針品牌。2022在永和成立了實體工作室，期望不只是鉤針，若能聚集一群人，散播一些天馬行空或怪誕的點子，那應該會滿有趣的。"), /*#__PURE__*/
      
      )))));



      

  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));