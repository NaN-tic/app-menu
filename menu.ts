import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',

})
/**
 * Menu page.
 * This class display the different menu options and go to their
 * views once they are clicked.
 *
 * This is the base of all the menus, all menus should inherit from this class
 *
 * DO NOT MODIFY THIS CLASS, EXTEND IT INSTEAD
 */
export class MenuPage {
    /**
     * Array contaning the menus
     * @type {Array}
     */
    menu: Array<{name: string, page: any, params?: {}, disabled?: boolean}>;
    title: string;

    constructor(public navCtrl: NavController) {
    }

    /**
     * Listener for the menu buttons, when a button is pressed in the menu
     * it calls this method.
     * @param {Object} $event Event that happend
     * @param {Object} entry  Entry information (name and page to go)
     */
    entryTapped($event, entry) {
        console.log("Tapped entry", entry, entry.params);
        this.navCtrl.push(entry.page, {params: entry.params});
    }

}
