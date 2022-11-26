const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const newPage = await browser.newPage();
    await newPage.goto("https://xn--80az8a.xn--d1aqf.xn--p1ai/%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B/%D0%B5%D0%B4%D0%B8%D0%BD%D1%8B%D0%B9-%D1%80%D0%B5%D0%B5%D1%81%D1%82%D1%80-%D0%B7%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%89%D0%B8%D0%BA%D0%BE%D0%B2/%D0%B7%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%89%D0%B8%D0%BA/7424");
    const data = await newPage.evaluate(()=>{
        const compName = document.querySelector(
            "#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardHeader-sc-18q0hna-1.PCVnB > h1").innerText;
        let groupCompanyName;
        if (document.querySelector(
            "#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardHeader-sc-18q0hna-1.PCVnB > h2 > a"
        ) !== null){
            groupCompanyName = document.querySelector(
                "#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardHeader-sc-18q0hna-1.PCVnB > h2 > a"
            ).innerText;
        } else groupCompanyName = null
        const regions =Array.from(document.querySelectorAll(
            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardContent-ub2eu9-3.bwhGQg > div:nth-child(1) > div.styles__BuilderCardRegions-gre9q0-0.ddEAuF > ul > p'
        )).map((region)=>region.text)
        const inn = document.querySelector(
            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardContent-ub2eu9-3.bwhGQg > div:nth-child(2) > div.styles__BuilderCardRequisitesWrapper-p65t3v-0.diLgkT > div > div:nth-child(1) > div:nth-child(1) > div > p.styles__TypographyP-sc-1txyxb-4.cemZOr'
        ).innerText;
        const kpp = document.querySelector(
            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardContent-ub2eu9-3.bwhGQg > div:nth-child(2) > div.styles__BuilderCardRequisitesWrapper-p65t3v-0.diLgkT > div > div:nth-child(1) > div:nth-child(2) > div > p.styles__TypographyP-sc-1txyxb-4.cemZOr'
        ).innerText;
        const ogrn = document.querySelector(
            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardContent-ub2eu9-3.bwhGQg > div:nth-child(2) > div.styles__BuilderCardRequisitesWrapper-p65t3v-0.diLgkT > div > div:nth-child(1) > div:nth-child(3) > div > p.styles__TypographyP-sc-1txyxb-4.cemZOr'
        ).innerText;
        const fullName = document.querySelector(
            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardContent-ub2eu9-3.bwhGQg > div:nth-child(2) > div.styles__BuilderCardRequisitesWrapper-p65t3v-0.diLgkT > div > div:nth-child(2) > div > p.styles__TypographyP-sc-1txyxb-4.cemZOr'
        ).innerText;
        const legalAddress = document.querySelector(
            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardContent-ub2eu9-3.bwhGQg > div:nth-child(2) > div.styles__BuilderCardRequisitesWrapper-p65t3v-0.diLgkT > div > div:nth-child(3) > div > p.styles__TypographyP-sc-1txyxb-4.cemZOr'
        ).innerText;
        const physAddress = document.querySelector(
            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardContent-ub2eu9-3.bwhGQg > div:nth-child(2) > div.styles__BuilderCardRequisitesWrapper-p65t3v-0.diLgkT > div > div:nth-child(4) > div > p.styles__TypographyP-sc-1txyxb-4.cemZOr'
        ).innerText;
        const requisites = {
            inn,
            kpp,
            ogrn,
            fullName,
            legalAddress,
            physAddress
        };
        const director = document.querySelector(
            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardContent-ub2eu9-3.bwhGQg > div:nth-child(2) > div.styles__BuilderCardContacts-erzrc1-0.cSetTc > div:nth-child(2) > p.styles__TypographyP-sc-1txyxb-4.cemZOr'
        ).innerText;
            })


})