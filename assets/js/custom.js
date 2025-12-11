debugger
function updateMediaList(ul) {
    const mediaString = ul.getAttribute('data-media')?.trim() || "";

    if (!mediaString || mediaString === "+MEDIA+") {
        ul.innerHTML = "";
        return;
    }

    const entries = mediaString
        .split(";")
        .map(x => x.trim())
        .filter(x => x.length > 0);

    ul.innerHTML = entries.map(entry => {
        const [label, url] = entry.split("|").map(x => x.trim());
        return url
            ? `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a></li>`
            : `<li>${label}</li>`;
    }).join("");
}

const observer = new MutationObserver(mutations => {
    mutations.forEach(m => {
        if (m.type === "attributes" && m.attributeName === "data-media") {
            updateMediaList(m.target);
        }
    });
});

document.querySelectorAll('ul.bibtexVar[data-media]').forEach(ul => {
    updateMediaList(ul);

    observer.observe(ul, {
        attributes: true,
        attributeFilter: ["data-media"]
    });
});