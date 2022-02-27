const common = {
    massage: "Bạn cần phải nhập thông tin này",
    edit: "edit",
    delete: "delete",
    isRequire: function (iptValue, htmlElement) {
        if (iptValue == "") {
            htmlElement.html(this.massage);
            htmlElement.css("display", "block");
            return true;
        }
        htmlElement.css("display", "none");
        return false;
    },
    displaySelect: function (htmlElement, option, value) {
        htmlElement.html(htmlElement.html() + `<option value="${value}">${option}</option>`);
    },
    // dùng regex để replace
    fixXss: function (input) {
        input = `${input}`.replaceAll("&", "&amp;");
        input = input.replaceAll("<", "&lt;");
        input = input.replaceAll(">", "&gt;");
        input = input.replaceAll("'", "&apos;");
        input = input.replaceAll('"', "&quot;");
        return input;
    },
    sort: (arrObj, attr) => {
        arrObj.sort((itemA, itemB) => {
            return itemA[attr] - itemB[attr];
        })
    },
    getAttrUrl(url, attr) {
        return new URL(`${url}`).searchParams.get(`${attr}`);
    }
}