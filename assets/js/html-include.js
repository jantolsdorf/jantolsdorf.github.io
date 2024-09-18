// Extend the HTMLElement class to create the web component
class IncludeHTML extends HTMLElement {

    /**
     * Get and render external HTML
     * @param  {String} path The path to the external HTML
     */
    async #getHTML(path) {

        // Get the page
        let request = await fetch(path);
        if (!request.ok) return;

        // Get the HTML
        this.innerHTML = await request.text();

    }

    /**
     * The class constructor object
     */
    constructor() {

        // Always call super first in constructor
        super();

        // Get the source HTML to load
        let path = this.getAttribute('path');
        if (!path) return;

        // Render HTML
        this.#getHTML(path);

    }

}

// Define the new web component
if ('customElements' in window) {
    customElements.define('include-html', IncludeHTML);
}