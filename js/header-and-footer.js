load();
async function load() {

    const header = await fetchElement("part/header.html", "nav");
    const footer = await fetchElement("part/footer.html", "footer");

    document.body.prepend(header);
    document.body.append(footer);

    if (header == null) console.error("Could not load header!");
    if (footer == null) console.error("Could not load footer!");

}

//https://stackoverflow.com/a/70483187
async function fetchElement(url, selector) {
    const data = await fetch(url).then(res => res.text());
    const parsed = new DOMParser().parseFromString(data, 'text/html');
    return parsed.querySelector(selector);
}