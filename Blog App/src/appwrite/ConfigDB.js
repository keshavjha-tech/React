import config from '../config/config.js'
import { Client, ID, Query, Storage, Databases, TablesDB } from 'appwrite'

export class Service {
    client = new Client;
    databases;
    tablesDB;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)

        this.tablesDB = new TablesDB(this.client)
        this.bucket = new Storage(this.client)
        this.databases = new Databases(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.tablesDB.createRow(
                {
                    databaseId: config.appwriteDatabaseId,
                    tableID: config.appwriteCollectionId,
                    rowId: slug,
                    data: {
                        title,
                        content,
                        featuredImage,
                        status,
                        userId
                    }
                }

            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error", error)
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.tablesDB.updateRow({
                databaseId: config.appwriteDatabaseId,
                tableID: config.appwriteCollectionId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status
                }
            })
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error", error)
        }
    }

    async deletePost(slug) {
        try {
            await this.tablesDB.deleteRow({
                databaseId: config.appwriteDatabaseId,
                tableId: config.appwriteCollectionId,
                rowId: slug
            })
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error", error)
            return false;
        }
    }

    async getPost(slug) {
        try {
            return this.tablesDB.getRow({
                databaseId: config.appwriteDatabaseId,
                tableId: config.appwriteCollectionId,
                rowId: slug
            })
        } catch (error) {
             console.log("Appwrite Service :: getPost :: error", error)
             return false
        }
    }

    async getAllPost(queries = [Query.equal("status", "active")]){
        try {
            return this.tablesDB.listRows({
                databaseId: config.appwriteDatabaseId,
                tableId: config.appwriteCollectionId,
                queries 
            })
        } catch (error) {
             console.log("Appwrite Service :: getPost :: error", error)
             return false
        }
    }

}

const service = new Service()

export default service