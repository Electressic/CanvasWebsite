import {atom} from "recoil";

export const welcomeBoxState = atom ( {
    key: 'welcomeBoxState',
    default: [],
});
export const KurseinstiegState = atom ( {
    key: 'Kurseinstieg',
    default: [],
});
export const ModulplanState = atom ( {
    key: 'Modulplan',
    default: "",
});
export const OverviewState = atom ( {
    key: 'Overview',
    default: {
        Duration: [],
        Title: [],
        Nuggets: [],
    },
});
export const CanvasneuState = atom ( {
    key: 'Canvasneu',
    default: "",
});
export const ContactState = atom ( {
    key: 'Contacts',
    default: {
        Bild: "",
        Title: [],
        Name: [],
        Beschreibung: [],
        eMail: [],
    },
});
