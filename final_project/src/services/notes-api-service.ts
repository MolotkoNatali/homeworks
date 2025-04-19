import axios from 'axios';
import { config } from '../config/index';
import { NoteDto } from '../dtos/note/note.dto';

export class NotesApiService {
    private readonly baseUrl = config.api.notesApi.baseUrl;

    public async getAllNotes(): Promise<NoteDto[]> {
        const res = await axios.get(`${this.baseUrl}/notes`);
        return res.data;
    }

    public async createNote(note: Pick<NoteDto, 'title' | 'content'>): Promise<NoteDto> {
        const res = await axios.post(`${this.baseUrl}/notes`, note);
        return res.data;
    }

    public async getNoteById(id: string): Promise<NoteDto> {
        const res = await axios.get(`${this.baseUrl}/notes/${id}`);
        return res.data;
    }

    public async updateNote(id: string, note: Partial<NoteDto>): Promise<NoteDto> {
        const res = await axios.put(`${this.baseUrl}/notes/${id}`, note);
        return res.data;
    }

    public async deleteNote(id: string): Promise<void> {
        await axios.delete(`${this.baseUrl}/notes/${id}`);
    }
}
