"use strict";
import clas from "../modules/class";
import loader from "../modules/loader";
import slider from "../modules/slider";
import tab from "../modules/tab";
import timer from "../modules/timer";
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
    clas()
    timer({clock: '.timer', deadline: '2024-02-11'})
})