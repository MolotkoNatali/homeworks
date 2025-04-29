import { Locator, Page } from '@playwright/test';

export class NotesElements {
    public heading: Locator;
    public titleInput: Locator;
    public descriptionInput: Locator;
    public categorySelect: Locator;
    public submitButton: Locator;
    public addNewNoteButton: Locator;

    public constructor(page: Page) {
        this.heading = page.locator('h2');
        this.titleInput = page.locator('input[data-testid="note-title"]');
        this.descriptionInput = page.locator('textarea[data-testid="note-description"]');
        this.categorySelect = page.locator('select[name="category"]');
        this.submitButton = page.locator('button[data-testid="note-submit"]');
        this.addNewNoteButton = page.locator('button[class="btn btn-primary mt-3 mt-lg-0"]');
    }

    public getNoteByTitle(page: Page, title: string): Locator {
        return page.locator('[data-testid="note-card"]', {
            has: page.locator('[data-testid="note-card-title"]', { hasText: title })
        }).first();
    }
}
