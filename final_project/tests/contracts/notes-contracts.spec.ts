import { expect } from 'chai';
import { NotesApiService } from '../../src/services/notes-api-service';

describe('Contract Test: Notes API', () => {
    let notesService: NotesApiService;

    before(() => {
        notesService = new NotesApiService();
    });

    it('should create a note with required properties', async () => {
        const newNote = {
            title: 'Test Note',
            description: 'This is test content',
            category: 'Work'
        };
        const createdNote = await notesService.createNote(newNote);
        expect(createdNote).to.have.property('id');
        expect(createdNote).to.have.property('title').that.equals(newNote.title);
        expect(createdNote).to.have.property('description').that.equals(newNote.description);
        expect(createdNote).to.have.property('category').that.equals(newNote.category);
        expect(createdNote).to.have.property('completed').that.is.a('boolean');
        expect(createdNote).to.have.property('created_at').that.is.a('string');
        expect(createdNote).to.have.property('updated_at').that.is.a('string');
    });

    it('should retrieve a note by its ID with valid properties', async () => {
        const newNote = {
            title: 'Test Note',
            description: 'This is test content',
            category: 'Work'
        };

        const createdNote = await notesService.createNote(newNote);
        const noteId = createdNote.id;
        const retrievedNote = await notesService.getNoteById(noteId);

        expect(retrievedNote).to.have.property('id').that.equals(noteId);
        expect(retrievedNote).to.have.property('title').that.equals(newNote.title);
        expect(retrievedNote).to.have.property('description').that.equals(newNote.description);
        expect(retrievedNote).to.have.property('category').that.equals(newNote.category);
        expect(retrievedNote).to.have.property('completed').that.is.a('boolean');
        expect(retrievedNote).to.have.property('created_at').that.is.a('string');
        expect(retrievedNote).to.have.property('updated_at').that.is.a('string');
    });

    it('should retrieve all notes with valid properties', async () => {
        const notes = await notesService.getAllNotes();
        notes.forEach(note => {
            expect(note).to.have.property('id').that.is.a('string');
            expect(note).to.have.property('title').that.is.a('string');
            expect(note).to.have.property('description').that.is.a('string');
            expect(note).to.have.property('category').that.is.a('string');
            expect(note).to.have.property('completed').that.is.a('boolean');
            expect(note).to.have.property('created_at').that.is.a('string');
            expect(note).to.have.property('updated_at').that.is.a('string');
        });

        expect(notes).to.be.an('array');
        expect(notes.length).to.be.greaterThan(0);
    });
});
