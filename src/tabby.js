import { ATTRIBUTE_ACTIVE, ATTRIBUTE_BAR, ATTRIBUTE_CONTENT } from './constants';
import { getSiblings, hide, show } from './helper';
import { fadeOut, fadeIn } from './animations';

export class Tabby {

    constructor(container, options) {
        this.container = container;
        this.animation = options.animation || false; // 'fade'
        this.methods = options.methods || null;
        this.index = 0;
        this.items = [];

        this.initTabs();
    }

    collectItems() {



        return items;
    }

    doSwitch(index){

        const prev = this.items[this.index][1];
        const active = this.items[index][1];

        if (!this.animation) {
            hide(prev);
            show(active);
        } else {
            fadeOut(prev, function(el) {
                hide(prev);
                show(active);
                fadeIn(active);
            });
        }


        this.index = index;
    }

    /**
    * init Tabs
    *
    */
    initTabs() {
        const bars = getSiblings(
            this.container.querySelector(`[${ATTRIBUTE_BAR}]`)
        );

        const content = getSiblings(
            this.container.querySelector(`[${ATTRIBUTE_CONTENT}]`)
        );

        bars.forEach((bar, index) => {
            const attr = bar.getAttribute(ATTRIBUTE_BAR);
            const partner = content.filter(item => item.getAttribute(ATTRIBUTE_CONTENT) === attr)[0];

            if (index === 0) {
                partner.style.display = 'block';
            } else {
                partner.style.display = 'none';
            }

            this.items.push([bar,partner]);

            bar.addEventListener('click', () => {
                this.doSwitch(index);
            });
        });
    }



};
