import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalFunctionsService {
  constructor() {}

  menuCollapsed: boolean = false;
  threadIsOpen: boolean = false;
  channelIsOpen: boolean = true;
  scrollCounter: number = 0;
  legals: boolean = false;


  /**
   * Closes the menu sidebar
   */
  closeMenu() {
    if (innerWidth < 620) {
      this.toggleMenu();
    }
    this.channelIsOpen = true;
    this.threadIsOpen = false;
  }


  /**
   * Toggles the menu sidebar and potentially closes the thread container
   */
  toggleMenu() {
    this.menuCollapsed = !this.menuCollapsed;
    if (innerWidth <= 1200 && this.threadIsOpen && this.channelIsOpen) {
      this.threadIsOpen = false;
    }
  }


  /**
   * Scrolls the container to the bottom
   * @param ref The reference to the chat or channel container
   */
  scrollToBottom(ref): void {
    let container = '';
    if (ref == 'chat' || ref == 'channel') {
      container = 'scrollContainer';
    }
    const scrollContainer = document.getElementById(container);
    try {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    } catch (err) {}
  }
}
