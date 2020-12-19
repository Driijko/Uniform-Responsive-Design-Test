import {hor, ver} from "../../settings";

export default function styleElement(left, top, width, height, obj) {
    const result = {...obj};
    result.position = "absolute";
    result.left = `${hor[left]}%`;
    result.top = `${ver[top]}%`;
    result.width = `${hor[width]}%`;
    result.height = `${ver[height]}%`;

    return result;   
}