import { Databases, Storage, Client, Account } from "appwrite";

export const client = new Client()
.setProject(import.meta.env.VITE_APP_DATA_ID)

export const account = new Account(client)
export const storage = new Storage(client)
export const DB = new Databases(client)