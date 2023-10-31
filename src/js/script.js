"use strict";
import loader from "../modules/loader";
import tab from "../modules/tab";
window.addEventListener('DOMContentLoaded', ()=>{
    loader('.loader')
    tab({
        tabParentSelector: '.tabheader__items',
        tabSelector: '.tabheader__item',
        activeClass: 'tabheader__item_active',
        tabcontentSelector: '.tabcontent'
    })
})