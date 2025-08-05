import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";


export async function salvarUsuario(userId, dados) {
  try {
    await setDoc(doc(db, "usuarios", userId), dados);
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
  }
}


export async function buscarUsuario(userId) {
  try {
    const ref = doc(db, "usuarios", userId);
    const snap = await getDoc(ref);
    return snap.exists() ? snap.data() : null;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return null;
  }
}


export async function atualizarUsuario(userId, novosDados) {
  try {
    await updateDoc(doc(db, "usuarios", userId), novosDados);
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
  }
}
