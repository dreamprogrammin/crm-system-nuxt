import { Databases, Storage, Client, Account } from "appwrite";
import { APP_WRITE_DB } from "~/app.constants";

export const client = new Client()

client.setProject(APP_WRITE_DB)

export const account = new Account(client)
export const storage = new Storage(client)
export const DB = new Databases(client)