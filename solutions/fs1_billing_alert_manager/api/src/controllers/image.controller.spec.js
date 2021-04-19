import { ImageController } from "./image.controller";
import { TestUtils } from "../../test/test_utils.js";

describe("Image Controller", () => {
    test("getImages should to return array", () => {
        ImageController.getImages(null, TestUtils.mockResponse()).then((res) => {
           expect(res).toBeTruthy(); 
        })
        
    });
});