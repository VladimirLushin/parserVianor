const puppeteer = require('puppeteer');
const fileSys = require('fs');
const objectsToCsv = require('objects-to-csv');
const bluebird = require("bluebird");
const withBrowser = async (fn) => {
    const browser = await puppeteer.launch({/* ... */});
    try {
        return await fn(browser);
    } finally {
        await browser.close();
    }
}
const withPage = (browser) => async (fn) => {
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(160000)
    try {
        return await fn(page);
    } finally {
        await page.close();
    }
}
(async () =>{
    let finalData = []
    let links = fileSys.readFileSync('linksDoneBuildings.txt').toString().split('\n')
    const results = await withBrowser(async (browser) => {
        return bluebird.map(links, async (link) => {
            return withPage(browser)(async (newPage) => {
                try {
                    await newPage.goto(link);
                    const mainChars = await newPage.evaluate(() => {
                        const estateClass = document.querySelector(
                            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(1) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div:nth-child(1) > div:nth-child(1) > span:nth-child(2)'
                        ) === null ? null : document.querySelector(
                            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(1) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div:nth-child(1) > div:nth-child(1) > span:nth-child(2)'
                        ) === null ? null : document.querySelector(
                            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(1) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div:nth-child(1) > div:nth-child(1) > span:nth-child(2)'
                        ).innerText;
                        const wallsMaterial = document.querySelector(
                            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(1) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div:nth-child(1) > div:nth-child(2) > span:nth-child(2)'
                        ) === null ? null : document.querySelector(
                            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(1) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div:nth-child(1) > div:nth-child(2) > span:nth-child(2)'
                        ).innerText;
                        const decorType = document.querySelector(
                            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(1) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div:nth-child(1) > div:nth-child(3) > span:nth-child(2)'
                        ) === null ? null : document.querySelector(
                            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(1) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div:nth-child(1) > div:nth-child(3) > span:nth-child(2)'
                        ).innerText;
                        const freeLayout = document.querySelector(
                            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(1) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div:nth-child(1) > div:nth-child(4) > span:nth-child(2)'
                        ) === null ? null : document.querySelector(
                            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(1) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div:nth-child(1) > div:nth-child(4) > span:nth-child(2)'
                        ).innerText;
                        const floorsQnt = document.querySelector(
                            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(1) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div:nth-child(2) > div:nth-child(1) > span:nth-child(2)'
                        ) === null ? null : document.querySelector(
                            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(1) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div:nth-child(2) > div:nth-child(1) > span:nth-child(2)'
                        ).innerText;
                        const flatsQnt = document.querySelector(
                            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(1) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)'
                        ) === null ? null : document.querySelector(
                            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(1) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)'
                        ).innerText;
                        const livingArea = document.querySelector(
                            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(1) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div:nth-child(2) > div:nth-child(3) > span:nth-child(2)'
                        ) === null ? null : document.querySelector(
                            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(1) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div:nth-child(2) > div:nth-child(3) > span:nth-child(2)'
                        ).innerText;
                        const ceilingHeight = document.querySelector(
                            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(1) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)'
                        ) === null ? null : document.querySelector(
                            '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(1) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)'
                        ).innerText;
                        return (temp = {
                            estateClass,
                            wallsMaterial,
                            decorType,
                            freeLayout,
                            floorsQnt,
                            flatsQnt,
                            livingArea,
                            ceilingHeight
                        })
                    })
                    const yardImprovement = await newPage.evaluate(() => {
                        return ({
                            cycleRoad: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(2) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(1) > span:nth-child(2)'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(2) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(1) > span:nth-child(2)'
                            ).innerText,
                            kidsAreaQnt: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(2) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(2) > span:nth-child(2)'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(2) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(2) > span:nth-child(2)'
                            ).innerText,
                            sportAreaQnt: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(2) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(3) > span:nth-child(2)'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(2) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(3) > span:nth-child(2)'
                            ).innerText,
                            garbageAreaQnt: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(2) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(4) > span:nth-child(2)'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(2) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(4) > span:nth-child(2)'
                            ).innerText
                        })
                    })
                    const parkingSpace = await newPage.evaluate(() => {
                        return ({
                            parkPlaceQnt: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(3) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(1) > span:nth-child(2)'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(3) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(1) > span:nth-child(2)'
                            ).innerText,
                            guestLocalPlc: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(3) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(2) > span:nth-child(2)'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(3) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(2) > span:nth-child(2)'
                            ).innerText,
                            guestOutPlc: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(3) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(3) > span:nth-child(2)'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(3) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(3) > span:nth-child(2)'
                            ).innerText
                        })
                    })
                    const barrierFreeEnvironment = await newPage.evaluate(() => {
                        return ({
                            pandus: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(4) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(1) > span:nth-child(2)'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(4) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(1) > span:nth-child(2)'
                            ).innerText,
                            loweringPlatforms: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(4) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(2) > span:nth-child(2)'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(4) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(2) > span:nth-child(2)'
                            ).innerText,
                            wheelchairLifts: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(4) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(3) > span:nth-child(2)'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(4) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(3) > span:nth-child(2)'
                            ).innerText
                        })
                    })
                    const liftInfo = await newPage.evaluate(() => {
                        return ({
                            entranceQnt: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(5) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(1) > span:nth-child(2)'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(5) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(1) > span:nth-child(2)'
                            ).innerText,
                            passengersLiftQnt: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(5) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(2) > span:nth-child(2)'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(5) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(2) > span:nth-child(2)'
                            ).innerText,
                            cargoAndPassLiftQnt: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(5) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(3) > span:nth-child(2)'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-2i4wxn-0.gNDvQd > div:nth-child(5) > div.styles__ContentWrapper-sc-1fyyfia-1.kMFbIx > div > div:nth-child(3) > span:nth-child(2)'
                            ).innerText,
                        })
                    })
                    const mainInfo = await newPage.evaluate(() => {
                        return ({
                            id: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Container-eng632-0.dnjlPb > div.styles__Row-eng632-1.jYTPtA > div > p'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Container-eng632-0.dnjlPb > div.styles__Row-eng632-1.jYTPtA > div > p'
                            ).innerText,
                            name: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Container-eng632-0.dnjlPb > h1'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Container-eng632-0.dnjlPb > h1'
                            ).innerText,
                            address: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Container-eng632-0.dnjlPb > div.styles__StatusRow-eng632-4.gsBWsk > a > p'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Container-eng632-0.dnjlPb > div.styles__StatusRow-eng632-4.gsBWsk > a > p'
                            ).innerText,
                            classEnergyEfficence: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__MainBlock-sc-7a8ymt-0.hGlUnj > div.styles__GalleryWrapper-sc-7a8ymt-1.jdZQWg > div.styles__EnergyEfficiencyClass-sc-7a8ymt-5.eUVcFs > div.styles__Title-sc-7a8ymt-7.jOHTTC'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__MainBlock-sc-7a8ymt-0.hGlUnj > div.styles__GalleryWrapper-sc-7a8ymt-1.jdZQWg > div.styles__EnergyEfficiencyClass-sc-7a8ymt-5.eUVcFs > div.styles__Title-sc-7a8ymt-7.jOHTTC'
                            ).innerText,
                            generalContracts: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__MainBlock-sc-7a8ymt-0.hGlUnj > div.styles__GalleryWrapper-sc-7a8ymt-1.jdZQWg > div.styles__Wrapper-uaqryz-0.lCwyv'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__MainBlock-sc-7a8ymt-0.hGlUnj > div.styles__GalleryWrapper-sc-7a8ymt-1.jdZQWg > div.styles__Wrapper-uaqryz-0.lCwyv'
                            ).innerText,
                            developer: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__MainBlock-sc-7a8ymt-0.hGlUnj > div.styles__Container-sc-48mxk2-0.gjdqiS > div.styles__Container-kydjcf-1.bwsOTV > div:nth-child(1) > div.styles__Value-sc-13pfgqd-2.hVswsH > div > div > span > a'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__MainBlock-sc-7a8ymt-0.hGlUnj > div.styles__Container-sc-48mxk2-0.gjdqiS > div.styles__Container-kydjcf-1.bwsOTV > div:nth-child(1) > div.styles__Value-sc-13pfgqd-2.hVswsH > div > div > span > a'
                            ).href,
                            groupOfCompany: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__MainBlock-sc-7a8ymt-0.hGlUnj > div.styles__Container-sc-48mxk2-0.gjdqiS > div.styles__Container-kydjcf-1.bwsOTV > div:nth-child(2) > div.styles__Value-sc-13pfgqd-2.hVswsH > div > div > span > a'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__MainBlock-sc-7a8ymt-0.hGlUnj > div.styles__Container-sc-48mxk2-0.gjdqiS > div.styles__Container-kydjcf-1.bwsOTV > div:nth-child(2) > div.styles__Value-sc-13pfgqd-2.hVswsH > div > div > span > a'
                            ).href,
                            enterAcception: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__MainBlock-sc-7a8ymt-0.hGlUnj > div.styles__Container-sc-48mxk2-0.gjdqiS > div.styles__Container-kydjcf-1.bwsOTV > div:nth-child(3) > div.styles__Value-sc-13pfgqd-2.hVswsH > div > a'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__MainBlock-sc-7a8ymt-0.hGlUnj > div.styles__Container-sc-48mxk2-0.gjdqiS > div.styles__Container-kydjcf-1.bwsOTV > div:nth-child(3) > div.styles__Value-sc-13pfgqd-2.hVswsH > div > a'
                            ).href,
                            enterExplotation: document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__MainBlock-sc-7a8ymt-0.hGlUnj > div.styles__Container-sc-48mxk2-0.gjdqiS > div.styles__Container-sc-17wkiw0-0.juxYqm > div > div.styles__Value-sc-13pfgqd-2.hVswsH'
                            ) === null ? null : document.querySelector(
                                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__MainBlock-sc-7a8ymt-0.hGlUnj > div.styles__Container-sc-48mxk2-0.gjdqiS > div.styles__Container-sc-17wkiw0-0.juxYqm > div > div.styles__Value-sc-13pfgqd-2.hVswsH'
                            ).innerText
                        })
                    })
                    let docsLink = null
                    try {
                        await newPage.click('#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-sc-14xxvoh-0.imFNPW > div.styles__Header-sc-14xxvoh-1.bFXMRi > div.HideDevice-sc-1be4jgn-0.fcCkvO > div > div')
                        docsLink = await newPage.evaluate(() => {
                            return document.querySelector(
                                '#close-button > a'
                            ) === null ? null : document.querySelector(
                                '#close-button > a'
                            ).href
                        })
                    } catch (e) {
                        docsLink = null
                    }
                    let flats = null
                    try {
                        await newPage.click('#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__TabsContainer-sc-7a8ymt-3.gEPpcA > div > ul > li.styles__TabsItem-jsq7op-2.kmxAUw')
                        flats = await newPage.evaluate(() => {
                            return ({
                                oneRoomFlatQnt: document.querySelector(
                                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-19lmir6-0.feiFvm > div:nth-child(1) > div:nth-child(2)'
                                ) === null ? null : document.querySelector(
                                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-19lmir6-0.feiFvm > div:nth-child(1) > div:nth-child(2)'
                                ).innerText,
                                twoRoomFlatQnt: document.querySelector(
                                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-19lmir6-0.feiFvm > div:nth-child(2) > div:nth-child(2)'
                                ) === null ? null : document.querySelector(
                                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-19lmir6-0.feiFvm > div:nth-child(2) > div:nth-child(2)'
                                ).innerText,
                                threeRoomFlatQnt: document.querySelector(
                                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-19lmir6-0.feiFvm > div:nth-child(3) > div:nth-child(2)'
                                ) === null ? null : document.querySelector(
                                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-19lmir6-0.feiFvm > div:nth-child(3) > div:nth-child(2)'
                                ).innerText,
                                fourPlusRoomFlatQnt: document.querySelector(
                                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-19lmir6-0.feiFvm > div:nth-child(4) > div:nth-child(2)'
                                ) === null ? null : document.querySelector(
                                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-19lmir6-0.feiFvm > div:nth-child(4) > div:nth-child(2)'
                                ).innerText,
                                entranceQnt: document.querySelector(
                                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-16lwmo5-0.PaRso > div:nth-child(2) > p'
                                ) === null ? null : document.querySelector(
                                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-16lwmo5-0.PaRso > div:nth-child(2) > p'
                                ).innerText,
                                averFlatQntPerFloor: document.querySelector(
                                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-16lwmo5-0.PaRso > div:nth-child(1) > p'
                                ) === null ? null : document.querySelector(
                                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-16lwmo5-0.PaRso > div:nth-child(1) > p'
                                ).innerText,
                                leavingFirstFloor: document.querySelector(
                                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-16lwmo5-0.PaRso > div:nth-child(3) > p'
                                ) === null ? null : document.querySelector(
                                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__OverlayWrapper-cki981-0.howIcS > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-16lwmo5-0.PaRso > div:nth-child(3) > p'
                                ).innerText
                            })
                        })
                    } catch (e) {
                        flats = null
                    }
                    const data = {
                        mainChars,
                        yardImprovement,
                        parkingSpace,
                        barrierFreeEnvironment,
                        liftInfo,
                        mainInfo,
                        docsLink,
                        flats
                    }
                    console.log(data)
                    finalData.push(data)
                    return data
                } catch (e) {
                    console.error(e)
                }
            });
        }, {concurrency: 5});
    });
    const csv = new objectsToCsv(finalData)
    await csv.toDisk('testDoneBuildings.csv')
    console.log(await csv.toString())
})()



