import {ToothModel} from '../services/tooth-model';
const basePath = "/app/models/anatomy/";

export const ModelList: ToothModel[] =
[
    {
        "id" : "LJKCS10",
        "location" : "Mandibular first molar, mesial root",
        "description":"Mandibular first molar with long curved canal",
        "snapshot" : "snapshot.jpg",
        "x3ds" : [
            {
                "name" : "root",
                "description" : "Root surface",
                "transparency" : 0.9,
                "color" : "#00f" //  "0 0 1"
            },

            {
                "name" : "canal_pre",
                "description" : "Root canal",
                "transparency" : 0.5,
                "color" : "#0f0" // "0 1 0"
            },

            {
                "name" : "canal_axis",
                "description" : "Canal axis",
                "transparency" : 0.5,
                "color" : "#f00" //"1 0 0"
            },

            {
                "name" : "canal_axis_blx",
                "description" : "Canal axis by BLX file",
                "transparency" : 0.5,
                "color" : "#0f0" //"0 1 0"
            },
            {
                "name" : "canal_axis_ptu",
                "description" : "Canal axis by ProTaper",
                "transparency" : 0.5,
                "color" : "#00f" //"0 0 1"
            },
            {
                "name" : "canal_axis_rcp",
                "description" : "Canal axis by Reciproc",
                "transparency" : 0.5,
                "color" : "#ff0" //"1 1 0"
            }

        ],
        "path" : basePath + "ljkcs10/"
    },

    {
        "id" : "LJKCS01",
        "location" : "Mandibular first molar, mesial root",
        "description":"Mandibular first molar with short curved canal",
        "snapshot" : "snapshot.jpg",
        "x3ds" : [
            {
                "name" : "root",
                "description" : "Root surface",
                "transparency" : 0.9,
                "color" : "#00f" // "0 0 1"
            },

            {
                "name" : "canal_pre",
                "description" : "Root canal",
                "transparency" : 0.5,
                "color" : "#0f0" // "0 1 0"
            }
        ],
        "path" :  basePath +"ljkcs01/"
    }
];
