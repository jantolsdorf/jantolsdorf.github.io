import { r as registerInstance, h, g as getElement } from './index-dee1f973.js';
import './Title-cbf0fa30.js';
import './Assets-3df9fab1.js';

const pageCreditsCss = "body.sc-trusd-piiq-page-credits{margin:0;font-family:Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-size:.8125rem;font-weight:400;line-height:1.5385;color:#333;text-align:left;background-color:#f5f5f5}.mt-100.sc-trusd-piiq-page-credits{margin-top:100px}[class*=bg-].sc-trusd-piiq-page-credits:not(.bg-transparent):not(.bg-light):not(.bg-white):not(.btn-outline):not(body){color:#fff}.btn.sc-trusd-piiq-page-credits{position:relative}";

const PageCredits = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * @description: Pass a prefix that is ignored by the router.
     * @example /ignorethis/
     */
    this.baseUrl = "";
    this.data = new Array(0);
    /**
     * @description Count this up to force re-rendering and update the view.
     */
    this.update = 0;
  }
  componentDidLoad() {
    let licensesByPackage = [];
    fetch('/files/licenses.json', { method: 'GET' })
      .then(response => response.json())
      .then(json => {
      for (var key in json) {
        let tmp = json[key];
        tmp.name = key;
        licensesByPackage.push(tmp);
      }
      licensesByPackage = licensesByPackage.sort((a, b) => (a.licenses > b.licenses ? 1 : -1));
      debugger;
      this.data = licensesByPackage;
    })
      .catch(error => console.error('error:', error));
  }
  render() {
    return (h("div", { class: "container-fluid d-flex justify-content-center mt-100" }, h("div", { class: "row" }, h("div", { class: "col-6" }, h("div", { class: "card" }, h("div", { class: "card-body text-left" }, h("h5", { class: "card-title" }, "Ressourcen"), h("ul", null, h("li", null, h("a", { href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' }, "Bootstrap 4.3.1")), h("li", null, h("a", { href: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' }, "Popper 1.14.7")), h("li", null, h("a", { href: 'https://code.jquery.com/jquery-3.6.0.slim.min.js' }, "JQuery 3.6.0")), h("li", null, h("a", { href: 'https://fontawesome.com' }, "FontAwesome 5.14.0")))))), h("div", { class: "col-6" }, h("div", { class: "card" }, h("div", { class: "card-body text-left" }, h("h5", { class: "card-title" }, "NPM Pakete"), h("ul", null, this.data.map((p) => h("li", null, h("a", { href: p.repository, target: '_blank' }, p.name), " | ", h("a", { href: "/files/licenses/" + p.licenses + ".txt", target: '_blank' }, p.licenses))))))))));
  }
  get el() { return getElement(this); }
};
PageCredits.route = "/credits";
PageCredits.style = pageCreditsCss;

export { PageCredits as P };
