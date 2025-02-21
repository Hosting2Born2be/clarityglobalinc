'use server';

import { cookies } from 'next/headers';
import axios from 'axios';

export async function login(email: string, password: string) {
  try {
    const loginRes = await axios.post('http://localhost:3000/api/users/login', {
      email,
      password,
    });

    const token = loginRes.data.token;

    const cookieStore = await cookies();
    try {
      cookieStore.set('payload-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7,
      });
      console.log('Cookie set successfully');
    } catch (error) {
      console.error('Error setting cookie:', error);
    }
    console.log(cookieStore.getAll());

    return { success: true };
  } catch {
    return { error: 'Login failed' };
  }
}
