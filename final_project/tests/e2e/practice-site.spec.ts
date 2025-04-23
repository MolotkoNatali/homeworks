import { test, expect, Browser, Page } from '@playwright/test';
import { LoginPage } from 'src/pages/login-page';
import { NotesPage } from 'src/pages/notes-page';
import { credentials } from 'src/config/credentials';

let page: Page;
let browser: Browser;
let loginPage: LoginPage;
let notesPage: NotesPage;

const loginUrl = 'https://practice.expandtesting.com/notes/app/login';
const appUrl = 'https://practice.expandtesting.com/notes/app';

test.beforeEach(async ({ browser: testBrowser }) => {
    browser = testBrowser;
    page = await browser.newPage();
    await page.setViewportSize({ width: 1200, height: 800 });

    loginPage = new LoginPage(page);
    notesPage = new NotesPage(page);
});

test('Case 1: User is logged in successfully and redirected to notes page', async () => {
    await page.goto(loginUrl);
    await loginPage.login(credentials.email, credentials.password);
    await expect(page).toHaveURL(appUrl);
});

test('Case 2: Add a new note', async () => {
    await page.goto(loginUrl);
    await loginPage.login(credentials.email, credentials.password);
    await notesPage.waitForNotesLoaded();
    await notesPage.clickAddNewNoteButton();

    const newNote = {
        title: 'my first note',
        description: 'my first note in this environment',
        category: 'Home'
    };

    await notesPage.createNote(newNote);
});

test('Case 3: View created note', async () => {
    await page.goto(loginUrl);
    await loginPage.login(credentials.email, credentials.password);
    const noteTitle = 'my first note';
    await notesPage.waitForNotesLoaded();
    await notesPage.viewNoteByTitle(noteTitle);
    await expect(page).toHaveURL(/\/notes\/app\/notes\/\w+/);
});
