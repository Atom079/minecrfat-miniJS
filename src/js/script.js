"use strict";
import loader from "../modules/loader";
import slider from "../modules/slider";
import tab from "../modules/tab";
window.addEventListener('DOMContentLoaded', ()=>{
    loader('.loader')
    tab({
        tabParentSelector: '.tabheader__items',
        tabSelector: '.tabheader__item',
        activeClass: 'tabheader__item_active',
        tabcontentSelector: '.tabcontent'
    })
    slider({
        wrapper: '.slider-wrapper',
        field: '.slider-inner',
        nextBtn: '#next',
        prevBtn: '#prev',
        slideSelector: '.slide',
        totalCounter: '#total',
        currentCounter: '#current',
    })
})