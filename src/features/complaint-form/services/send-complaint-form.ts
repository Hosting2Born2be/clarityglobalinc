'use server';

import { google } from 'googleapis';

import {
  EMAIL_CLIENT_ID,
  EMAIL_CLIENT_SECRET,
  EMAIL_USER,
} from '@/shared/config/env';
import { makeBody } from '@/shared/lib/email';

import { ComplaintSchema } from '../lib/complaint.schema';

export async function sendComplaintForm({
  subject,
  complaint,
  email,
  dayPart,
  isContact,
  additionalInfo,
  date,
  time,
}: ComplaintSchema) {
  try {
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      EMAIL_CLIENT_ID,
      EMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground',
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();

    if (!accessToken.token) {
      throw new Error('Failed to generate access token.');
    }

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    const adminEmailBody = makeBody(
      EMAIL_USER,
      EMAIL_USER,
      'Anonymous complaint from Form',
      `
        <p><b>Date and time of issue:</b> ${date} ${time}${dayPart}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Compliant:</b> ${complaint}</p>
        <p><b>Related employee, department, service:</b> ${additionalInfo}</p>
        <p><b>Need contact:</b> ${isContact === 'true' ? 'Yes' : 'No'}</p>
        <p><b>Email:</b> ${email ?? 'None'}</p>
      `,
    );

    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: adminEmailBody },
    });

    return { data: res.data, status: res.statusText };
  } catch (error) {
    console.error('Error:', error);
  }
}
