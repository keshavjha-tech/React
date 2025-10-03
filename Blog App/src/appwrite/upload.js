import config from '../config/config.js'
import { Client, Storage, ID } from "appwrite";

export class FileService {
    client = new Client();
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)

        this.storage = new Storage(this.client)
    }

    async uploadFile(file) {
        try {
            return await this.storage.createFile({
                bucketId: config.appwriteBucketId,
                fileId: ID.unique(),
                file
            })
        } catch (error) {
            console.log('Appwite Service :: uploadFile :: error', error)
            return false
        }
    }

    async deleteFile(fileId) {
         try {
           await this.storage.deleteFile({
                bucketId: config.appwriteBucketId,
                fileId
            })
            return true

        } catch (error) {
            console.log('Appwite Service :: deletefile :: error', error)
            return false
        }
    }

    getFilePreview(fileId) {
        try {
            return this.storage.getFilePreview({
                bucketId: config.appwriteBucketId,
                fileId
        })
        } catch (error) {
            console.log('Appwite Service :: filePreview :: error', error)
            return false
        }
    }

}


const fileService = new FileService()

export default fileService