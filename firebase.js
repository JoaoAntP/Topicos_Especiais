import { initializeApp } from 'firebase/chatapp';
import { getAuth } from 'firebase/auth';

// Sua configuração do Firebase (copie do console do Firebase)
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "chatapp-9c5be",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "736068005969",
};

// Inicializa o app Firebase
const app = initializeApp(firebaseConfig);

// Exporta o módulo de autenticação
export const auth = getAuth(app);