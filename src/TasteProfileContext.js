import { createContext } from "react";

const defaultTasteProfile = {
    games: [],
}

export const TasteProfileContext = createContext(defaultTasteProfile)