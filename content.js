let prices = false;
let tags = false;
let brands = false;

document.onload = function (){main()};


setInterval(function () {main()}, 100)

function main(){
    removePrices()
    removeTags()
    removeBrands()
}


function removePrices(){
    getPrices()
    let ele = [];
    let priceClasses = ["aajkfN wOOxir _0m5pni KVKCn3 ZkIJC- r9BRio",
        "uqkIZw ka2E9k uMhVZi FxZV-M _6yVObe pVrzNP",
        "uqkIZw ka2E9k uMhVZi dgII7d _6yVObe _88STHx cMfkVL",
        "u-6V88 ka2E9k uMhVZi FxZV-M _6yVObe _88STHx CK43Vi"]
    priceClasses.forEach(cls => {ele = Array.prototype.concat.apply(ele, document.getElementsByClassName(cls));})

    for (let i = 0; i < ele.length; i++) {
        if (ele[i].tagName === "SPAN")
            if (prices) {
                if (ele[i].parentElement.style.display !== "none")
                    ele[i].parentElement.style.display = "none"
            } else if (ele[i].parentElement.style.display !== "")
                ele[i].parentElement.style.display = "";
    }
}


function removeTags(){
    getTags()
    let ele = [];
    let tagClasses = ["f3sRh_ Tytf8G PBR5VH"
        , "_0xLoFW P3OKTW _78xIQ-"
    ]
    tagClasses.forEach(cls => {ele = Array.prototype.concat.apply(ele, document.getElementsByClassName(cls));})

    for (let i = 0; i < ele.length; i++) {
        if (ele[i].tagName === "DIV")
            if (tags) {
                if (ele[i].parentElement.style.display !== "none")
                    ele[i].parentElement.style.display = "none"
            } else if (ele[i].parentElement.style.display !== "")
                ele[i].parentElement.style.display = "";
    }
}


function removeBrands(){
    getBrands()
    let ele = [];
    let tagClasses = ["u-6V88 ka2E9k uMhVZi FxZV-M Kq1JPK pVrzNP ZkIJC- r9BRio qXofat EKabf7 nBq1-s _2MyPg2"
        , "_7Cm1F9 ka2E9k uMhVZi dgII7d _6yVObe pVrzNP BDUtDm GhPDv6 PGk4Ze NELsER _9bYLON sUjaF4 _2LebSa"
        , "u-6V88 ka2E9k uMhVZi FxZV-M Kq1JPK pVrzNP ZkIJC- r9BRio qXofat EKabf7"
        // ,"u-6V88 ka2E9k uMhVZi FxZV-M _6yVObe pVrzNP"
        ,"_7Cm1F9 ka2E9k uMhVZi dgII7d _6yVObe pVrzNP ONArL- isiDul"
    ]
    tagClasses.forEach(cls => {ele = Array.prototype.concat.apply(ele, document.getElementsByClassName(cls));})

    for (let i = 0; i < ele.length; i++) {
        if (ele[i].tagName === "SPAN")
            if (brands) {
                if (ele[i].style.display !== "none")
                    ele[i].style.display = "none"
            } else if (ele[i].style.display !== "")
                ele[i].style.display = "";
    }
}


function getPrices() {try {chrome.storage.sync.get(['btn1'], function (result) {prices = result.btn1;});} catch (e) {}}
function getTags() {try {chrome.storage.sync.get(['btn2'], function (result) {tags = result.btn2;});} catch (e) {}}
function getBrands() {try {chrome.storage.sync.get(['btn3'], function (result) {brands = result.btn3;});} catch (e) {}}