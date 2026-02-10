// note: do not use any

import { API_ROUTES } from "@/constants/ApiRoute";
import { skillAllDataInterface } from "./skill.interface";

export const getSkill = async () => {
    try {
        const response = await fetch(API_ROUTES.MASTERS.SKILL.GET_ALL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"

        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};

export const getSkillById = async (id: string) => {
    try {
        const response = await fetch(API_ROUTES.MASTERS.SKILL.GET_BY_ID(id), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"

        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};

export const getFilteredSkill = async (params: string) => {
    try {
        const response = await fetch(API_ROUTES.MASTERS.SKILL.GET_BY_PARAMS(params), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"

        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};

export const addSkill = async (data: skillAllDataInterface) => {
    try {
        let response = await fetch(API_ROUTES.MASTERS.SKILL.ADD, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        return data;
    }
    catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};

export const updateSkill = async (id: string, data: skillAllDataInterface) => {
    try {
        let response = await fetch(API_ROUTES.MASTERS.SKILL.UPDATE(id), {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            credentials: "include"

        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        return data;
    }
    catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};

export const deleteSkill = async (id: string) => {
    try {
        const response = await fetch(API_ROUTES.MASTERS.SKILL.DELETE(id), {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
