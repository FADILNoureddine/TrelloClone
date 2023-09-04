import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
    if(!file) return;

    const fileUpload = await storage.createFile(
        // "646ce8408fe19a5d76f5",
        "64edb71ac5c87b77f78c",
        ID.unique(),
        file
    );
    return fileUpload;
}
export default uploadImage;