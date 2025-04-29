import axios from 'axios';
import { config } from '../config/index';
import { NoteDto } from '../dtos/note/note.dto';

export class NotesApiService {
    private readonly baseUrl = config.api.notesApi.baseUrl;
    private readonly token = config.auth.notesApi.token;

    private get headers(): Record<string, string> {
        return {
            'x-auth-token': this.token
        };
    }

    public async getAllNotes(): Promise<NoteDto[]> {
        const res = await axios.get(`${this.baseUrl}/notes`, { headers: this.headers });
        return res.data.data;
    }

    public async createNote(note: Pick<NoteDto, 'title' | 'description' | 'category'>): Promise<NoteDto> {
        const res = await axios.post(`${this.baseUrl}/notes`, note, { headers: this.headers });
        return res.data.data;
    }

    public async getNoteById(id: string): Promise<NoteDto> {
        const res = await axios.get(`${this.baseUrl}/notes/${id}`, { headers: this.headers });
        return res.data.data;
    }

    public async updateNote(id: string, note: Partial<NoteDto>): Promise<NoteDto> {
        const res = await axios.put(`${this.baseUrl}/notes/${id}`, note, { headers: this.headers });
        return res.data.data;
    }

    public async deleteNote(id: string): Promise<void> {
        await axios.delete(`${this.baseUrl}/notes/${id}`, { headers: this.headers });
    }
}
