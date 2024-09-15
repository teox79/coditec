import { GalleryState } from "../context/GalleryTypes";
import { createImagesArray } from "../utils/utils";

export const galleryData: GalleryState = {
    title: "Galleria",
    description: "",
    images: createImagesArray(10)
}

