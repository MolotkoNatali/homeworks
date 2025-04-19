import { describe, it } from 'mocha';
import { expect } from 'chai';
import { AxiosError } from 'axios';
import { NotesApiService } from '../../src/services/notes-api-service';
import { before} from 'node:test';

describe('Notes API Service tests', () => {
    let notesService: NotesApiService;
    interface TestContext {
        noteId?: string;
    }
    const context: TestContext = {};

    before(() => {
        notesService = new NotesApiService();
    });

    it('should create a new note', async () => {
        const newNote = { title: 'Test Note', content: 'This is test content' };
        const created = await notesService.createNote(newNote);
        expect(created).to.include(newNote);
        expect(created).to.have.property('id');
        context.noteId = created.id;
    });

    it('should get the created note by ID', async () => {
        const id = context.noteId;
        if (!id) throw new Error('noteId is undefined');
        const note = await notesService.getNoteById(id);
        expect(note).to.have.property('id', id);
    });

    it('should get all notes', async () => {
        const notes = await notesService.getAllNotes();
        expect(notes).to.be.an('array');
        expect(notes.length).to.be.greaterThan(0);
    });

    it('should update a note', async () => {
        const id = context.noteId;
        if (!id) throw new Error('noteId is undefined');
        const updated = await notesService.updateNote(id, { title: 'Updated Title' });
        expect(updated).to.have.property('title', 'Updated Title');
    });

    it('should delete the note', async () => {
        const id = context.noteId;
        if (!id) throw new Error('noteId is undefined');
        await notesService.deleteNote(id);
        try {
            await notesService.getNoteById(id);
            throw new Error('Note still exists after deletion');
        } catch (err) {
            const error = err as AxiosError;
            expect(error.response?.status).to.equal(404);
        }
    });
});
