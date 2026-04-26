import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

// Minimal app shell used only by Storybook browserTarget.
// Not part of the published library.
@Component({ standalone: true, selector: 'app-root', template: '' })
class AppComponent {}

bootstrapApplication(AppComponent).catch((err) => console.error(err));
