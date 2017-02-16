import { ComponentFixture } from '@angular/core/testing';
import { async } from '@angular/core/testing';
import {} from 'jasmine';
import { TestUtils } from '../../test';

import { MenuPage } from './menu'

let fixture: ComponentFixture<MenuPage> = null;
let instance: any = null;

describe('Menu Page', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([MenuPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
    fixture.detectChanges()
    instance.menu = [
      { 'Test title1': MenuPage },
      { 'Test title2': MenuPage }
    ];
  })));
  it('initialises', () => {
    expect(instance).toBeTruthy();
  });
  it('Checks menu items', () => {
    expect(instance.menu.length).toEqual(2);
  })
  // TODO: Make events work with navbar (cant seem to make it work as of yet)
  /*
  it('does a click', () => {
    fixture.detectChanges();
    spyOn(instance, 'entryTapped');
    TestUtils.eventFire(fixture.nativeElement.querySelectorAll('button')[0], 'click');
    expect(instance.entryTapped).toHaveBeenCalled();
  });*/
});
