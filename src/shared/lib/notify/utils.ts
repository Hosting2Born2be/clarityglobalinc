import { toast } from 'react-toastify';

export const notifyError = (msg: string) => toast.error(msg);

export const notifySuccess = (msg: string) => toast.success(msg);
