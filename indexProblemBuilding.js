const puppeteer = require('puppeteer');
const fileSys = require('fs');
const objectsToCsv = require('objects-to-csv');

(async () => {
    const browser = await puppeteer.launch();
    const newPage = await browser.newPage();
    newPage.setDefaultNavigationTimeout(60000)
    let links = fileSys.readFileSync('linksProblemBuildings.txt').toString().split('\n')
    let finalData = []
    for (let link of links){
        try {
            await newPage.goto(link);
            const mainInfo = await newPage.evaluate(() => {
                return ({
                    id: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-eng632-0.styles__Container-sc-1bkqfca-0.dnjlPb.gEHkVV > div.styles__Row-eng632-1.styles__Row-sc-1bkqfca-1.jYTPtA.fNTLce > div.styles__StatusIDRow-eng632-5.fltMgv > p'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-eng632-0.styles__Container-sc-1bkqfca-0.dnjlPb.gEHkVV > div.styles__Row-eng632-1.styles__Row-sc-1bkqfca-1.jYTPtA.fNTLce > div.styles__StatusIDRow-eng632-5.fltMgv > p'
                    ).innerText,
                    name: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-eng632-0.styles__Container-sc-1bkqfca-0.dnjlPb.gEHkVV > h1'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-eng632-0.styles__Container-sc-1bkqfca-0.dnjlPb.gEHkVV > h1'
                    ).innerText.split(',').join(' '),
                    address: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-eng632-0.styles__Container-sc-1bkqfca-0.dnjlPb.gEHkVV > div.styles__StatusRow-eng632-4.gsBWsk > a > p'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-eng632-0.styles__Container-sc-1bkqfca-0.dnjlPb.gEHkVV > div.styles__StatusRow-eng632-4.gsBWsk > a > p'
                    ).innerText.split(',').join(' '),
                    developer: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__MainBlock-sc-49owp6-0.kDLhGu > div.styles__Container-sc-1a4huzf-0.buNqkR > div.styles__Container-sc-11dacgc-1.jQOYvq > div:nth-child(1) > div.styles__Value-sc-862a2m-2.bhvXgy > div > div > span > a'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__MainBlock-sc-49owp6-0.kDLhGu > div.styles__Container-sc-1a4huzf-0.buNqkR > div.styles__Container-sc-11dacgc-1.jQOYvq > div:nth-child(1) > div.styles__Value-sc-862a2m-2.bhvXgy > div > div > span > a'
                    ).href,
                    groupOfCompany: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__MainBlock-sc-49owp6-0.kDLhGu > div.styles__Container-sc-1a4huzf-0.buNqkR > div.styles__Container-sc-11dacgc-1.jQOYvq > div:nth-child(2) > div.styles__Value-sc-862a2m-2.bhvXgy > div > div > span > a'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__MainBlock-sc-49owp6-0.kDLhGu > div.styles__Container-sc-1a4huzf-0.buNqkR > div.styles__Container-sc-11dacgc-1.jQOYvq > div:nth-child(2) > div.styles__Value-sc-862a2m-2.bhvXgy > div > div > span > a'
                    ).href,
                    enterExplotation: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__MainBlock-sc-49owp6-0.kDLhGu > div.styles__Container-sc-1a4huzf-0.buNqkR > div.styles__Container-sc-11dacgc-1.jQOYvq > div:nth-child(3) > div.styles__Value-sc-862a2m-2.bhvXgy'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__MainBlock-sc-49owp6-0.kDLhGu > div.styles__Container-sc-1a4huzf-0.buNqkR > div.styles__Container-sc-11dacgc-1.jQOYvq > div:nth-child(3) > div.styles__Value-sc-862a2m-2.bhvXgy'
                    ).innerText,
                    cadastrNum: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-sc-73frh0-3.styles__AdditionalInfoContainer-kcnr1v-0.dBSzei.iSbJnd > div.styles__CadastralWrapper-kcnr1v-3.dvSyzu > div > div'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-sc-73frh0-3.styles__AdditionalInfoContainer-kcnr1v-0.dBSzei.iSbJnd > div.styles__CadastralWrapper-kcnr1v-3.dvSyzu > div > div'
                    ).innerText,
                    floorsNum: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-sc-73frh0-3.styles__AdditionalInfoContainer-kcnr1v-0.dBSzei.iSbJnd > div:nth-child(2) > p.styles__Value-sc-73frh0-2.bvaXNC'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-sc-73frh0-3.styles__AdditionalInfoContainer-kcnr1v-0.dBSzei.iSbJnd > div:nth-child(2) > p.styles__Value-sc-73frh0-2.bvaXNC'
                    ).innerText,
                    livingRoom: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-sc-73frh0-3.styles__AdditionalInfoContainer-kcnr1v-0.dBSzei.iSbJnd > div:nth-child(3) > p.styles__Value-sc-73frh0-2.bvaXNC'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-sc-73frh0-3.styles__AdditionalInfoContainer-kcnr1v-0.dBSzei.iSbJnd > div:nth-child(3) > p.styles__Value-sc-73frh0-2.bvaXNC'
                    ).innerText,
                    livingArea: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-sc-73frh0-3.styles__AdditionalInfoContainer-kcnr1v-0.dBSzei.iSbJnd > div:nth-child(4) > p.styles__Value-sc-73frh0-2.bvaXNC'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-sc-73frh0-3.styles__AdditionalInfoContainer-kcnr1v-0.dBSzei.iSbJnd > div:nth-child(4) > p.styles__Value-sc-73frh0-2.bvaXNC'
                    ).innerText,
                    unlivingRoom: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-sc-73frh0-3.styles__AdditionalInfoContainer-kcnr1v-0.dBSzei.iSbJnd > div:nth-child(5) > p.styles__Value-sc-73frh0-2.bvaXNC'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-sc-73frh0-3.styles__AdditionalInfoContainer-kcnr1v-0.dBSzei.iSbJnd > div:nth-child(5) > p.styles__Value-sc-73frh0-2.bvaXNC'
                    ).innerText,
                    unlivingArea: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-sc-73frh0-3.styles__AdditionalInfoContainer-kcnr1v-0.dBSzei.iSbJnd > div:nth-child(6) > p.styles__Value-sc-73frh0-2.bvaXNC'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-sc-73frh0-3.styles__AdditionalInfoContainer-kcnr1v-0.dBSzei.iSbJnd > div:nth-child(6) > p.styles__Value-sc-73frh0-2.bvaXNC'
                    ).innerText,
                    parkPlaces: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-sc-73frh0-3.styles__AdditionalInfoContainer-kcnr1v-0.dBSzei.iSbJnd > div:nth-child(7) > p.styles__Value-sc-73frh0-2.bvaXNC'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-sc-73frh0-3.styles__AdditionalInfoContainer-kcnr1v-0.dBSzei.iSbJnd > div:nth-child(7) > p.styles__Value-sc-73frh0-2.bvaXNC'
                    ).innerText,
                    parkArea: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-sc-73frh0-3.styles__AdditionalInfoContainer-kcnr1v-0.dBSzei.iSbJnd > div:nth-child(8) > p.styles__Value-sc-73frh0-2.bvaXNC'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Container-sc-73frh0-3.styles__AdditionalInfoContainer-kcnr1v-0.dBSzei.iSbJnd > div:nth-child(8) > p.styles__Value-sc-73frh0-2.bvaXNC'
                    ).innerText
                })
            })
            await newPage.click('#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Wrapper-sc-14xxvoh-0.imFNPW > div.styles__Header-sc-14xxvoh-1.bFXMRi > div.HideDevice-sc-1be4jgn-0.fcCkvO > div > div > div')
            const docsLink = await newPage.evaluate(() => {
                return document.querySelector(
                    '#close-button > a'
                ) === null ? null : document.querySelector(
                    '#close-button > a'
                ).href
            })
            await newPage.click('#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__TabsContainer-sc-49owp6-2.jfMEIl > div > ul > li.styles__TabsItem-jsq7op-2.kmxAUw')
            const flats = await newPage.evaluate(() => {
                return ({
                    oneRoomFlatQnt: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-19lmir6-0.feiFvm > div:nth-child(1) > div:nth-child(2)'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-19lmir6-0.feiFvm > div:nth-child(1) > div:nth-child(2)'
                    ).innerText,
                    twoRoomFlatQnt: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-19lmir6-0.feiFvm > div:nth-child(2) > div:nth-child(2)'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-19lmir6-0.feiFvm > div:nth-child(2) > div:nth-child(2)'
                    ).innerText,
                    threeRoomFlatQnt: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-19lmir6-0.feiFvm > div:nth-child(3) > div:nth-child(2)'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-19lmir6-0.feiFvm > div:nth-child(3) > div:nth-child(2)'
                    ).innerText,
                    fourPlusRoomFlatQnt: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-19lmir6-0.feiFvm > div:nth-child(4) > div:nth-child(2)'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-19lmir6-0.feiFvm > div:nth-child(4) > div:nth-child(2)'
                    ).innerText,
                    entranceQnt: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-16lwmo5-0.PaRso > div:nth-child(2) > p'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-16lwmo5-0.PaRso > div:nth-child(2) > p'
                    ).innerText,
                    averFlatQntPerFloor: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-16lwmo5-0.PaRso > div:nth-child(1) > p'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-16lwmo5-0.PaRso > div:nth-child(1) > p'
                    ).innerText,
                    leavingFirstFloor: document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-16lwmo5-0.PaRso > div:nth-child(3) > p'
                    ) === null ? null : document.querySelector(
                        '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div > div.styles__Wrapper-so3v7-1.bBOFkC > div.styles__Wrapper-sc-1qr0zm2-0.emjxIM > div.styles__Wrapper-sc-16lwmo5-0.PaRso > div:nth-child(3) > p'
                    ).innerText
                })
            })
            const data = {
                mainInfo,
                docsLink,
                flats
            }
            console.log(data)
            finalData.push(data)
        } catch (e) {
        }
    }
    const csv = new objectsToCsv(finalData)
    console.log(await csv.toString())
    await csv.toDisk('testProblemBuildings.csv')
    await browser.close()
})()
