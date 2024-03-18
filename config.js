const config = {
    title: "MUNI PRENTR GO $BRRRR",
    heading: "MUNI PRENTR GO $BRRRR",
    bannerParagraph1: "Yo, fellow degens! Strap in for a wild ride through the crypto jungle because we're diving deep into the infamous money printer go brrrr phenomenon! This ain't your grandma's finance lesson; it's rollercoaster",
    bannerParagraph2: "Yo, fellow degens! Strap in for a wild ride through the crypto jungle because we're diving deep into the infamous money printer go brrrr phenomenon! This ain't your grandma's finance lesson; it's rollercoaster",
    aboutParagraph1: "But hold up, fam, 'cause this ain't just about economics. It's about memes taking over the financial world faster than a rug pull on a low-cap gem. \"Money printer go brrrr\" isn't just crypto generation, questioning the wisdom of endless money creation and its impact on our digital playground.",
    aboutParagraph2: "It's about memes taking over the financial world faster than a rug pull on a low-cap gem. \"Money printer go brrrr\" isn't just a phrase; it's a battle cry for the crypto generation, questioning the wisdom of endless money creation and its impact on our digital playground.",
    aboutParagraph3: "\"Money printer go brrrr\" isn't just a phrase; it's a battle cry for the crypto generation, questioning the wisdom of endless money creation and its impact on our digital playground.",
    aboutParagraph4: "",
    totalSupply: "250 000 000 $BRRRRR",
    advantage1: "100% SAFE LAUNCH",
    advantage2: "0% TAXES FOR BUY AND SELL",
    advantage3: "CONTRACT RENOUNSED",
    advantage4: "BUY ON RAYDIUM",
    advantage5: "",
    advantage6: "",
    telegramLink: "#",
    twitterLink: "#",
    dexScreenerLink: "#",
    solanaLink: "#",
    smartContractAddress: "CR4cbVdsBjSWqocJK2NpX4UwodZHaA1F4A1C8S3smK3R",
    template: "template-1",
    mode: "light",
}

function setElementValue(id, value) {
    const element = document.getElementById(id);
    if (element) {
        if (value.length > 0) {
            element.innerText = value;
        } else {
            element.remove();
        }
    }
}

function setAttributeById(id, attribute, value) {
    const element = document.getElementById(id);
    if (element) {
        if (value.length > 0) {
            element.setAttribute(attribute, value);
        } else {
            element.remove();
        }
    }
}

window.addEventListener('DOMContentLoaded', event => {
    document.title = config.title;
    setElementValue("heading", config.heading);
    setElementValue("bannerParagraph1", config.bannerParagraph1);
    setElementValue("bannerParagraph2", config.bannerParagraph2);
    setElementValue("smartContractAddress", config.smartContractAddress.substring(0, 4) + '...' + config.smartContractAddress.substring(config.smartContractAddress.length - 4));
    setElementValue("aboutParagraph1", config.aboutParagraph1);
    setElementValue("aboutParagraph2", config.aboutParagraph2);
    setElementValue("aboutParagraph3", config.aboutParagraph3);
    setElementValue("aboutParagraph4", config.aboutParagraph4);
    setElementValue("totalSupply", config.totalSupply);
    setElementValue("advantage1", config.advantage1);
    setElementValue("advantage2", config.advantage2);
    setElementValue("advantage3", config.advantage3);
    setElementValue("advantage4", config.advantage4);
    setElementValue("advantage5", config.advantage5);
    setElementValue("advantage6", config.advantage6);
    setElementValue("copyright", config.title);
    setAttributeById("copy-button", "title", config.smartContractAddress);
    setAttributeById("telegram-link", "href", config.telegramLink);
    setAttributeById("twitter-link", "href", config.twitterLink);
    setAttributeById("dex-screener-link", "href", config.dexScreenerLink);
    setAttributeById("solana-link", "href", config.solanaLink);
    setAttributeById("telegram-link-footer", "href", config.telegramLink);
    setAttributeById("twitter-link-footer", "href", config.twitterLink);
    setAttributeById("dex-screener-link-footer", "href", config.dexScreenerLink);
    setAttributeById("solana-link-footer", "href", config.solanaLink);
    document.querySelector('meta[name="description"]').setAttribute('config', config.heading);
    const body = document.getElementById("page-top");
    body.classList.add(config.template);
    body.classList.add(config.mode);
});

