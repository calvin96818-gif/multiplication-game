import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set, update, remove } from 'firebase/database';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const database = getDatabase();

const useFirebase = (dataRef) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const dbRef = ref(database, dataRef);

        // Real-time listener
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            setData(data);
        });

        return () => {
            // Cleanup listener on unmount
            off(dbRef);
        };
    }, [dataRef]);

    const writeData = (newData) => {
        set(ref(database, dataRef), newData);
    };

    const updateData = (updates) => {
        update(ref(database, dataRef), updates);
    };

    const deleteData = () => {
        remove(ref(database, dataRef));
    };

    return { data, writeData, updateData, deleteData };
};

export default useFirebase;