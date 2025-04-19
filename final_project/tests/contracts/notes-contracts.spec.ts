import { expect } from 'chai';
import { NotesApiService } from '../../src/services/notes-api-service';
import { AxiosError } from 'axios';
import { before, describe, it } from 'node:test';

describe('Notes API Contract tests', () => {
    let notesService: NotesApiService;

    before(() => {
        notesService = new NotesApiService();
    });

    it('should return a note object with required fields', async () => {
        const note = await notesService.createNote({
            title: 'Contract Test',
            content: 'Testing structure'
        });

        expect(note).to.have.all.keys('id', 'title', 'content', 'createdAt', 'updatedAt');
        expect(note.id).to.be.a('string');
        expect(note.title).to.be.a('string');
        expect(note.content).to.be.a('string');
        expect(new Date(note.createdAt)).to.be.a('date');
        expect(new Date(note.updatedAt)).to.be.a('date');
        await notesService.deleteNote(note.id);
    });

    it('should return all notes as an array of note objects', async () => {
        const notes = await notesService.getAllNotes();
        expect(notes).to.be.an('array');

        for (const note of notes) {
            expect(note).to.include.all.keys('id', 'title', 'content', 'createdAt', 'updatedAt');
        }
    });

    it('should return a single note matching contract when fetched by ID', async () => {
        const newNote = await notesService.createNote({
            title: 'Single Note',
            content: 'Content here'
        });

        const note = await notesService.getNoteById(newNote.id);
        expect(note).to.include.all.keys('id', 'title', 'content', 'createdAt', 'updatedAt');
        expect(note.id).to.equal(newNote.id);
        await notesService.deleteNote(newNote.id);
    });

    it('should preserve data types after update', async () => {
        const note = await notesService.createNote({
            title: 'Before update',
            content: 'Contract test'
        });

        const updated = await notesService.updateNote(note.id, {
            title: 'Updated'
        });

        expect(updated).to.have.property('title').that.is.a('string');
        expect(updated).to.have.property('content').that.is.a('string');
        expect(updated).to.have.property('id').that.equals(note.id);
        await notesService.deleteNote(note.id);
    });

    it('should return 404 error structure on invalid ID', async () => {
        try {
            await notesService.getNoteById('non-existent-id');
        } catch (err) {
            const error = err as AxiosError;
            expect(error.response?.status).to.equal(404);
            expect(error.response?.data).to.have.property('message').that.is.a('string');
        }
    });
});
