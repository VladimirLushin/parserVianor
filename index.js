const puppeteer = require('puppeteer');
const objectsToCsv = require('objects-to-csv');
const fileSys = require('fs');

(async () =>{
    const browser = await puppeteer.launch();
    const newPage = await browser.newPage();
    await newPage.goto("https://xn--80az8a.xn--d1aqf.xn--p1ai/%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B/%D0%B5%D0%B4%D0%B8%D0%BD%D1%8B%D0%B9-%D1%80%D0%B5%D0%B5%D1%81%D1%82%D1%80-%D0%B7%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%89%D0%B8%D0%BA%D0%BE%D0%B2?page=0&limit=5000");
    let links = await newPage.evaluate(()=>{
        links = Array.from(document.querySelectorAll(
            "#preloader > div.styles__Blur-gomtho-2.jdsdxs > div > div > div:nth-child(2) > a")).map((link) => link.href)
        return links;
    })
    fileSys.writeFile(
        'linkDeveloper.txt',
        JSON.stringify(links).split(',').join('\n'),
        function (err){
            if (err){
                console.error('crap')
            }
        }
    )
    console.log('fine')
   /* const csv = new objectsToCsv(links)
    let finalData = [];
    for (let link of links){
        try {
            await newPage.goto(link);
            const data = await newPage.evaluate(() => {
                const compName = document.querySelector(
                    "#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardHeader-sc-18q0hna-1.PCVnB > h1").innerText;
                let groupCompanyName;
                if (document.querySelector(
                    "#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardHeader-sc-18q0hna-1.PCVnB > h2 > a"
                ) !== null) {
                    groupCompanyName = document.querySelector(
                        "#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardHeader-sc-18q0hna-1.PCVnB > h2 > a"
                    ).innerText;
                } else groupCompanyName = null
                const regions = Array.from(document.querySelectorAll(
                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardContent-ub2eu9-3.bwhGQg > div:nth-child(1) > div.styles__BuilderCardRegions-gre9q0-0.ddEAuF > ul > p'
                )).map((region) => region.text)
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
                ).innerText.split(',').join(' ');
                const physAddress = document.querySelector(
                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardContent-ub2eu9-3.bwhGQg > div:nth-child(2) > div.styles__BuilderCardRequisitesWrapper-p65t3v-0.diLgkT > div > div:nth-child(4) > div > p.styles__TypographyP-sc-1txyxb-4.cemZOr'
                ).innerText.split(',').join(' ');
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
                const telephone = document.querySelector(
                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardContent-ub2eu9-3.bwhGQg > div:nth-child(2) > div.styles__BuilderCardContacts-erzrc1-0.cSetTc > div:nth-child(3) > p.styles__TypographyP-sc-1txyxb-4.cemZOr'
                ).innerText;
                const website = document.querySelector(
                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardContent-ub2eu9-3.bwhGQg > div:nth-child(2) > div.styles__BuilderCardContacts-erzrc1-0.cSetTc > div:nth-child(4) > div > a > span'
                ).innerText;
                const email = document.querySelector(
                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.Resize__ResizeContainer-gp3tqr-0.cfoYkK > div > div.styles__BuilderCardContent-ub2eu9-3.bwhGQg > div:nth-child(2) > div.styles__BuilderCardContacts-erzrc1-0.cSetTc > div:nth-child(5) > a > span'
                ).innerText;
                const contact = {
                    director,
                    telephone,
                    website,
                    email
                };
                return (orgData = {
                    compName,
                    groupCompanyName,
                    requisites,
                    contact,
                })
            })
            const beneficiars = await newPage.evaluate(()=>{
                return Array.from(document.querySelectorAll(
                    '#preloader > div.styles__Blur-gomtho-2.jdsdxs > div.HideDevice-sc-1be4jgn-0.fcCkvO > div:nth-child(1) > div > div:nth-child(2) > div'
                )).map((benefeciar) => {
                    return (benData = {
                        name: benefeciar.querySelector(
                            'div:nth-child(1) > div'
                        ).innerText,
                        part: benefeciar.querySelector(
                            'div:nth-child(2)'
                        ).innerText,
                        inn: benefeciar.querySelector(
                            'div:nth-child(3)'
                        ).innerText,
                        citizenship: benefeciar.querySelector(
                            'div:nth-child(4) > div'
                        ).innerText
                    })
                })
            })
            const founders = await newPage.evaluate(()=>{
                return Array.from(document.querySelectorAll(
                    '#preloader > div.styles__Blur-gomtho-2.jdsdxs > div.HideDevice-sc-1be4jgn-0.fcCkvO > div:nth-child(2) > div > div:nth-child(2) > div'
                )).map((founder) => {
                    return (founderData = {
                        name: founder.querySelector(
                            'div:nth-child(1) > div'
                        ).innerText,
                        voice: founder.querySelector(
                            'div:nth-child(2)'
                        ).innerText,
                        inn: founder.querySelector(
                            'div:nth-child(3)'
                        ).innerText,
                        citizenship: founder.querySelector(
                            'div:nth-child(4) > div'
                        ).innerText
                    })
                })
            })
                await newPage.click(
                    '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.styles__BuilderCardAdditionalInfo-ap4uek-0.dPevsy > div.styles__TabsWrapper-ap4uek-1.ZRSfd > div > ul > li:nth-child(2)'
                )
                const banks = await newPage.evaluate(()=>{
                    return Array.from(document.querySelectorAll(
                        '#preloader > div.styles__Blur-gomtho-2.jdsdxs > div.HideDevice-sc-1be4jgn-0.fcCkvO > div > div > div:nth-child(2) > div'
                    )).map((bank) => {
                        return (bankData = {
                            name: bank.querySelector(
                                'div:nth-child(1)'
                            ).innerText,
                            checkingAccount: bank.querySelector(
                                'div:nth-child(2)'
                            ).innerText,
                            rns: bank.querySelector(
                                'div:nth-child(3) > div > div > div > div > div > span'
                            ).innerText,
                            innBank: bank.querySelector(
                                'div:nth-child(4)'
                            ).innerText,
                            ogrnBank: bank.querySelector(
                                'div:nth-child(5)'
                            ).innerText,
                            bicBank: bank.querySelector(
                                'div.styles__Cell-sc-7809tj-0.fiRgDP.bik'
                            ).innerText,
                        })
                    })
                })

              await newPage.click(
                  '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.styles__BuilderCardAdditionalInfo-ap4uek-0.dPevsy > div.styles__TabsWrapper-ap4uek-1.ZRSfd > div > ul > li:nth-child(3)'
              )

              const projectDeclarations = await newPage.evaluate(() => {
                  return Array.from(document.querySelectorAll(
                      '#preloader > div.styles__Blur-gomtho-2.jdsdxs > div > div.HideDevice-sc-1be4jgn-0.fcCkvO > div > div > div:nth-child(2) > div'
                  )).map((linkDiv)=>{
                      return linkDiv.querySelector(
                          'a'
                      ).href
                  })
              })

         try {
              await newPage.click(
                  '#preloader > div.styles__Blur-gomtho-2.jdsdxs > div > div.styles__Row-x4ix4u-1.jqfVPt > div.styles__Wrapper-ymu3b-1.jxWlrt > div:nth-child(2) > button'
              )
          } catch (e) {
              console.log(e.toString())
          }
              const developersReporting = await newPage.evaluate(() => {
                  return Array.from(document.querySelectorAll(
                      '#preloader > div.styles__Blur-gomtho-2.jdsdxs > div > div.HideDevice-sc-1be4jgn-0.fcCkvO > div > div > div:nth-child(2) > div'
                  )).map((linkDiv) => {
                      return linkDiv.querySelector(
                          'a'
                      ).href
                  })
              })

            const docs = projectDeclarations.concat(developersReporting)
            await newPage.click(
                '#__next > div > div._layout__LayoutContainer-sc-5bcmug-0.gSkzck > div > div.styles__BuilderCardAdditionalInfo-ap4uek-0.dPevsy > div.styles__TabsWrapper-ap4uek-1.ZRSfd > div > ul > li:nth-child(4)'
            )
            const devAssociations = await newPage.evaluate(()=>{
                return Array.from(document.querySelectorAll(
                    '#preloader > div.styles__Blur-gomtho-2.jdsdxs > div.HideDevice-sc-1be4jgn-0.fcCkvO > div > div:nth-child(2) > div'
                )).map((devAssociation)=>{
                    return (devAssociationData = {
                        name: devAssociation.querySelector(
                            'div:nth-child(1)'
                        ).innerText,
                        inn: devAssociation.querySelector(
                            'div:nth-child(2)'
                        ).innerText,
                        type: devAssociation.querySelector(
                            'div:nth-child(3)'
                        ).innerText
                    })
                })
            })
            const allPageData = {
                data,
                beneficiars,
                founders,
                banks,
                docs,
                devAssociations
            }
            finalData.push(allPageData)
            console.log(allPageData)
        } catch (e) {
        }
    }
    await csv.toDisk('test.csv')
    console.log(await csv.toString())
    await newPage.screenshot({path:'ex.png'});
    */

    await browser.close();
})();