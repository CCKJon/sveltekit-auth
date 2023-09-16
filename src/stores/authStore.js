import { writable } from 'svelte/store';
import { auth } from '../lib/firebase/firebase.client';
import {
	signInWithEmailAndPassword,
	updateEmail,
	updatePassword,
	signOut,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail
	// updateCurrentUser
} from 'firebase/auth';

export const authStore = writable({
	isLoading: true,
	currentUser: null
});

export const authHandlers = {
	login: async (email, password) => {
		await signInWithEmailAndPassword(auth, email, password);
	},
	signup: async (email, password) => {
		await createUserWithEmailAndPassword(auth, email, password);
	},
	logout: async () => {
		await signOut(auth);
	},
	resetPassword: async (email) => {
		await sendPasswordResetEmail(auth, email);
	},
	updateEmail: async (email) => {
		authStore.update((curr) => {
			return {
				...curr,
				currentUser: {
					...curr.currentUser,
					email: email
				}
			};
		});

		// console.log('this is line 55', auth.currentUser, email); test to see if we can trick the system?
		// auth.currentUser.emailVerified = true; // on the good account, it still shows up as false?
		console.log('this is my current user on line 44', auth.currentUser);
		await updateEmail(auth.currentUser, email);
	},
	updatePassword: async (password) => {
		await updatePassword(auth.currentUser, password);
	}
};
