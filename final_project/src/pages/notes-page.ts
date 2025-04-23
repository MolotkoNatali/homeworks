import { Locator, Page } from '@playwright/test';
import { NotesElements } from 'src/elements/notes-elements';

export class NotesPage {
    private notesElements: NotesElements;

    public constructor(private readonly page: Page) {
        this.notesElements = new NotesElements(page);
    }

    private get addNewNoteButton(): Locator {
        return this.notesElements.addNewNoteButton;
    }

    private get titleInput(): Locator {
        return this.notesElements.titleInput;
    }

    private get descriptionInput(): Locator {
        return this.notesElements.descriptionInput;
    }

    private get categorySelect(): Locator {
        return this.notesElements.categorySelect;
    }

    private get submitButton(): Locator {
        return this.notesElements.submitButton;
    }

    public async waitForNotesLoaded(): Promise<void> {
        await this.page.waitForURL('https://practice.expandtesting.com/notes/app');
    }

    public async clickAddNewNoteButton(): Promise<void> {
        await this.addNewNoteButton.click();
    }

    public async createNote(note: { title: string; description: string; category: string }): Promise<void> {
        await this.titleInput.fill(note.title);
        await this.descriptionInput.fill(note.description);
        await this.categorySelect.selectOption({ label: note.category });
        await this.submitButton.click();
    }

    public async isNoteInList(title: string): Promise<boolean> {
        const noteLocator = this.getNoteByTitle(title);
        return await noteLocator.count() > 0;
    }

    private getNoteByTitle(title: string): Locator {
        return this.notesElements.getNoteByTitle(this.page, title);
    }

    public async viewNoteByTitle(title: string): Promise<void> {
        const noteCard = this.getNoteByTitle(title);
        const viewButton = noteCard.locator('[data-testid="note-view"]');
        await viewButton.click();
    }

    public async deleteNoteByTitle(title: string): Promise<void> {
        const noteCard = this.getNoteByTitle(title);
        const deleteButton = noteCard.locator('[data-testid="note-delete"]');
        await deleteButton.click();
    }
}
