import { describe, it } from 'mocha';
import { expect } from 'chai';
import { AxiosError } from 'axios';
import { NotesApiService } from '../../src/services/notes-api-service';
import { before } from 'node:test';

describe('Notes API Service tests', () => {
    let notesService: NotesApiService;
    interface TestContext {
        noteId?: string;
    }
    const context: TestContext = {};

    before(async () => {
        notesService = new NotesApiService();
    });

    it('should create a new note', async () => {
        const newNote = {
            title: 'Test Note',
            description: 'This is test content',
            category: 'Work'
        };
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
        if (!context.noteId) {
            throw new Error('Note ID is undefined');
        }

        const updatedNote = {
            title: 'Updated Title',
            description: 'Updated content',
            category: 'Work',
            completed: false
        };

        try {
            const updated = await notesService.updateNote(context.noteId, updatedNote);

            expect(updated).to.include(updatedNote);
            expect(updated).to.have.property('id').that.equals(context.noteId);
            expect(updated.title).to.equal(updatedNote.title);
            expect(updated.description).to.equal(updatedNote.description);
            expect(updated.category).to.equal(updatedNote.category);
            expect(updated.completed).to.equal(updatedNote.completed);
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                throw error;
            } else {
                throw error;
            }
        }
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
