import { writable } from 'svelte/store';
import { auth } from '../lib/firebase/firebase.client';
import {
	signInWithEmailAndPassword,
	updateEmail,
	updatePassword,
	signOut,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	sendEmailVerification
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
		const newUserCredential = await createUserWithEmailAndPassword(auth, email, password);
		await sendEmailVerification(newUserCredential.user);
	},
	logout: async () => {
		await signOut(auth);
	},
	resetPassword: async (email) => {
		if (!email) {
			return;
		}
		await sendPasswordResetEmail(auth, email);
	},
	updateEmail: async (email) => {
		console.log('before updating email in authstore', auth.currentUser, email);
		// auth.currentUser.emailVerified = true; // on the good account, it still shows up as false?
		// console.log('this is my current user', auth.currentUser);
		await updateEmail(auth.currentUser, email).then(() => {
			authStore.update((curr) => {
				return {
					...curr,
					currentUser: {
						...curr.currentUser,
						email: email
					}
				};
			});
		});
	},
	updatePassword: async (password) => {
		await updatePassword(auth.currentUser, password);
	}
};
