import { GalleryState } from "../context/GalleryTypes";
import { createImagesArray, getPersistentUUID } from "../utils/utils";

export const galleryData: GalleryState = {
    id: getPersistentUUID("gallery"),
    title: "Galleria",
    description: "",
    images: createImagesArray(30)
}

