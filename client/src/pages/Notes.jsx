import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify'; // this is used DOMPurify is a security library that sanitizes HTML and prevents XSS (Cross-Site Scripting) attacks by cleaning potentially dangerous content from user input 
import { get, post, put, del } from '../api';

export default function Notes({ token }) {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editing, setEditing] = useState(null);

  async function load() {
    const res = await get('/notes', token);
    if (Array.isArray(res)) setNotes(res);
  }

  useEffect(() => { load(); }, []);

  async function create(e) {
    e.preventDefault();
    const body = { title: DOMPurify.sanitize(title), content: DOMPurify.sanitize(content) };
    const res = await post('/notes', body, token);
    if (res._id) {
      setNotes(prev => [res, ...prev]);
      setTitle(''); setContent('');
    } else alert(res.message || 'Error creating');
  }

  async function remove(id) {
    const res = await del(`/notes/${id}`, token);
    if (res.message === 'Deleted') setNotes(prev => prev.filter(n => n._id !== id));
  }

  async function startEdit(n) {
    setEditing(n);
    setTitle(n.title);
    setContent(n.content);
  }

  async function saveEdit(e) {
    e.preventDefault();
    const res = await put(`/notes/${editing._id}`, { title: DOMPurify.sanitize(title), content: DOMPurify.sanitize(content) }, token);
    if (res._id) {
      setNotes(prev => prev.map(p => p._id === res._id ? res : p));
      setEditing(null); setTitle(''); setContent('');
    } else alert(res.message || 'Error updating');
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <form onSubmit={editing ? saveEdit : create} className="col-span-1 lg:col-span-1 bg-white p-5 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-3">{editing ? 'Edit Note' : 'New Note'}</h3>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required
               className="w-full px-3 py-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} required rows="6"
                  className="w-full px-3 py-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"></textarea>
        <div className="flex gap-2">
          <button type="submit" className="flex-1 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">{editing ? 'Save' : 'Create'}</button>
          {editing && <button type="button" className="px-3 py-2 rounded border" onClick={() => { setEditing(null); setTitle(''); setContent(''); }}>Cancel</button>}
        </div>
      </form>

      <div className="col-span-2">
        <div className="grid gap-4">
          {notes.map(n => (
            <div key={n._id} className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-md font-semibold mb-1" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(n.title) }} />
              <p className="text-sm text-slate-600 mb-3" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(n.content) }} />
              <div className="flex gap-2">
                <button onClick={() => startEdit(n)} className="px-3 py-1 rounded border">Edit</button>
                <button onClick={() => remove(n._id)} className="px-3 py-1 rounded bg-red-500 text-white">Delete</button>
              </div>
            </div>
          ))}
          {notes.length === 0 && <div className="text-center text-sm text-slate-500">No notes yet — create one!</div>}
        </div>
      </div>
    </div>
  );
}
