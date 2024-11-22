(async () => {
    const src = browser.runtime.getURL('content.js');
    const contentScript = await import(src);
    contentScript.main();
  })();