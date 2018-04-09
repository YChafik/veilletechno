import { Technology } from "./technology";

export interface Schedule {
    techonolgy: Technology;
    priority: String;
    remark: String;
    duration: number;
}