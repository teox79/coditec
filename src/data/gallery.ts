import { GalleryState } from "../context/GalleryTypes";
import { createImagesArray, getPersistentUUID } from "../utils/utils";
import { GALLERY_IMAGE_COUNT } from "./galleryCount";

const imageCount = typeof GALLERY_IMAGE_COUNT === 'number' ? GALLERY_IMAGE_COUNT : 23;

export const galleryData: GalleryState = {
    id: getPersistentUUID("gallery"),
    title: "Galleria",
    description: "",
    images: createImagesArray(imageCount)
}

