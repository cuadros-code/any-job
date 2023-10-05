import { atom } from 'nanostores'
import type { User } from 'firebase/auth';

export const userAuth = atom<User | null>(null)
