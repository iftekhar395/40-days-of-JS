# 40 Days of JavaScript 
# Day 1
Topics Covered
1. Parsing Activity of an HTML Page

    Browsers parse an HTML page in a top-down approach.
    The DOM is constructed as the browser reads HTML.
    CSS and JavaScript can block rendering depending on how they are included.

2. Async

    <script async> allows JavaScript to load in parallel with HTML parsing.
    The script executes as soon as it’s downloaded, without blocking page rendering.
    Best for scripts that don’t depend on the DOM or other scripts.

3. Defer

    <script defer> ensures the script is downloaded in parallel but executed only after the HTML is fully parsed.
    Scripts with defer maintain execution order if multiple are used.
    Best for scripts that interact with the DOM.

4. Reparse at document.write()

    Using document.write() while the page is loading inserts content directly into the document.
    If used after the page has loaded, it causes the page to be reparsed and may overwrite existing content.
    It’s generally discouraged due to performance issues and modern alternatives like innerHTML.
