'use server';

import axios from 'axios';

export async function getPolicy({ id }: { id: string }) {
  const res = await axios.get(`${process.env.SERVER_URL}/policies/${id}`);
  return res.data;
}
