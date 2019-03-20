/**
 * MouseFollow.js
 */

import {assign} from 'lodash';

import addElementToPage from './_add-element-to-page.js';
import defaultOptions from './_default-options.js';
import removeElementFromPage from './_remove-element-from-page.js';
import setupMouseActions from './_setup-mouse-actions.js';
import updateElement from './_update-element.js';

class MouseFollow {
  constructor(userOptions) {
    this.options = assign({}, defaultOptions, userOptions);
    this.element = document.createElement('span');
    this.top = null;
    this.left = null;
  }

  initialize() {
    updateElement(this.element, this.options);
    setupMouseActions('add', this.element, this.options, this);
    addElementToPage(this.element, this.options);
  }

  update(options) {
    assign(this.options, options);
    updateElement(this.element, this.options);
  }

  uninitialize() {
    removeElementFromPage(this.element);
    setupMouseActions('remove', this.element, this.options, this);
  }
};

if (window && !window.MouseFollow) {
  window.MouseFollow = MouseFollow;
}

export default MouseFollow;
