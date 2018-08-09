// ==UserScript==
// @name         Enable export on moqups
// @namespace    https://app.moqups.com/
// @version      1
// @description  remove the paywall block for export option on moqups website for easy sharing.
// @author       BluePie (aka) Gopinath
// @run-at       document-end
// @match        https://app.moqups.com/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @grant        none
// ==/UserScript==

jQuery('#export-view').click(()=>{
jQuery('.export__message div').empty().append('<div>This feature was activated for free..</div>');
jQuery('.export__actions__my-computer button').removeClass('disabled');
console.log('done');
});

