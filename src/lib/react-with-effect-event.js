// React wrapper that includes useEffectEvent polyfill
/* eslint-disable @typescript-eslint/no-require-imports */
'use strict';

const React = require('react');
const { useEffectEvent } = require('use-effect-event');

// Create a proper React replacement that includes all exports plus useEffectEvent
const ReactWithEffectEvent = { ...React };

// Ensure all React properties are copied (including non-enumerable ones)
Object.getOwnPropertyNames(React).forEach(key => {
  if (key !== 'default') {
    try {
      ReactWithEffectEvent[key] = React[key];
    } catch (_e) {
      // Ignore errors for non-configurable properties
    }
  }
});

// Add useEffectEvent as a named export
ReactWithEffectEvent.useEffectEvent = useEffectEvent;

// Set default export
ReactWithEffectEvent.default = ReactWithEffectEvent;

// Export everything
module.exports = ReactWithEffectEvent;
module.exports.default = ReactWithEffectEvent;

// Also ensure useEffectEvent is available as a direct export
Object.defineProperty(module.exports, 'useEffectEvent', {
  value: useEffectEvent,
  enumerable: true,
  writable: false,
  configurable: false
});
