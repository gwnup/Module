import { AxiosRequestConfig } from 'axios';
import { region } from '../constants/Client';
export type guess = {
    id: string;
    name: string;
    id_base: string;
    proba: string;
    absolute_picture_path: string;
    award_id: string;
    corrupt: string;
    description: string;
    picture_path: string;
    pseudo: string;
    ranking: string;
    relative: string;
    valide_contrainte: string;
    nsfw?: boolean;
};
export type AkinatorResultParams = {
    NbObjetsPertinents: string;
    elements: {
        element: guess;
    }[];
} | {
    identification: {
        challenge_auth: string;
        channel: number;
        session: string;
        signature: string;
    };
    step_information: {
        answers: [{
            answer: 'Yes';
        }, {
            answer: 'No';
        }, {
            answer: 'Don\'t Know';
        }, {
            answer: 'Probably';
        }, {
            answer: 'Probably not';
        }];
        infogain: string;
        progression: string;
        question: string;
        questionid: string;
        step: string;
    };
} | {
    answers: [{
        answer: 'Yes';
    }, {
        answer: 'No';
    }, {
        answer: 'Don\'t Know';
    }, {
        answer: 'Probably';
    }, {
        answer: 'Probably not';
    }];
    infogain: string;
    options: string[];
    progression: string;
    question: string;
    questionid: string;
    status_minibase: string;
    step: string;
};
interface AkinatorResult {
    completion: string;
    parameters: AkinatorResultParams;
}
type checkParamProperty = 'elements' | 'answers' | 'identification';
interface AkiURL {
    url: string;
    urlWs: string;
}
export declare class AkinatorAPIError extends Error {
    constructor(data: AkinatorResult, region: string);
    private mapError;
}
export declare const request: (url: string, checkParamProperty: checkParamProperty, region: "en" | "en_objects" | "en_animals" | "ar" | "cn" | "de" | "de_animals" | "es" | "es_animals" | "fr" | "fr_objects" | "fr_animals" | "il" | "it" | "it_animals" | "jp" | "jp_animals" | "kr" | "nl" | "pl" | "pt" | "ru" | "tr" | "id", axiosConfig: AxiosRequestConfig) => Promise<AkinatorAPIError | AkinatorResult>;
/**
 * Returns the url from the correct region.
 * @param userRegion the region provided
 * @param axiosConfig the proxy config for axios
 * @returns {Promise<AkiURL>} the generated url for that region
 */
export declare const regionURL: (userRegion: region, axiosConfig: AxiosRequestConfig) => Promise<AkiURL | undefined>;
export {};
