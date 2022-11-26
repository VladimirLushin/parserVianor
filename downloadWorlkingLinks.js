const puppeteer = require('puppeteer');
const fileSys = require('fs');
const objectsToCsv = require('objects-to-csv');

(async () => {
    const baseLink = 'https://xn--80az8a.xn--d1aqf.xn--p1ai/%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BA/%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2/%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA?objStatus=1&'
    const browser = await puppeteer.launch();
    const newPage = await browser.newPage();
    newPage.setDefaultNavigationTimeout(40000)
    let links = []
    for (let i=0;i<176;i++)
    {

        await newPage.goto(baseLink + "page=" + i + "&limit=10")
        links.push(...await newPage.evaluate(()=>{
            return Array.from(document.querySelectorAll(
                '#preloader > div.styles__Blur-gomtho-2.jdsdxs > div:nth-child(3) > div.HideDevice-sc-1be4jgn-0.bpozqJ > div > div > div:nth-child(2) > a'
            )).map((link)=>link.href)
        }))
        console.log(i + " из "+ 176)
    }
    fileSys.writeFile(
        'linksProblemBuildings.txt',
        JSON.stringify(links).split(',').join('\n'),
        (err)=>{
            if (err){
                console.log('eeee')
            }
        }
    )
    console.log(links)
    await browser.close()
})()