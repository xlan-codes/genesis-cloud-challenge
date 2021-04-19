;
import GenesisCloudService from "./genesis_cloud.service";

describe("Genesis Cloud Service", () => {
    test("getImages should to return array", () => {
        GenesisCloudService.getImages().then((res) => {
          expect(res).toBeTruthy();
        })
        
      });
    test("getInstances should to return object", () => {
        GenesisCloudService.getInstances().then((res) => {
          expect(res).toBeTruthy();
        });
        
      });
    test("createInstance should to return object", () => {
        GenesisCloudService.createInstance({}).then((res) => {
          expect(res).toBeTruthy();
        })
        
      });
    test("destoryInstance should to return object", () => {
        GenesisCloudService.destoryInstance('x').then((res) => {
          expect(res).toBeTruthy();
        })
      });
      
    test("get ssh should to return object", () => {
        GenesisCloudService.getSSHs().then((res) => {
          expect(res).toBeTruthy();
        })
        
      });
});