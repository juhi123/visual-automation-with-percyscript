const PercyScript = require('@percy/script');

let URL= "";

if (process.env.PERCY_BRANCH === 'master') {
  URL = "https://sevencoloursblog.wordpress.com/"
}
else {
  URL = "https://sevencoloursblog.wordpress.com/"
}

//Home Page Test
PercyScript.run(async (page, percySnapshot) => {
  await page.goto(URL);
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor('body');
  await percySnapshot('homepage');
});

//Single Post Test
PercyScript.run(async (page, percySnapshot) => {
  await page.goto(URL + '/2020/05/28/good-work-good-people-its-not-just-a-tagline/');
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor('body');
  await percySnapshot('SinglePage');
});

//Archive Page Tests
PercyScript.run(async (page, percySnapshot) => {
  await page.goto(URL + '/category/automation-testing/');
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor('body');
  await percySnapshot('Archive Post');
});

